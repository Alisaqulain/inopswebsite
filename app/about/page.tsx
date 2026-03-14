"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const aboutImages = [
  { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=85", alt: "Industrial and manufacturing" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=85", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=85", alt: "Technology and business" },
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85", alt: "Professional at work" },
];

const aboutSectionImages = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Modern office workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    alt: "Team collaboration meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    alt: "Team discussion",
  },
];

const differentiators = [
  {
    title: "Dedicated Partnership",
    text: "We are committed to building lasting client partnerships. Our team works closely with you to understand your unique challenges and deliver tailored solutions that drive real business outcomes.",
  },
  {
    title: "End-to-End Automation Expertise",
    text: "From attendance and access automation to integrated hardware and software, we specialize in comprehensive project management. We bring together the best tools and processes to streamline your operations.",
  },
  {
    title: "Excellence in Technology Solutions",
    text: "Our expertise spans networking, security, cloud services, and enterprise applications. We help organizations leverage technology to innovate, scale, and stay ahead in a digital-first world.",
  },
];

const expertiseSlides = [
  {
    title: "CLMS & Workforce Management",
    text: "Deep experience in contract labour management systems, attendance, and compliance automation.",
  },
  {
    title: "Biometric & Access Control",
    text: "Integration of face, fingerprint, and card-based systems with your existing HR and payroll workflows.",
  },
  {
    title: "Cloud & Enterprise IT",
    text: "Secure, scalable cloud solutions and enterprise-grade networking and security implementations.",
  },
  {
    title: "Compliance & Reporting",
    text: "Statutory compliance, PF, ESIC, and automated reporting to keep you audit-ready.",
  },
  {
    title: "Custom Integrations",
    text: "Seamless connections between your ERP, HRMS, and our platforms for a unified operations view.",
  },
];

const techIcons = [
  { name: "Cloud", path: "M3 15a4 4 0 004 4h10a4 4 0 004-4V9a4 4 0 00-4-4H7a4 4 0 00-4 4v6zm0 0h4v4" },
  { name: "Gear", path: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Server", path: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
  { name: "Lock", path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { name: "Chart", path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { name: "Document", path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { name: "Wifi", path: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" },
  { name: "Device", path: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
];

export default function AboutPage() {
  const [expertiseIndex, setExpertiseIndex] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero banner with background image */}
        <motion.section
          className="relative min-h-[280px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gray-900/70" />
          </div>
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.5'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              About
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
              <span className="text-blue-300 font-medium">About</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* About InOps: intro + 4 images + differentiators */}
        <section className="py-28 lg:py-40 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              {/* Left: featured image + 4 images grid */}
              <motion.div
                className="flex flex-col gap-6 max-w-lg mx-auto lg:max-w-none lg:mx-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.75, ease: smoothEase }}
              >
                {/* Large featured image - left side */}
                <motion.div
                  className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, ease: smoothEase }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85"
                    alt="InOps team and digital workspace"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
                {/* 4 images in 2x2 grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {aboutImages.map((img, i) => (
                    <motion.div
                      key={img.alt}
                      className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 * i }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right: heading + paragraph */}
              <motion.div
                className="lg:pl-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.75, ease: smoothEase, delay: 0.1 }}
              >
                <motion.h2
                  className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.2 }}
                >
                  About InOps: Empowering Business Digitalization
                </motion.h2>
                <motion.p
                  className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: 0.28 }}
                >
                  At InOps Solutions, we believe in the power of technology to transform how businesses operate. Our mission is to drive innovation, efficiency, and growth through digital transformation. We partner with organizations to streamline operations, enhance compliance, and build scalable systems that adapt to your needs.
                </motion.p>

                {/* Key differentiators */}
                <div className="mt-10 space-y-8">
                  {differentiators.map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.5, ease: smoothEase, delay: 0.1 * i }}
                    >
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-sm font-bold">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-1 text-gray-600 text-sm sm:text-base leading-relaxed">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our workspace / culture - image strip */}
        <section className="py-28 lg:py-40 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Our workspace & culture
            </motion.h2>
            <motion.p
              className="mt-3 text-center text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
            >
              We believe in collaboration, innovation, and a culture that puts people and technology first.
            </motion.p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {aboutSectionImages.map((img, i) => (
                <motion.div
                  key={img.alt}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 * i }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us: tech tree visual + Expertise card */}
        <section className="border-t border-gray-200 bg-white py-28 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Why Choose Us
            </motion.h2>
            <motion.div
              className="mt-2 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, ease: smoothEase }}
            />

            <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              {/* Left: tech icons grid (tree-like visual) */}
              <motion.div
                className="relative flex flex-wrap justify-center gap-6 sm:gap-8"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                {techIcons.map((icon, i) => (
                  <motion.div
                    key={icon.name}
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.4, ease: smoothEase, delay: 0.05 * i }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon.path} />
                    </svg>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right: Expertise card with slider */}
              <motion.div
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm lg:p-10"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                <h3 className="text-xl font-bold text-gray-900">Expertise</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Our team brings diverse expertise across technology, compliance, and operations to deliver solutions that work for you.
                </p>
                <div className="mt-6 min-h-[120px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={expertiseIndex}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.3, ease: smoothEase }}
                    >
                      <h4 className="font-semibold text-gray-900">{expertiseSlides[expertiseIndex].title}</h4>
                      <p className="mt-2 text-gray-600 text-sm leading-relaxed">{expertiseSlides[expertiseIndex].text}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    {expertiseSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setExpertiseIndex(i)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          i === expertiseIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setExpertiseIndex((prev) => (prev === 0 ? expertiseSlides.length - 1 : prev - 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-100 hover:border-gray-300"
                      aria-label="Previous"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setExpertiseIndex((prev) => (prev === expertiseSlides.length - 1 ? 0 : prev + 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-100 hover:border-gray-300"
                      aria-label="Next"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
