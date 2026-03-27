"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import HeroBackgroundSlider from "./components/HeroBackgroundSlider";
import { FadeUp, StaggerContainer, StaggerItem } from "./components/MotionSection";
import { AnimatedSection, AnimatedHeading, AnimatedParagraph, AnimatedCardGrid, AnimatedCardItem } from "./components/AnimatedSection";
import FeaturesSlider from "./components/FeaturesSlider";
import ModulesSlider from "./components/ModulesSlider";
import IndustriesSlider from "./components/IndustriesSlider";
import BrandsSlider from "./components/BrandsSlider";
import ContactForm from "./components/ContactForm";
import TiltCard from "./components/TiltCard";
import SectionFade from "./components/SectionFade";
import AnimatedCounter from "./components/AnimatedCounter";

const whyCards = [
  {
    icon: "chart",
    title: "Decisions Powered by Real‑Time Data",
    text:
      "Turn raw workforce data into clear, actionable insights. Live dashboards, geo-tagged attendance, and AI-based pattern detection help you boost productivity and spot issues before they become problems.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=85",
  },
  {
    icon: "lock",
    title: "Security & Compliance You Can Trust",
    text:
      "Built for strict labour and statutory compliance from day one. InOps centralises records, enforces policy rules, and gives you clean, audit-ready trails that keep regulators and internal teams aligned.",
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=85",
  },
  {
    icon: "gear",
    title: "Designed to Scale With You",
    text:
      "Start with one site or go enterprise-wide. Cloud, on‑premise, or hybrid—InOps adapts to your infra, connects to your existing systems, and grows smoothly as your workforce and contractor base expands.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=85",
  },
  {
    icon: "integration",
    title: "Hardware + Software That Just Works",
    text:
      "Biometric devices, access control, turnstiles, and CLMS all in sync. InOps plugs into HRMS, payroll, and ERP so attendance, access, and payouts stay perfectly aligned without spreadsheets.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=85",
  },
  {
    icon: "image",
    title: "A Single View of Your Workforce",
    text:
      "See sites, contractors, and shifts at a glance with a clean, visual dashboard that lets you drill into the details only when you need to.",
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=85",
  },
  {
    icon: "doc",
    title: "Compliance on Autopilot",
    text:
      "Standardise onboarding, attendance, wage calculation, and document collection in one place. InOps automates reminders, expiries, and reports so your teams spend less time chasing paperwork.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=85",
  },
];

export default function Home() {
  const [heroDarkPhase, setHeroDarkPhase] = useState(true);

  return (
    <div className="relative min-h-screen bg-white text-gray-900 perspective-page">
      {/* Hero: background + overlay extend behind navbar so navbar blends into hero */}
      <SectionFade>
        <section className="relative min-h-[92vh] overflow-hidden flex flex-col items-center justify-center -mt-[4.5rem] pt-[9rem] noise-overlay">
          <HeroBackgroundSlider onPhaseChange={setHeroDarkPhase} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-white/0" aria-hidden />
          <div className="relative z-[1] mx-auto flex min-h-[90vh] w-full max-w-4xl flex-col items-center justify-center px-6 py-20 text-center lg:px-12">
            <motion.div
              className="flex flex-col items-center"
              initial={false}
              animate={{
                opacity: heroDarkPhase ? 0 : 1,
                y: heroDarkPhase ? 16 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
              }}
              style={{ pointerEvents: heroDarkPhase ? "none" : "auto" }}
            >
              <motion.div
                className="flex flex-col items-center"
                initial={false}
                animate={heroDarkPhase ? "hidden" : "visible"}
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                  },
                  hidden: {
                    transition: { staggerChildren: 0.03, staggerDirection: -1 },
                  },
                }}
              >
                <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-button-secondary uppercase tracking-[0.2em] text-white backdrop-blur-sm shadow-sm">
                    Contract Labour Management
                  </span>
                </motion.div>
                <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 16 } }} transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }} className="mt-5">
                  <h1 className="font-sans text-2xl font-heading-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-6xl antialiased">
                    Turn Compliance into Opportunity with Smart CLMS
                  </h1>
                </motion.div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 shadow-depth backdrop-blur-md sm:px-7 sm:py-6">
                  <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                      One platform for attendance, payroll, compliance, and access control. Trusted by enterprises for workforce management.
                    </p>
                  </motion.div>
                  <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }} className="mt-2">
                    <p className="mx-auto max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                      Will give you a complete account of the system.
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 14 } }}
                  transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                  className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="#contact"
                      className="btn-primary btn-glow inline-flex items-center justify-center rounded-xl bg-blue-500 px-8 py-3.5 text-base text-white shadow-depth-lg transition hover:bg-blue-600 hover:shadow-depth-xl"
                    >
                      Get In Touch
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="#solutions"
                      className="btn-secondary inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-8 py-3.5 text-base text-white shadow-sm backdrop-blur transition hover:bg-white/15 hover:shadow-md"
                    >
                      Our Solutions
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </SectionFade>

      {/* Why Inops */}
      <AnimatedSection id="about" className="relative bg-white py-10 lg:py-12">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-label uppercase tracking-wider text-blue-700">
              Why InOps
            </span>
            <AnimatedHeading as="h2" className="mt-6 text-3xl font-heading-bold tracking-tight text-gray-900 sm:text-4xl">
              Built for Enterprises That Can’t Afford Compliance Gaps
            </AnimatedHeading>
            <AnimatedParagraph className="mx-auto mt-6 max-w-xl font-body text-gray-600">
              InOps combines workforce visibility, airtight compliance, and hardware integration into one platform—so your teams stay focused on operations, not chasing attendance sheets and paperwork.
            </AnimatedParagraph>
          </div>
          <AnimatedCardGrid className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 perspective-3d">
            {whyCards.map((card, index) => {
              const directions: Array<"left" | "right" | "bottom" | "top"> = ["left", "right", "bottom", "top", "left"];

              // Special case: middle card with only image
              if (card.title === "A Single View of Your Workforce") {
                return (
                  <AnimatedCardItem
                    key={card.title}
                    direction={directions[index % 4]}
                    className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-blue-100"
                  >
                    <div className="relative h-full min-h-[220px] w-full">
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        fill
                        className="object-cover object-center transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </AnimatedCardItem>
                );
              }

              return (
                <AnimatedCardItem
                  key={card.title}
                  direction={directions[index % 4]}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm transition hover:bg-white hover:shadow-md hover:border-blue-100"
                >
                  <div className="flex flex-1 flex-col gap-3">
                    <motion.div
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
                      animate={{ y: [-3, 3] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: [0.65, 0, 0.35, 1] }}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                        {card.icon === "chart" && <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2Zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2" />}
                        {card.icon === "lock" && (
                          <>
                            <path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z" />
                            <path d="M18 9V7a6 6 0 1 0-12 0v2" />
                          </>
                        )}
                        {card.icon === "gear" && (
                          <>
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065Z" />
                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </>
                        )}
                        {card.icon === "integration" && <path d="M11 4a2 2 0 1 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a2 2 0 1 0 0 4h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 1 0-4 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H4a2 2 0 1 1 0-4h1a1 1 0 0 0 1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V4Z" />}
                        {card.icon === "doc" && <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />}
                      </svg>
                    </motion.div>
                    <h3 className="text-base font-heading leading-tight text-gray-900">{card.title}</h3>
                    <p className="mt-2 text-sm font-body leading-relaxed text-gray-600">{card.text}</p>
                  </div>
                </AnimatedCardItem>
              );
            })}
          </AnimatedCardGrid>
        </div>
      </AnimatedSection>

      <SectionFade className="border-t border-gray-100"><FeaturesSlider /></SectionFade>
      <SectionFade className="border-t border-gray-100"><ModulesSlider /></SectionFade>

      {/* Smart Contract Labour — full-bleed background (per reference) */}
      <SectionFade>
        <section className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.035 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1800&q=85"
              alt="Worker at access control"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/40" />
          </motion.div>

          <div className="relative mx-auto flex min-h-[min(72vh,38rem)] max-w-7xl flex-col items-center justify-center px-6 py-10 text-center text-white lg:px-12">
            <motion.div
              className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-depth-xl backdrop-blur-md sm:px-10 sm:py-12"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
            <motion.span
              className="text-sm font-body-medium tracking-wide text-white/75"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            >
              We are always ahead
            </motion.span>

            <motion.h2
              className="mt-3 text-center text-3xl font-heading-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              Professional solutions for your business.
            </motion.h2>

            <motion.p
              className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-white/75 sm:text-base"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            >
              We provide premium customer support and offer affordable programs.
            </motion.p>

            <motion.div
              className="mx-auto mt-6 flex gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              <div className="h-1 w-10 rounded-full bg-emerald-400" />
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
            >
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#contact"
                  className="btn-primary btn-glow inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm text-white shadow-md transition hover:bg-blue-600"
                >
                  Start A Project
                </Link>
              </motion.div>
              <motion.a
                href="tel:08027745220"
                className="btn-secondary inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                aria-label="Call us"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Call Us: 08027745220
              </motion.a>
              <span className="text-xs font-body text-white/70">For any question</span>
            </motion.div>

            <motion.div
              className="mt-10 grid w-full grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:gap-0"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
            >
              <div className="sm:px-8">
                <div className="text-5xl font-heading-bold tracking-tight text-white drop-shadow">
                  <AnimatedCounter value={856} duration={1.3} delay={0} />
                </div>
                <div className="mt-2 text-xs font-body-medium uppercase tracking-[0.22em] text-white/70">Satisfied Clients</div>
                <div className="mt-1 text-xs font-body text-white/55">Merits-leading experience</div>
              </div>
              <div className="relative sm:px-8">
                <div className="pointer-events-none absolute inset-y-2 -left-px hidden w-px bg-white/12 sm:block" aria-hidden />
                <div className="pointer-events-none absolute inset-y-2 -right-px hidden w-px bg-white/12 sm:block" aria-hidden />
                <div className="text-5xl font-heading-bold tracking-tight text-white drop-shadow">
                  <AnimatedCounter value={238} duration={1.3} delay={0.1} />
                </div>
                <div className="mt-2 text-xs font-body-medium uppercase tracking-[0.22em] text-white/70">Successful Investments</div>
                <div className="mt-1 text-xs font-body text-white/55">Merits-leading experience</div>
              </div>
              <div className="sm:px-8">
                <div className="text-5xl font-heading-bold tracking-tight text-white drop-shadow">
                  <AnimatedCounter value={341} duration={1.3} delay={0.2} />
                </div>
                <div className="mt-2 text-xs font-body-medium uppercase tracking-[0.22em] text-white/70">Satisfied Clients</div>
                <div className="mt-1 text-xs font-body text-white/55">Merits-leading experience</div>
              </div>
            </motion.div>
            </motion.div>
          </div>
        </section>
      </SectionFade>

      {/* Scroll to top */}
      <motion.a
        href="#"
        className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition hover:bg-blue-600 hover:shadow-xl btn-glow"
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.a>

      <SectionFade className="border-t border-gray-100"><IndustriesSlider /></SectionFade>

      {/* Feature cards — blog-post style (per reference image) */}
   
      {/* Feature cards + logo strip (single bordered container) */}
      <SectionFade effect="3d">
        <div className="max-w-full">
          <div className="overflow-hidden rounded-3xl border-2 border-b-0 border-blue-200 bg-white shadow-depth-lg mr-[-5] shadow-gray-900/5">
            {/* Feature cards — 3-up layout (per reference image) */}
            <section className="bg-white py-8 lg:py-10">
              <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <motion.div
                  className="grid grid-cols-1 gap-6 lg:grid-cols-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  variants={{
                    hidden: { opacity: 1 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
                  }}
                >
                  {/* Card 01 */}
                  <motion.article
                    className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md will-change-transform"
                    variants={{
                      hidden: { opacity: 0, y: 18, scale: 0.985 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { type: "spring", stiffness: 140, damping: 22, mass: 0.9 },
                      },
                    }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.8 }}
                  >
                    <div className="relative overflow-hidden">
                      <TiltCard className="block">
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src="/Ghost employees.png"
                            alt="Worker at biometric gate"
                            fill
                            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>
                      </TiltCard>
                      <div className="pointer-events-none absolute bottom-4 left-4 text-4xl font-heading-bold tracking-tight text-gray-900/35">
                        01
                      </div>
                    </div>

                    <div className="px-6 pb-7 pt-6">
                      <div className="text-xs font-body italic text-gray-500">Workforce verification</div>
                      <h2 className="mt-2 text-lg font-heading-bold leading-snug tracking-tight text-gray-900 sm:text-xl">
                        No More Ghost Employees — <br /> Just Verified Workforce
                      </h2>
                      <p className="mt-3 text-sm font-body leading-relaxed text-gray-600">
                        Eliminate ghost employees with biometric authentication, real-time tracking, and geofencing. Automated payroll and audit trails ensure accurate records, prevent fraud, and keep your workforce fully compliant.
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            href="#contact"
                            className="btn-primary btn-glow inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm text-white shadow-md transition hover:bg-blue-600"
                          >
                            Start A Project
                          </Link>
                        </motion.div>
                        <motion.a
                          href="tel:08027745220"
                          className="btn-secondary inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                          aria-label="Call us"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Call Us: 08027745220
                        </motion.a>
                        <span className="text-xs font-body text-gray-500">For any question</span>
                      </div>

                      <div className="mt-6 h-px w-14 bg-gray-200" aria-hidden />
                    </div>
                  </motion.article>

                  {/* Card 02 */}
                  <motion.article
                    className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md will-change-transform"
                    variants={{
                      hidden: { opacity: 0, y: 18, scale: 0.985 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { type: "spring", stiffness: 140, damping: 22, mass: 0.9 },
                      },
                    }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.8 }}
                  >
                    <div className="relative overflow-hidden">
                      <TiltCard className="block">
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src="/Pilferage.png"
                            alt="Worker with tablet"
                            fill
                            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>
                      </TiltCard>
                      <div className="pointer-events-none absolute bottom-4 left-4 text-4xl font-heading-bold tracking-tight text-gray-900/35">
                        02
                      </div>
                    </div>

                    <div className="px-6 pb-7 pt-6">
                      <div className="text-xs font-body italic text-gray-500">Access intelligence</div>
                      <h2 className="mt-2 text-lg font-heading-bold leading-snug tracking-tight text-gray-900 sm:text-xl">
                        Prevent Pilferage With Smart <br /> Access Control
                      </h2>
                      <p className="mt-3 text-sm font-body leading-relaxed text-gray-600">
                        Ensure only authorized personnel access your premises with real-time movement tracking and intelligent, contract-based entry rules. Our system helps prevent pilferage, reduce theft, and eliminate misuse of resources.
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            href="#contact"
                            className="btn-primary btn-glow inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm text-white shadow-md transition hover:bg-blue-600"
                          >
                            Start A Project
                          </Link>
                        </motion.div>
                        <motion.a
                          href="tel:08027745220"
                          className="btn-secondary inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                          aria-label="Call us"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Call Us: 08027745220
                        </motion.a>
                        <span className="text-xs font-body text-gray-500">For any question</span>
                      </div>

                      <div className="mt-6 h-px w-14 bg-gray-200" aria-hidden />
                    </div>
                  </motion.article>

                  {/* Card 03 */}
                  <motion.article
                    className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md will-change-transform"
                    variants={{
                      hidden: { opacity: 0, y: 18, scale: 0.985 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { type: "spring", stiffness: 140, damping: 22, mass: 0.9 },
                      },
                    }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.8 }}
                  >
                    <div className="relative overflow-hidden">
                      <TiltCard className="block">
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                          <Image
                            src="/ESG-Aligned Compliance.png"
                            alt="Workers reviewing documents"
                            fill
                            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                        </div>
                      </TiltCard>
                      <div className="pointer-events-none absolute bottom-4 left-4 text-4xl font-heading-bold tracking-tight text-gray-900/35">
                        03
                      </div>
                    </div>

                    <div className="px-6 pb-7 pt-6">
                      <div className="text-xs font-body italic text-gray-500">ESG compliance</div>
                      <h2 className="mt-2 text-lg font-heading-bold leading-snug tracking-tight text-gray-900 sm:text-xl">
                        Driving ESG-Aligned <br /> Compliance
                      </h2>
                      <p className="mt-3 text-sm font-body leading-relaxed text-gray-600">
                        Stay aligned with region-specific compliance norms and labor laws while fostering a safe and transparent workplace. The system supports ethical labor practices and reinforces the Social and Governance pillars of your ESG commitments.
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                          <Link
                            href="#contact"
                            className="btn-primary btn-glow inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-2.5 text-sm text-white shadow-md transition hover:bg-blue-600"
                          >
                            Start A Project
                          </Link>
                        </motion.div>
                        <motion.a
                          href="tel:08027745220"
                          className="btn-secondary inline-flex items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                          aria-label="Call us"
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Call Us: 08027745220
                        </motion.a>
                        <span className="text-xs font-body text-gray-500">For any question</span>
                      </div>

                      <div className="mt-6 h-px w-14 bg-gray-200" aria-hidden />
                    </div>
                  </motion.article>
                </motion.div>
              </div>
            </section>
            <SectionFade><BrandsSlider /></SectionFade>
         
          </div>
        </div>
      </SectionFade>
      {/* <SectionFade><BrandsSlider /></SectionFade> */}

      {/* Contact */}
      <SectionFade id="contact" className="relative py-10 lg:py-14">
        <div className="relative">
          <div className="grid overflow-hidden  lg:grid-cols-[57%_43%]">
            {/* Left image (separate from form component) */}
            <div className="relative">
              <Image
                src="/Gemini_Generated_Image_6mw0x76mw0x76mw0.png"
                alt="Request a consultation"
                fill
                className=""
                sizes="(max-width: 1024px) 110vw, 100vw"
                priority={false}
              />
              {/* <div className="absolute inset-0 bg-black/20" aria-hidden /> */}
            </div>

            {/* Right form */}
            <div className="p-8 lg:p-12">
              <FadeUp>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Request a Free Consultation
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
                  Perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque.
                </p>
                <div className="mt-5 h-1 w-10 rounded-full bg-emerald-500" aria-hidden />
                <FadeUp delay={0.1} className="mt-10">
                  <ContactForm />
                </FadeUp>
              </FadeUp>
            </div>
          </div>
        </div>
      </SectionFade>
    </div>
  );
}
