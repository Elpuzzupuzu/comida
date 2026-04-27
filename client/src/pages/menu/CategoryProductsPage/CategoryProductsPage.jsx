// COMPONENTE DONDE SE RENDERIZAN LOS ELEMENTOS DE CADA CATEGORIA

import { useParams, Link } from "react-router-dom";
import { MENU_ITEMS } from "../../../data/menuItems";
import { PRODUCTS } from "../../../data/products";
import ProductCard from "../../../components/menu/productCard/ProductCard";

export default function CategoryProductsPage() {
  const { categorySlug } = useParams();

  const category = MENU_ITEMS.find((item) => item.slug === categorySlug);

  const products = PRODUCTS.filter(
    (product) => product.categorySlug === categorySlug
  );

  if (!category) {
    return (
      <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 text-white">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-10 bg-[#d4af5f]/40" />
            <span className="text-[#d4af5f] text-lg">✦</span>
            <span className="h-px w-10 bg-[#d4af5f]/40" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.2em] text-white/90">
            Categoría no encontrada
          </h2>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[#d4af5f] hover:text-white transition-colors duration-300 group"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Volver al menú
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white">

      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#d4af5f]/5 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-3 pt-3 pb-16 sm:px-8 sm:pt-4 sm:pb-20 lg:px-12">

        {/* Back link */}
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 min-h-[44px] text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#d4af5f]/80 hover:text-[#d4af5f] transition-colors duration-300 group"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Volver al menú
        </Link>

        {/* Header */}
        <header className="mt-1 mb-3 text-center sm:mt-2 sm:mb-4">
          <div className="flex items-center justify-center gap-3 mb-2 sm:gap-4 sm:mb-3">
            <span className="h-px flex-1 max-w-[40px] sm:max-w-[100px] bg-gradient-to-r from-transparent to-[#d4af5f]/50" />
            <span className="text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.35em] text-[#d4af5f]">
              Categoría
            </span>
            <span className="h-px flex-1 max-w-[40px] sm:max-w-[100px] bg-gradient-to-l from-transparent to-[#d4af5f]/50" />
          </div>

          <h1 className="text-xl font-light uppercase tracking-[0.1em] text-white sm:text-3xl lg:text-4xl">
            {category.title}
          </h1>

          <div className="mt-1.5 flex justify-center sm:mt-2">
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-[#d4af5f]/70 to-transparent sm:w-12" />
          </div>

          {products.length > 0 && (
            <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#d4af5f]/60 sm:mt-2">
              {products.length} {products.length === 1 ? "producto" : "productos"}
            </p>
          )}
        </header>

        {/* Divider */}
        <div className="mb-3 flex items-center gap-3 sm:mb-5 sm:gap-4">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-[#d4af5f]/30 text-[0.6rem]">✦</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        {/* Product grid */}
        {products.length === 0 ? (
          <div className="py-24 text-center text-white/30 text-sm tracking-widest uppercase">
            No hay productos disponibles
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}