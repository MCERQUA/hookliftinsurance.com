import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Shield, Truck, Package, Car, HeartHandshake, Wrench, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hooklift Truck Insurance Coverage Types",
  description:
    "Explore the insurance coverage types available for hooklift truck operators — general liability, commercial auto, motor truck cargo, workers comp, and more. All 50 states.",
};

const coverages = [
  {
    icon: Shield,
    title: "General Liability",
    description:
      "Protects your business against third-party bodily injury and property damage claims that occur during your operations — at job sites, loading areas, and customer properties.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Truck,
    title: "Commercial Auto / Trucking Liability",
    description:
      "Physical damage and liability coverage specifically written for hooklift and roll-off trucks. Includes loading and unloading operations often excluded from standard commercial auto policies.",
    color: "text-slate-700",
    bg: "bg-slate-100",
  },
  {
    icon: Package,
    title: "Motor Truck Cargo",
    description:
      "Covers the contents of containers, dumpsters, and debris boxes you haul for customers. Essential if you transport third-party materials and need protection against damage or loss in transit.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Car,
    title: "Non-Trucking Liability",
    description:
      "Covers your truck during personal use between jobs — when you're not under dispatch. Fills the gap left by trucking liability policies that only cover commercial operations.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: HeartHandshake,
    title: "Workers Compensation",
    description:
      "Required in most states if you have employees. Covers medical expenses and lost wages for drivers or workers injured on the job — from minor injuries to serious truck accidents.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Wrench,
    title: "Tools & Equipment",
    description:
      "Protects your hooklift system, hydraulic components, attachments, and job-site equipment. Inland marine coverage that goes where your trucks go — on-site and in transit.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

export default function CoveragesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Coverage Options
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Hooklift Insurance Coverage Types
          </h1>
          <p className="text-lg text-slate-600">
            We build custom coverage packages for hooklift, roll-off, crane truck, and combo
            unit operators. Here&apos;s what we can put together for your operation.
          </p>
        </div>
      </section>

      {/* Coverage grid */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h2>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mt-auto pt-2">
                    <a
                      href="/quote"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Get a quote <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure which coverages you need?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Our specialists will review your operation and build a policy that covers your actual
            risks — without paying for coverage you don&apos;t need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/quote"
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:844-967-5247"
              className="text-white font-semibold px-8 py-4 rounded-lg border border-blue-400 hover:bg-blue-700 transition-colors"
            >
              Call 844-967-5247
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
