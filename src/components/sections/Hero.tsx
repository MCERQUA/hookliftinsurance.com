"use client";

import { Phone, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4" />
            Specialized Coverage for Hooklift & Roll-Off Operations
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Hooklift Insurance Built for{" "}
            <span className="text-blue-600">Heavy Truck Contractors</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
            Protecting hooklift trucks, roll-off trucks, crane trucks, and related heavy equipment
            across all 50 states. From single trucks to large fleets — we find the right coverage at
            the right price, usually in under 15 minutes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-lg text-base transition-colors shadow-sm"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:844-967-5247"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-semibold px-6 py-4 rounded-lg text-base border border-slate-200 transition-colors"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              Call 844-967-5247
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Licensed in All 50 States
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              15-Minute Quotes
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              2-Hour Claims Response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
