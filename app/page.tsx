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
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Hero: background + overlay extend behind navbar so navbar blends into hero */}
      <SectionFade>
        <section className="relative min-h-[90vh] overflow-hidden flex flex-col items-center justify-center -mt-[4.5rem] pt-[9rem]">
          <HeroBackgroundSlider onPhaseChange={setHeroDarkPhase} />
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
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-button-secondary uppercase tracking-wider text-white backdrop-blur-sm">
                    Contract Labour Management
                  </span>
                </motion.div>
                <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 16 } }} transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }} className="mt-5">
                  <h1 className="font-sans text-xl font-heading leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl xl:text-5xl antialiased">
                    Turn Compliance into Opportunity with Smart CLMS
                  </h1>
                </motion.div>
                <div className="mt-6 rounded-xl bg-black/35 px-5 py-4 backdrop-blur-sm sm:px-6 sm:py-5">
                  <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                      One platform for attendance, payroll, compliance, and access control. Trusted by enterprises for workforce management.
                    </p>
                  </motion.div>
                  <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }} className="mt-2">
                    <p className="mx-auto max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
                      Will give you a complete account of the system.
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 14 } }}
                  transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                  className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                  <Link
                    href="#contact"
                    className="btn-primary inline-flex items-center justify-center rounded-xl bg-blue-500 px-8 py-3.5 text-base text-white shadow-lg transition hover:bg-blue-600 hover:shadow-xl"
                  >
                    Get In Touch
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="#solutions"
                    className="btn-secondary inline-flex items-center justify-center rounded-xl bg-gray-700 px-8 py-3.5 text-base text-white shadow-lg transition hover:bg-gray-800"
                  >
                    Our Solutions
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </SectionFade>

      {/* Why Inops */}
      <AnimatedSection id="about" className="relative py-28 lg:py-40 bg-gray-50">
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
          <AnimatedCardGrid className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      <SectionFade><FeaturesSlider /></SectionFade>
      <SectionFade><ModulesSlider /></SectionFade>

      {/* Smart Contract Labour */}
      <SectionFade>
        <section className="grid min-h-[min(100vh,44rem)] grid-cols-1 lg:grid-cols-2 bg-white">
          <motion.div
            className="relative min-h-[28rem] bg-gray-100 lg:min-h-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="absolute inset-0">
              <Image src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=85" alt="Worker at access control" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
              <div className="relative h-full w-full max-w-sm">
                <svg className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2" preserveAspectRatio="none">
                  <line x1="50%" y1="50%" x2="78%" y2="22%" stroke="rgba(59,130,246,0.5)" strokeWidth="2" strokeDasharray="8 6" />
                  <line x1="50%" y1="50%" x2="72%" y2="78%" stroke="rgba(59,130,246,0.5)" strokeWidth="2" strokeDasharray="8 6" />
                </svg>
                <div className="absolute right-0 top-0 flex h-24 w-24 items-center justify-center rounded-full border-2 border-white bg-white/95 shadow-xl lg:h-28 lg:w-28">
                  <div className="text-center text-[10px] font-medium text-gray-700 lg:text-xs">
                    <span className="block">12:02:49</span>
                    <span className="block text-gray-500">2024-02-28 Thu</span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-2 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-white/95 shadow-lg lg:h-24 lg:w-24">
                  <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <rect x="2" y="10" width="6" height="8" rx="1" /><rect x="16" y="10" width="6" height="8" rx="1" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center bg-gray-50 px-8 py-20 lg:px-16 lg:py-28"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.12 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-blue-700"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            >
              Hardware + Software
            </motion.span>
            <motion.h2
              className="mt-6 text-2xl font-heading-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.28 }}
            >
              Smart Contract Labour Management With Integrated Hardware
            </motion.h2>
            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.36 }}
            >
              Manage your contract workforce efficiently with our software that seamlessly integrates with biometric hardware—including face, card, and fingerprint readers. Track real-time attendance, manage shifts, and generate contractor-wise reports—all from a single platform.
            </motion.p>
            <motion.div
              className="mt-10 flex gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div className="h-1 w-16 rounded-full bg-blue-500" />
              <div className="h-1 w-8 rounded-full bg-blue-300" />
            </motion.div>
          </motion.div>
        </section>
      </SectionFade>

      {/* Scroll to top */}
      <motion.a
        href="#"
        className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition hover:bg-blue-600 hover:shadow-xl"
        aria-label="Scroll to top"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.a>

      <SectionFade><IndustriesSlider /></SectionFade>

      {/* No More Ghost Employees */}
      <SectionFade>
        <section className="relative py-28 lg:py-40 bg-gray-50">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-24 lg:px-12">
            <motion.div
              className="relative flex-shrink-0 lg:order-1"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
            >
              <TiltCard className="block">
                <div className="relative aspect-square w-80 overflow-hidden rounded-2">
                  <Image src="/Ghost employees.png" alt="Worker at biometric gate" fill className="object-cover object-center" sizes="(max-width: 1024px) 320px, 448px" />
                </div>
              </TiltCard>
            </motion.div>
            <motion.div
              className="flex flex-1 flex-col justify-center text-center lg:order-2 lg:text-left"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.12 }}
            >
              <h2 className="text-2xl font-heading-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                No More Ghost Employees — Just Verified Workforce
              </h2>
              <p className="mt-8 max-w-xl text-base font-body leading-relaxed text-gray-600 sm:text-lg">
                Eliminate ghost employees with biometric authentication, real-time tracking, and geofencing. Automated payroll and audit trails ensure accurate records, prevent fraud, and keep your workforce fully compliant.
              </p>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <Link href="#contact" className="btn-primary inline-flex items-center justify-center rounded-xl bg-blue-500 px-8 py-4 text-base text-white shadow-md transition hover:bg-blue-600 hover:shadow-lg">
                  Start A Project
                </Link>
                <a href="tel:08027745220" className="btn-secondary flex items-center gap-3 rounded-full border-2 border-blue-200 bg-blue-50 px-5 py-3 text-blue-700 transition hover:border-blue-300 hover:bg-blue-100" aria-label="Call us">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  <span className="font-button">Call Us: 08027745220</span>
                </a>
                <span className="text-sm font-body text-gray-500">For any question</span>
              </div>
            </motion.div>
          </div>
        </section>
      </SectionFade>

      {/* Prevent Pilferage */}
      <SectionFade>
        <section className="relative py-28 lg:py-40 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-24 lg:px-12">
            <motion.div
              className="flex flex-1 flex-col justify-center text-center lg:text-left"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
            >
              <h2 className="text-2xl font-heading-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                Prevent Pilferage With Smart Access Control
              </h2>
              <p className="mt-8 max-w-xl text-base font-body leading-relaxed text-gray-600 sm:text-lg">
                Ensure only authorized personnel access your premises with real-time movement tracking and intelligent, contract-based entry rules. Our system helps prevent pilferage, reduce theft, and eliminate misuse of resources.
              </p>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <Link href="#contact" className="btn-primary inline-flex items-center justify-center rounded-xl bg-blue-500 px-8 py-4 text-base text-white shadow-md transition hover:bg-blue-600 hover:shadow-lg">
                  Start A Project
                </Link>
                <a href="tel:08027745220" className="btn-secondary flex items-center gap-3 rounded-full border-2 border-blue-200 bg-blue-50 px-5 py-3 text-blue-700 transition hover:border-blue-300 hover:bg-blue-100" aria-label="Call us">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                  <span className="font-button">Call Us: 08027745220</span>
                </a>
                <span className="text-sm font-body text-gray-500">For any question</span>
              </div>
            </motion.div>
            <motion.div
              className="relative flex-shrink-0"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.12 }}
            >
              <TiltCard className="block">
                <div className="relative aspect-square w-80 overflow-hidden rounded-2xl">
                  <Image src="/Pilferage.png" alt="Worker with tablet" fill className="object-cover object-center" sizes="(max-width: 1024px) 320px, 448px" />
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </section>
      </SectionFade>

      {/* Driving ESG */}
      <SectionFade>
        <section className="relative py-28 lg:py-40 bg-gray-50">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-24 lg:px-12">
            <motion.div
              className="relative flex-shrink-0"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1] }}
            >
              <TiltCard className="block">
                <div className="relative aspect-square w-80 overflow-hidden rounded-2xl">
                  <Image src="/ESG-Aligned Compliance.png" alt="Workers reviewing documents" fill className="object-cover object-center" sizes="(max-width: 1024px) 320px, 448px" />
                </div>
              </TiltCard>
            </motion.div>
            <motion.div
              className="flex flex-1 flex-col justify-center text-center lg:text-left"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.33, 1, 0.68, 1], delay: 0.12 }}
            >
              <h2 className="text-2xl font-heading-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                Driving ESG-Aligned Compliance
              </h2>
              <p className="mt-8 max-w-xl text-base font-body leading-relaxed text-gray-600 sm:text-lg">
                Stay aligned with region-specific compliance norms and labor laws while fostering a safe and transparent workplace. The system supports ethical labor practices and reinforces the Social and Governance pillars of your ESG commitments.
              </p>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <Link href="#contact" className="btn-primary inline-flex items-center justify-center rounded-xl bg-blue-500 px-8 py-4 text-base text-white shadow-md transition hover:bg-blue-600 hover:shadow-lg">
                  Start A Project
                </Link>
                <a href="tel:08027745220" className="btn-secondary flex items-center gap-3 rounded-full border-2 border-blue-200 bg-blue-50 px-5 py-3 text-blue-700 transition hover:border-blue-300 hover:bg-blue-100" aria-label="Call us">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                  <span className="font-button">Call Us: 08027745220</span>
                </a>
                <span className="text-sm font-body text-gray-500">For any question</span>
              </div>
            </motion.div>
          </div>
        </section>
      </SectionFade>

      <SectionFade><BrandsSlider /></SectionFade>

      {/* Contact */}
      <SectionFade id="contact" className="relative py-28 lg:py-40 bg-gray-50">
        <div className="relative mx-auto max-w-3xl px-6 lg:px-12">
          <FadeUp className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg lg:p-14">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-label uppercase tracking-wider text-blue-700">Get in touch</span>
              <h2 className="mt-6 text-3xl font-heading-bold tracking-tight text-gray-900 sm:text-4xl">Have Any Questions?</h2>
              <p className="mt-6 text-base font-body leading-relaxed text-gray-600">
                Tell us about your workforce and compliance needs. We'll help you find the right solution.
              </p>
            </div>
            <FadeUp delay={0.1} className="mt-10">
              <ContactForm />
            </FadeUp>
          </FadeUp>
        </div>
      </SectionFade>
    </div>
  );
}
