import { useState, useEffect } from "react";
import { X, ArrowUpRight, MapPin, Calendar, Maximize2, Filter } from "lucide-react";
import { useAppContext } from "../App";

type Category = "all" | "residential" | "commercial" | "interior" | "elevation";

type Project = {
  id: number;
  title: string;
  category: Exclude<Category, "all">;
  location: string;
  year: string;
  area: string;
  img: string;
  h: number;
  desc: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Horizon Villa",
    category: "residential",
    location: "Jalandhar, Punjab",
    year: "2024",
    area: "5,200 sq.ft",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80&auto=format&fit=crop",
    h: 380,
    desc: "A contemporary 4BHK villa with double-height living, infinity pool and a private courtyard designed around Vastu principles.",
  },
  {
    id: 2,
    title: "Aurum Heights",
    category: "elevation",
    location: "Ludhiana, Punjab",
    year: "2024",
    area: "6,500 sq.ft",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&auto=format&fit=crop",
    h: 320,
    desc: "A bold 3-floor elevation blending modern minimalism with classical Jharokha-inspired screens in CNC-cut stone.",
  },
  {
    id: 3,
    title: "Atelier Living",
    category: "interior",
    location: "Chandigarh",
    year: "2023",
    area: "3,400 sq.ft",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80&auto=format&fit=crop",
    h: 420,
    desc: "An industrial-modern interior with brass accents, fluted glass and bespoke Italian marble flooring.",
  },
  {
    id: 4,
    title: "Serenity Greens",
    category: "residential",
    location: "Amritsar, Punjab",
    year: "2024",
    area: "4,800 sq.ft",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80&auto=format&fit=crop",
    h: 360,
    desc: "A farmhouse retreat with wraparound verandahs, exposed brick, and lush native landscaping.",
  },
  {
    id: 5,
    title: "The Capital Office",
    category: "commercial",
    location: "Mohali, Punjab",
    year: "2023",
    area: "12,000 sq.ft",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop",
    h: 320,
    desc: "A Grade-A corporate office with biophilic design, acoustic pods and a striking feature reception.",
  },
  {
    id: 6,
    title: "Lumen Kitchen",
    category: "interior",
    location: "Hariana, Punjab",
    year: "2024",
    area: "380 sq.ft",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop",
    h: 360,
    desc: "A modular kitchen in matte lacquer with quartz countertops, handleless cabinets and brass inlay detail.",
  },
  {
    id: 7,
    title: "Heritage Reborn",
    category: "elevation",
    location: "Patiala, Punjab",
    year: "2023",
    area: "7,200 sq.ft",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80&auto=format&fit=crop",
    h: 400,
    desc: "A heritage façade restoration merging traditional lime plaster with modern lighting and signage.",
  },
  {
    id: 8,
    title: "Maison Boutique",
    category: "commercial",
    location: "Chandigarh",
    year: "2024",
    area: "2,200 sq.ft",
    img: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=900&q=80&auto=format&fit=crop",
    h: 340,
    desc: "A luxury retail boutique with curved glass façade, velvet drapery and custom brass display systems.",
  },
  {
    id: 9,
    title: "Master Suite",
    category: "interior",
    location: "Jalandhar, Punjab",
    year: "2024",
    area: "850 sq.ft",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=80&auto=format&fit=crop",
    h: 380,
    desc: "A master suite with walk-in wardrobe, ambient cove lighting and a private lounge nook.",
  },
];

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "projects.filter.all" },
  { key: "residential", label: "projects.filter.residential" },
  { key: "commercial", label: "projects.filter.commercial" },
  { key: "interior", label: "projects.filter.interior" },
  { key: "elevation", label: "projects.filter.elevation" },
];

export default function Projects() {
  const { t } = useAppContext();
  const [filter, setFilter] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold-400/8 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="deco-line" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
                {t("projects.eyebrow")}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-ink-900 dark:text-white">
              {t("projects.title")}
            </h2>
            <p className="mt-4 text-ink-600 dark:text-ink-300 text-lg leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
            <Filter className="text-gold-500 shrink-0" size={16} />
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition whitespace-nowrap ${
                  filter === c.key
                    ? "bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-ink-950 shadow-lg shadow-gold-500/30"
                    : "bg-ink-100/60 dark:bg-ink-800/60 text-ink-600 dark:text-ink-300 hover:text-gold-500"
                }`}
              >
                {t(c.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry gallery */}
        <div className="mt-12 masonry">
          {filtered.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setLightbox(p)}
              className="reveal group relative w-full text-left rounded-2xl overflow-hidden img-zoom bg-ink-100 dark:bg-ink-800"
              style={{ animationDelay: `${(i % 6) * 70}ms`, height: `${p.h}px` }}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent opacity-80 group-hover:opacity-95 transition" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 rounded-full bg-gold-400/90 text-ink-950 text-[10px] font-semibold uppercase tracking-widest">
                    {t(`projects.filter.${p.category}`)}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition">
                    <Maximize2 size={14} />
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-3 text-xs text-ink-300">
                    <span className="flex items-center gap-1"><MapPin size={12} />{p.location}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar size={12} />{p.year}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] lightbox-backdrop flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-ink-900 rounded-3xl overflow-hidden shadow-2xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-ink-950/80 hover:bg-gold-500 text-white flex items-center justify-center transition"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="grid lg:grid-cols-5 max-h-[90vh] overflow-y-auto">
              <div className="lg:col-span-3 bg-ink-100 dark:bg-ink-950">
                <img src={lightbox.img} alt={lightbox.title} className="w-full h-full object-cover max-h-[60vh] lg:max-h-[90vh]" />
              </div>
              <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col">
                <span className="self-start px-3 py-1 rounded-full bg-gold-400/15 text-gold-500 text-[10px] font-semibold uppercase tracking-widest">
                  {t(`projects.filter.${lightbox.category}`)}
                </span>
                <h3 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white leading-tight">
                  {lightbox.title}
                </h3>
                <p className="mt-4 text-ink-600 dark:text-ink-300 leading-relaxed">
                  {lightbox.desc}
                </p>

                <div className="mt-6 space-y-3 border-y border-ink-100 dark:border-ink-700 py-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-500 uppercase tracking-wider text-xs flex items-center gap-2"><MapPin size={14} className="text-gold-500" />{t("contact.address")}</span>
                    <span className="font-medium text-ink-800 dark:text-ink-100">{lightbox.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-500 uppercase tracking-wider text-xs flex items-center gap-2"><Calendar size={14} className="text-gold-500" />Year</span>
                    <span className="font-medium text-ink-800 dark:text-ink-100">{lightbox.year}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ink-500 uppercase tracking-wider text-xs flex items-center gap-2"><Maximize2 size={14} className="text-gold-500" />Area</span>
                    <span className="font-medium text-ink-800 dark:text-ink-100">{lightbox.area}</span>
                  </div>
                </div>

                <a
                  href="#inquiry"
                  onClick={() => setLightbox(null)}
                  className="mt-auto btn-gold shine inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold"
                >
                  Inquire Similar Project <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
