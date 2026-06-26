"use client";

import { Phone, ShoppingCart, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Get Your Free Quote",
    description:
      "Fill out our 2-minute form or call 844-967-5247 directly. Tell us about your trucks, your operation, and your current coverage. No commitment, no pressure.",
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "We Shop the Market",
    description:
      "We contact multiple A-rated carriers simultaneously — the ones who actually write hooklift and roll-off policies. You get the best coverage at the most competitive price.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Get Covered — Same Day",
    description:
      "Review your options, pick the best fit, and bind your policy. We can have your certificate of insurance in your inbox within hours — often the same day you call.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Three Steps to Better Coverage
          </h2>
          <p className="text-slate-600 text-lg">
            We built our process around speed and simplicity. Most customers are bound and covered the
            same day they reach out.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-px bg-slate-200 z-0" />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-sm font-bold text-blue-600 mb-2 tracking-widest">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA below steps */}
        <div className="text-center mt-14">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
