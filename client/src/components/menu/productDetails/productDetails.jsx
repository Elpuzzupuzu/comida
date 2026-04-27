import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../../../data/products";
import { MENU_ITEMS } from "../../../data/menuItems";

export default function ProductDetails() {
  const { categorySlug, productId } = useParams();

  const product = PRODUCTS.find(
    (item) => String(item.id) === String(productId)
  );

  const category = MENU_ITEMS.find((item) => item.slug === categorySlug);

  if (!product || product.categorySlug !== categorySlug) {
    return (
      <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 text-white">
        <div className="text-center space-y-4">
          <h2 className="text-xl sm:text-3xl font-light uppercase tracking-[0.2em]">
            Producto no encontrado
          </h2>
          <Link
            to="/menu"
            className="text-[#d4af5f] text-xs font-semibold uppercase tracking-[0.25em]"
          >
            ← Volver al menú
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto w-full max-w-7xl px-3 py-4 sm:px-8 sm:py-8 lg:px-12 lg:py-16">

        {/* Back link */}
        <Link
          to={`/menu/${categorySlug}`}
          className="inline-flex items-center gap-2 min-h-[44px] text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#d4af5f]/80 hover:text-[#d4af5f] transition-colors duration-300 group"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Volver a {category?.title || "categoría"}
        </Link>

        {/* Layout: columna en mobile, grid en desktop */}
        <div className="mt-3 grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 lg:mt-6">

          {/* Imagen */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#111] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <img
              src={product.imgUrl}
              alt={product.title}
              className="h-[240px] w-full object-cover sm:h-[380px] lg:h-[480px]"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center px-1 sm:px-0">

            <span className="text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.35em] text-[#d4af5f]">
              {category?.title}
            </span>

            <h1 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-light uppercase tracking-[0.1em] text-white leading-tight">
              {product.title}
            </h1>

            <div className="my-4 sm:my-6 h-px w-16 sm:w-20 bg-gradient-to-r from-[#d4af5f] to-transparent" />

            <p className="text-[0.8rem] sm:text-sm lg:text-base leading-6 sm:leading-7 text-white/50">
              {product.description}
            </p>

            <div className="mt-5 sm:mt-8">
              <span className="text-3xl sm:text-4xl font-semibold text-[#d4af5f]">
                ${product.price}
              </span>
            </div>

            <button className="mt-5 sm:mt-8 w-full sm:w-fit rounded-full bg-[#d4af5f] px-8 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 active:scale-95 hover:bg-white">
              Agregar al carrito
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}