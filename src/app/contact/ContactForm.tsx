"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to a form backend (e.g. Formspree/Web3Forms) once hosting is finalized.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-light p-8 text-center">
        <p className="text-lg font-semibold text-primary-dark">Thank you for your inquiry.</p>
        <p className="mt-2 text-sm text-foreground/60">
          Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="name" label="Name" placeholder="Your name" />
        <Field id="company" label="Company Name" placeholder="Your company or organization" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="phone" label="Phone Number" placeholder="Your phone number" type="tel" />
        <Field id="email" label="Email" placeholder="Your email address" type="email" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-primary-dark">
            Product Interested In
          </label>
          <select
            id="product"
            name="product"
            className="mt-2 w-full rounded-lg border border-primary/20 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option>C-Section Abdominal Belt</option>
            <option>Lumbar Support Belt</option>
            <option>Other</option>
          </select>
        </div>
        <Field id="quantity" label="Quantity Required" placeholder="Estimated order quantity" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your requirements"
          className="mt-2 w-full rounded-lg border border-primary/20 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
      >
        Send Inquiry
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-primary-dark">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-primary/20 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
