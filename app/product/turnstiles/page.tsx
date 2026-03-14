"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const productSpecs = [
  { label: "Power Requirements", value: "AC110V/220V, 50/60Hz" },
  { label: "Dimension(mm)", value: "L=520, W=310, H=1010" },
  { label: "Working Temperature", value: "28 °C - 60 °C" },
  { label: "Working Environment", value: "Indoor/Outdoor(if sheltered)" },
  { label: "RFID & Fingerprint Speed", value: "Maximum 30/Minute" },
  { label: "Material", value: "Stainless Steel" },
];

const whyChooseSlides = [
  { title: "Results-Driven", text: "We are committed to delivering measurable results that help our clients achieve their business objectives and drive sustainable growth." },
  { title: "Expertise", text: "Our team brings deep industry knowledge and technical expertise to every project, ensuring solutions that fit your unique needs." },
  { title: "Reliability", text: "Consistent performance and dependable support so you can focus on what matters most for your organization." },
  { title: "Innovation", text: "We leverage cutting-edge technology and best practices to future-proof your access control and workforce systems." },
  { title: "Partnership", text: "We work alongside you as a long-term partner, from planning through implementation and beyond." },
];

const numberedFeatures = [
  {
    number: 1,
    title: "Reliability",
    color: "bg-amber-500",
    description:
      "Consistency, dependability, trustworthiness, accuracy, credibility, solidity, steadfastness, authenticity, durability, fidelity, robustness, validity, resilience, faithfulness, certainty.",
  },
  {
    number: 2,
    title: "Safety Feature",
    color: "bg-emerald-500",
    description:
      "Airbags, antilock brakes, traction control, lane departure warning, blind spot detection, adaptive cruise control, rearview camera, stability control, tire pressure monitoring.",
  },
  {
    number: 3,
    title: "Built-in Reader Integration",
    color: "bg-pink-500",
    description:
      "Seamless compatibility with Kindle, Nook, iBooks, Google Play Books, Pocket, Adobe Digital Editions, and other popular e-reader platforms.",
  },
];

const featureBullets = [
  { text: "High-quality electric component", color: "text-amber-500" },
  { text: "Visual indicator for access granted or denied", color: "text-emerald-500" },
  { text: "Patented oil lubrication system reduces the need for maintenance", color: "text-pink-500" },
  { text: "Stainless steel casework which ensures long-lasting durability", color: "text-blue-500" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function TurnstilesPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero – turnstiles background with blue overlay */}
        <motion.section
          className="relative min-h-[320px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gray-900/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.15),transparent)]" />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              Turnstiles
            </motion.h1>
            <motion.nav
              className="mt-4 text-sm text-white/90"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.25 }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-blue-300 font-medium">Turnstiles</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Main content – tripod turnstile image left, text right */}
        <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase }}
              >
                <div className="relative aspect-[4/3] max-w-xl mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=85"
                    alt="Stainless steel tripod turnstile with barrier arms"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2 lg:pl-4"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: smoothEase, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                  Tripod Turnstiles
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                  InOps&apos; single-lane turnstile series designed for smooth and silent operation and draws very little power. It is made of stainless steel which makes it highly durable. It is compact and designed to operate in small workspaces.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features – three numbered blocks */}
        <section className="py-16 lg:py-24 bg-gray-50/50 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {numberedFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-gray-50/80 p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.08 }}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color} text-lg font-bold text-white`}>
                    {item.number}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features – heading and four bullet points */}
        <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-4xl px-6 lg:px-12">
            <motion.h2
              className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Features
            </motion.h2>
            <div
              className="mx-auto mt-2 h-0.5 w-16 rounded-full bg-blue-500"
              aria-hidden
            />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {featureBullets.map((item, i) => (
                <motion.div
                  key={item.text}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.05 }}
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2 border-current">
                    <CheckIcon className={`h-4 w-4 ${item.color}`} />
                  </span>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Specifications */}
        <section className="py-16 lg:py-24 bg-gray-50/50 border-t border-gray-200">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <motion.div
              className="rounded-xl border border-gray-200 bg-gray-50/80 shadow-sm overflow-hidden backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <div className="divide-y divide-gray-200">
                {productSpecs.map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-4">
                    <dt className="text-sm font-medium text-gray-500">{row.label}</dt>
                    <dd className="text-sm font-semibold text-gray-900">{row.value}</dd>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUsSection />
      </div>
    </>
  );
}

function WhyChooseUsSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = whyChooseSlides;

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.h2
          className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          Why Choose Us
        </motion.h2>
        <div className="mx-auto mt-2 h-0.5 w-20 rounded-full bg-blue-500" aria-hidden />
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: network/tree graphic with icon circles */}
          <motion.div
            className="relative flex justify-center items-center min-h-[280px] lg:min-h-[360px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <svg viewBox="0 0 320 320" className="w-full max-w-md h-auto" aria-hidden>
              {/* Connecting lines - tree/network style */}
              <g stroke="rgb(6 182 212)" strokeWidth="1.5" fill="none" opacity="0.6">
                <path d="M160 280 L160 220 L100 160 L80 100" />
                <path d="M160 220 L160 160 L200 100 L220 60" />
                <path d="M160 220 L220 160 L260 100" />
                <path d="M160 160 L120 100 L100 60" />
                <path d="M160 160 L200 100" />
                <path d="M160 280 L160 220" />
              </g>
              {/* Node circles with white center (icon placeholder) */}
              {[
                { cx: 80, cy: 100, color: "rgb(6 182 212)" },
                { cx: 220, cy: 60, color: "rgb(6 182 212)" },
                { cx: 260, cy: 100, color: "rgb(6 182 212)" },
                { cx: 100, cy: 60, color: "rgb(6 182 212)" },
                { cx: 200, cy: 100, color: "rgb(6 182 212)" },
                { cx: 120, cy: 100, color: "rgb(6 182 212)" },
                { cx: 160, cy: 160, color: "rgb(34 197 94)" },
                { cx: 160, cy: 220, color: "rgb(6 182 212)" },
                { cx: 100, cy: 160, color: "rgb(6 182 212)" },
                { cx: 220, cy: 160, color: "rgb(34 197 94)" },
                { cx: 160, cy: 280, color: "rgb(6 182 212)" },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.cx} cy={node.cy} r="22" fill={node.color} />
                  <circle cx={node.cx} cy={node.cy} r="8" fill="white" opacity="0.95" />
                </g>
              ))}
            </svg>
          </motion.div>
          {/* Right: Results-Driven + paragraph + pagination + prev/next */}
          <motion.div
            className="lg:pl-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3, ease: smoothEase }}
              >
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{slides[slideIndex].title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{slides[slideIndex].text}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === slideIndex ? "bg-violet-500 scale-110" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100"
                  aria-label="Previous"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={() => setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100"
                  aria-label="Next"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
