import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, insuranceAgencySchema } from "@/lib/schemas";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hookliftinsurance.com"),
  title: {
    default: "Hooklift Insurance — Coverage for Hooklift, Roll-Off & Crane Trucks",
    template: "%s | Hooklift Insurance",
  },
  description:
    "Specialized hooklift insurance for contractors running hooklift trucks, roll-off trucks, and crane trucks. Licensed in all 50 states. Get a free 15-minute quote from Contractors Choice Agency.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hookliftinsurance.com",
    siteName: "Hooklift Insurance",
    title: "Hooklift Insurance — Coverage for Hooklift, Roll-Off & Crane Trucks",
    description:
      "Specialized hooklift insurance for contractors running hooklift trucks, roll-off trucks, and crane trucks. Licensed in all 50 states. Get a free 15-minute quote.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Hooklift Insurance — Contractors Choice Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hooklift Insurance — Coverage for Hooklift, Roll-Off & Crane Trucks",
    description:
      "Specialized hooklift insurance for contractors running hooklift trucks, roll-off trucks, and crane trucks. Licensed in all 50 states.",
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <JsonLd data={[organizationSchema, insuranceAgencySchema]} />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
