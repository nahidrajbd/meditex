import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import HeroSlideshow from "@/components/HeroSlideshow";
import factoryPhoto from "@/assets/Factory-Photograph.png";
import teamPhoto from "@/assets/team-photograph.png";
import productionPhoto from "@/assets/production-photograph.png";

const heroSlides = [
  { src: factoryPhoto, alt: "Arshi MediTex factory" },
  { src: productionPhoto, alt: "Arshi MediTex production floor" },
  { src: teamPhoto, alt: "Arshi MediTex factory team" },
];

const trustPoints = [
  { title: "10+ Years of Experience", desc: "Medical textile manufacturing and supply" },
  { title: "Manufacturer & Supplier", desc: "Products made at our own manufacturing facility" },
  { title: "Bulk Production", desc: "Reliable supply for healthcare businesses" },
  { title: "Competitive Pricing", desc: "Factory-direct pricing for bulk buyers" },
];

const productSummaries: Record<string, string> = {
  "c-section-abdominal-belt": "Comfortable abdominal support designed for post-C-section use.",
  "lumbar-support-belt": "Adjustable support designed for the lower back and waist.",
};

const manufacturingPoints = [
  "Manufactured in Bangladesh",
  "Bulk Production",
  "Quality-Focused Manufacturing",
  "Reliable Supply",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary-dark leading-tight">
              Medical Support Products, Made for Healthcare
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-xl">
              Arshi MediTex is a medical textile manufacturer and supplier
              based in Rajshahi, Bangladesh. We produce quality support
              products for hospitals, clinics, pharmacies, distributors,
              dealers, and healthcare businesses.
            </p>
            <p className="mt-4 text-sm font-semibold text-primary">
              C-Section Abdominal Belt&nbsp;|&nbsp;Lumbar Support Belt
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/products">Explore Products</Button>
              <Button href="/bulk-wholesale" variant="outline">
                Request Bulk Supply
              </Button>
            </div>
          </div>
          <HeroSlideshow slides={heroSlides} className="h-80 lg:h-[26rem]" />
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((p) => (
            <div key={p.title} className="rounded-2xl border border-primary/10 p-6">
              <div className="text-lg font-semibold text-primary-dark">{p.title}</div>
              <p className="mt-2 text-sm text-foreground/60">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-primary-dark text-center">
            Our Products
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group rounded-2xl bg-white p-6 border border-primary/10 hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-light">
                  <Image
                    src={product.homeImage}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary-dark group-hover:text-primary">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-foreground/60">{productSummaries[product.slug]}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/products">View Products</Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-72 overflow-hidden rounded-2xl order-2 lg:order-1">
          <Image
            src={teamPhoto}
            alt="Arshi MediTex factory team"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-primary-dark">
            Built on Experience. Focused on Quality.
          </h2>
          <p className="mt-6 text-foreground/70">
            With around a decade of experience in the industry, Arshi
            MediTex manufactures and supplies medical textile support
            products for healthcare businesses.
          </p>
          <p className="mt-4 text-foreground/70">
            Based in Sopura, BSCIC, Rajshahi, Bangladesh, we focus on
            reliable manufacturing, competitive pricing, and bulk supply.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              About Arshi MediTex
            </Button>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="bg-primary-dark text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">From Our Factory to Your Business</h2>
            <ul className="mt-8 grid grid-cols-2 gap-6">
              {manufacturingPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span className="text-sm font-medium text-white/90">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/manufacturing" variant="secondary">
                See Our Manufacturing
              </Button>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={productionPhoto}
              alt="Arshi MediTex production floor"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* B2B */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-primary-dark">
          Looking for a Reliable Medical Textile Supplier?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-foreground/70">
          Whether you are a hospital, clinic, pharmacy, distributor, dealer,
          or international buyer, Arshi MediTex can supply medical support
          products in bulk.
        </p>
        <div className="mt-8">
          <Button href="/bulk-wholesale">Request Bulk Supply</Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-bold text-primary-dark">Let&apos;s Work Together</h2>
          <p className="mt-6 max-w-2xl mx-auto text-foreground/70">
            Looking for medical support products for your hospital, clinic,
            pharmacy, distribution business, or export market? Contact Arshi
            MediTex for bulk supply and business inquiries.
          </p>
          <p className="mt-4 text-lg font-semibold text-primary">01711238555</p>
          <div className="mt-8">
            <Button href="/contact">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
