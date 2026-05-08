#!/usr/bin/env node
// Creates Cal.com event types for Laura Valentina's services. Idempotent —
// re-running skips event types that already exist (matched by slug).
//
// Setup (one-time):
//   1) Sign in/up at https://cal.com (handle should match NEXT_PUBLIC_CAL_LINK)
//   2) Settings → Developer → API Keys → Create — give it a name, copy the key
//   3) Add to ~/laura-valentina-salon/.env.local:
//        CAL_API_KEY=cal_live_xxxxxxxxxxxxxxxxxxxxxx
//      Or per-run:  CAL_API_KEY=cal_live_xxx node scripts/cal-create-event-types.mjs
//
// Usage:
//   node scripts/cal-create-event-types.mjs --dry-run   # preview, no writes
//   node scripts/cal-create-event-types.mjs             # apply

import fs from "node:fs";
import path from "node:path";

const API = "https://api.cal.com/v1";

// Slugs MUST match the keys deep-linked from app/booking/page.tsx
// (which builds calLink as `<handle>/<slug>`).
const EVENT_TYPES = [
  {
    slug: "powder-brows",
    title: "Powder Brows · Microblading",
    length: 150,
    price: 48000, // CHF cents
    currency: "CHF",
    description:
      "Soft powdered brows, designed stroke by stroke. Includes consultation, mapping, pigmentation and aftercare. Studio appointment in Biel/Bienne.",
    location: "studio",
  },
  {
    slug: "combo-brows",
    title: "Combo Brows · Microblading",
    length: 180,
    price: 52000,
    currency: "CHF",
    description:
      "Stroke-by-stroke for natural look + powder shading for density — the best of both techniques. Studio appointment in Biel/Bienne.",
    location: "studio",
  },
  {
    slug: "touch-up",
    title: "Brow Touch-Up",
    length: 60,
    price: 18000,
    currency: "CHF",
    description:
      "Annual maintenance touch-up to preserve the brightness and precision of your microblading. Studio appointment in Biel/Bienne.",
    location: "studio",
  },
  {
    slug: "gel-manicure",
    title: "Gel Manicure",
    length: 75,
    price: 6500,
    currency: "CHF",
    description:
      "Long-lasting gel application, flawless finish — wears up to 3 weeks. Available at the studio or at your home in Biel and surroundings (travel fee may apply).",
    location: "attendee",
  },
  {
    slug: "nail-art",
    title: "Bespoke Nail Art",
    length: 90,
    price: 8500,
    currency: "CHF",
    description:
      "Unique, hand-drawn designs: minimalist, floral or a reimagined French. Studio or at-home (Biel and surroundings).",
    location: "attendee",
  },
  {
    slug: "pedicure",
    title: "Pedicure",
    length: 60,
    price: 7500,
    currency: "CHF",
    description:
      "Full care: filing, cuticles, massage, classic or gel polish. Studio or at-home (Biel and surroundings).",
    location: "attendee",
  },
];

// Studio address — placeholder until Laura confirms via /brief.
const STUDIO_ADDRESS = "Biel/Bienne, Switzerland";

function buildLocations(kind) {
  if (kind === "studio") {
    return [{ type: "inPerson", address: STUDIO_ADDRESS, displayLocationPublicly: true }];
  }
  // attendee = at-home; Cal.com lets the attendee enter their address
  return [{ type: "attendeeInPerson", displayLocationPublicly: false }];
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

async function cal(method, path, body) {
  const key = process.env.CAL_API_KEY;
  if (!key) throw new Error("CAL_API_KEY missing in .env.local");
  const url = new URL(`${API}${path}`);
  url.searchParams.set("apiKey", key);
  const opts = { method, headers: {} };
  if (body) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(body);
  }
  const r = await fetch(url, opts);
  let j;
  try { j = await r.json(); } catch { j = { _raw: await r.text() }; }
  return { status: r.status, body: j };
}

async function main() {
  loadEnv();
  if (!process.env.CAL_API_KEY) {
    console.error("\nMissing CAL_API_KEY.");
    console.error("Add it to .env.local — see header of this file for steps.\n");
    process.exit(1);
  }

  console.log(`mode=${DRY ? "DRY-RUN" : "APPLY"}`);

  // 1. Identify the API user
  const me = await cal("GET", "/me");
  if (me.status !== 200) {
    console.error("GET /me failed:", me.status, JSON.stringify(me.body).slice(0, 200));
    process.exit(1);
  }
  const user = me.body?.user || me.body;
  const userId = user?.id;
  const username = user?.username;
  if (!userId) {
    console.error("Could not identify Cal user from /me response:", JSON.stringify(me.body).slice(0, 300));
    process.exit(1);
  }
  console.log(`Cal user: @${username} (id=${userId})`);

  // 2. List existing event types so we don't duplicate
  const list = await cal("GET", "/event-types");
  const existing = list.body?.event_types || list.body || [];
  const existingSlugs = new Set(
    Array.isArray(existing)
      ? existing.map((et) => et.slug).filter(Boolean)
      : (existing.event_types || []).map((et) => et.slug).filter(Boolean),
  );
  console.log(`Existing event types: ${existingSlugs.size} (${[...existingSlugs].join(", ") || "none"})`);

  // 3. Create each
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
        length: et.length,
        price: et.price,
        location: et.location,
      });
      continue;
    }
    const payload = {
      title: et.title,
      slug: et.slug,
      length: et.length,
      description: et.description,
      hidden: false,
      locations: buildLocations(et.location),
      price: et.price,
      currency: et.currency,
      requiresConfirmation: false,
      disableGuests: true,
    };
    const r = await cal("POST", "/event-types", payload);
    if (r.status >= 200 && r.status < 300) {
      results.push({
        slug: et.slug,
        action: "created",
        id: r.body?.event_type?.id || r.body?.id,
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
    `\nDone. ${DRY ? "(no writes)" : `Booking URLs will be: https://cal.com/${username}/<slug>`}`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
