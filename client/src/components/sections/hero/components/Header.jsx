import React from "react";
import { HEADER_H, navItems } from "../data/heroData";

export function Header() {
  return (
    <header
      className="bh-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: HEADER_H,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        background: "rgba(8,8,8,0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(251,191,36,0.12)",
      }}
    >
      <span
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: 22,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#fff",
        }}
      >
        Burger<span style={{ color: "#FBBF24" }}>House</span>
      </span>

      <nav className="bh-nav" style={{ display: "flex", gap: 32 }}>
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="bh-nav-link"
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.65)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "9px 22px",
          borderRadius: 100,
          background: "#FBBF24",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#0a0a0a",
          border: "none",
          cursor: "pointer",
          transition: "background 0.2s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#FCD34D";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#FBBF24";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Ordenar Ahora
      </button>
    </header>
  );
}