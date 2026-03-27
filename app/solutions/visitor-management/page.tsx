"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const featuresAndBenefits = [
  {
    title: "Streamlined Visitor Check-in",
    circleColor: "bg-orange-500",
    description: "Our system simplifies the check-in process for visitors, minimizing wait times and enhancing overall efficiency.",
    benefit: "Improved Visitor Experience and Reduced Queue Congestion.",
  },
  {
    title: "Real-time Visitor Monitoring",
    circleColor: "bg-pink-500",
    description: "Supervisors can monitor visitor activity in real-time, enabling proactive security measures and rapid response to any incidents.",
    benefit: "Heightened Security and Incident Management.",
  },
  {
    title: "Visitor Badge Printing",
    circleColor: "bg-yellow-500",
    description: "Instantly print customized visitor badges upon check-in, providing clear identification and enhancing on-site security.",
    benefit: "Improved Visual Identification and Enhanced Security Measures.",
  },
  {
    title: "Visitor Analytics and Reporting",
    circleColor: "bg-blue-900",
    description: "Generate comprehensive reports and analytics on visitor traffic and demographics, facilitating informed decision-making and resource allocation.",
    benefit: "Data-driven Insights for Resource Optimization.",
  },
  {
    title: "Customizable Visitor Registration",
    circleColor: "bg-emerald-500",
    description: "Organizations can tailor registration forms to gather specific information from visitors, ensuring compliance with security protocols and regulatory requirements.",
    benefit: "Enhanced Security and Regulatory Compliance.",
  },
  {
    title: "Access Control Integration",
    circleColor: "bg-cyan-500",
    description: "Seamlessly integrate with access control systems to manage visitor access to restricted areas, enhancing overall facility security.",
    benefit: "Tightened Access Control and Improved Security Measures.",
  },
  {
    title: "Pre-registration and Pre-approval",
    circleColor: "bg-blue-800",
    description: "Allow hosts to pre-register and pre-approve visitors, streamlining the check-in process and reducing administrative overhead.",
    benefit: "Time Savings and Administrative Efficiency.",
  },
  {
    title: "Cloud-based Data Storage",
    circleColor: "bg-indigo-800",
    description: "All visitor data is securely stored in the cloud, accessible anytime and anywhere, ensuring data integrity and compliance.",
    benefit: "Convenient Access and Enhanced Data Security.",
  },
];

const scheduledSteps = [
  "Pre-register visitors",
  "Visitors to fill up questionnaires",
  "Visitors to scan the QR code",
  "Visitor check-in & badge printing",
  "Host notifications",
  "Meeting",
  "Real-time records",
];

const walkUpSteps = [
  "Visitors to scan the QR code",
  "Visitors to fill up info",
  "Host notifications & approval",
  "Visitor check-in & badge printing",
  "Meeting",
  "Real-time records",
];

const powerfulServices = [
  { title: "Integrated Applications For Enterprise", icon: "document", color: "bg-amber-500" },
  { title: "Biometric Attendance System", icon: "id", color: "bg-sky-400" },
  { title: "Access Control System", icon: "card", color: "bg-pink-500" },
  { title: "Visitor Management System", icon: "person", color: "bg-violet-500" },
  { title: "Canteen Management System", icon: "tray", color: "bg-cyan-500" },
  { title: "Contract Management System", icon: "document-pen", color: "bg-amber-500" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ServiceIcon({ icon }: { icon: string }) {
  const c = "h-6 w-6";
  return (
    <>
      {icon === "document" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
      {icon === "card" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
      {icon === "tray" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
      {icon === "id" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>}
      {icon === "person" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
      {icon === "document-pen" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
    </>
  );
}

export default function VisitorManagementPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero – dark with reception-style backdrop */}
        <motion.section
          className="relative min-h-[320px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gray-900" />
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=60"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gray-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.12),transparent)]" />
          {/* Reception-style badge */}
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 rounded-2xl border border-cyan-400/50 bg-gray-800/90 px-8 py-3 backdrop-blur-sm shadow-lg">
            <span className="text-lg font-semibold tracking-widest text-white">RECEPTION</span>
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              Visitor Management
            </motion.h1>
            <motion.nav
              className="mt-4 text-sm text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.25 }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="text-white hover:text-white/90 transition-colors">
                Home
              </Link>
              <span className="mx-2 text-white/80">/</span>
              <span className="text-blue-400 font-medium">Visitor Management</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Content – flow diagram left, text right */}
        <section className="py-8 lg:py-12 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              {/* Left – visitor flow diagram: person at kiosk + connected nodes */}
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                <div className="relative w-full max-w-md aspect-square">
                  <svg viewBox="0 0 380 380" className="w-full h-full" aria-hidden>
                    {/* Connecting lines from center (190,190) to each node */}
                    {[
                      { cx: 190, cy: 60 },
                      { cx: 310, cy: 120 },
                      { cx: 310, cy: 260 },
                      { cx: 190, cy: 320 },
                      { cx: 70, cy: 260 },
                      { cx: 70, cy: 120 },
                    ].map((node, i) => {
                      const dx = node.cx - 190;
                      const dy = node.cy - 190;
                      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                      const ux = dx / dist;
                      const uy = dy / dist;
                      const x1 = 190 + 55 * ux;
                      const y1 = 190 + 55 * uy;
                      const x2 = node.cx - 28 * ux;
                      const y2 = node.cy - 28 * uy;
                      return (
                        <g key={i}>
                          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgb(94 234 212 / 0.5)" strokeWidth="2" strokeLinecap="round" />
                          <polygon
                            points={`${x2},${y2} ${x2 + 10 * ux + 4 * uy},${y2 + 10 * uy - 4 * ux} ${x2 + 10 * ux - 4 * uy},${y2 + 10 * uy + 4 * ux}`}
                            fill="rgb(94 234 212)"
                          />
                        </g>
                      );
                    })}
                    {/* Center: kiosk + person */}
                    <rect x="140" y="140" width="100" height="100" rx="12" fill="rgb(51 65 85)" stroke="rgb(94 234 212 / 0.6)" strokeWidth="2" />
                    <circle cx="190" cy="175" r="18" fill="rgb(148 163 184)" />
                    <rect x="165" y="198" width="50" height="35" rx="4" fill="rgb(100 116 139)" />
                    <rect x="158" y="155" width="24" height="28" rx="2" fill="rgb(71 85 105)" />
                    <rect x="198" y="155" width="24" height="28" rx="2" fill="rgb(71 85 105)" />
                    {/* Node 1 – Visitor (top) */}
                    <circle cx="190" cy="32" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <circle cx="190" cy="28" r="8" fill="none" stroke="rgb(148 163 184)" strokeWidth="1.5" />
                    <path d="M190 38 q-12 8 -12 14 v4 h24 v-4 q0 -6 -12 -14z" fill="rgb(148 163 184)" />
                    {/* Node 2 – Monitor (top-right) */}
                    <circle cx="338" cy="120" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <rect x="326" y="105" width="24" height="18" rx="2" fill="rgb(71 85 105)" />
                    <rect x="328" y="107" width="20" height="14" fill="rgb(34 211 238 / 0.3)" />
                    <rect x="332" y="125" width="12" height="4" fill="rgb(100 116 139)" />
                    {/* Node 3 – Printer (bottom-right) */}
                    <circle cx="338" cy="260" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <rect x="324" y="242" width="28" height="22" rx="2" fill="rgb(71 85 105)" />
                    <rect x="328" y="246" width="20" height="4" fill="rgb(148 163 184)" />
                    <rect x="332" y="264" width="12" height="6" fill="rgb(100 116 139)" />
                    {/* Node 4 – ID badge (bottom) */}
                    <circle cx="190" cy="348" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <rect x="178" y="328" width="24" height="32" rx="4" fill="rgb(71 85 105)" stroke="rgb(148 163 184)" strokeWidth="1" />
                    <circle cx="190" cy="338" r="6" fill="rgb(148 163 184)" />
                    {/* Node 5 – Group (bottom-left) */}
                    <circle cx="42" cy="260" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <circle cx="35" cy="255" r="6" fill="rgb(148 163 184)" />
                    <circle cx="42" cy="258" r="6" fill="rgb(148 163 184)" />
                    <circle cx="49" cy="255" r="6" fill="rgb(148 163 184)" />
                    <path d="M32 265 q-4 6 -4 10 v3 h28 v-3 q0 -4 -4 -10" fill="rgb(148 163 184)" />
                    {/* Node 6 – Host (top-left) */}
                    <circle cx="42" cy="120" r="28" fill="rgb(30 41 59)" stroke="rgb(94 234 212)" strokeWidth="2" />
                    <circle cx="42" cy="116" r="8" fill="none" stroke="rgb(148 163 184)" strokeWidth="1.5" />
                    <path d="M42 126 q-10 6 -10 12 v4 h20 v-4 q0 -6 -10 -12z" fill="rgb(148 163 184)" />
                  </svg>
                </div>
              </motion.div>

              {/* Right – heading + paragraph */}
              <motion.div
                className="lg:pl-4"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                  Visitor Management
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                  Welcome to the future of visitor management with InOps Company&apos;s innovative Visitor Management System. Designed to revolutionize how organizations handle visitor tracking and security, our system offers a comprehensive suite of features tailored to meet the unique needs of modern businesses. Let&apos;s explore the eight key features and their corresponding benefits:
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-8 lg:py-12 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-center text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Features & Benefits
            </motion.h2>
            <div className="mx-auto mt-2 h-0.5 w-20 rounded-full bg-cyan-500" aria-hidden />
            <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
              {featuresAndBenefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: (i % 8) * 0.04 }}
                >
                  <span className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${item.circleColor} text-white`}>
                    <CheckIcon className="h-5 w-5 text-white" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    <p className="font-semibold text-blue-600 text-sm">{item.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visitor Management System – intro title + paragraph */}
        <section className="py-6 lg:py-8 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
            <motion.h2
              className="text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Visitor Management System
            </motion.h2>
            <div className="mx-auto mt-2 h-0.5 w-24 rounded-full bg-cyan-500" aria-hidden />
            <motion.p
              className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.1 }}
            >
              InOps Company&apos;s Visitor Management System is a holistic solution for tracking and securing every visit. From streamlined check-in to real-time monitoring, we deliver efficiency and peace of mind. Experience the future of visitor management today.
            </motion.p>
          </div>
        </section>

        {/* Two flow circles – Scheduled visits & Walk-up visits */}
        <section className="py-8 lg:py-12 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <motion.div
              className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              {/* Scheduled visits */}
              <div className="flex flex-col items-center">
                <div className="relative w-64 h-64 rounded-full bg-blue-700 flex items-center justify-center border-2 border-cyan-400/40 shadow-xl">
                  <span className="text-white font-bold text-center text-lg px-4">Scheduled visits</span>
                </div>
                <ul className="mt-6 space-y-2 w-full max-w-xs text-sm text-gray-600">
                  {scheduledSteps.map((step, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Walk-up visits */}
              <div className="flex flex-col items-center">
                <div className="relative w-64 h-64 rounded-full bg-cyan-600 flex items-center justify-center border-2 border-cyan-400/40 shadow-xl">
                  <span className="text-white font-bold text-center text-lg px-4">Walk-up visits</span>
                </div>
                <ul className="mt-6 space-y-2 w-full max-w-xs text-sm text-gray-600">
                  {walkUpSteps.map((step, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Powerful Services for Your Business */}
        <section className="py-8 lg:py-12 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Powerful Services for <span className="underline decoration-orange-400 decoration-2 underline-offset-2">Your Business</span>
            </motion.h2>
            <div className="mt-2 h-0.5 w-20 rounded-full bg-cyan-500" />
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {powerfulServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.05 }}
                >
                  <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${service.color} text-white`}>
                    <ServiceIcon icon={service.icon} />
                  </span>
                  <h3 className="font-semibold text-gray-900">{service.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Empowering Smarter Workplaces + phone mockup */}
        <section className="py-8 lg:py-12 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <motion.div
                className="lg:pr-8"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                <h2 className="text-2xl font-bold text-blue-400 sm:text-3xl">
                  Empowering Smarter Workplaces Across all Industries
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                  InOps Tech empowers smarter workplaces across diverse industries by providing innovative technology solutions tailored to optimize efficiency, collaboration, and productivity.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-600"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
              >
                <div className="relative w-[280px] rounded-[2.5rem] border-[10px] border-gray-200 bg-gray-50 p-2 shadow-2xl">
                  <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-50" aria-hidden />
                  <div className="overflow-hidden rounded-[1.5rem] bg-gray-50 border border-gray-200">
                    <div className="bg-gray-200/80 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                      <span className="font-semibold text-gray-900 text-sm">My Attendance</span>
                    </div>
                    <div className="flex gap-2 px-3 py-2 border-b border-gray-200">
                      <span className="text-xs font-medium text-blue-400 py-1 px-2 rounded bg-cyan-500/20">week</span>
                      <span className="text-xs text-gray-400 py-1 px-2">month</span>
                    </div>
                    <div className="px-3 py-2 text-xs text-gray-400 text-center">15-Jan-2026 - 18-Jan-2026</div>
                    <div className="px-3 pb-2 space-y-1.5">
                      {[
                        { label: "ARRIVAL", time: "09:00", color: "bg-emerald-500" },
                        { label: "MEETING", time: "09:40", color: "bg-cyan-500" },
                        { label: "LUNCH", time: "13:00", color: "bg-amber-500" },
                        { label: "WORKING", time: "14:00", color: "bg-blue-500" },
                        { label: "LEAVING", time: "18:00", color: "bg-rose-500" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <span className={`w-1.5 h-6 rounded-full ${item.color}`} aria-hidden />
                          <span className="text-gray-400">{item.label}</span>
                          <span className="text-gray-600 ml-auto">{item.time}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-gray-200 text-center text-sm text-gray-400">Total Hours 08:43</div>
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
