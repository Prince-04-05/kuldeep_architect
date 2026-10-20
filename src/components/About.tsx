import { Award, CheckCircle2, Clock, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { useAppContext, COMPANY } from "../App";

const stats = [
  { v: "15+", l: "Years of Mastery", icon: Clock },
  { v: "100+", l: "Projects Delivered", icon: Award },
  { v: "4.8★", l: "Client Rating", icon: Sparkles },
  { v: "98%", l: "On-time Delivery", icon: TrendingUp },
];

const features = [
  { key: "about.feature1", icon: Award },
  { key: "about.feature2", icon: Clock },
  { key: "about.feature3", icon: ShieldCheck },
  { key: "about.feature4", icon: CheckCircle2 },
];

export default function About() {
  const { t } = useAppContext();
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gold-400/8 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative reveal">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden img-zoom">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80&auto=format&fit=crop"
                alt="Luxury interior designed by Kuldeep Architect"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 glass-light dark:glass rounded-2xl p-5 shadow-2xl max-w-[230px] animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center">
                  <Award className="text-ink-950" size={22} />
                </div>
                <div>
                  <div className="font-serif font-bold text-2xl text-ink-900 dark:text-white">22+</div>
                  <div className="text-xs uppercase tracking-widest text-gold-500 font-medium">Years</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-ink-600 dark:text-ink-300">
                Award-winning design excellence since 2004
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold-400 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold-400 rounded-br-3xl" />
          </div>

          {/* Text side */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="deco-line" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
                {t("about.eyebrow")}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-ink-900 dark:text-white">
              {t("about.title")}
            </h2>
            <div className="mt-2 text-lg sm:text-xl text-gold-500 font-display italic">
              {t("about.subtitle")}
            </div>
            <div className="mt-6 space-y-4 text-ink-600 dark:text-ink-300 leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div
                  key={f.key}
                  className="flex items-center gap-3 p-3 rounded-xl border border-ink-100/60 dark:border-ink-700/40 hover:border-gold-400/60 hover:bg-gold-400/5 transition"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-300/30 to-gold-500/30 flex items-center justify-center shrink-0">
                    <f.icon className="text-gold-500" size={16} />
                  </div>
                  <span className="text-sm font-medium text-ink-800 dark:text-ink-100">
                    {t(f.key)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-outline-gold shine inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                {t("about.cta")}
              </a>
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="inline-flex items-center gap-2 text-ink-700 dark:text-ink-200 hover:text-gold-500 font-medium text-sm"
              >
                <span className="w-9 h-9 rounded-full border border-current flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="luxury-card relative group p-6 sm:p-8 rounded-2xl bg-white dark:bg-ink-900 border border-ink-100/60 dark:border-ink-700/40 hover:border-gold-400/60 shadow-sm hover:shadow-2xl hover:shadow-gold-400/10 transition-all"
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gold-400/8 group-hover:bg-gold-400/15 flex items-center justify-center transition">
                <s.icon className="text-gold-500" size={18} />
              </div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gradient-gold leading-none">
                {s.v}
              </div>
              <div className="mt-3 text-sm text-ink-600 dark:text-ink-300 uppercase tracking-wider font-medium">
                {s.l}
              </div>
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute top-0 left-0 text-6xl font-serif font-bold text-gold-400/5 select-none">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
