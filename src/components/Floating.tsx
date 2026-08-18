import { useEffect, useState } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { COMPANY } from "../App";

export default function Floating() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200 hover:text-gold-500 hover:border-gold-400 flex items-center justify-center shadow-lg transition-all duration-500 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={16} />
      </button>

      {/* Call */}
      <a
        href={`tel:${COMPANY.phoneClean}`}
        aria-label="Call Now"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 text-ink-950 flex items-center justify-center shadow-xl shadow-gold-400/40 hover:shadow-gold-400/60 hover:scale-105 transition-all shine"
      >
        <Phone size={20} className="sm:size-6" />
        <span className="absolute inset-0 rounded-full animate-ping bg-gold-400/30 opacity-75" />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20Kuldeep%20Architect!%20I%27d%20like%20to%20discuss%20my%20project.`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-105 transition-all shine"
      >
        <MessageCircle size={22} className="sm:size-7" />
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-ink-950 animate-pulse">
          1
        </span>
      </a>
    </div>
  );
}
