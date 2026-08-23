"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/bulk-wholesale", label: "Bulk & Wholesale" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-primary/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Arshi MediTex"
              width={188}
              height={47}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/bulk-wholesale" className="px-5 py-2.5">
              Request Bulk Supply
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-primary-dark"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/bulk-wholesale" className="w-fit">
              Request Bulk Supply
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
