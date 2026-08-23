export type Product = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  features: string[];
  idealFor: string;
};

export const products: Product[] = [
  {
    slug: "c-section-abdominal-belt",
    name: "C-Section Abdominal Belt",
    tagline: "Comfortable Abdominal Support for Post-C-Section Use",
    intro:
      "Our C-Section Abdominal Belt is designed to provide comfortable support around the abdominal area after C-section surgery.",
    features: [
      "Comfortable support",
      "Adjustable fit",
      "Easy to wear",
      "Durable construction",
      "Suitable for bulk supply",
    ],
    idealFor:
      "Hospitals, maternity clinics, pharmacies, medical stores, and healthcare distributors.",
  },
  {
    slug: "lumbar-support-belt",
    name: "Lumbar Support Belt",
    tagline: "Reliable Support for the Lower Back",
    intro:
      "Our Lumbar Support Belt is designed to provide comfortable support around the lower back and waist. Its adjustable design helps provide a secure and comfortable fit.",
    features: [
      "Lower back support",
      "Adjustable fit",
      "Comfortable construction",
      "Easy to wear",
      "Durable design",
      "Suitable for bulk supply",
    ],
    idealFor:
      "Hospitals, clinics, pharmacies, medical equipment shops, and healthcare distributors.",
  },
];
