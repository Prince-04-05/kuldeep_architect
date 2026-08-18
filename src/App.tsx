import { useEffect, useState, useCallback, createContext, useContext } from "react";
import { Lang, t } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import BeforeAfter from "./components/BeforeAfter";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Inquiry from "./components/Inquiry";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Floating from "./components/Floating";

export const COMPANY = {
  name: "Kuldeep Architect",
  phone: "098140 28383",
  phoneClean: "+919814028383",
  address: "Hariana, Punjab 144208",
  email: "studio@kuldeeparchitect.in",
  rating: 4.8,
  years: 15,
  projects: 100,
  whatsapp: "919814028383",
};

type AppContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  dark: boolean;
  setDark: (d: boolean) => void;
  t: (k: string) => string;
};

const AppContext = createContext<AppContextType | null>(null);

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within App");
  return ctx;
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("ka-lang");
    return (saved as Lang) || "en";
  });
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("ka-theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("ka-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("ka-theme", dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang, dark]);

  const tr = useCallback((k: string) => t(lang, k), [lang]);

  return (
    <AppContext.Provider value={{ lang, setLang, dark, setDark, t: tr }}>
      <div className="min-h-screen bg-white text-ink-900 dark:bg-ink-950 dark:text-ink-50 transition-colors duration-500">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <BeforeAfter />
          <WhyChooseUs />
          <Testimonials />
          <Inquiry />
          <Contact />
        </main>
        <Footer />
        <Floating />
      </div>
    </AppContext.Provider>
  );
}
