import underConstructionImg from "../../assets/imgs/inProgress.jpg";

export default function AboutUsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <img
        src={underConstructionImg}
        alt="Página en construcción"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />
    </main>
  );
}