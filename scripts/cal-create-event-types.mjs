#!/usr/bin/env node
// Creates Cal.com event types for Laura Valentina's services via Cal.com
// API v2. Idempotent: re-running skips event types whose slug already
// exists.
//
// Setup (one-time):
//   1) Sign in/up at https://cal.com — handle should match
//      NEXT_PUBLIC_CAL_LINK in .env.local (currently "lauravalentina")
//   2) Settings → Developer → API Keys → Create New
//      Name it "laura-valentina-salon", set "Never expires" if available,
//      and COPY THE FULL STRING (the modal hides it after close — partial
//      copies fail silently with "Invalid API Key")
//   3) Add to ~/laura-valentina-salon/.env.local:
//        CAL_API_KEY=cal_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//
// Usage:
//   node scripts/cal-create-event-types.mjs --dry-run   # preview, no writes
//   node scripts/cal-create-event-types.mjs             # apply

import fs from "node:fs";
import path from "node:path";

const API = "https://api.cal.com/v2";
const API_VERSION = "2024-06-14"; // pinned for /event-types schema

// Slugs MUST match the keys deep-linked from app/booking/page.tsx
const EVENT_TYPES = [
  {
    slug: "powder-brows",
    title: "Powder Brows · Microblading",
    lengthInMinutes: 150,
    description:
      "Soft powdered brows, designed stroke by stroke. Includes consultation, mapping, pigmentation and aftercare. Studio appointment in Biel/Bienne.",
    location: "studio",
  },
  {
    slug: "combo-brows",
    title: "Combo Brows · Microblading",
    lengthInMinutes: 180,
    description:
      "Stroke-by-stroke for natural look + powder shading for density — the best of both techniques. Studio appointment in Biel/Bienne.",
    location: "studio",
  },
  {
    slug: "touch-up",
    title: "Brow Touch-Up",
    lengthInMinutes: 60,
    description:
      "Annual maintenance touch-up to preserve the brightness and precision of your microblading. Studio appointment in Biel/Bienne.",
    location: "studio",
  },
  {
    slug: "gel-manicure",
    title: "Gel Manicure",
    lengthInMinutes: 75,
    description:
      "Long-lasting gel application, flawless finish — wears up to 3 weeks. Available at the studio or at your home in Biel and surroundings (travel fee may apply).",
    location: "attendee",
  },
  {
    slug: "nail-art",
    title: "Bespoke Nail Art",
    lengthInMinutes: 90,
    description:
      "Unique, hand-drawn designs: minimalist, floral or a reimagined French. Studio or at-home (Biel and surroundings).",
    location: "attendee",
  },
  {
    slug: "pedicure",
    title: "Pedicure",
    lengthInMinutes: 60,
    description:
      "Full care: filing, cuticles, massage, classic or gel polish. Studio or at-home (Biel and surroundings).",
    location: "attendee",
  },
];

const STUDIO_ADDRESS = "Biel/Bienne, Switzerland"; // placeholder until brief

function buildLocations(kind) {
  if (kind === "studio") {
    return [
      {
        type: "address",
        address: STUDIO_ADDRESS,
        public: true,
      },
    ];
  }
  // attendee = at-home — Cal.com asks the booker for their address
  return [
    {
      type: "attendeeAddress",
      public: false,
    },
  ];
}

const args = new Set(process.argv.slice(2));
const DRY = args.has("--dry-run");

function loadEnv() {
  const envPath = path.join(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
      if (!line || line.startsWith("#")) continue;
      const eq = line.indexOf("=");
      if (eq < 0) continue;
      const k = line.slice(0, eq).trim();
      const v = line.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
      if (!process.env[k]) process.env[k] = v;
    }
  }
}

async function cal(method, urlPath, body) {
  const key = process.env.CAL_API_KEY;
  if (!key) throw new Error("CAL_API_KEY missing in .env.local");
  const opts = {
    method,
    headers: {
      Authorization: `Bearer ${key}`,
      "cal-api-version": API_VERSION,
    },
  };
  if (body) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(body);
  }
  const r = await fetch(`${API}${urlPath}`, opts);
  let j;
  try {
    j = await r.json();
  } catch {
    j = { _raw: await r.text() };
  }
  return { status: r.status, body: j };
}

async function main() {
  loadEnv();
  if (!process.env.CAL_API_KEY) {
    console.error("\nMissing CAL_API_KEY. See header of this file.\n");
    process.exit(1);
  }

  console.log(`mode=${DRY ? "DRY-RUN" : "APPLY"} api=${API}`);

  // 1. List existing event types (also serves as auth probe)
  const list = await cal("GET", "/event-types");
  if (list.status !== 200) {
    console.error("GET /event-types failed:", list.status);
    console.error(JSON.stringify(list.body, null, 2));
    process.exit(1);
  }
  // v2 wraps responses as { status:"success", data: [...] }
  const existing = Array.isArray(list.body?.data) ? list.body.data : [];
  const existingSlugs = new Set(existing.map((et) => et.slug).filter(Boolean));
  console.log(
    `Existing event types: ${existingSlugs.size}${existingSlugs.size ? ` (${[...existingSlugs].join(", ")})` : ""}`,
  );

  // 2. Create each
  const results = [];
  for (const et of EVENT_TYPES) {
    if (existingSlugs.has(et.slug)) {
      results.push({ slug: et.slug, action: "skip-exists" });
      continue;
    }
    if (DRY) {
      results.push({
        slug: et.slug,
        action: "DRY",
        title: et.title,
        length: et.lengthInMinutes,
        location: et.location,
      });
      continue;
    }
    const payload = {
      title: et.title,
      slug: et.slug,
      lengthInMinutes: et.lengthInMinutes,
      description: et.description,
      hidden: false,
      locations: buildLocations(et.location),
      disableGuests: true,
    };
    const r = await cal("POST", "/event-types", payload);
    if (r.status >= 200 && r.status < 300) {
      results.push({
        slug: et.slug,
        action: "created",
        id: r.body?.data?.id || r.body?.id,
      });
    } else {
      results.push({
        slug: et.slug,
        action: "error",
        status: r.status,
        body: JSON.stringify(r.body).slice(0, 200),
      });
    }
  }

  console.log("\n=== EVENT TYPES ===");
  console.table(results);
  console.log(
    `\nDone. ${
      DRY
        ? "(no writes)"
        : `Once created, /booking deep-links resolve to https://cal.com/<your-handle>/<slug>`
    }`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
