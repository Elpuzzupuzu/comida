export default function ProductCard({ item, index, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative overflow-hidden rounded-[22px] border border-[#d4af5f]/20 bg-[#111111] text-left shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1"
    >
      <div className="relative h-[250px] w-full sm:h-[280px] lg:h-[300px]">
        <img
          src={item.imgUrl}
          alt={item.title}
          className="h-full w-full object-cover brightness-[0.9] transition duration-500 group-hover:scale-[1.03] group-hover:brightness-[1]"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.68)_0%,rgba(10,10,10,0.18)_45%,rgba(10,10,10,0.02)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <span className="mb-3 block text-[0.56rem] font-semibold uppercase tracking-[0.32em] text-[#d4af5f]/70 sm:text-[0.6rem]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="text-base font-bold uppercase tracking-[0.06em] text-white sm:text-lg">
            {item.title}
          </h3>

          <div className="mt-3 h-px w-8 bg-[#d4af5f]/40" />

          <span className="mt-3 inline-block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#d4af5f] sm:text-[0.66rem]">
            Ver categoría →
          </span>
        </div>
      </div>
    </button>
  );
}