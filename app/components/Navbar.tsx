"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type NavItem =
  | { label: string; href: string }
  | { label: string; href: string; dropdown: string[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Product", href: "#product", dropdown: ["Biometric Access Control", "Turnstiles", "Accessories"] },
  { label: "Solutions", href: "#solutions", dropdown: ["Time & Attendance", "Canteen Management", "Payroll Solutions" , "Labour Management Software" , "Visitor Management" , "Fixed Asset Management"] },
  { label: "Resources", href: "#resources", dropdown: ["Blog", "Brochures"] },
  { label: "Contact", href: "/contact" },
];

function hasDropdown(item: NavItem): item is NavItem & { dropdown: string[] } {
  return "dropdown" in item && Array.isArray(item.dropdown);
}

const headerTransition = { type: "tween" as const, duration: 0.45, ease: [0.33, 1, 0.68, 1] as const };
const dropdownTransition = { type: "spring" as const, stiffness: 300, damping: 28 };
const linkStagger = 0.05;

const productRoutes: Record<string, string> = {
  "Biometric Access Control": "/product/biometric-access-control",
  "Turnstiles": "/product/turnstiles",
  "Accessories": "/product/accessories",
};

const solutionRoutes: Record<string, string> = {
  "Time & Attendance": "/solutions/time-and-attendance",
  "Canteen Management": "/solutions/canteen-management",
  "Payroll Solutions": "/solutions/payroll-solutions",
  "Labour Management Software": "/solutions/labour-management",
  "Visitor Management": "/solutions/visitor-management",
  "Fixed Asset Management": "/solutions/fixed-asset-management",
};

const resourceRoutes: Record<string, string> = {
  Blog: "/blog",
  Brochures: "/brochures",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const resolveHref = (itemLabel: string, raw: string) => {
    const key = raw.trim();
    if (itemLabel === "Resources" && resourceRoutes[key]) return resourceRoutes[key];
    if (itemLabel === "Product" && productRoutes[key]) return productRoutes[key];
    if (itemLabel === "Solutions" && solutionRoutes[key]) return solutionRoutes[key];
    return `#${key.toLowerCase().replace(/\s+/g, "-")}`;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) setMobileSection(null);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(15, 23, 42, 0.92)" : "rgba(15, 23, 42, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        borderBottomColor: scrolled ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0)",
        boxShadow: scrolled ? "0 1px 3px 0 rgba(0,0,0,0.2)" : "0 0 0 0 transparent",
      }}
      transition={headerTransition}
      className={`sticky top-0 z-50 overflow-x-hidden border-b border-transparent px-6 py-3.5 lg:px-12 ${
        scrolled ? "w-full" : "w-[90%] mx-auto rounded-2xl mt-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Link href="/" className="relative block transition-opacity hover:opacity-90">
            <Image
              src="/logo.png"
              alt="InOps solutions"
              width={140}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert opacity-95"
              priority
            />
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) =>
            hasDropdown(item) ? (
              <motion.div
                key={item.label}
                className="relative"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 + i * linkStagger, ease: "easeOut" }}
              >
                <div
                  className="group relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <motion.button
                    type="button"
                    className="relative flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white rounded-lg hover:bg-slate-700/80"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={dropdownTransition}
                        className="absolute left-0 top-full pt-2 min-w-[180px] origin-top-left"
                      >
                        <div className="rounded-xl border border-slate-600/80 bg-slate-800/95 py-2 shadow-lg shadow-slate-900/50 backdrop-blur-xl">
                          {item.dropdown.map((d, j) => {
                            const href = resolveHref(item.label, d);
                            return (
                              <motion.div
                                key={d}
                                initial={{ opacity: 0, x: -6 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: 0.03 * j }}
                              >
                                <Link
                                  href={href}
                                  className="block px-4 py-2.5 text-sm text-slate-200 transition-colors hover:bg-slate-700/80 hover:text-cyan-300"
                                >
                                  {d}
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 + i * linkStagger, ease: "easeOut" }}
              >
                <Link href={item.href} className="relative block px-3 py-2">
                  <motion.span
                    className="relative inline-block text-sm font-medium text-slate-300 transition-colors hover:text-white"
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    variants={{
                      hover: { scale: 1.02 },
                    }}
                  >
                    {item.label}
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                      style={{ transformOrigin: "left" }}
                      variants={{
                        hover: { scaleX: 1 },
                      }}
                      initial={{ scaleX: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    />
                  </motion.span>
                </Link>
              </motion.div>
            )
          )}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <motion.button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600/80 bg-slate-800/80 text-slate-300 transition-colors hover:bg-slate-700 hover:border-cyan-500/80 hover:text-cyan-300 md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
          <Link href="/contact">
            <motion.span
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600/80 bg-slate-800/80 text-slate-300 transition-colors hover:bg-slate-700 hover:border-cyan-500/80 hover:text-cyan-300 md:hidden"
              aria-label="Contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-cyan-400"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.span>
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-50 bg-black/60 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[88vw] max-w-sm border-l border-slate-700/80 bg-slate-900/95 backdrop-blur-xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: [0.33, 1, 0.68, 1] as const }}
            >
              <div className="flex items-center justify-between border-b border-slate-700/80 px-5 py-4">
                <span className="text-sm font-semibold tracking-wide text-slate-200">Menu</span>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-800/70 text-slate-200"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="px-5 py-4">
                <div className="space-y-2">
                  {navItems.map((item) => {
                    if (!hasDropdown(item)) {
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-200"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                          <span className="text-slate-400" aria-hidden>
                            →
                          </span>
                        </Link>
                      );
                    }

                    const isOpen = mobileSection === item.label;
                    return (
                      <div key={item.label} className="rounded-xl border border-slate-700/80 bg-slate-800/50">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-slate-200"
                          onClick={() => setMobileSection((prev) => (prev === item.label ? null : item.label))}
                        >
                          <span>{item.label}</span>
                          <span className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden>
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-1 px-2 pb-3">
                                {item.dropdown.map((d) => {
                                  const href = resolveHref(item.label, d);
                                  return (
                                    <Link
                                      key={d}
                                      href={href}
                                      className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/70 hover:text-cyan-300"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {d}
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/15 transition hover:bg-cyan-500"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
