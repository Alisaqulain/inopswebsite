"use client";

import Link from "next/link";

const mainPages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const productPages = [
  { label: "Biometric Access Control", href: "/product/biometric-access-control" },
  { label: "Turnstiles", href: "/product/turnstiles" },
  { label: "Accessories", href: "/product/accessories" },
];

const solutionPages = [
  { label: "Time & Attendance", href: "/solutions/time-and-attendance" },
  { label: "Canteen Management", href: "/solutions/canteen-management" },
  { label: "Payroll Solutions", href: "/solutions/payroll-solutions" },
  { label: "Labour Management Software", href: "/solutions/labour-management" },
  { label: "Visitor Management", href: "/solutions/visitor-management" },
  { label: "Fixed Asset Management", href: "/solutions/fixed-asset-management" },
];

const resourcePages = [
  { label: "Blog", href: "/blog" },
  { label: "Brochures", href: "/brochures" },
];

export default function AllPages() {
  return (
    <div className="min-h-screen bg-white px-6 py-8 text-gray-900">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">All Pages</h1>
        <p className="mt-2 text-gray-600">Quick links to every page on the site.</p>

        <section className="mt-10 space-y-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Main</h2>
            <ul className="mt-3 space-y-2">
              {mainPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-700 underline decoration-blue-500/50 underline-offset-2 hover:text-blue-600 hover:decoration-blue-400">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Product</h2>
            <ul className="mt-3 space-y-2">
              {productPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-700 underline decoration-blue-500/50 underline-offset-2 hover:text-blue-600 hover:decoration-blue-400">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Solutions</h2>
            <ul className="mt-3 space-y-2">
              {solutionPages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-700 underline decoration-blue-500/50 underline-offset-2 hover:text-blue-600 hover:decoration-blue-400">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600">Resources</h2>
            <ul className="mt-3 space-y-2">
              {resourcePages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-700 underline decoration-blue-500/50 underline-offset-2 hover:text-blue-600 hover:decoration-blue-400">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
