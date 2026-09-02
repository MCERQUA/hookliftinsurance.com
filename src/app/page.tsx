import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { CoverageGrid } from "@/components/sections/CoverageGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/schemas";

export default function HomePage() {
  return (
    <main>
      <JsonLd data={[faqSchema]} />
      <Navbar />
      <Hero />
      <TrustBar />
      <CoverageGrid />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
