"use client";

import { Phone, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="quote" className="bg-blue-600 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Protect Your Fleet?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Get a free hooklift insurance quote in 15 minutes. We compare multiple A-rated carriers to
          find the best coverage at the most competitive price.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:844-967-5247"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-4 rounded-lg hover:bg-blue-50 transition-colors w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            Call 844-967-5247
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold px-6 py-4 rounded-lg hover:bg-blue-800 transition-colors w-full sm:w-auto justify-center border border-blue-500"
          >
            Get a Free Quote Online
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-blue-200 text-xs mt-6">
          No commitment required. Quotes available in as little as 15 minutes.
        </p>
      </div>
    </section>
  );
}
