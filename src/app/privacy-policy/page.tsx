import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Arshi MediTex",
  description:
    "Privacy Policy for Arshi MediTex, explaining how information submitted through our website and contact form is collected and used.",
  path: "/privacy-policy",
});

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy-policy" },
]);

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 lg:px-8 py-16 lg:py-20">
      <JsonLd data={breadcrumb} />
      <h1 className="text-4xl font-bold text-primary-dark">Privacy Policy</h1>
      <p className="mt-4 text-sm text-foreground/60">Last updated: August 2026</p>

      <div className="mt-10 space-y-10">
        <div>
          <p className="text-foreground/70">
            Arshi MediTex (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            operates the website arshimeditex.com. This Privacy Policy
            explains what information we collect through this website, how
            we use it, and how we protect it. By using this website, you
            agree to the practices described below.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            Information We Collect
          </h2>
          <p className="mt-3 text-foreground/70">
            When you submit an inquiry through our contact form, we collect
            the information you provide, which may include your name,
            company name, phone number, email address, product of interest,
            required quantity, and any message details you choose to share.
          </p>
          <p className="mt-3 text-foreground/70">
            We do not knowingly collect sensitive personal information, and
            we do not use cookies or third-party tracking or analytics
            scripts on this website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            How We Use Your Information
          </h2>
          <p className="mt-3 text-foreground/70">
            Information submitted through our contact form is used solely to
            respond to your inquiry, discuss bulk or wholesale supply
            requirements, and communicate with you about our products and
            services. We do not sell, rent, or trade your information to
            third parties.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            Information Sharing
          </h2>
          <p className="mt-3 text-foreground/70">
            We do not share the information you provide with third parties,
            except where required by law or necessary to respond to your
            specific inquiry (for example, coordinating with our logistics
            or export partners for a confirmed order).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            Data Retention and Security
          </h2>
          <p className="mt-3 text-foreground/70">
            We retain inquiry information only for as long as necessary to
            respond to and manage your business relationship with us, and
            we take reasonable steps to protect it from unauthorized access,
            alteration, or disclosure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            Your Rights
          </h2>
          <p className="mt-3 text-foreground/70">
            You may contact us at any time to ask what information we hold
            about you, to request a correction, or to request that we
            delete your information, subject to any legal or business
            record-keeping requirements.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            Changes to This Policy
          </h2>
          <p className="mt-3 text-foreground/70">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-primary-dark">
            Contact Us
          </h2>
          <p className="mt-3 text-foreground/70">
            If you have any questions about this Privacy Policy, please
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
