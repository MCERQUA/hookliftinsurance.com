"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is hooklift insurance?",
    answer:
      "Hooklift insurance is a specialized commercial insurance product designed for businesses that operate hooklift trucks. It typically combines commercial auto liability, physical damage, and can include equipment coverage, inland marine, and general liability — all tailored to the unique risks of hooklift operations, including loading and unloading heavy containers.",
  },
  {
    question: "What does hooklift and roll-off truck insurance cover?",
    answer:
      "Coverage varies by policy, but typically includes: commercial auto liability (required by law in most states), physical damage for your trucks, general liability for your operations, workers compensation for your drivers, and optional coverages like inland marine for tools and equipment, roll-off container coverage, and crane/rigging liability. We'll walk you through exactly what's covered before you bind.",
  },
  {
    question: "How much does hooklift insurance cost?",
    answer:
      "Costs vary based on your fleet size, driving records, claims history, coverage limits, and the states you operate in. For a single hooklift truck with standard coverages, annual premiums typically start around $2,500–$4,000 per truck. For a fleet of 5+ trucks, the per-unit cost usually drops significantly. The best way to know your rate is to get a 15-minute quote — we'll shop multiple carriers and show you the best options.",
  },
  {
    question: "Do I need special coverage for roll-off containers?",
    answer:
      "Yes, in most cases. Standard commercial auto policies often have limited or no coverage for the containers being transported and deposited at job sites. Roll-off container coverage specifically covers damage to your containers (from loading, unloading, or transport), liability for the contents of the container, and environmental exposure if something goes wrong. We can add this as an endorsement or as a separate policy depending on your carrier.",
  },
  {
    question: "How fast can I get a certificate of insurance?",
    answer:
      "Fast. Once you bind a policy, we can email your certificate of insurance (COI) within the same business day — often within a few hours. If you're in a hurry and need a quote fast, call us directly at 844-967-5247 and we'll prioritize your request. Most customers are bound and holding their COI the same day they call.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Common Questions About Hooklift Insurance
            </h2>
            <p className="text-slate-600 text-lg">
              Answers to the questions we hear most from hooklift, roll-off, and crane truck
              operators.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 bg-white hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-sm font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4 bg-white">
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="text-center mt-8 p-6 bg-blue-50 rounded-xl">
            <p className="text-sm text-slate-600 mb-3">
              Still have questions? Talk to a specialist who knows hooklift coverage.
            </p>
            <a
              href="tel:844-967-5247"
              className="text-blue-600 font-semibold text-sm hover:text-blue-700"
            >
              Call 844-967-5247
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
