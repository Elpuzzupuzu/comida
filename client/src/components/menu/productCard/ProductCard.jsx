export default function ProductCard({ product }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af5f]/30 hover:shadow-[0_28px_70px_rgba(0,0,0,0.6),0_0_0_1px_rgba(212,175,95,0.12)]">

      {/* Image */}
      <div className="relative h-[220px] w-full overflow-hidden">
        <img
          src={product.imgUrl}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Bottom fade into card */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111111] to-transparent" />

        {/* Price pill — floats over image */}
        <div className="absolute bottom-3 right-4 rounded-full bg-[#0a0a0a]/80 px-3 py-1 backdrop-blur-sm border border-[#d4af5f]/25">
          <span className="text-sm font-semibold tracking-wide text-[#d4af5f]">
            ${product.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-3">
        {/* Thin gold accent line */}
        <div className="mb-3 h-px w-8 bg-gradient-to-r from-[#d4af5f]/60 to-transparent transition-all duration-500 group-hover:w-14" />

        <h3 className="text-[0.85rem] font-bold uppercase tracking-[0.1em] text-white/90 leading-snug">
          {product.title}
        </h3>

        <p className="mt-2 text-[0.75rem] leading-relaxed text-white/40 line-clamp-3">
          {product.description}
        </p>
      </div>
    </article>
  );
}