"use client";

import { Shield, Truck, Users, Package, Box, Construction } from "lucide-react";

const coverages = [
  {
    icon: Shield,
    title: "General Liability",
    description:
      "Protect your business from third-party claims for bodily injury, property damage, and advertising injury. Essential coverage for any contractor operating heavy equipment.",
  },
  {
    icon: Truck,
    title: "Commercial Auto Insurance",
    description:
      "Coverage for your hooklift trucks, roll-off trucks, and crane trucks — including physical damage, liability, and medical payments for your drivers.",
  },
  {
    icon: Users,
    title: "Workers Compensation",
    description:
      "Protect your employees and your business. Covers medical costs, lost wages, and rehabilitation if a worker is injured on the job — required in most states.",
  },
  {
    icon: Package,
    title: "Inland Marine / Equipment",
    description:
      "Coverage for your heavy equipment, tools, and machinery whether they're on your truck, at a job site, or in transit between locations.",
  },
  {
    icon: Box,
    title: "Roll-Off Container Coverage",
    description:
      "Specialized coverage for roll-off containers and dumpsters — including damage to containers, liability for contents, and environmental exposure.",
  },
  {
    icon: Construction,
    title: "Crane & Rigging Coverage",
    description:
      "Tailored coverage for crane trucks and rigging operations, including equipment breakdown, operator liability, and load-specific coverage for heavy lifts.",
  },
];

export function CoverageGrid() {
  return (
    <section id="coverage" className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Coverage Options
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything Your Fleet Needs — in One Place
          </h2>
          <p className="text-slate-600 text-lg">
            We specialize in the niche coverages that national carriers won't touch. Hooklift
            insurance, roll-off coverage, crane truck policies — we know these risks inside and out.
          </p>
        </div>

        {/* Coverage Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverages.map((coverage) => (
            <div
              key={coverage.title}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <coverage.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{coverage.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{coverage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
