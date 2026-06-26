import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you requested could not be found. Return to Hooklift Insurance for hooklift, roll-off, and crane truck coverage.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            404
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            The page you were looking for does not exist or has been moved.
            Try one of the links below or call <a href="tel:+18449675247" className="text-blue-600 underline">844-967-5247</a> to speak with a hooklift insurance specialist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/#coverage"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
            >
              Coverage Options
            </Link>
            <Link
              href="/certificate-of-insurance"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
            >
              Request a Certificate
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
