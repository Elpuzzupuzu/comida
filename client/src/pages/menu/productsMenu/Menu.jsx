// Menu.jsx
import { useNavigate } from "react-router-dom";
import { MENU_ITEMS } from "../../../data/menuItems";
import ProductCategory from "../../../components/menu/productCategory/productCategory";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-3 py-6 text-white sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,95,0.08),transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-7xl">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <div className="h-px w-8 bg-[#d4af5f]/30 sm:w-16" />
          <span className="text-center text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[#d4af5f] sm:text-[0.7rem]">
            Para todos los gustos
          </span>
          <div className="h-px w-8 bg-[#d4af5f]/30 sm:w-16" />
        </div>

        {/* Heading */}
        <div className="mx-auto mt-3 max-w-3xl text-center sm:mt-4">
          <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-white sm:text-4xl lg:text-5xl">
            Conocé nuestro menú
          </h2>

          <div className="mt-2 text-base text-[#d4af5f] sm:text-lg sm:mt-3">★</div>

          <p className="mx-auto mt-2 max-w-2xl text-[0.78rem] leading-relaxed text-white/50 sm:mt-3 sm:text-[0.95rem] sm:leading-6 sm:text-white/60">
            Descubrí nuestras categorías con una experiencia visual cuidada,
            elegante y consistente con la identidad premium del resto de la web.
          </p>
        </div>

        {/* Grid — 2 columnas desde mobile */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-6 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4">
          {MENU_ITEMS.map((item, index) => (
            <ProductCategory
              key={item.id}
              item={item}
              index={index}
              onClick={() => navigate(`/menu/${item.slug}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}