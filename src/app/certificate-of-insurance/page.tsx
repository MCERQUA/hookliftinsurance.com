import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { COIForm } from "@/components/sections/COIForm";

export const metadata: Metadata = {
  title: "Certificate of Insurance Request — Hooklift Insurance",
  description:
    "Request a certificate of insurance for your hooklift, roll-off, or crane truck policy. Fast turnaround from Contractors Choice Agency. Licensed in all 50 states.",
};

export default function COIPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Certificate of Insurance
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Request Your Certificate
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Need a certificate of insurance for a contract, job site, or client? Fill out the form below
            and we will have your COI ready the same business day — usually within an hour.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <COIForm />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Same-Day Turnaround</h3>
              <p className="text-sm text-slate-600">Most certificate requests are fulfilled within 1 hour during business hours.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">All Coverage Types</h3>
              <p className="text-sm text-slate-600">GL, WC, Commercial Auto, Inland Marine, and umbrella certificates available.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Email Delivery</h3>
              <p className="text-sm text-slate-600">Certificates are emailed directly to you and your certificate holders.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
