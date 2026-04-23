import logo from "../../assets/imgs/navBarLogo.jpg";

const FOOTER_LINKS = [
  "Inicio",
  "Menú",
  "Nosotros",
  "Promociones",
  "Contacto",
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d4af5f]/20 bg-[#0a0a0a] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-12 lg:px-10 lg:py-16">
        
        {/* Marca */}
        <div>
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="El Perro Callejero"
              className="h-16 w-16 rounded-full border-2 border-[#f1ddb0] object-cover shadow-[0_0_0_3px_rgba(212,175,95,0.14)]"
            />

            <div className="leading-none">
              <span className="block text-[1rem] font-bold uppercase tracking-[0.08em] text-white sm:text-[1.1rem]">
                El Perro Callejero
              </span>

              <span className="mt-2 block text-[0.58rem] uppercase tracking-[0.34em] text-[#d4af5f] sm:text-[0.62rem]">
                Burgers • Hot Dogs • Papas
              </span>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
            Sabor callejero con estilo propio. Hamburguesas, hot dogs y papas
            preparados para quienes buscan una experiencia rápida, potente y con
            mucha personalidad.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-[0.82rem] font-semibold uppercase tracking-[0.24em] text-[#d4af5f]">
            Navegación
          </h3>

          <div className="mt-5 flex flex-col gap-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[0.82rem] uppercase tracking-[0.14em] text-white/65 transition-colors duration-300 hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-[0.82rem] font-semibold uppercase tracking-[0.24em] text-[#d4af5f]">
            Contacto
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-[0.82rem] uppercase tracking-[0.12em] text-white/65">
            <span>Calle Principal 123</span>
            <span>Madrid, España</span>
            <span>+34 600 123 456</span>
            <span>info@elperrocallejero.com</span>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/65 transition-all duration-300 hover:border-[#d4af5f]/50 hover:text-[#d4af5f]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37a4 4 0 1 1-1.37-1.37A4 4 0 0 1 16 11.37z" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/65 transition-all duration-300 hover:border-[#d4af5f]/50 hover:text-[#d4af5f]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H8v3h2.1v8h3.4z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/65 transition-all duration-300 hover:border-[#d4af5f]/50 hover:text-[#d4af5f]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.2.3 11.7c0 2.1.6 4.2 1.7 6L0 24l6.5-1.7a11.9 11.9 0 0 0 5.7 1.5h.1c6.5 0 11.8-5.2 11.8-11.7 0-3.1-1.2-6.1-3.6-8.6zM12.2 21.8h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2c0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9a9.9 9.9 0 0 1 2.9 7c0 5.5-4.5 10-10 10zm5.5-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.8.1-.2.3-.9 1-1.1 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6.2-.4c.1-.2 0-.5 0-.6 0-.2-.8-1.9-1.1-2.6-.3-.7-.5-.6-.8-.6h-.7c-.2 0-.6.1-.9.5-.3.3-1.2 1.2-1.2 3s1.2 3.5 1.4 3.7c.2.2 2.3 3.6 5.7 5 .8.4 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 1.8-.8 2-1.5.3-.7.3-1.4.2-1.5 0-.2-.3-.3-.6-.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="text-[0.72rem] uppercase tracking-[0.14em] text-white/40">
            © 2025 El Perro Callejero. Todos los derechos reservados.
          </p>

          <p className="text-[0.7rem] uppercase tracking-[0.14em] text-white/30">
            Sabor callejero, presencia premium
          </p>
        </div>
      </div>
    </footer>
  );
}