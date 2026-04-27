// ProductCategory.jsx
export default function ProductCategory({ item, index, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl border border-[#d4af5f]/20 bg-[#111111] text-left shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 sm:rounded-[22px] sm:shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
    >
      <div className="relative h-[170px] w-full sm:h-[280px] lg:h-[300px]">
        <img
          src={item.imgUrl}
          alt={item.title}
          className="h-full w-full object-cover brightness-[0.85] transition duration-500 group-hover:scale-[1.03] group-hover:brightness-[1]"
        />

        {/* Gradient overlay — más fuerte en mobile para legibilidad */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.78)_0%,rgba(10,10,10,0.18)_50%,rgba(10,10,10,0.02)_100%)] sm:bg-[linear-gradient(to_top,rgba(10,10,10,0.68)_0%,rgba(10,10,10,0.18)_45%,rgba(10,10,10,0.02)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
          <span className="mb-1.5 block text-[0.5rem] font-semibold uppercase tracking-[0.3em] text-[#d4af5f]/70 sm:mb-3 sm:text-[0.6rem]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.06em] text-white sm:text-lg">
            {item.title}
          </h3>

          <div className="mt-2 h-px w-6 bg-[#d4af5f]/40 sm:mt-3 sm:w-8" />

          <span className="mt-2 inline-block text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#d4af5f] sm:mt-3 sm:text-[0.66rem]">
            Ver →
          </span>
        </div>
      </div>
    </button>
  );
}