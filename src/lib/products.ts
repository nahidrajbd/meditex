import type { StaticImageData } from "next/image";
import cSectionBelt from "@/assets/c-section-belt.png";
import cSectionBeltWithModel from "@/assets/c-section-belt-with-model.png";
import cSectionBeltWithModel2 from "@/assets/c-section-belt-with-model-2.png";
import cSectionBeltWithModel3 from "@/assets/c-section-belt-with-model-3.png";
import lumbarSupportBelt from "@/assets/lumbar-support-belt.png";
import lumbarSupportBeltWithModel from "@/assets/lumbar-support-belt-with-model.png";
import lumbarSupportBeltWithModel2 from "@/assets/lumbar-support-belt-with-model-2.png";
import lumbarSupportBeltWithModel3 from "@/assets/lumbar-support-belt-with-model-3.png";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  features: string[];
  idealFor: string;
  image: StaticImageData;
  galleryImages: StaticImageData[];
};

export const products: Product[] = [
  {
    slug: "c-section-abdominal-belt",
    name: "C-Section Abdominal Belt",
    image: cSectionBelt,
    galleryImages: [
      cSectionBeltWithModel,
      cSectionBeltWithModel2,
      cSectionBeltWithModel3,
    ],
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
    image: lumbarSupportBelt,
    galleryImages: [
      lumbarSupportBeltWithModel,
      lumbarSupportBeltWithModel2,
      lumbarSupportBeltWithModel3,
    ],
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
