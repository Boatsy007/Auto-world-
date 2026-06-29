import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const SITE_URL = "https://autoworlddetailing.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Auto World Detailing | Premium Car Detailing Gold Coast",
    template: "%s | Auto World Detailing",
  },
  description:
    "Gold Coast's premier automotive detailing studio. Ceramic coating, paint protection film, paint correction, and full detailing services in Upper Coomera & Northern Gold Coast.",
  keywords: [
    "car detailing Gold Coast",
    "ceramic coating Gold Coast",
    "paint protection film Gold Coast",
    "paint correction Gold Coast",
    "car detailing Upper Coomera",
    "car detailing Coomera",
    "car detailing Helensvale",
    "PPF Gold Coast",
    "cut and polish Gold Coast",
    "Auto World Detailing",
  ],
  authors: [{ name: "Auto World Detailing" }],
  creator: "Auto World Detailing",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "Auto World Detailing",
    title: "Auto World Detailing | Premium Car Detailing Gold Coast",
    description:
      "Gold Coast's premier automotive detailing studio. Ceramic coating, PPF, paint correction & full detailing in Upper Coomera.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Auto World Detailing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto World Detailing | Premium Car Detailing Gold Coast",
    description: "Gold Coast's premier automotive detailing studio.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Auto World Detailing",
  description:
    "Premium automotive detailing studio on the Gold Coast specialising in ceramic coating, paint protection film, paint correction, and full vehicle detailing.",
  url: SITE_URL,
  telephone: "+61468336447",
  email: "info@autoworlddetailing.com.au",
  image: `${SITE_URL}/logo.png`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Upper Coomera",
    addressRegion: "QLD",
    postalCode: "4209",
    addressCountry: "AU",
  },
  geo: { "@type": "GeoCoordinates", latitude: -27.8833, longitude: 153.3167 },
  areaServed: ["Upper Coomera", "Coomera", "Helensvale", "Hope Island", "Oxenford", "Pimpama", "Gold Coast"],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "14:00" },
  ],
  sameAs: ["https://www.instagram.com/autoworlddetailing","https://www.facebook.com/autoworlddetailing"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "54", bestRating: "5" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
