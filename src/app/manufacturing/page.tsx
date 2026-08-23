import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Placeholder from "@/components/Placeholder";
import JsonLd from "@/components/JsonLd";
import productionPhoto from "@/assets/production-photograph.png";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Manufacturing Facility | Medical Textile Manufacturer in Rajshahi",
  description:
    "Arshi MediTex manufactures medical support belts at our facility in Sopura, BSCIC, Rajshahi, Bangladesh, with a focus on quality, durability, and reliable bulk production for wholesale supply.",
  path: "/manufacturing",
  keywords: [
    "medical textile manufacturer Bangladesh",
    "medical support products manufacturer",
    "Sopura BSCIC",
    "Rajshahi Bangladesh",
    "bulk medical belts",
  ],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Manufacturing", path: "/manufacturing" },
]);

const strengths = [
  {
    title: "Experienced Manufacturing",
    desc: "Around a decade of experience in the industry.",
  },
  {
    title: "Bulk Production",
    desc: "Production capacity to support regular business and bulk requirements.",
  },
  {
    title: "Consistent Quality",
    desc: "Focused on maintaining consistent product quality across orders.",
  },
  {
    title: "Factory-Direct Supply",
    desc: "Competitive pricing through direct manufacturing and supply.",
  },
];

const gallery = [
  "Material Selection & Cutting",
  "Stitching",
  "Quality Checking",
  "Finishing & Packaging",
];

export default function ManufacturingPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h1 className="text-4xl font-bold text-primary-dark">Our Manufacturing</h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Made in Our Factory. Built for Reliable Supply.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 overflow-hidden rounded-2xl">
            <Image
              src={productionPhoto}
              alt="Arshi MediTex medical textile manufacturing facility in Sopura, BSCIC, Rajshahi, Bangladesh"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-foreground/70">
              Arshi MediTex manufactures its products at our facility in{" "}
              <strong className="text-primary-dark">
                Sopura, BSCIC, Rajshahi, Bangladesh
              </strong>
              .
            </p>
            <p className="mt-4 text-foreground/70">
              Our manufacturing process focuses on product quality, durable
              construction, consistent production, and reliable supply for
              business customers.
            </p>
            <p className="mt-4 text-foreground/70">
              From material selection and cutting to stitching, finishing,
              and packaging, we focus on maintaining consistent quality
              throughout the production process.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-primary-dark text-center">
            Production Process
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((g) => (
              <Placeholder key={g} label={g} className="h-40" />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-primary-dark text-center">
          Our Manufacturing Strengths
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s) => (
            <div key={s.title} className="rounded-2xl border border-primary/10 p-6">
              <div className="text-lg font-semibold text-primary-dark">{s.title}</div>
              <p className="mt-2 text-sm text-foreground/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-primary-dark">
            Interested in Working With a Real Manufacturer?
          </h2>
          <div className="mt-8">
            <Button href="/bulk-wholesale">Request Bulk Supply</Button>
          </div>
        </div>
      </section>
    </>
  );
}
