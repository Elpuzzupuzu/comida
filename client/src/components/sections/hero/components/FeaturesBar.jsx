import React from "react";
import { features } from "../data/heroData";

export function FeaturesBar() {
  return (
    <div
      className="bh-features-grid"
      style={{
        position: "relative",
        zIndex: 10,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        borderTop: "1px solid rgba(251,191,36,0.1)",
        background: "rgba(8,8,8,0.98)",
        backdropFilter: "blur(12px)",
      }}
    >
      {features.map(({ emoji, label, value }, i) => (
        <div
          key={value}
          className="bh-feature"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "20px 32px",
            borderRight:
              i < features.length - 1
                ? "1px solid rgba(255,255,255,0.06)"
                : "none",
            transition: "background 0.2s",
            cursor: "default",
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: "rgba(251,191,36,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: 18,
            }}
          >
            {emoji}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <span
              style={{
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {label}
            </span>

            <strong
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              {value}
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
}