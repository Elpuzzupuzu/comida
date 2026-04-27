import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/products";

export default function ProductSearch({ buttonClassName = "", onNavigate }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const results = PRODUCTS.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const closeSearch = () => {
    setOpen(false);
    setQuery("");
    onNavigate?.();
  };

  // Cerrar al hacer click fuera
  useEffect(() => {
    if (!open) return;
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
    const handler = (e) => { if (e.key === "Escape") closeSearch(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  // Focus al abrir
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={buttonClassName}
      >
        Buscar
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-[min(560px,90vw)] rounded-2xl border border-white/10 bg-[#111] shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
          
          {/* Input */}
          <div className="p-3 border-b border-white/[0.07]">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar hamburguesas, papas, bebidas..."
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#d4af5f]/50 transition-colors"
            />
          </div>

          {/* Resultados */}
          <div className="max-h-[360px] overflow-y-auto p-2 space-y-1.5">
            {query.trim() === "" ? (
              <p className="py-8 text-center text-xs uppercase tracking-widest text-white/30">
                Escribe para buscar productos
              </p>
            ) : results.length === 0 ? (
              <p className="py-8 text-center text-xs uppercase tracking-widest text-white/30">
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
                    className="h-16 w-16 rounded-lg object-cover flex-shrink-0"
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
        </div>
      )}
    </div>
  );
}