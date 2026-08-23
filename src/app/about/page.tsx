import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import teamPhoto from "@/assets/team-photograph.png";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Arshi MediTex | Medical Textile Manufacturer in Rajshahi, Bangladesh",
  description:
    "Arshi MediTex is a medical textile manufacturer and supplier with around a decade of experience, based in Sopura, BSCIC, Rajshahi, Bangladesh, serving hospitals, clinics, pharmacies, distributors, and international buyers.",
  path: "/about",
  keywords: [
    "medical textile manufacturer Bangladesh",
    "medical products manufacturer Bangladesh",
    "medical equipment supplier Bangladesh",
    "Rajshahi Bangladesh",
  ],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
]);

const audiences = [
  "Hospitals",
  "Clinics",
  "Pharmacies",
  "Medical Equipment Shops",
  "Distributors",
  "Dealers",
  "Exporters",
  "International Buyers",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h1 className="text-4xl font-bold text-primary-dark">
            About Arshi MediTex
          </h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience You Can Trust. Products You Can Rely On.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 overflow-hidden rounded-2xl">
          <Image
            src={teamPhoto}
            alt="Arshi MediTex medical textile manufacturing team in Rajshahi, Bangladesh"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="text-foreground/70">
            Arshi MediTex is a medical textile manufacturer and supplier with
            around a decade of experience in the industry.
          </p>
          <p className="mt-4 text-foreground/70">
            Based in <strong className="text-primary-dark">Sopura, BSCIC, Rajshahi, Bangladesh</strong>,
            we manufacture medical support products designed for comfort,
            support, and everyday use.
          </p>
          <p className="mt-4 text-foreground/70">
            Our focus is simple: produce reliable products, maintain
            consistent quality, and provide competitive pricing for
            businesses that need regular and bulk supply.
          </p>
        </div>
      </section>

      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-primary-dark text-center">
            We Work With
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {audiences.map((a) => (
              <span
                key={a}
                className="rounded-full bg-white border border-primary/15 px-5 py-2 text-sm font-medium text-primary-dark"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-primary-dark">
          Let&apos;s Work Together
        </h2>
        <p className="mt-4 text-foreground/70">
          Contact Arshi MediTex to discuss your product and bulk supply requirements.
        </p>
        <div className="mt-8">
          <Button href="/contact">Contact Us</Button>
        </div>
      </section>
    </>
  );
}
