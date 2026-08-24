import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-bold">
              Arshi<span className="text-accent">MediTex</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Medical Textiles &amp; Support Products
            </p>
            <p className="mt-2 text-sm text-white/70">
              Manufacturer and supplier of medical support products from
              Rajshahi, Bangladesh.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Products
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <Link href="/products/c-section-abdominal-belt" className="hover:text-accent">
                  C-Section Abdominal Belt
                </Link>
              </li>
              <li>
                <Link href="/products/lumbar-support-belt" className="hover:text-accent">
                  Lumbar Support Belt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Business
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link href="/manufacturing" className="hover:text-accent">Manufacturing</Link></li>
              <li><Link href="/bulk-wholesale" className="hover:text-accent">Bulk Supply</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>01635994664</li>
              <li>sales@arshimeditex.com</li>
              <li>Sopura, BSCIC, Rajshahi, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3">
          <p className="text-xs font-medium text-accent">
            Manufactured in Bangladesh | Bulk Supply | International Inquiries Welcome
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-white/50">
              © 2026 Arshi MediTex. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-xs text-white/50">
              <Link href="/privacy-policy" className="hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="/refund-policy" className="hover:text-accent">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
