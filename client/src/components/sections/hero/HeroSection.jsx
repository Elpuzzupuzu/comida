// HeroSection.jsx
import React from "react";
import { HEADER_H } from "./data/heroData";
import { heroGlobalStyles } from "./styles/heroStyles";
import { HeroContent } from "./components/HeroContent";
import FeaturesBar from "../../sections/hero/components/FeaturesBar";
import heroImage from "../../../assets/imgs/hero.jpg";

export default function HeroSection() {
  return (
    <>
      <style>{heroGlobalStyles}</style>

      <section
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          paddingTop: HEADER_H,
          overflow: "hidden",
          color: "#fff",
          fontFamily: "'Barlow', sans-serif",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradiente principal: oscurece izquierda para legibilidad */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(to right,
                rgba(8,8,8,0.95) 0%,
                rgba(8,8,8,0.80) 35%,
                rgba(8,8,8,0.35) 60%,
                rgba(8,8,8,0.10) 100%
              )
            `,
            pointerEvents: "none",
          }}
        />

        {/* Gradiente dorado ambiental */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(ellipse 50% 50% at 72% 44%, rgba(245,158,11,0.10) 0%, transparent 65%),
              radial-gradient(ellipse 40% 40% at 18% 80%, rgba(180,80,10,0.06) 0%, transparent 60%)
            `,
            pointerEvents: "none",
          }}
        />

        {/* Textura diagonal sutil */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(-55deg, transparent, transparent 80px, rgba(251,191,36,0.018) 80px, rgba(251,191,36,0.018) 81px)",
            pointerEvents: "none",
          }}
        />

        {/* Gradiente inferior */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 220,
            background: "linear-gradient(to top, rgba(8,8,8,0.95), transparent)",
            pointerEvents: "none",
          }}
        />

        {/* Badge "Carne 100% Premium" — centrado verticalmente */}
        <div
          style={{
            position: "absolute",
            right: "clamp(16px, 4vw, 64px)",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <div
            style={{ width: "clamp(80px, 10vw, 140px)", aspectRatio: "1" }}
            className="grid place-items-center rounded-full bg-[var(--gold)] text-[var(--dark)] shadow-[0_18px_45px_rgba(0,0,0,0.4)]"
          >
            <div className="flex h-[82%] w-[82%] flex-col items-center justify-center rounded-full border-2 border-black/70 text-center uppercase leading-none">
              <span
                className="font-oswald font-bold tracking-[0.08em]"
                style={{ fontSize: "clamp(0.55rem, 0.9vw, 0.85rem)" }}
              >
                Carne
              </span>
              <span
                className="font-bebas font-bold"
                style={{ fontSize: "clamp(1.6rem, 4vw, 3.4rem)" }}
              >
                100%
              </span>
              <span
                className="font-oswald font-bold tracking-[0.08em]"
                style={{ fontSize: "clamp(0.55rem, 0.9vw, 0.85rem)" }}
              >
                Premium
              </span>
            </div>
          </div>
        </div>

        {/* Grid con HeroContent */}
        <div
          className="bh-hero-grid bh-hero-shell"
          style={{
            position: "relative",
            zIndex: 10,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            flex: 1,
            maxWidth: 1280,
            width: "92%",
            margin: "0 auto",
            padding: "56px 0 32px",
          }}
        >
          <HeroContent />
          <div />
        </div>

        <FeaturesBar />
      </section>
    </>
  );
}