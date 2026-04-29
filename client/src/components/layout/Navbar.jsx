import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../../data/navLinks";
import ProductSearch from "../search/ProductSearch";
import logo from "../../assets/imgs/navBarLogo.jpg";

// Iconos por cada nav link — ajusta según tus rutas reales
const NAV_ICONS = {
  "/": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  ),
  "/menu": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  ),
  "/favoritos": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  "/nosotros": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </svg>
  ),
  "/contacto": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScrollY.current || current < 60);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const barTransition = "transition-transform duration-300 ease-in-out";

  return (
    <>
      {/* ── TOP BAR (móvil) / FULL NAV (desktop) ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-[#d4af5f]/20 bg-[#0a0a0a] ${barTransition} ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center px-4 sm:px-6 lg:h-24 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8 lg:px-10">

          {/* Logo */}
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="El Perro Callejero"
              className="h-10 w-10 rounded-full border-2 border-[#f1ddb0] object-cover shadow-[0_0_0_3px_rgba(212,175,95,0.14)] lg:h-20 lg:w-20"
            />
            <div className="min-w-0 leading-none">
              <span className="block truncate text-[0.82rem] font-bold uppercase tracking-[0.07em] text-white lg:text-[1.15rem]">
                El Perro Callejero
              </span>
              <span className="mt-1 block truncate text-[0.48rem] uppercase tracking-[0.24em] text-[#d4af5f] lg:text-[0.58rem] lg:tracking-[0.3em]">
                Burgers • Hot Dogs • Papas
              </span>
            </div>
          </Link>

          {/* Nav links — solo desktop */}
          <div className="hidden justify-center lg:flex">
            <div className="flex items-center gap-2 xl:gap-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 xl:px-4 ${
                      isActive
                        ? "text-white after:absolute after:bottom-[-10px] after:left-3 after:right-3 after:h-px after:bg-[#d4af5f] after:content-[''] xl:after:left-4 xl:after:right-4"
                        : "text-white/55 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Acciones desktop */}
          <div className="hidden items-center gap-3 lg:flex lg:gap-4">
            <ProductSearch />
            <button className="bg-[#d4af5f] px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a] transition-colors duration-300 hover:bg-[#e4c070] lg:px-6">
              Ordenar ahora
            </button>
          </div>

          {/* Search pill — solo móvil (en top bar) */}
          <button
            onClick={() => setSearchOpen(true)}
            className="ml-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/40 transition hover:border-[#d4af5f]/40 hover:text-[#d4af5f] lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <span className="text-[0.7rem] tracking-wide">Buscar…</span>
          </button>

          {/* CTA móvil compacto */}
          <button className="ml-3 bg-[#d4af5f] px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#0a0a0a] transition-colors hover:bg-[#e4c070] lg:hidden">
            Ordenar
          </button>
        </nav>
      </header>

      {/* ── BOTTOM NAV — solo móvil ── */}
      <nav
        className={`fixed bottom-0 left-0 right-0 z-50 flex h-[60px] items-stretch border-t border-[#d4af5f]/20 bg-[#0a0a0a] pb-[env(safe-area-inset-bottom,0px)] lg:hidden ${barTransition} ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `relative flex flex-1 flex-col items-center justify-center gap-1 transition-colors duration-200 ${
                isActive
                  ? "text-[#d4af5f] before:absolute before:top-0 before:left-[30%] before:right-[30%] before:h-[2px] before:rounded-b-sm before:bg-[#d4af5f] before:content-['']"
                  : "text-white/35 hover:text-white/70"
              }`
            }
          >
            {NAV_ICONS[link.path]}
            <span className="text-[0.52rem] font-semibold uppercase tracking-[0.12em]">
              {link.label}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* ── SEARCH OVERLAY (móvil) ── */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-black/85 backdrop-blur-md pt-20 px-5 lg:hidden"
          onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}
        >
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-5 right-5 text-white/60 hover:text-white text-2xl leading-none"
          >
            ✕
          </button>
          <ProductSearch
            autoFocus
            onNavigate={() => setSearchOpen(false)}
          />
        </div>
      )}
    </>
  );
}