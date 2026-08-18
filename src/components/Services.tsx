import {
  Home,
  Building2,
  Sofa,
  Layers3,
  Briefcase,
  HardHat,
  ArrowUpRight,
} from "lucide-react";
import { useAppContext } from "../App";

const services = [
  { key: "s1", icon: Home, img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=80&auto=format&fit=crop" },
  { key: "s2", icon: Building2, img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=80&auto=format&fit=crop" },
  { key: "s3", icon: Sofa, img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80&auto=format&fit=crop" },
  { key: "s4", icon: Layers3, img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&auto=format&fit=crop" },
  { key: "s5", icon: Briefcase, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop" },
  { key: "s6", icon: HardHat, img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80&auto=format&fit=crop" },
];

export default function Services() {
  const { t } = useAppContext();
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-ink-50 dark:bg-ink-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-400/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="deco-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
              {t("services.eyebrow")}
            </span>
            <div className="deco-line" style={{ transform: "scaleX(-1)" }} />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-ink-900 dark:text-white">
            {t("services.title")}
          </h2>
          <p className="mt-5 text-ink-600 dark:text-ink-300 text-lg leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.key}
              className="reveal luxury-card group relative bg-white dark:bg-ink-950 rounded-2xl overflow-hidden border border-ink-100/60 dark:border-ink-700/40 hover:border-gold-400/60 shadow-sm hover:shadow-2xl hover:shadow-gold-400/15 transition-all"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Image header */}
              <div className="relative aspect-[16/10] overflow-hidden img-zoom">
                <img
                  src={s.img}
                  alt={t(`services.${s.key}.title`)}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl glass-light dark:glass backdrop-blur-md flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold-300 group-hover:to-gold-500 transition">
                  <s.icon className="text-gold-500 group-hover:text-ink-950 transition" size={20} />
                </div>
                <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.3em] text-gold-300 font-semibold">
                  0{i + 1}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-2xl font-semibold text-ink-900 dark:text-white group-hover:text-gold-500 transition">
                  {t(`services.${s.key}.title`)}
                </h3>
                <p className="mt-3 text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {t(`services.${s.key}.desc`)}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-500 group-hover:gap-2.5 transition-all"
                  >
                    Learn more
                    <ArrowUpRight size={16} />
                  </a>
                  <div className="h-px flex-1 ml-4 bg-gradient-to-r from-gold-400/40 to-transparent" />
                </div>
              </div>

              <div className="absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
