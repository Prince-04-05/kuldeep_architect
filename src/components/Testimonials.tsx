import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useAppContext } from "../App";

type Testi = {
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  project: string;
  img: string;
};

const items: Testi[] = [
  {
    name: "Harpreet Singh",
    role: "Homeowner",
    location: "Jalandhar",
    rating: 5,
    project: "The Horizon Villa",
    text: "Kuldeep Architect turned our dream home into a reality. The 3D elevations were so accurate that the final build looked exactly like the renders. Truly premium service and on-time delivery.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Simran Kaur",
    role: "Interior Client",
    location: "Chandigarh",
    rating: 5,
    project: "Atelier Living",
    text: "The interiors are stunning — every corner feels intentional. The team listened to our needs and translated them into a home that feels uniquely ours. Worth every rupee.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Rajiv Malhotra",
    role: "Business Owner",
    location: "Ludhiana",
    rating: 5,
    project: "The Capital Office",
    text: "Our new office has transformed how our team works. Kuldeep understood our brand and built a space that impresses clients the moment they walk in. Highly recommended for commercial work.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Anita Sharma",
    role: "Homeowner",
    location: "Amritsar",
    rating: 4,
    project: "Serenity Greens",
    text: "Beautiful farmhouse design that respects our cultural roots while being thoroughly modern. The construction consultancy saved us lakhs in cost overruns. Professional, transparent team.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
  },
  {
    name: "Manish Verma",
    role: "Real Estate Developer",
    location: "Mohali",
    rating: 5,
    project: "Aurum Heights (Elevation)",
    text: "We've worked with many architects but Kuldeep's elevation work is in a different league. Their 3D visualization sold our entire project before we even broke ground. Outstanding team.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const { t } = useAppContext();
  const [idx, setIdx] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 640) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="deco-line" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">{t("testi.eyebrow")}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-ink-900 dark:text-white">
              {t("testi.title")}
            </h2>
            <p className="mt-4 text-ink-600 dark:text-ink-300 text-lg">{t("testi.subtitle")}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
              className="w-11 h-11 rounded-full border border-ink-300 dark:border-ink-600 hover:border-gold-400 hover:text-gold-500 flex items-center justify-center transition"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setIdx((i) => (i + 1) % items.length)}
              className="w-11 h-11 rounded-full border border-ink-300 dark:border-ink-600 hover:border-gold-400 hover:text-gold-500 flex items-center justify-center transition"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${(idx * 100) / perView}%)` }}
          >
            {items.map((tm, i) => (
              <div
                key={i}
                className="px-3 shrink-0"
                style={{ width: `${100 / perView}%` }}
              >
                <div className="luxury-card relative h-full rounded-2xl p-6 sm:p-7 bg-white dark:bg-ink-800 border border-ink-100/60 dark:border-ink-700/40 hover:border-gold-400/60 shadow-sm hover:shadow-xl transition-all">
                  <Quote className="absolute top-5 right-5 text-gold-400/20" size={48} />
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className={j < tm.rating ? "fill-gold-400 text-gold-400" : "text-ink-300"}
                      />
                    ))}
                  </div>
                  <p className="text-ink-700 dark:text-ink-200 leading-relaxed">"{tm.text}"</p>
                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-ink-100 dark:border-ink-700">
                    <img
                      src={tm.img}
                      alt={tm.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-400/40"
                    />
                    <div>
                      <div className="font-semibold text-ink-900 dark:text-white text-sm">{tm.name}</div>
                      <div className="text-xs text-ink-500">{tm.role} · {tm.location}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-widest text-gold-500 font-semibold">
                    {tm.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: items.length }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold-400" : "w-1.5 bg-ink-300 dark:bg-ink-700"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
