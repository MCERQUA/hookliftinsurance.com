"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M10 17h4V5H2v12h3" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M22 17h-4v-5h-2v5h-4V7h8v10h2z" />
                  <circle cx="18" cy="17" r="2" />
                </svg>
              </div>
              <span className="text-white font-bold text-base">
                Hooklift<span className="text-blue-400">Insurance</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Specialized insurance for hooklift trucks, roll-off trucks, crane trucks, and
              related heavy equipment. Licensed in all 50 states.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:844-967-5247"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  844-967-5247
                </a>
              </li>
              <li>
                <a
                  href="mailto:josh@contractorschoiceagency.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  josh@contractorschoiceagency.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                12220 E Riggs Road, Suite #105<br />Chandler, AZ 85249
              </li>
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Coverage</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>General Liability</li>
              <li>Commercial Auto Insurance</li>
              <li>Workers Compensation</li>
              <li>Inland Marine / Equipment</li>
              <li>Roll-Off Container Coverage</li>
              <li>Crane & Rigging Coverage</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <p className="text-sm text-slate-400 mb-3">
              A division of{" "}
              <span className="text-white">Contractors Choice Agency</span>
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Hooklift Insurance | Contractors Choice Agency. All
            rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Licensed in all 50 states &middot; NPN 8608479
          </p>
        </div>
      </div>
    </footer>
  );
}
