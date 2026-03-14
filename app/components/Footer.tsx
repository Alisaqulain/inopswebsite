import React from "react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "What we Offer", href: "#product" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "#" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
];

function SocialIcon({ icon }: { icon: string }) {
  const paths: Record<string, React.ReactElement> = {
    facebook: (
      <path fill="currentColor" d="M24 12.073c0-5.989-4.848-10.861-10.861-10.861S2.278 6.084 2.278 12.073c0 5.412 3.965 9.903 9.144 10.854v-7.673h-2.754V12.07h2.754V9.414c0-2.716 1.62-4.22 4.096-4.22 1.186 0 2.427.212 2.427.212v2.67h-1.367c-1.347 0-1.767.836-1.767 1.694v2.034h3.01l-.48 3.184h-2.53v7.673c5.179-.951 9.144-5.442 9.144-10.854z" />
    ),
    twitter: (
      <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    instagram: (
      <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
    ),
    linkedin: (
      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  };
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {paths[icon] ?? null}
    </svg>
  );
}

const supportLinks = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-gray-50 border-t border-gray-100 px-6 py-12 lg:px-12 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="InOps solutions" width={160} height={48} className="h-10 w-auto object-contain opacity-90" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-600">Automated CLMS and compliance for your workforce.</p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a key={s.icon} href={s.href} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600" aria-label={s.label}>
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-blue-500" />
              <ul className="mt-4 space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center gap-2 text-gray-600 transition hover:text-blue-600">
                      <span className="text-blue-500/80">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Support</h3>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-blue-500" />
              <ul className="mt-4 space-y-2.5">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center gap-2 text-gray-600 transition hover:text-blue-600">
                      <span className="text-blue-500/80">→</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-white px-6 py-5 text-center">
        <p className="text-sm text-gray-500">
          Copyright © 2025 <span className="text-blue-600 font-medium">Inopssolution.</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
