import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/products";

// Ícono de lupa reutilizable
function SearchIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export default function ProductSearch({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Detectar móvil al momento de abrir (< 1024px = lg breakpoint de Tailwind)
  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth < 1024;

  const results = PRODUCTS.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const closeSearch = () => {
    setOpen(false);
    setQuery("");
    onNavigate?.();
  };

  // Cerrar al hacer clic fuera — solo en desktop
  useEffect(() => {
    if (!open || isMobile()) return;
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        closeSearch();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") closeSearch();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  // Focus al abrir
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  // Bloquear scroll del body cuando el overlay móvil está abierto
  useEffect(() => {
    if (open && isMobile()) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ── Panel de búsqueda (compartido entre móvil y desktop) ──────────────────
  const searchPanel = (
    <>
      {/* Header con input */}
      <div className="flex items-center gap-2 border-b border-white/[0.07] p-3">
        <SearchIcon className="flex-shrink-0 text-white/40" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar hamburguesas, papas, bebidas..."
          className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/30"
        />
        <button
          type="button"
          onClick={closeSearch}
          className="flex-shrink-0 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[#d4af5f] transition hover:text-[#e4c070]"
        >
          Cancelar
        </button>
      </div>

      {/* Resultados */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
        {query.trim() === "" ? (
          <p className="py-10 text-center text-xs uppercase tracking-widest text-white/30">
            Escribe para buscar productos
          </p>
        ) : results.length === 0 ? (
          <p className="py-10 text-center text-xs uppercase tracking-widest text-white/30">
            No se encontraron productos
          </p>
        ) : (
          results.map((product) => (
            <Link
              key={product.id}
              to={`/menu/${product.categorySlug}/${product.id}`}
              onClick={closeSearch}
              className="flex gap-3 rounded-xl border border-white/5 bg-black/40 p-2.5 transition hover:border-[#d4af5f]/30 hover:bg-black/60"
            >
              <img
                src={product.imgUrl}
                alt={product.title}
                className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-xs font-bold uppercase tracking-[0.12em] text-white">
                  {product.title}
                </h3>
                <p className="mt-0.5 line-clamp-2 text-xs text-white/40">
                  {product.description}
                </p>
                <p className="mt-1 text-xs font-semibold text-[#d4af5f]">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  );

  // ── Overlay móvil (portal, cubre toda la pantalla) ────────────────────────
  const mobileOverlay = createPortal(
    <div className="fixed inset-0 z-[9999] flex flex-col bg-[#0a0a0a]">
      {searchPanel}
    </div>,
    document.body
  );

  // ── Dropdown desktop ──────────────────────────────────────────────────────
  const desktopDropdown = (
    <div className="absolute right-0 top-full z-50 mt-2 flex w-[min(560px,90vw)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
      <div className="max-h-[420px] flex flex-col">
        {searchPanel}
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative">

      {/* ── Trigger desktop: fake input con lupa ── */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="hidden lg:flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-[0.78rem] text-white/40 transition hover:border-white/20 hover:text-white/60"
      >
        <SearchIcon className="flex-shrink-0" />
        <span>Buscar productos...</span>
      </button>

      {/* ── Trigger móvil: botón con ícono + texto, ancho completo ── */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex lg:hidden w-full items-center justify-center gap-2 border border-white/10 px-4 py-3 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-white/75 transition hover:border-white/20 hover:text-white"
      >
        <SearchIcon className="flex-shrink-0" />
        <span>Buscar</span>
      </button>

      {/* ── Panel condicional por dispositivo ── */}
      {open && (isMobile() ? mobileOverlay : desktopDropdown)}
    </div>
  );
}