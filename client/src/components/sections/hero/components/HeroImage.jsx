// HeroImage.jsx
import React from "react";
import heroImage from "../../../../assets/imgs/hero.jpg";

export function HeroImage() {
  return (
    <section
      className="relative w-full min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[520px] overflow-hidden"
      aria-label="Imagen principal del restaurante"
    >
      <div className="relative w-full min-h-[inherit]">
        <img
          src={heroImage}
          alt="Hamburguesa premium con queso derretido e ingredientes frescos"
          className="block w-full min-h-[inherit] object-cover object-center"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0D0D0D]/90 md:bg-gradient-to-r md:from-[#0D0D0D]/95 md:via-[#0D0D0D]/55 md:to-transparent" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-b from-transparent to-[#0D0D0D]" />
      </div>

      <div className="absolute right-4 bottom-4 z-10 grid aspect-square w-[82px] place-items-center rounded-full bg-[var(--gold)] text-[var(--dark)] shadow-[0_18px_45px_rgba(0,0,0,0.4)] sm:w-24 md:right-8 md:bottom-8 md:w-32 lg:right-16 lg:bottom-16 lg:w-40">
        <div className="flex h-[82%] w-[82%] flex-col items-center justify-center rounded-full border-2 border-black/70 text-center uppercase leading-none">
          <span className="font-oswald text-[0.7rem] font-bold tracking-[0.08em] sm:text-xs md:text-sm">
            Carne
          </span>

          <span className="font-bebas text-[1.8rem] font-bold sm:text-[2rem] md:text-[2.8rem] lg:text-[3.4rem]">
            100%
          </span>

          <span className="font-oswald text-[0.7rem] font-bold tracking-[0.08em] sm:text-xs md:text-sm">
            Premium
          </span>
        </div>
      </div>
    </section>
  );
}