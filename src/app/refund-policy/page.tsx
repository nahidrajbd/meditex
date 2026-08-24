import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Refund Policy | Arshi MediTex",
  description:
    "Refund and returns policy for Arshi MediTex bulk and wholesale orders of medical support belts.",
  path: "/refund-policy",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Refund Policy", path: "/refund-policy" },
]);

export default function RefundPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 lg:px-8 py-16 lg:py-20">
      <JsonLd data={breadcrumb} />
      <h1 className="text-4xl font-bold text-primary-dark">Refund Policy</h1>
      <p className="mt-4 text-sm text-foreground/60">Last updated: August 2026</p>

      <div className="mt-10 space-y-10">
        <div>
          <p className="text-foreground/70">
            Arshi MediTex is a business-to-business (B2B) manufacturer and
            supplier. This website does not process online payments or
            checkout transactions. All bulk and wholesale orders are
            arranged directly with our sales team through a quotation and
            purchase agreement. This policy explains our general approach
            to refunds and returns for orders placed with us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            Order Confirmation
          </h2>
          <p className="mt-3 text-foreground/70">
            No order is confirmed until both parties agree on product
            specifications, quantity, pricing, and delivery terms. Please
            review all order details carefully before confirming a purchase
            with our sales team.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            Product Defects or Quality Issues
          </h2>
          <p className="mt-3 text-foreground/70">
            If a delivered order does not match the confirmed specifications
            or arrives with a manufacturing defect, please contact us within
            a reasonable time of delivery so that we can review the issue.
            We will work with you to determine an appropriate resolution,
            which may include replacement, correction, or another remedy
            agreed between both parties.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            Cancellations
          </h2>
          <p className="mt-3 text-foreground/70">
            Cancellation of a confirmed bulk order is subject to the terms
            agreed at the time of order confirmation, as production may
            already be underway. Please contact our sales team as early as
            possible if you need to cancel or change an order.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            Refunds
          </h2>
          <p className="mt-3 text-foreground/70">
            Since orders are arranged individually between Arshi MediTex and
            the buyer, refund terms are agreed on a case-by-case basis as
            part of the purchase agreement. We aim to resolve any genuine
            order issues fairly and professionally.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            Contact Us
          </h2>
          <p className="mt-3 text-foreground/70">
            For any questions about an existing or upcoming order, please
            contact us at{" "}
            <a href="mailto:sales@arshimeditex.com" className="text-primary hover:underline">
              sales@arshimeditex.com
            </a>{" "}
            or call 01635994664.
          </p>
        </div>
      </div>
    </section>
  );
}
