"use client";

import { useState, FormEvent } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400";
const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

export default function ContactPage() {
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
        "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=hookliftinsurance.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ formName: "contact", ...data }),
        }
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly at 844-967-5247.");
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
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600">
            Questions about coverage, a policy change, or need a certificate fast? We&apos;re here.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Contractors Choice Agency</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5 font-medium uppercase tracking-wide">Phone</p>
                      <a href="tel:844-967-5247" className="text-slate-900 font-semibold hover:text-blue-600 transition-colors">
                        844-967-5247
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">Mon–Fri 8am–6pm MST</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5 font-medium uppercase tracking-wide">Email</p>
                      <a href="mailto:josh@contractorschoiceagency.com" className="text-slate-900 font-semibold hover:text-blue-600 transition-colors break-all">
                        josh@contractorschoiceagency.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5 font-medium uppercase tracking-wide">Address</p>
                      <address className="text-slate-900 not-italic leading-relaxed">
                        12220 E Riggs Road Suite #105<br />
                        Chandler, AZ 85249
                      </address>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <p className="font-semibold mb-1">Need a certificate fast?</p>
                <p className="text-blue-100 text-sm">
                  Call us directly at{" "}
                  <a href="tel:844-967-5247" className="text-white font-bold hover:underline">
                    844-967-5247
                  </a>{" "}
                  for same-day certificate of insurance requests.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 text-sm">
                    Thanks for reaching out. We&apos;ll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="contact"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-5"
                >
                  <h2 className="text-lg font-bold text-slate-900 mb-5">Send a Message</h2>
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />

                  <div>
                    <label className={labelClass}>Name <span className="text-red-500">*</span></label>
                    <input type="text" name="name" required placeholder="Mike Rodriguez" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email <span className="text-red-500">*</span></label>
                    <input type="email" name="email" required placeholder="mike@abchooklift.com" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input type="tel" name="phone" placeholder="(844) 967-5247" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Message <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 cursor-pointer"
                  >
                    {submitting ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
