import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../App";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Heritage Villa Renovation",
    location: "Patiala, Punjab",
    before: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Modern Living Transformation",
    location: "Chandigarh",
    before: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Commercial Office Build-out",
    location: "Mohali, Punjab",
    before: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
  },
];

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = (clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => dragging && update(e.clientX);
    const onTouch = (e: TouchEvent) => dragging && update(e.touches[0].clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging]);

  return (
    <div
      ref={ref}
      className="ba-slider relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-2xl overflow-hidden select-none ring-1 ring-ink-200 dark:ring-ink-700"
      onMouseDown={(e) => { setDragging(true); update(e.clientX); }}
      onTouchStart={(e) => { setDragging(true); update(e.touches[0].clientX); }}
    >
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-ink-950/80 text-white text-[10px] uppercase tracking-widest font-semibold z-10">Before</span>
      <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold-400/95 text-ink-950 text-[10px] uppercase tracking-widest font-semibold z-10">After</span>

      {/* Handle */}
      <div className="ba-handle" style={{ left: `calc(${pos}% - 1.5px)` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 z-10">
          <ChevronLeft size={14} className="text-ink-950" />
          <ChevronRight size={14} className="text-ink-950" />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const { t } = useAppContext();
  const [idx, setIdx] = useState(0);
  const cur = slides[idx];

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="transformations" className="relative py-24 sm:py-32 bg-ink-50 dark:bg-ink-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="deco-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">{t("slider.eyebrow")}</span>
            <div className="deco-line" style={{ transform: "scaleX(-1)" }} />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-white leading-[1.05]">
            {t("slider.title")}
          </h2>
          <p className="mt-5 text-ink-600 dark:text-ink-300 text-lg">
            {t("slider.subtitle")}
          </p>
        </div>

        <div className="mt-14 reveal">
          <BeforeAfterSlider before={cur.before} after={cur.after} />
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-serif text-2xl text-ink-900 dark:text-white">{cur.title}</div>
              <div className="text-sm text-ink-500 mt-1">{cur.location}</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)}
                className="w-11 h-11 rounded-full border border-ink-300 dark:border-ink-600 hover:border-gold-400 hover:text-gold-500 flex items-center justify-center transition"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold-400" : "w-1.5 bg-ink-300 dark:bg-ink-700"}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIdx((i) => (i + 1) % slides.length)}
                className="w-11 h-11 rounded-full border border-ink-300 dark:border-ink-600 hover:border-gold-400 hover:text-gold-500 flex items-center justify-center transition"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
