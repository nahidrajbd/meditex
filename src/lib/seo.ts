import type { Metadata } from "next";

export const SITE_URL = "https://arshimeditex.com";
export const SITE_NAME = "Arshi MediTex";
export const SITE_PHONE = "+8801635994664";
export const SITE_PHONE_DISPLAY = "01635994664";
export const SITE_EMAIL = "sales@arshimeditex.com";
export const FACTORY_ADDRESS = "Sopura, BSCIC, Rajshahi, Bangladesh";
export const OG_IMAGE = "/og-image.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: OG_IMAGE, width: 1448, height: 1086, alt: SITE_NAME }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
