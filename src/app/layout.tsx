import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_EMAIL, SITE_PHONE, OG_IMAGE } from "@/lib/seo";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Arshi MediTex | Medical Textile & Support Products Manufacturer",
  description:
    "Arshi MediTex is a medical textile manufacturer and supplier based in Rajshahi, Bangladesh, producing medical support belts in bulk for hospitals, clinics, pharmacies, distributors, and international buyers.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1448, height: 1086, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: OG_IMAGE,
      description:
        "Manufacturer and bulk supplier of medical textile support products, based in Rajshahi, Bangladesh, serving hospitals, clinics, pharmacies, distributors, and international buyers.",
      email: SITE_EMAIL,
      telephone: SITE_PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sopura, BSCIC",
        addressLocality: "Rajshahi",
        addressCountry: "BD",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "Arshi Group",
      },
      areaServed: [{ "@type": "Country", name: "Bangladesh" }, "Worldwide"],
      contactPoint: {
        "@type": "ContactPoint",
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
        contactType: "sales",
        areaServed: [{ "@type": "Country", name: "Bangladesh" }, "Worldwide"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={siteJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
