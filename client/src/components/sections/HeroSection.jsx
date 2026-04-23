import React from "react";
import { HEADER_H } from "./heroData";
import { heroGlobalStyles } from "./heroStyles";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { FeaturesBar } from "./FeaturesBar";

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
          background: "#080808",
          overflow: "hidden",
          color: "#fff",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(ellipse 60% 55% at 72% 44%, rgba(245,158,11,0.13) 0%, transparent 65%),
              radial-gradient(ellipse 40% 40% at 18% 80%, rgba(180,80,10,0.07) 0%, transparent 60%),
              linear-gradient(160deg, #0a0808 0%, #0d0907 40%, #080808 100%)
            `,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(-55deg, transparent, transparent 80px, rgba(251,191,36,0.018) 80px, rgba(251,191,36,0.018) 81px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 220,
            background:
              "linear-gradient(to top, rgba(8,8,8,0.95), transparent)",
            pointerEvents: "none",
          }}
        />

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
          <HeroImage />
        </div>

        <FeaturesBar />
      </section>
    </>
  );
}