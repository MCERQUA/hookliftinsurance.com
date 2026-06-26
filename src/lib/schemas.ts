export const SITE_URL = "https://www.hookliftinsurance.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hooklift Insurance",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  description:
    "Specialized insurance for contractors operating hooklift trucks, roll-off trucks, and crane trucks. Provided by Contractors Choice Agency, licensed in all 50 states.",
  telephone: "+18449675247",
  parentOrganization: {
    "@type": "Organization",
    name: "Contractors Choice Agency",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+18449675247",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
};

export const insuranceAgencySchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Hooklift Insurance — Contractors Choice Agency",
  url: SITE_URL,
  image: `${SITE_URL}/og/default.png`,
  telephone: "+18449675247",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12220 E Riggs Road, Suite #105",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85249",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.2672,
    longitude: -111.8131,
  },
  areaServed: { "@type": "Country", name: "United States" },
  founder: {
    "@type": "Person",
    name: "Josh Cotner",
    jobTitle: "Founder & Commercial Insurance Specialist",
  },
  employee: {
    "@type": "Person",
    name: "Josh Cotner",
    jobTitle: "Founder & Commercial Insurance Specialist",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Heavy Truck Contractor Insurance Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Liability Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Auto Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workers Compensation Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inland Marine / Equipment Insurance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roll-Off Container Coverage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crane & Rigging Coverage" } },
    ],
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is hooklift insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hooklift insurance is a specialized commercial insurance product designed for businesses that operate hooklift trucks. It typically combines commercial auto liability, physical damage, and can include equipment coverage, inland marine, and general liability — all tailored to the unique risks of hooklift operations, including loading and unloading heavy containers.",
      },
    },
    {
      "@type": "Question",
      name: "What does hooklift and roll-off truck insurance cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coverage varies by policy, but typically includes: commercial auto liability (required by law in most states), physical damage for your trucks, general liability for your operations, workers compensation for your drivers, and optional coverages like inland marine for tools and equipment, roll-off container coverage, and crane/rigging liability.",
      },
    },
    {
      "@type": "Question",
      name: "How much does hooklift insurance cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs vary based on fleet size, driving records, claims history, coverage limits, and the states you operate in. For a single hooklift truck with standard coverages, annual premiums typically start around $2,500–$4,000 per truck. For a fleet of 5+ trucks, the per-unit cost usually drops significantly.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need special coverage for roll-off containers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most cases. Standard commercial auto policies often have limited or no coverage for the containers being transported and deposited at job sites. Roll-off container coverage specifically covers damage to your containers, liability for the contents, and environmental exposure.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I get a certificate of insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once you bind a policy, we can email your certificate of insurance (COI) within the same business day — often within a few hours. Call 844-967-5247 to prioritize your request.",
      },
    },
  ],
};
