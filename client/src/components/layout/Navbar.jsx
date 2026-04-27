import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../data/navLinks";
import ProductSearch from "../search/ProductSearch";
import logo from "../../assets/imgs/navBarLogo.jpg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  const navLinkBase =
    "relative px-3 py-2 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 xl:px-4";

  const navLinkDesktop = ({ isActive }) =>
    `${navLinkBase} ${
      isActive
        ? "text-white after:absolute after:bottom-[-10px] after:left-3 after:right-3 after:h-px after:bg-[#d4af5f] after:content-[''] xl:after:left-4 xl:after:right-4"
        : "text-white/55 hover:text-white"
    }`;

  const navLinkMobile = ({ isActive }) =>
    `border-b border-white/5 py-3 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition ${
      isActive ? "text-[#d4af5f]" : "text-white/75 hover:text-white"
    }`;

  return (
    <header className="relative z-30 w-full border-b border-[#d4af5f]/20 bg-[#0a0a0a]">
      <nav className="mx-auto grid h-20 w-full max-w-7xl grid-cols-[1fr_auto] items-center px-4 sm:h-24 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-8 lg:px-10">

        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex min-w-0 items-center gap-3"
        >
          <img
            src={logo}
            alt="El Perro Callejero"
            className="h-14 w-14 rounded-full border-2 border-[#f1ddb0] object-cover shadow-[0_0_0_3px_rgba(212,175,95,0.14)] sm:h-16 sm:w-16 lg:h-20 lg:w-20"
          />

          <div className="min-w-0 leading-none">
            <span className="block truncate text-[0.82rem] font-bold uppercase tracking-[0.07em] text-white sm:text-[0.95rem] lg:text-[1.15rem]">
              El Perro Callejero
            </span>

            <span className="mt-1 block truncate text-[0.5rem] uppercase tracking-[0.24em] text-[#d4af5f] sm:mt-2 sm:text-[0.58rem] sm:tracking-[0.3em]">
              Burgers • Hot Dogs • Papas
            </span>
          </div>
        </Link>

        <div className="hidden justify-center lg:flex">
          <div className="flex items-center gap-2 xl:gap-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={navLinkDesktop}
                end={link.path === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex lg:gap-4">

          <ProductSearch
            buttonClassName="px-3 py-2 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-white/75 transition-colors duration-300 hover:text-white"
          />

          <button className="bg-[#d4af5f] px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a] transition-colors duration-300 hover:bg-[#e4c070] lg:px-6">
            Ordenar ahora
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-white transition hover:border-[#d4af5f]/50 hover:text-[#d4af5f] lg:hidden"
          aria-label="Abrir menú"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/5 bg-[#0a0a0a] transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={navLinkMobile}
                end={link.path === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3">

            <ProductSearch
              onNavigate={closeMobileMenu}
              buttonClassName="w-full border border-white/10 px-4 py-3 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-white/75 transition hover:border-white/20 hover:text-white"
            />

            <button className="w-full bg-[#d4af5f] px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a] transition-colors duration-300 hover:bg-[#e4c070]">
              Ordenar ahora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}