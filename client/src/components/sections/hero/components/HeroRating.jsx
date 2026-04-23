export default function HeroRating() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginTop: 28,
        paddingTop: 24,
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div style={{ display: "flex", gap: 3 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: "#FBBF24", fontSize: 13 }}>★</span>
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
  );
}