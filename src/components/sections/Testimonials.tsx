"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "A hooklift truck isn't just a vehicle — it's a loading system, a container handler, and a liability exposure all in one. Our coverage is built around how hooklift operators actually work, not a generic commercial auto form.",
    author: "Josh Cotner",
    title: "Founder",
    location: "Contractors Choice Agency",
    rating: 5,
  },
  {
    quote:
      "Most carriers don't understand the difference between a roll-off truck, a hooklift, and a crane truck. We do. We write coverage for the container being lifted, the load on the boom, and the driver on the road — all under one policy.",
    author: "Josh Cotner",
    title: "Founder",
    location: "Contractors Choice Agency",
    rating: 5,
  },
  {
    quote:
      "We've specialized in contractor insurance since 2005. That means when you call about a hooklift claim, you're talking to someone who knows what a hoist cylinder is and why a dropped container matters.",
    author: "Josh Cotner",
    title: "Founder",
    location: "Contractors Choice Agency",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Why Hooklift Operators Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Specialized Coverage Built by Contractors, for Contractors
          </h2>
          <p className="text-slate-600 text-lg">
            Two decades of contractor-focused insurance experience, applied to the unique risks of
            running hooklift trucks, roll-off trucks, and crane trucks.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-5 flex-1">
                <Quote className="absolute -top-1 -left-1 w-5 h-5 text-blue-100" />
                <p className="text-slate-700 text-sm leading-relaxed pl-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">{t.author}</p>
                <p className="text-xs text-slate-500">
                  {t.title} &middot; {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
