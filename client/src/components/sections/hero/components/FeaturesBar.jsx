import React from "react";
import { features } from "../data/heroData";

const icons = {
  speed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 14l4-4" />
      <path d="M4.9 19a9 9 0 1 1 14.2 0" />
    </svg>
  ),

  quality: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" />
      <path d="M9.5 12l2 2 4-4" />
    </svg>
  ),

  delivery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="7" width="11" height="10" rx="2" />
      <path d="M13 10h4l3 3v4h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="18" cy="18" r="1.6" />
    </svg>
  ),

  hours: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
};

export default function FeaturesBar() {
  const mappedFeatures = features.map((item, index) => ({
    ...item,
    icon:
      index === 0
        ? icons.speed
        : index === 1
        ? icons.quality
        : index === 2
        ? icons.delivery
        : icons.hours,
  }));

  return (
    <section className="relative z-10 border-t border-[#d4af5f]/10 bg-[#080808]/95 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {mappedFeatures.map(({ label, value, icon }, i) => (
          <div
            key={value}
            className={`group flex items-center gap-4 px-6 py-6 transition-all duration-300 hover:bg-white/[0.02]
              ${
                i !== mappedFeatures.length - 1
                  ? "lg:border-r lg:border-white/[0.06]"
                  : ""
              }
            `}
          >
            {/* Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d4af5f]/10 text-[#d4af5f] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#d4af5f]/15">
              <div className="h-5 w-5">{icon}</div>
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white/40">
                {label}
              </span>

              <strong className="mt-1 text-[0.95rem] font-semibold uppercase tracking-[0.06em] text-white">
                {value}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}