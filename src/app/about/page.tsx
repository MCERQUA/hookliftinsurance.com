import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Contractors Choice Agency",
  description:
    "Contractors Choice Agency specializes in insurance for hooklift truck operators, roll-off operators, and specialty contractors. Founded by Josh Cotner. Licensed in all 50 states.",
};

const trustPoints = [
  "A-rated insurance carriers — your claims get paid",
  "Licensed in all 50 states",
  "Same-day certificates of insurance",
  "Specialists in specialty truck operations",
  "No middlemen — work directly with an agent who knows your industry",
  "Competitive rates from multiple carriers",
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Contractors Choice Agency
          </h1>
          <p className="text-lg text-slate-600">
            Specialty insurance for hooklift trucks, roll-off trucks, crane trucks, and combo
            unit operators — from people who actually understand your business.
          </p>
        </div>
      </section>

      {/* About body */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Story */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Who We Are</h2>
              <div className="prose prose-slate text-slate-600 space-y-4 text-sm leading-relaxed">
                <p>
                  Contractors Choice Agency was founded by Josh Cotner with a single mission: give
                  specialty contractors access to the same quality insurance coverage that large
                  fleets get — at rates that make sense for small and mid-size operations.
                </p>
                <p>
                  We specialize in hooklift truck operators, roll-off haulers, crane truck
                  operators, and combo unit contractors. This isn&apos;t a side category for us —
                  it&apos;s all we do. That focus means we know which carriers write the best
                  policies for your operation, what coverage gaps to watch for, and how to get
                  your certificate of insurance out the same day you need it.
                </p>
                <p>
                  We are licensed in all 50 states and work with A-rated carriers only. Your
                  claims get paid.
                </p>
              </div>

              {/* Trust list */}
              <ul className="mt-8 space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact card */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5 font-medium uppercase tracking-wide">Phone</p>
                      <a href="tel:844-967-5247" className="text-slate-900 font-semibold hover:text-blue-600 transition-colors">
                        844-967-5247
                      </a>
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

              {/* Founder card */}
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2">Founder</p>
                <h3 className="text-xl font-bold mb-2">Josh Cotner</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Josh founded Contractors Choice Agency after seeing specialty truck operators
                  overpay for coverage that didn&apos;t fit their operations. He personally works
                  with hooklift and roll-off operators across the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to get the right coverage?</h2>
          <p className="text-slate-600 mb-8">
            Get a free quote in minutes. No obligation — just straight answers about your coverage options.
          </p>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
