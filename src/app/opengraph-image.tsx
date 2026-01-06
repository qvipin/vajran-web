import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "VAJRAN - Digital Atelier";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const instrumentSerifRegular = await fetch(
    new URL("https://fonts.gstatic.com/s/instrumentserif/v4/jizBRFtNs2ka5fXjeivQ4LroWlx-2zIZj1bIkNo.woff")
  ).then((res) => res.arrayBuffer());

  const instrumentSerifItalic = await fetch(
    new URL("https://fonts.gstatic.com/s/instrumentserif/v4/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATi3TNgNq55w.woff")
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 180px 80px 140px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 400,
              color: "#ededed",
              lineHeight: 1.1,
              fontFamily: "Instrument Serif",
            }}
          >
            We build what
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 400,
              color: "#ededed",
              lineHeight: 1.1,
              fontFamily: "Instrument Serif",
              fontStyle: "italic",
              opacity: 0.6,
            }}
          >
            you dream.
          </div>
        </div>

        <svg
          width="180"
          height="180"
          viewBox="0 0 100 100"
          fill="#ededed"
        >
          <path d="M50 5 L5 50 L45 95 Z" />
          <path d="M55 5 L95 50 L55 90 Z" opacity="0.4" />
        </svg>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: instrumentSerifRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Instrument Serif",
          data: instrumentSerifItalic,
          style: "italic",
          weight: 400,
        },
      ],
    }
  );
}
