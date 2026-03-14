"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.15 };

const brochures = [
  {
    title: "Biometric Access Control",
    description: "Overview of our biometric access control solutions, features, and benefits for secure facility management.",
    category: "Product",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    title: "Time & Attendance",
    description: "Streamline workforce management with our time and attendance solutions. Key features and integration options.",
    category: "Solutions",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
  },
  {
    title: "Visitor Management System",
    description: "Complete guide to our visitor management system: check-in, badges, reporting, and security integration.",
    category: "Solutions",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    title: "Canteen Management",
    description: "Transform your workplace dining with our canteen management system. Menus, payments, and analytics.",
    category: "Solutions",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
  },
  {
    title: "Payroll Solutions",
    description: "End-to-end payroll processing, tax compliance, and employee self-service. Features and benefits.",
    category: "Solutions",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
  },
  {
    title: "Fixed Asset Management",
    description: "Track, maintain, and report on fixed assets. Asset register, depreciation, and lifecycle management.",
    category: "Solutions",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
];

export default function BrochuresPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero */}
        <motion.section
          className="relative min-h-[280px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gray-900/70" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              Brochures
            </motion.h1>
            <motion.nav
              className="mt-3 text-sm text-white/90"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.25 }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-blue-300 font-medium">Brochures</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Intro */}
        <section className="py-12 lg:py-16 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-3xl px-6 lg:px-12 text-center">
            <motion.p
              className="text-gray-600 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Download our brochures to explore InOps products and solutions in detail. From access control and biometrics to visitor management and payroll, find the information you need.
            </motion.p>
          </div>
        </section>

        {/* Brochures grid */}
        <section className="py-28 lg:py-40 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {brochures.map((brochure, i) => (
                <motion.article
                  key={brochure.title}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all hover:shadow-lg hover:border-blue-200"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.05 * i }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={brochure.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-blue-500 px-2.5 py-0.5 text-xs font-medium text-white">
                        {brochure.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">
                      {brochure.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {brochure.description}
                    </p>
                    <a
                      href="#"
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
