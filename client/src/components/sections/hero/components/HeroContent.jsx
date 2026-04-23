import React from "react";
import { ShoppingCart, Star } from "lucide-react";

export function HeroContent() {
  return (
    <div className="bh-hero-left" style={{ paddingRight: 48 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 32,
            height: 2,
            background: "#FBBF24",
            borderRadius: 2,
          }}
        />
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#FBBF24",
          }}
        >
          Las Mejores
        </span>
      </div>

      <h1
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          textTransform: "uppercase",
          lineHeight: 0.92,
          margin: 0,
        }}
      >
        <span
          style={{
            display: "block",
            fontSize: "clamp(64px, 8vw, 104px)",
            color: "#fff",
            letterSpacing: "0.01em",
          }}
        >
          Hamburguesas
        </span>
        <span
          style={{
            display: "block",
            fontSize: "clamp(22px, 2.8vw, 36px)",
            letterSpacing: "0.08em",
            color: "#FBBF24",
            marginTop: 8,
            fontWeight: 700,
          }}
        >
          Hechas como te gustan
        </span>
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          margin: "22px 0",
        }}
      >
        <div
          style={{
            flex: 1,
            maxWidth: 80,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(251,191,36,0.5))",
          }}
        />
        <div
          style={{
            width: 5,
            height: 5,
            background: "#FBBF24",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            flex: 1,
            maxWidth: 80,
            height: 1,
            background:
              "linear-gradient(90deg, rgba(251,191,36,0.5), transparent)",
          }}
        />
      </div>

      <p
        style={{
          fontSize: 16,
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.68)",
          maxWidth: 440,
          marginBottom: 36,
        }}
      >
        Carne{" "}
        <strong style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
          100% premium
        </strong>
        , ingredientes frescos y mucho sabor en cada bocado. ¿Listo para la
        mejor experiencia?
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          className="bh-btn-primary"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 32px",
            borderRadius: 100,
            background: "#FBBF24",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#0a0a0a",
            border: "none",
            cursor: "pointer",
            transition: "all 0.25s",
          }}
        >
          <ShoppingCart size={16} />
          Ver Menú
        </button>

        <button
          className="bh-btn-secondary"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "13px 30px",
            borderRadius: 100,
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.22)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.78)",
            cursor: "pointer",
            transition: "all 0.25s",
          }}
        >
          <Star size={16} />
          Promociones
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginTop: 28,
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.07)",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", gap: 3 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ color: "#FBBF24", fontSize: 13 }}>
              ★
            </span>
          ))}
        </div>

        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.04em",
          }}
        >
          <strong style={{ color: "#fff" }}>4.9</strong>
          {" · "}Más de 2,400 reseñas
        </span>
      </div>
    </div>
  );
}