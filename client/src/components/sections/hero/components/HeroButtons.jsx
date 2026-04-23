import { ShoppingCart, Star } from "lucide-react";

export default function HeroButtons() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
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
  );
}