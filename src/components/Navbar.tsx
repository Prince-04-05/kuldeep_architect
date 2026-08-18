import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Globe, Phone } from "lucide-react";
import { useAppContext } from "../App";
import { Lang } from "../i18n";

const links: { key: string; href: string }[] = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.testimonials", href: "#testimonials" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { t, lang, setLang, dark, setDark } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => l.href.replace("#", ""));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - 120 <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const langs: { code: Lang; label: string; native: string }[] = [
    { code: "en", label: "English", native: "EN" },
    { code: "hi", label: "Hindi", native: "हि" },
    { code: "pa", label: "Punjabi", native: "ਪੰ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-white/80 dark:bg-ink-950/80 backdrop-blur-xl border-b border-ink-100/50 dark:border-ink-700/40 shadow-lg shadow-ink-900/5"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30 group-hover:shadow-gold-400/50 transition-all">
            <span className="font-serif font-bold text-xl text-ink-950">K</span>
            <span className="absolute -inset-0.5 rounded-xl border border-gold-400/50 opacity-50 group-hover:opacity-100 transition" />
          </div>
          <div className="leading-none">
            <div className="font-serif font-bold text-base sm:text-lg text-ink-900 dark:text-white tracking-tight">
              Kuldeep
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-500 font-medium">
              Architect
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const id = l.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={l.key}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-gold-500"
                    : "text-ink-700 dark:text-ink-200 hover:text-gold-500"
                }`}
              >
                {t(l.key)}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0.5 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-all ${
                    isActive ? "w-6 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-ink-700 dark:text-ink-200 hover:text-gold-500 border border-ink-200 dark:border-ink-700 hover:border-gold-400 transition"
              aria-label="Language"
            >
              <Globe size={14} />
              <span>{langs.find((l) => l.code === lang)?.native}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl overflow-hidden glass-light dark:glass shadow-2xl py-1 animate-fade-up">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onMouseDown={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gold-400/10 ${
                      lang === l.code ? "text-gold-500 font-semibold" : ""
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-xs opacity-60">{l.native}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full text-ink-700 dark:text-ink-200 hover:text-gold-500 border border-ink-200 dark:border-ink-700 hover:border-gold-400 transition"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#inquiry"
            className="hidden md:inline-flex items-center gap-2 btn-gold px-5 py-2.5 rounded-full text-sm shine"
          >
            <Phone size={14} />
            {t("nav.cta")}
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-full text-ink-900 dark:text-white"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 mt-2 glass-light dark:glass rounded-2xl mx-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition ${
                active === l.href.replace("#", "")
                  ? "bg-gold-400/15 text-gold-500"
                  : "hover:bg-ink-100/40 dark:hover:bg-ink-800/40"
              }`}
            >
              {t(l.key)}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-ink-200/40 dark:border-ink-700/40">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex-1 py-2 text-xs rounded-lg font-semibold transition ${
                  lang === l.code
                    ? "bg-gold-400 text-ink-950"
                    : "bg-ink-100/50 dark:bg-ink-800/50"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href="#inquiry"
            onClick={() => setOpen(false)}
            className="block text-center btn-gold px-5 py-3 rounded-xl text-sm font-semibold mt-2"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
