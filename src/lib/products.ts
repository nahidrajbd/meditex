import type { StaticImageData } from "next/image";
import cSectionBelt from "@/assets/c-section-belt.png";
import cSectionBeltSingle from "@/assets/c-section-belt-single.png";
import cSectionBeltWithModel from "@/assets/c-section-belt-with-model.png";
import cSectionBeltWithModel2 from "@/assets/c-section-belt-with-model-2.png";
import cSectionBeltWithModel3 from "@/assets/c-section-belt-with-model-3.png";
import lumbarSupportBelt from "@/assets/lumbar-support-belt.png";
import lumbarSupportBeltSingle from "@/assets/lumbar-support-belt-single.png";
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
  homeImage: StaticImageData;
  galleryImages: StaticImageData[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  alternateNames: string[];
};

export const products: Product[] = [
  {
    slug: "c-section-abdominal-belt",
    name: "C-Section Abdominal Belt",
    image: cSectionBelt,
    homeImage: cSectionBeltSingle,
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
    metaTitle: "C-Section Abdominal Belt Manufacturer & Supplier | Arshi MediTex",
    metaDescription:
      "C-Section Abdominal Belt (also searched as a post-pregnancy maternity belt or abdominal binder) manufactured by Arshi MediTex in Rajshahi, Bangladesh. Wholesale and bulk supply for hospitals, maternity clinics, pharmacies, and distributors.",
    keywords: [
      "C-section abdominal belt",
      "C-section abdominal belt manufacturer",
      "C-section belt manufacturer Bangladesh",
      "C-section abdominal belt supplier",
      "C-section abdominal belt wholesale",
      "post C-section abdominal belt",
      "abdominal support belt manufacturer",
      "post-pregnancy maternity belt",
      "pregnancy belt after delivery",
      "cesarean belt",
      "abdominal binder belt",
      "mother care belt",
      "after baby delivery belt",
      "mother slimming belt",
    ],
    alternateNames: [
      "Post-Pregnancy Maternity Belt",
      "Pregnancy Belt After Delivery / C-Section",
      "Cesarean Belt",
      "Abdominal Binder Belt",
      "Mother Care Belt",
      "After Baby Delivery Belt",
      "Mother Slimming Belt",
    ],
  },
  {
    slug: "lumbar-support-belt",
    name: "Lumbar Support Belt",
    image: lumbarSupportBelt,
    homeImage: lumbarSupportBeltSingle,
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
    metaTitle: "Lumbar Support Belt Manufacturer & Supplier | Arshi MediTex",
    metaDescription:
      "Lumbar Support Belt (also searched as a back support belt or posture correction belt) manufactured by Arshi MediTex in Rajshahi, Bangladesh. Wholesale and bulk supply for hospitals, clinics, pharmacies, and distributors.",
    keywords: [
      "lumbar support belt",
      "lumbar support belt manufacturer",
      "lumbar support belt supplier",
      "lumbar support belt wholesale",
      "lumbar support belt Bangladesh",
      "back support belt manufacturer",
      "lumbar support belt manufacturer Bangladesh",
      "spine support belt",
      "posture correction belt",
      "back pain relief belt",
      "posture support straps",
      "lumbar sacro support belt",
    ],
    alternateNames: [
      "Shoulder Lumbar Brace",
      "Spine Support Belt",
      "Adjustable Posture Correction Belt",
      "Back Pain Relief Belt",
      "Posture Support Straps",
      "Lumbar Sacro Corset (LS Support Belt)",
    ],
  },
];
