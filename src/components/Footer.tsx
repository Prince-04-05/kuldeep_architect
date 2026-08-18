import { useState } from "react";
import { Mail, MapPin, Phone, Send, ArrowUp } from "lucide-react";
import type { SVGProps } from "react";
import { useAppContext, COMPANY } from "../App";

type IconProps = { size?: number } & SVGProps<SVGSVGElement>;

function makeIcon(children: React.ReactNode) {
  return function Icon({ size = 14, ...rest }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        {children}
      </svg>
    );
  };
}

const Instagram = makeIcon(
  <>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </>
);
const Facebook = makeIcon(
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
);
const Linkedin = makeIcon(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </>
);
const Youtube = makeIcon(
  <>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </>
);

export default function Footer() {
  const { t } = useAppContext();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative bg-ink-950 text-ink-200 overflow-hidden">
      <div
        className="absolute inset-0 -z-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(212,175,55,0.18) 0%, transparent 40%), radial-gradient(circle at 80% 100%, rgba(212,175,55,0.12) 0%, transparent 40%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30">
                <span className="font-serif font-bold text-2xl text-ink-950">K</span>
              </div>
              <div>
                <div className="font-serif font-bold text-xl text-white">Kuldeep</div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold-400">Architect</div>
              </div>
            </a>
            <p className="mt-5 text-sm text-ink-300 leading-relaxed max-w-sm">
              {t("footer.tagline")}
            </p>

            {/* Newsletter */}
            <form onSubmit={submit} className="mt-6 max-w-sm">
              <label className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
                {t("footer.newsletter")}
              </label>
              <div className="mt-2 flex items-center gap-2 p-1.5 rounded-full glass border border-ink-700/50">
                <div className="pl-3 text-gold-400">
                  <Mail size={14} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("footer.newsletter.placeholder")}
                  className="flex-1 bg-transparent text-sm text-white placeholder-ink-400 focus:outline-none py-1.5"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 text-ink-950 text-xs font-semibold hover:shadow-lg hover:shadow-gold-400/40 transition"
                >
                  <Send size={12} className="inline mr-1" />
                  {subscribed ? "✓" : t("footer.newsletter.btn")}
                </button>
              </div>
            </form>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-5">
              {t("footer.quick")}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { k: "nav.home", h: "#home" },
                { k: "nav.about", h: "#about" },
                { k: "nav.services", h: "#services" },
                { k: "nav.projects", h: "#projects" },
                { k: "nav.testimonials", h: "#testimonials" },
                { k: "nav.contact", h: "#contact" },
              ].map((l) => (
                <li key={l.k}>
                  <a href={l.h} className="text-ink-300 hover:text-gold-400 transition link-underline">
                    {t(l.k)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-5">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3 text-sm">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li key={i}>
                  <a href="#services" className="text-ink-300 hover:text-gold-400 transition link-underline">
                    {t(`services.s${i}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-5">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-400 shrink-0 mt-0.5" size={14} />
                <span className="text-ink-300">{COMPANY.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-gold-400 shrink-0 mt-0.5" size={14} />
                <a href={`tel:${COMPANY.phoneClean}`} className="text-ink-300 hover:text-gold-400 transition">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-gold-400 shrink-0 mt-0.5" size={14} />
                <a href={`mailto:${COMPANY.email}`} className="text-ink-300 hover:text-gold-400 transition break-all">
                  {COMPANY.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-ink-700/60 hover:border-gold-400 hover:text-gold-400 flex items-center justify-center transition"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-12 py-6 border-y border-ink-800/60 overflow-hidden">
          <div className="marquee-track gap-12 whitespace-nowrap text-ink-400">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex items-center gap-12 px-6">
                {[
                  "Architecture",
                  "Interior Design",
                  "3D Elevation",
                  "House Planning",
                  "Commercial Spaces",
                  "Construction Consultancy",
                  "Luxury Living",
                  "Award Winning",
                  "Since 2009",
                ].map((w) => (
                  <span key={w + dup} className="flex items-center gap-12 text-2xl sm:text-3xl font-serif italic">
                    <span>{w}</span>
                    <span className="text-gold-400">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-400">
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="text-gold-400 font-semibold">{COMPANY.name}</span>. {t("footer.rights")}
          </div>
          <div className="flex items-center gap-2">
            <span>{t("footer.built")}</span>
            <span className="text-gold-400">✦</span>
          </div>
          <a href="#home" className="inline-flex items-center gap-2 hover:text-gold-400 transition">
            <span>Back to top</span>
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
