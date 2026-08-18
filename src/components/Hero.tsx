import { useEffect, useState } from "react";
import { ArrowRight, Star, Award, Users, Building2, Play } from "lucide-react";
import { useAppContext, COMPANY } from "../App";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80&auto=format&fit=crop",
];

export default function Hero() {
  const { t } = useAppContext();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 bg-ink-950">
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`hero-slide ${i === idx ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden="true"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/55 to-ink-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,175,55,0.18),transparent_55%)]" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" aria-hidden>
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
      </div>

      {/* Floating gold orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gold-400/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 min-h-screen flex flex-col">
        <div className="flex-1 grid lg:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-8 text-white">
            <div className="reveal in-view inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-gold-400/30 text-xs sm:text-sm mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-300 font-medium tracking-wider uppercase">
                {t("hero.eyebrow")}
              </span>
            </div>

            <h1 className="reveal in-view delay-100 font-serif font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
              <span className="block text-white">{t("hero.title1")}</span>
              <span className="block text-white/90 italic font-light">{t("hero.title2")}</span>
              <span className="block text-gradient-gold font-extrabold">{t("hero.title3")}</span>
            </h1>

            <p className="reveal in-view delay-200 mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-ink-200/90 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="reveal in-view delay-300 mt-8 sm:mt-10 flex flex-wrap gap-4">
              <a
                href="#inquiry"
                className="btn-gold shine inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-semibold"
              >
                {t("hero.cta1")}
                <ArrowRight size={18} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm sm:text-base font-semibold text-white border border-white/25 hover:border-gold-400 hover:bg-white/5 backdrop-blur-md transition"
              >
                <span className="w-9 h-9 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center">
                  <Play size={14} className="text-gold-300 fill-gold-300 ml-0.5" />
                </span>
                {t("hero.cta2")}
              </a>
            </div>

            {/* Stats bar */}
            <div className="reveal in-view delay-400 mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gradient-to-r from-gold-400/20 via-gold-400/10 to-transparent rounded-2xl overflow-hidden border border-gold-400/20 backdrop-blur-sm">
              {[
                { v: "15+", l: t("hero.stat1"), icon: Award },
                { v: "100+", l: t("hero.stat2"), icon: Building2 },
                { v: "500+", l: t("hero.stat3"), icon: Users },
                { v: "4.8★", l: t("hero.stat4"), icon: Star },
              ].map((s) => (
                <div key={s.l} className="bg-ink-950/60 px-4 py-5 text-center">
                  <s.icon className="mx-auto mb-2 text-gold-400" size={18} />
                  <div className="font-serif font-bold text-2xl sm:text-3xl text-white">{s.v}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-ink-300 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="reveal in-view delay-500 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/30 to-transparent rounded-3xl blur-2xl" />
              <div className="relative glass rounded-3xl p-6 border-gold-400/20">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold-300">Studio</div>
                  <div className="flex items-center gap-1 text-gold-300">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={12} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-white mb-1">{COMPANY.name}</h3>
                <p className="text-ink-300 text-sm">Hariana, Punjab 144208</p>

                <div className="mt-6 space-y-3">
                  {[
                    { label: "Projects Completed", val: "100+" },
                    { label: "Years of Mastery", val: "15+" },
                    { label: "On-time Delivery", val: "98%" },
                    { label: "Client Satisfaction", val: "4.8/5" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                      <span className="text-sm text-ink-300">{row.label}</span>
                      <span className="font-serif font-semibold text-gold-300">{row.val}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#inquiry"
                  className="mt-6 block text-center bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-ink-950 font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-gold-400/40 transition"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slider dots */}
        <div className="flex items-center gap-2 mt-8">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="group h-1.5 rounded-full transition-all duration-500 overflow-hidden bg-white/15"
              style={{ width: i === idx ? 56 : 24 }}
              aria-label={`Slide ${i + 1}`}
            >
              <span
                className={`block h-full bg-gradient-to-r from-gold-300 to-gold-500 transition-all duration-500 ${
                  i === idx ? "w-full" : "w-0 group-hover:w-1/2"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-300 text-[10px] tracking-[0.4em] uppercase hidden md:flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold-400 to-transparent" />
      </div>
    </section>
  );
}
