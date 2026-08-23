import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Page Not Found | Arshi MediTex",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 text-center">
      <h1 className="text-4xl font-bold text-primary-dark">Page Not Found</h1>
      <p className="mt-4 text-lg text-foreground/70 max-w-xl mx-auto">
        The page you are looking for doesn&apos;t exist. Explore our medical
        support products or get in touch for bulk supply inquiries.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/products" variant="outline">
          View Products
        </Button>
      </div>
    </section>
  );
}
