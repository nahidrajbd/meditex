import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { products } from "@/lib/products";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Medical Support Belts | C-Section & Lumbar Support Belt Manufacturer",
  description:
    "Browse medical support products manufactured by Arshi MediTex in Rajshahi, Bangladesh: the C-Section Abdominal Belt and Lumbar Support Belt, supplied in bulk to hospitals, clinics, pharmacies, and distributors.",
  path: "/products",
  keywords: [
    "medical belt manufacturer Bangladesh",
    "medical support belt manufacturer",
    "wholesale medical belts",
    "bulk medical belts",
    "medical belt supplier Bangladesh",
  ],
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
]);

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h1 className="text-4xl font-bold text-primary-dark">Our Products</h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Medical Support Products for Healthcare Businesses
          </p>
          <p className="mt-2 text-foreground/60 max-w-2xl mx-auto">
            We manufacture and supply medical support products for
            hospitals, clinics, pharmacies, distributors, and other
            healthcare businesses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-2xl bg-white p-6 border border-primary/10 hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-light">
                <Image
                  src={product.image}
                  alt={`Arshi MediTex ${product.name}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-primary-dark group-hover:text-primary">
                {product.name}
              </h2>
              <p className="mt-2 text-sm text-foreground/60">{product.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-primary-dark">
            Need These Products in Bulk?
          </h2>
          <div className="mt-8">
            <Button href="/bulk-wholesale">Request Bulk Supply</Button>
          </div>
        </div>
      </section>
    </>
  );
}
