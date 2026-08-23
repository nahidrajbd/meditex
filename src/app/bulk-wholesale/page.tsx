import type { Metadata } from "next";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Bulk & Wholesale Medical Belt Supply | Arshi MediTex",
  description:
    "Arshi MediTex supplies medical support belts in bulk and wholesale quantities to hospitals, clinics, pharmacies, medical equipment shops, distributors, dealers, exporters, and international buyers from our factory in Rajshahi, Bangladesh.",
  path: "/bulk-wholesale",
  keywords: [
    "wholesale medical belts",
    "bulk medical belts",
    "medical belt exporter Bangladesh",
    "wholesale medical support products",
    "bulk medical support products",
  ],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Bulk & Wholesale", path: "/bulk-wholesale" },
]);

const buyers = [
  { title: "Hospitals", desc: "Medical support products for patient care and hospital supply." },
  { title: "Clinics", desc: "Reliable products for clinics and healthcare facilities." },
  { title: "Pharmacies & Medical Stores", desc: "Products suitable for regular retail and professional supply." },
  { title: "Medical Equipment Shops", desc: "Support products for medical equipment businesses." },
  { title: "Distributors & Dealers", desc: "Bulk supply for distribution networks." },
  { title: "Exporters & International Buyers", desc: "Manufactured in Bangladesh for local and international business opportunities." },
];

const reasons = [
  { title: "Factory-Direct Pricing", desc: "Competitive pricing directly from the manufacturer." },
  { title: "Bulk Production", desc: "We support larger orders and regular supply requirements." },
  { title: "Consistent Quality", desc: "We focus on maintaining product quality across every order." },
  { title: "Long-Term Partnership", desc: "We aim to build reliable, long-term relationships with our business customers." },
];

export default function BulkWholesalePage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h1 className="text-4xl font-bold text-primary-dark">
            Bulk Supply for Healthcare Businesses
          </h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Your Reliable Medical Textile Supply Partner
          </p>
          <p className="mt-2 text-foreground/60 max-w-2xl mx-auto">
            Arshi MediTex supplies medical support products to businesses
            that require regular and bulk quantities. Whether you are
            purchasing for a hospital, clinic, pharmacy, distribution
            business, or export market, we are ready to discuss your
            requirements.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-primary-dark text-center">We Supply To</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {buyers.map((b) => (
            <div key={b.title} className="rounded-2xl border border-primary/10 p-6">
              <div className="text-lg font-semibold text-primary-dark">{b.title}</div>
              <p className="mt-2 text-sm text-foreground/60">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-dark text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-center">Why Work With Arshi MediTex?</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="text-lg font-semibold text-accent">{r.title}</div>
                <p className="mt-2 text-sm text-white/70">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="secondary">
              Request a Bulk Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-primary-dark">
          Looking for a Medical Textile Supplier in Bangladesh?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-foreground/70">
          Arshi MediTex welcomes business inquiries from international
          buyers, distributors, exporters, and healthcare product companies.
          We are interested in building long-term business relationships
          with companies looking for reliable medical support products from
          Bangladesh.
        </p>
        <div className="mt-8">
          <Button href="/contact">Contact Our Sales Team</Button>
        </div>
      </section>
    </>
  );
}
