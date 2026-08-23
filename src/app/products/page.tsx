import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products | Arshi MediTex",
  description:
    "Medical support products manufactured by Arshi MediTex for hospitals, clinics, pharmacies, and distributors: C-Section Abdominal Belt and Lumbar Support Belt.",
};

export default function ProductsPage() {
  return (
    <>
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
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-light">
                <Image
                  src={product.image}
                  alt={product.name}
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
