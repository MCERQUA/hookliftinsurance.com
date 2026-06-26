"use client";

import { Shield, Clock, Award, Zap } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Licensed in All 50 States",
    description: "Fully licensed to write commercial insurance nationwide.",
  },
  {
    icon: Clock,
    title: "24/7 Claims Reporting",
    description: "File a claim any time — we're always here when you need us.",
  },
  {
    icon: Zap,
    title: "15-Minute Quotes",
    description: "Get a binding quote in 15 minutes or less. No waiting.",
  },
  {
    icon: Award,
    title: "2-Hour Claims Response",
    description: "Guaranteed response within 2 hours. We answer the phone.",
  },
];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
