"use client";

import { useState, FormEvent } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CheckCircle, Truck, Phone } from "lucide-react";

const STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400";
const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => { data[k] = v.toString(); });

    try {
      await fetch(
        "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=hookliftinsurance",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ formName: "quote", ...data }),
        }
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at 844-967-5247.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Free Quote
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Get a Hooklift Insurance Quote
          </h1>
          <p className="text-lg text-slate-600">
            Fill out the form below and a specialist from Contractors Choice Agency will
            contact you within one business day with a custom quote.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-10 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Quote Request Received!</h2>
              <p className="text-slate-600 mb-6">
                Thank you! A specialist will contact you within one business day with your
                custom hooklift insurance quote.
              </p>
              <p className="text-sm text-slate-500 mb-6">
                Need to reach us sooner?{" "}
                <a href="tel:844-967-5247" className="text-blue-600 font-semibold hover:text-blue-700">
                  Call 844-967-5247
                </a>
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </a>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
              {/* Trust bar */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-blue-50 rounded-lg">
                <Truck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-sm text-slate-700">
                  <strong className="text-blue-700">Specialty truck insurance experts.</strong>{" "}
                  We&apos;ll match you with the right carrier for your operation — same day.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                name="quote"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="quote" />
                <input type="hidden" name="bot-field" />

                {/* Contact info */}
                <div>
                  <h2 className="text-base font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                    Your Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First Name <span className="text-red-500">*</span></label>
                      <input type="text" name="firstName" required placeholder="Mike" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name <span className="text-red-500">*</span></label>
                      <input type="text" name="lastName" required placeholder="Rodriguez" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Business Name <span className="text-red-500">*</span></label>
                      <input type="text" name="businessName" required placeholder="ABC Hooklift Services LLC" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>State <span className="text-red-500">*</span></label>
                      <select name="state" required className={inputClass}>
                        <option value="">Select state</option>
                        {STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Email <span className="text-red-500">*</span></label>
                      <input type="email" name="email" required placeholder="mike@abchooklift.com" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" required placeholder="(844) 967-5247" className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Fleet info */}
                <div>
                  <h2 className="text-base font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                    Fleet Details
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Primary Truck Type <span className="text-red-500">*</span></label>
                      <select name="truckType" required className={inputClass}>
                        <option value="">Select type</option>
                        <option value="Hooklift">Hooklift</option>
                        <option value="Roll-Off">Roll-Off</option>
                        <option value="Crane Truck">Crane Truck</option>
                        <option value="Combo Unit">Combo Unit</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Number of Trucks <span className="text-red-500">*</span></label>
                      <select name="numberOfTrucks" required className={inputClass}>
                        <option value="">Select range</option>
                        <option value="1">1</option>
                        <option value="2-5">2–5</option>
                        <option value="6-10">6–10</option>
                        <option value="11-25">11–25</option>
                        <option value="25+">25+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Equipment + business identity */}
                <div>
                  <h2 className="text-base font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                    Equipment &amp; Business Details
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Street Address <span className="text-red-500">*</span></label>
                    <input type="text" name="streetAddress" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>FEIN (Federal Tax ID) <span className="text-red-500">*</span></label>
                    <input type="text" name="fein" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Equipment Year <span className="text-red-500">*</span></label>
                    <input type="number" name="equipmentYear" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Equipment Make <span className="text-red-500">*</span></label>
                    <input type="text" name="equipmentMake" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Equipment Model <span className="text-red-500">*</span></label>
                    <input type="text" name="equipmentModel" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Equipment Serial Number <span className="text-red-500">*</span></label>
                    <input type="text" name="equipmentSerialNumber" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Equipment Value ($) <span className="text-red-500">*</span></label>
                    <input type="text" name="equipmentValue" required className={inputClass} />
                  </div>
                  </div>
                </div>

                {/* Additional info */}
                <div>
                  <label className={labelClass}>Additional Information</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your operation — states you work in, cargo types, coverage history, anything that helps us find you the best rate."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 cursor-pointer"
                  >
                    {submitting ? "Submitting…" : "Request My Free Quote"}
                  </button>
                  <p className="text-xs text-slate-500 mt-3">
                    No obligation. A specialist will follow up within one business day.
                  </p>
                </div>
              </form>

              <div className="mt-8 text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-sm text-slate-600 mb-2">Prefer to talk? Call us directly:</p>
                <a href="tel:844-967-5247" className="flex items-center justify-center gap-2 text-xl font-bold text-blue-600 hover:text-blue-700">
                  <Phone className="w-5 h-5" />
                  844-967-5247
                </a>
                <p className="text-xs text-slate-500 mt-1">Mon–Fri 8am–6pm MST</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
