import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { products } from "@/lib/products";
import ProductGallery from "./ProductGallery";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Arshi MediTex`,
    description: product.intro,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ProductGallery
          name={product.name}
          image={product.image}
          galleryImage={product.galleryImage}
        />
        <div>
          <h1 className="text-3xl font-bold text-primary-dark">{product.name}</h1>
          <p className="mt-2 text-lg font-medium text-primary">{product.tagline}</p>
          <p className="mt-6 text-foreground/70">{product.intro}</p>

          <h2 className="mt-8 text-lg font-semibold text-primary-dark">Key Features</h2>
          <ul className="mt-4 space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 text-lg font-semibold text-primary-dark">Ideal For</h2>
          <p className="mt-3 text-sm text-foreground/70">{product.idealFor}</p>

          <div className="mt-10">
            <Button href="/bulk-wholesale">Request Bulk Supply</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
