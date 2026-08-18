import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";
import type { SVGProps } from "react";
import { useAppContext, COMPANY } from "../App";

type IconProps = { size?: number } & SVGProps<SVGSVGElement>;

function makeIcon(children: React.ReactNode) {
  return function Icon({ size = 16, ...rest }: IconProps) {
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

export default function Contact() {
  const { t } = useAppContext();
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="deco-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">{t("contact.eyebrow")}</span>
            <div className="deco-line" style={{ transform: "scaleX(-1)" }} />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-white leading-[1.05]">
            {t("contact.title")}
          </h2>
          <p className="mt-5 text-ink-600 dark:text-ink-300 text-lg">{t("contact.subtitle")}</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Info cards */}
          <div className="lg:col-span-5 space-y-4 reveal">
            {[
              {
                icon: MapPin,
                title: t("contact.address"),
                lines: [COMPANY.address, "Punjab, India"],
                link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.name + " " + COMPANY.address)}`,
                linkLabel: t("contact.directions"),
              },
              {
                icon: Phone,
                title: t("contact.phone"),
                lines: [COMPANY.phone, "Mon – Sat, 10 AM – 7 PM"],
                link: `tel:${COMPANY.phoneClean}`,
                linkLabel: t("contact.call"),
              },
              {
                icon: Mail,
                title: t("contact.email"),
                lines: [COMPANY.email, "Quick reply within 24 hrs"],
                link: `mailto:${COMPANY.email}`,
                linkLabel: "Send Email",
              },
              {
                icon: Clock,
                title: t("contact.hours"),
                lines: ["Mon – Sat", "10:00 AM – 7:00 PM"],
                link: `https://wa.me/${COMPANY.whatsapp}`,
                linkLabel: t("contact.whatsapp"),
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-ink-900 border border-ink-100/60 dark:border-ink-700/40 hover:border-gold-400/60 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center shrink-0 shadow-lg shadow-gold-400/30">
                    <c.icon className="text-ink-950" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-semibold">{c.title}</div>
                    <div className="mt-1.5 text-base font-medium text-ink-900 dark:text-white">
                      {c.lines.map((l, i) => (
                        <div key={i} className="leading-snug">{l}</div>
                      ))}
                    </div>
                    <a
                      href={c.link}
                      target={c.link.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-500 group-hover:gap-2.5 transition-all"
                    >
                      {c.linkLabel} <Navigation size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-11 h-11 rounded-full border border-ink-200 dark:border-ink-700 hover:border-gold-400 hover:text-gold-500 flex items-center justify-center transition"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Map + CTA */}
          <div className="lg:col-span-7 space-y-4 reveal">
            <div className="relative rounded-2xl overflow-hidden border border-ink-100/60 dark:border-ink-700/40 shadow-xl aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
              <iframe
                title="Kuldeep Architect Location"
                src="https://www.google.com/maps?q=Hariana,+Punjab+144208&output=embed"
                className="w-full h-full"
                style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-ink-950/85 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-semibold border border-gold-400/30">
                <MapPin size={10} className="inline mr-1 text-gold-400" />
                Studio · Hariana
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="btn-gold shine inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-sm font-semibold"
              >
                <Phone size={16} />
                {t("contact.call")} · {COMPANY.phone}
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition"
              >
                <MessageCircle size={16} />
                {t("contact.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
