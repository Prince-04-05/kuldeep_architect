import { useState, FormEvent } from "react";
import {
  Send,
  MessageCircle,
  User,
  Phone,
  Mail,
  MapPin,
  Home as HomeIcon,
  Wallet,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useAppContext, COMPANY } from "../App";

type FormData = {
  name: string;
  phone: string;
  email: string;
  city: string;
  type: string;
  budget: string;
  message: string;
};

const projectTypes = ["house", "commercial", "interior", "elevation", "consult"];
const budgets = ["b1", "b2", "b3", "b4", "b5"];

export default function Inquiry() {
  const { t } = useAppContext();

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    city: "",
    type: "",
    budget: "",
    message: "",
  });

  const validate = () => {
    const e: Record<string, string> = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      e.name = t("inq.err.name");
    }

    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").slice(-10))) {
      e.phone = t("inq.err.phone");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = t("inq.err.email");
    }

    if (!form.city.trim()) {
      e.city = t("inq.err.city");
    }

    if (!form.type) {
      e.type = t("inq.err.type");
    }

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  // ================================
  // WEB3FORMS EMAIL SUBMISSION
  // ================================
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

       body: JSON.stringify({
  access_key: "8037d7e4-e56f-4e61-b7e6-327aa241bf21",

  subject: "New Project Inquiry - Kuldeep Architect",
  from_name: "Kuldeep Architect Website",

  // IMPORTANT: reply-to user email
  replyto: form.email,

  name: form.name,
  phone: form.phone,
  email: form.email,
  city: form.city,
  project_type: form.type,
  budget: form.budget,
  message: form.message,

  website: "https://kuldeep-architect.vercel.app/",
}),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Inquiry sent successfully:", result);

        setSubmitted(true);
        setErrors({});
      } else {
        console.error("Web3Forms error:", result);

        alert(
          result.message ||
            "Unable to send your inquiry. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      alert(
        "Something went wrong while sending your inquiry. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  // ================================
  // WHATSAPP
  // ================================
  const onWhatsApp = () => {
    const msg = `Hello Kuldeep Architect!%0A%0AI'm interested in your services.%0AName: ${
      form.name || "—"
    }%0APhone: ${form.phone || "—"}%0ACity: ${
      form.city || "—"
    }%0AProject: ${form.type || "—"}`;

    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${msg}`,
      "_blank"
    );
  };

  const resetForm = () => {
    setSubmitted(false);

    setForm({
      name: "",
      phone: "",
      email: "",
      city: "",
      type: "",
      budget: "",
      message: "",
    });

    setErrors({});
  };

  const inputBase =
    "w-full bg-white dark:bg-ink-900 border rounded-xl px-4 py-3.5 text-sm text-ink-900 dark:text-white placeholder-ink-400 dark:placeholder-ink-500 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition";

  return (
    <section
      id="inquiry"
      className="relative py-24 sm:py-32 overflow-hidden bg-ink-50 dark:bg-ink-900"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="absolute -top-32 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT SIDE INFO */}
          <div className="lg:col-span-5 reveal">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="deco-line" />

              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold">
                {t("inq.eyebrow")}
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-ink-900 dark:text-white">
              {t("inq.title")}
            </h2>

            <p className="mt-5 text-ink-600 dark:text-ink-300 text-lg leading-relaxed">
              {t("inq.subtitle")}
            </p>

            <div className="mt-10 space-y-4">
              {[
                {
                  icon: CheckCircle2,
                  t: "Free 30-min consultation",
                },
                {
                  icon: CheckCircle2,
                  t: "Custom design proposal within 7 days",
                },
                {
                  icon: CheckCircle2,
                  t: "Transparent quotation, no hidden costs",
                },
                {
                  icon: CheckCircle2,
                  t: "Dedicated project manager",
                },
              ].map((b) => (
                <div key={b.t} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-400/15 flex items-center justify-center shrink-0">
                    <b.icon className="text-gold-500" size={16} />
                  </div>

                  <span className="text-ink-700 dark:text-ink-200 text-sm">
                    {b.t}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20Kuldeep%20Architect!%20I%27d%20like%20to%20discuss%20my%20project.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition shadow-lg shadow-emerald-500/30 shine"
              >
                <MessageCircle size={16} />
                {t("inq.whatsapp")}
              </a>

              <a
                href={`tel:${COMPANY.phoneClean}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-200 dark:border-ink-700 hover:border-gold-400 hover:text-gold-500 text-sm font-semibold transition"
              >
                <Phone size={16} />
                {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7 reveal">
            <div className="relative">

              <div className="absolute -inset-2 bg-gradient-to-br from-gold-400/20 via-transparent to-gold-500/20 rounded-3xl blur-xl" />

              <form
                onSubmit={onSubmit}
                className="relative rounded-3xl bg-white dark:bg-ink-950 border border-ink-100/60 dark:border-ink-700/40 shadow-2xl shadow-ink-900/5 p-6 sm:p-8"
              >

                {submitted ? (
                  <div className="py-12 text-center">

                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center animate-pulse-gold">
                      <CheckCircle2
                        className="text-ink-950"
                        size={36}
                      />
                    </div>

                    <h3 className="mt-6 font-serif text-2xl text-ink-900 dark:text-white">
                      {t("inq.success")}
                    </h3>

                    <p className="mt-2 text-sm text-ink-500">
                      Our team will reach out within 24 hours.
                    </p>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-6 btn-outline-gold px-5 py-2.5 rounded-full text-sm font-semibold"
                    >
                      Submit another inquiry
                    </button>

                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-gold-500 mb-6">
                      <Sparkles size={16} />

                      <span className="text-xs uppercase tracking-[0.3em] font-semibold">
                        Project Inquiry
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">

                      {/* NAME */}
                      <Field
                        label={t("inq.name")}
                        icon={User}
                        error={errors.name}
                      >
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              name: e.target.value,
                            })
                          }
                          className={inputBase}
                          placeholder="John Doe"
                        />
                      </Field>

                      {/* PHONE */}
                      <Field
                        label={t("inq.phone")}
                        icon={Phone}
                        error={errors.phone}
                      >
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              phone: e.target.value,
                            })
                          }
                          className={inputBase}
                          placeholder="98765 43210"
                          maxLength={14}
                        />
                      </Field>

                      {/* EMAIL */}
                      <Field
                        label={t("inq.email")}
                        icon={Mail}
                        error={errors.email}
                      >
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              email: e.target.value,
                            })
                          }
                          className={inputBase}
                          placeholder="you@example.com"
                        />
                      </Field>

                      {/* CITY */}
                      <Field
                        label={t("inq.city")}
                        icon={MapPin}
                        error={errors.city}
                      >
                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              city: e.target.value,
                            })
                          }
                          className={inputBase}
                          placeholder="Jalandhar"
                        />
                      </Field>

                      {/* PROJECT TYPE */}
                      <Field
                        label={t("inq.type")}
                        icon={HomeIcon}
                        error={errors.type}
                      >
                        <select
                          name="project_type"
                          value={form.type}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              type: e.target.value,
                            })
                          }
                          className={`${inputBase} ${
                            form.type ? "" : "text-ink-400"
                          }`}
                        >
                          <option value="">
                            {t("inq.type")}...
                          </option>

                          {projectTypes.map((p) => (
                            <option
                              key={p}
                              value={p}
                              className="text-ink-900"
                            >
                              {t(`inq.type.${p}`)}
                            </option>
                          ))}
                        </select>
                      </Field>

                      {/* BUDGET */}
                      <Field
                        label={t("inq.budget")}
                        icon={Wallet}
                      >
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              budget: e.target.value,
                            })
                          }
                          className={`${inputBase} ${
                            form.budget ? "" : "text-ink-400"
                          }`}
                        >
                          <option value="">
                            {t("inq.budget.placeholder")}
                          </option>

                          {budgets.map((b) => (
                            <option
                              key={b}
                              value={b}
                              className="text-ink-900"
                            >
                              {t(`inq.budget.${b}`)}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    {/* MESSAGE */}
                    <div className="mt-4">
                      <Field label={t("inq.message")}>
                        <textarea
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              message: e.target.value,
                            })
                          }
                          className={`${inputBase} resize-none`}
                          placeholder="Tell us about your plot size, requirements, timeline..."
                        />
                      </Field>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">

                      <button
                        type="submit"
                        disabled={sending}
                        className={`flex-1 btn-gold shine inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold ${
                          sending
                            ? "opacity-70 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {sending ? (
                          <>
                            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            {t("inq.submit")}
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={onWhatsApp}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition"
                      >
                        <MessageCircle size={16} />
                        WhatsApp
                      </button>

                    </div>

                    <p className="mt-4 text-[11px] text-ink-500 text-center">
                      Your information is private. We respond within 24 hours.
                    </p>
                  </>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ========================================
// FIELD COMPONENT
// ========================================

function Field({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string;
  icon?: any;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">

      <span className="text-xs font-semibold uppercase tracking-wider text-ink-600 dark:text-ink-300 flex items-center gap-1.5 mb-2">
        {Icon && (
          <Icon
            size={12}
            className="text-gold-500"
          />
        )}

        {label}
      </span>

      {children}

      {error && (
        <span className="mt-1 block text-[11px] text-rose-500">
          {error}
        </span>
      )}

    </label>
  );
}