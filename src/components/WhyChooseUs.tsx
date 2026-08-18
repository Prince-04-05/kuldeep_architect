import { Award, CheckCircle2, Heart, Sparkles, Tag, Clock, ShieldCheck, Users } from "lucide-react";
import { useAppContext } from "../App";

const items = [
  { key: "1", icon: Clock, color: "from-amber-300 to-amber-600" },
  { key: "2", icon: Award, color: "from-yellow-300 to-yellow-600" },
  { key: "3", icon: Heart, color: "from-rose-300 to-rose-500" },
  { key: "4", icon: Sparkles, color: "from-gold-300 to-gold-500" },
  { key: "5", icon: Tag, color: "from-emerald-300 to-emerald-500" },
];

const trust = [
  { icon: ShieldCheck, label: "Verified Studio" },
  { icon: CheckCircle2, label: "Quality Assured" },
  { icon: Users, label: "500+ Families" },
];

export default function WhyChooseUs() {
  const { t } = useAppContext();
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-luxury">
      <div className="absolute inset-0 -z-10 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.18) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.12) 0%, transparent 30%)"
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="deco-line" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">{t("why.eyebrow")}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-ink-900 dark:text-white">
              {t("why.title")}
            </h2>
            <p className="mt-5 text-ink-600 dark:text-ink-300 text-lg leading-relaxed">
              {t("why.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {trust.map((tr) => (
                <div key={tr.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light dark:glass border border-ink-100/60 dark:border-ink-700/40">
                  <tr.icon className="text-gold-500" size={14} />
                  <span className="text-xs font-semibold text-ink-700 dark:text-ink-200 uppercase tracking-wider">{tr.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => (
              <div
                key={it.key}
                className={`reveal luxury-card group relative rounded-2xl p-6 sm:p-7 bg-white/80 dark:bg-ink-800/60 backdrop-blur-xl border border-ink-100/60 dark:border-ink-700/40 hover:border-gold-400/60 shadow-sm hover:shadow-2xl hover:shadow-gold-400/20 transition-all ${i === 0 ? "sm:col-span-2" : ""}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`absolute -top-3 -right-3 w-20 h-20 rounded-2xl bg-gradient-to-br ${it.color} opacity-10 group-hover:opacity-30 blur-xl transition`} />
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${it.color} flex items-center justify-center shadow-lg`}>
                  <it.icon className="text-ink-950" size={22} />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-ink-900 dark:text-white group-hover:text-gold-500 transition">
                  {t(`why.${it.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {t(`why.${it.key}.desc`)}
                </p>
                {i === 0 && (
                  <div className="absolute bottom-4 right-4 text-6xl font-serif font-bold text-gold-400/10 select-none">01</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
