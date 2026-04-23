import { MENU_ITEMS } from "../../../data/menuItems";
import ProductCard from "../../components/menu/ProductCard";

export default function Menu() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,95,0.08),transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-center gap-4 sm:gap-5">
          <div className="h-px w-10 bg-[#d4af5f]/30 sm:w-16" />
          <span className="text-center text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#d4af5f] sm:text-[0.7rem]">
            Para todos los gustos
          </span>
          <div className="h-px w-10 bg-[#d4af5f]/30 sm:w-16" />
        </div>

        <div className="mx-auto mt-5 max-w-3xl text-center">
          <h2 className="text-3xl font-bold uppercase tracking-[0.08em] text-white sm:text-4xl lg:text-5xl">
            Conocé nuestro menú
          </h2>

          <div className="mt-4 text-lg text-[#d4af5f]">★</div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/60 sm:text-[0.95rem]">
            Descubrí nuestras categorías con una experiencia visual cuidada,
            elegante y consistente con la identidad premium del resto de la web.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4">
          {MENU_ITEMS.map((item, index) => (
            <ProductCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => {
                console.log("Categoría seleccionada:", item.title);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}