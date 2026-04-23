import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { MENU_ITEMS } from "../../data/menuItems";

export default function MenuSection() {
  const carouselRef = useRef(null);
  const autoRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [rotating, setRotating] = useState(false);
  const [cardSize, setCardSize] = useState({
    width: 190,
    height: 250,
    radius: 260,
    stageHeight: 300,
  });

  const N = MENU_ITEMS.length;

  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setCardSize({
          width: 170,
          height: 220,
          radius: 210,
          stageHeight: 260,
        });
      } else if (width < 1024) {
        setCardSize({
          width: 210,
          height: 270,
          radius: 280,
          stageHeight: 320,
        });
      } else {
        setCardSize({
          width: 240,
          height: 300,
          radius: 380,
          stageHeight: 360,
        });
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);

    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const goTo = useCallback(
    (index) => {
      if (!carouselRef.current || rotating) return;

      setRotating(true);

      const angle = -(360 / N) * index;

      gsap.to(carouselRef.current, {
        rotateY: angle,
        duration: 0.85,
        ease: "power2.inOut",
        onComplete: () => setRotating(false),
      });

      setCurrent(index);
    },
    [rotating, N]
  );

  const next = useCallback(() => {
    goTo((current + 1) % N);
  }, [current, goTo, N]);

  const prev = useCallback(() => {
    goTo((current - 1 + N) % N);
  }, [current, goTo, N]);

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((prev) => {
        const nextIndex = (prev + 1) % N;

        if (carouselRef.current) {
          gsap.to(carouselRef.current, {
            rotateY: -(360 / N) * nextIndex,
            duration: 0.85,
            ease: "power2.inOut",
          });
        }

        return nextIndex;
      });
    }, 3200);
  }, [N]);

  useEffect(() => {
    if (!carouselRef.current) return;

    gsap.fromTo(
      carouselRef.current,
      {
        rotateY: -30,
        opacity: 0,
      },
      {
        rotateY: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.15,
      }
    );

    startAuto();

    return () => clearInterval(autoRef.current);
  }, [startAuto]);

  const restartAutoAndRun = (callback) => {
    clearInterval(autoRef.current);
    callback();
    startAuto();
  };

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

          <div className="mt-4 text-lg text-[#d4af5f] sm:text-xl">★</div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/60 sm:text-[0.95rem]">
            Descubrí nuestras categorías con una experiencia visual más dinámica,
            cuidada y con la misma identidad premium del resto de la web.
          </p>
        </div>

        <div
          className="mt-12 flex items-center justify-center sm:mt-14 lg:mt-16"
          style={{
            perspective: "1200px",
            height: `${cardSize.stageHeight}px`,
          }}
        >
          <div
            ref={carouselRef}
            style={{
              width: `${cardSize.width}px`,
              height: `${cardSize.height}px`,
              position: "relative",
              transformStyle: "preserve-3d",
            }}
          >
            {MENU_ITEMS.map((item, i) => {
              const angle = (360 / N) * i;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    restartAutoAndRun(() => {
                      goTo(i);
                    })
                  }
                  style={{
                    position: "absolute",
                    width: `${cardSize.width}px`,
                    height: `${cardSize.height}px`,
                    transform: `rotateY(${angle}deg) translateZ(${cardSize.radius}px)`,
                    backfaceVisibility: "hidden",
                  }}
                  className="group overflow-hidden rounded-[22px] border border-[#d4af5f]/20 bg-[#111111] text-left shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-transform duration-300"
                >
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="h-full w-full object-cover brightness-[0.9] transition duration-500 group-hover:scale-[1.03] group-hover:brightness-[1]"
                  />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.68)_0%,rgba(10,10,10,0.18)_45%,rgba(10,10,10,0.02)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <span className="mb-3 block text-[0.56rem] font-semibold uppercase tracking-[0.32em] text-[#d4af5f]/70 sm:text-[0.6rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-base font-bold uppercase tracking-[0.06em] text-white sm:text-lg">
                      {item.title}
                    </h3>

                    <div className="mt-3 h-px w-8 bg-[#d4af5f]/40" />

                    <span className="mt-3 inline-block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#d4af5f] sm:text-[0.66rem]">
                      Ver categoría →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={() =>
              restartAutoAndRun(() => {
                prev();
              })
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af5f]/30 text-[#d4af5f] transition-all duration-300 hover:border-[#d4af5f]/60 hover:bg-[#d4af5f]/10 sm:h-11 sm:w-11"
            aria-label="Anterior"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {MENU_ITEMS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() =>
                  restartAutoAndRun(() => {
                    goTo(i);
                  })
                }
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-[#d4af5f]" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              restartAutoAndRun(() => {
                next();
              })
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af5f]/30 text-[#d4af5f] transition-all duration-300 hover:border-[#d4af5f]/60 hover:bg-[#d4af5f]/10 sm:h-11 sm:w-11"
            aria-label="Siguiente"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}