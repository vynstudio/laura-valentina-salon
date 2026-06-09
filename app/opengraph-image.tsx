import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Laura Valentina — Microblading & Nail Studio · Biel/Bienne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(60% 80% at 50% 0%, #FCE9F0 0%, rgba(252,233,240,0) 70%), linear-gradient(180deg, #FAF8F5 0%, #F5F0EB 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#9B8577",
          }}
        >
          Biel / Bienne · Switzerland
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 92,
            color: "#3D3128",
            fontWeight: 600,
          }}
        >
          Laura Valentina
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 34,
            color: "#6B5B4D",
          }}
        >
          Microblading &amp; Nail Artistry
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9B8577",
          }}
        >
          valentinastudio.ch
        </div>
      </div>
    ),
    { ...size },
  );
}
