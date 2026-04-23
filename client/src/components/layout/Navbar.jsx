
import { NAV_LINKS } from "../../data/navLinks";

export default function Navbar({ activeNav, setActiveNav }) {
  return (
    <header className="relative z-30 w-full border-b border-white/5 bg-black/75 backdrop-blur-xl">
      <nav className="mx-auto grid h-[96px] w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 lg:px-10">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-300/10 to-transparent shadow-[0_0_24px_rgba(245,158,11,0.12)]">
            <span className="text-3xl leading-none">🍔</span>
          </div>

          <div className="leading-none">
            <div className="text-[1.45rem] font-black tracking-[0.16em] text-white">
              BURGER
            </div>
            <div className="mt-1.5 text-[0.76rem] font-bold tracking-[0.22em] text-amber-400">
              HOUSE
            </div>
          </div>
        </a>

        <div className="flex justify-center">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md lg:flex">
            {NAV_LINKS.map((link) => {
              const active = activeNav === link;

              return (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNav(link);
                  }}
                  className={`whitespace-nowrap rounded-full px-6 py-2.5 text-[0.8rem] font-bold tracking-[0.05em] transition-all duration-200 ${
                    active
                      ? "bg-amber-400 text-black shadow-[0_0_18px_rgba(245,158,11,0.35)]"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.toUpperCase()}
                </a>
              );
            })}
          </div>
        </div>

        <button className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-[0.82rem] font-extrabold tracking-[0.08em] text-black shadow-[0_0_22px_rgba(245,158,11,0.22)] transition-all duration-200 hover:scale-[1.02] hover:bg-amber-300">
          <span className="leading-none">🛵</span>
          <span className="whitespace-nowrap">PEDÍ AHORA</span>
        </button>
      </nav>
    </header>
  );
}