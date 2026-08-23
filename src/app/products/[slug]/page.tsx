import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { products } from "@/lib/products";
import { buildMetadata, breadcrumbJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";
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
  return buildMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    path: `/products/${product.slug}`,
    keywords: product.keywords,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ]);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.intro,
    image: [
      `${SITE_URL}${product.image.src}`,
      ...product.galleryImages.map((img) => `${SITE_URL}${img.src}`),
    ],
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    manufacturer: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    category: "Medical Support Belt",
  };

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
      <JsonLd data={breadcrumb} />
      <JsonLd data={productJsonLd} />
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ProductGallery
          name={product.name}
          image={product.image}
          galleryImages={product.galleryImages}
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
