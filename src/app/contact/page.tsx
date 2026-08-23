import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Arshi MediTex",
  description:
    "Contact Arshi MediTex for bulk supply and business inquiries. Factory: Sopura, BSCIC, Rajshahi, Bangladesh. Phone: 01711238555.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-dark">Let&apos;s Work Together</h1>
        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
          Looking for medical support products for your hospital, clinic,
          pharmacy, distribution business, or export market? Contact Arshi
          MediTex to discuss your product and bulk supply requirements.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-light p-8">
            <h2 className="text-lg font-semibold text-primary-dark">Arshi MediTex</h2>
            <p className="text-sm text-foreground/60">Medical Textiles &amp; Support Products</p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary/60">
                  Factory
                </dt>
                <dd className="mt-1 text-sm text-foreground/80">
                  Sopura, BSCIC, Rajshahi, Bangladesh
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary/60">
                  Phone
                </dt>
                <dd className="mt-1 text-sm text-foreground/80">01711238555</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary/60">
                  Website
                </dt>
                <dd className="mt-1 text-sm text-foreground/80">arshimeditex.com</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-lg font-semibold text-primary-dark mb-6">Send Us an Inquiry</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
