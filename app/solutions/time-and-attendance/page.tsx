"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const benefits = [
  { label: "Streamline Payroll", color: "bg-violet-500", icon: "payroll" },
  { label: "It Averts Lawsuits", color: "bg-pink-500", icon: "law" },
  { label: "Precise Time Tracking", color: "bg-amber-500", icon: "clock" },
  { label: "Lessen Paper Usage", color: "bg-yellow-500", icon: "docs" },
  { label: "Prevention of Tax Issues", color: "bg-emerald-500", icon: "tax" },
  { label: "Boosts Employee Satisfaction", color: "bg-cyan-500", icon: "satisfaction" },
];

const featuresAndBenefits = [
  {
    title: "Biometric Recognition",
    circleColor: "bg-amber-500",
    description: "Our device utilizes advanced biometric recognition technology, such as fingerprint scanning or facial recognition, ensuring precise identification of employees.",
    sub: { title: "Improved Accuracy", text: "By eliminating manual entry and relying on biometric authentication, our device ensures accurate attendance records, reducing errors and fraud." },
  },
  {
    title: "Cloud-Based System",
    circleColor: "bg-pink-500",
    description: "Enjoy the flexibility of accessing attendance data from anywhere via a secure cloud-based system, facilitating remote workforce management.",
    sub: { title: "Cost Savings", text: "Efficient workforce management leads to cost savings by reducing payroll errors, eliminating buddy punching, and optimizing staffing levels based on actual attendance data." },
  },
  {
    title: "Integration Compatibility",
    circleColor: "bg-yellow-500",
    description: "Seamlessly integrate our device with existing HR and payroll systems, eliminating data duplication and streamlining administrative processes.",
    sub: { title: "Employee Accountability", text: "Encourage accountability among employees with transparent attendance tracking, fostering a culture of punctuality and responsibility within the organization." },
  },
  {
    title: "Shift Scheduling",
    circleColor: "bg-teal-500",
    description: "Simplify shift scheduling and optimize workforce allocation by creating customizable schedules based on employee availability and business requirements.",
    sub: { title: "Flexible Remote Management", text: "With cloud-based accessibility, manage workforce attendance remotely, allowing for efficient monitoring and intervention regardless of location." },
  },
  {
    title: "Real-time Monitoring",
    circleColor: "bg-emerald-500",
    description: "Gain real-time insights into employee attendance with instant updates and notifications, allowing managers to address attendance issues promptly.",
    sub: { title: "Enhanced Productivity", text: "Streamlined attendance tracking minimizes time spent on administrative tasks, allowing employees to focus on their core responsibilities, thus increasing overall productivity." },
  },
  {
    title: "Customizable Reporting",
    circleColor: "bg-sky-400",
    description: "Generate detailed reports tailored to your business needs, including attendance summaries, late arrivals, and absenteeism patterns, for informed decision-making.",
    sub: { title: "Compliance Assurance", text: "Stay compliant with labor regulations and policies effortlessly as our device provides thorough documentation of attendance records for audits and compliance purposes." },
  },
  {
    title: "Geolocation Tracking",
    circleColor: "bg-blue-500",
    description: "Ensure attendance accuracy by incorporating geolocation tracking, preventing unauthorized clock-ins and enhancing security measures.",
    sub: { title: "Time Savings", text: "Automated attendance tracking saves valuable time for HR personnel and managers, enabling them to allocate resources more effectively towards strategic initiatives." },
  },
  {
    title: "User-Friendly Interface",
    circleColor: "bg-blue-700",
    description: "Our device features an intuitive and user-friendly interface, making it easy for employees to clock in/out and for administrators to manage attendance records efficiently.",
    sub: { title: "Scalability", text: "Our solution scales with your business, accommodating growth and evolving needs without compromising efficiency or performance." },
  },
];

const powerfulServices = [
  { title: "Integrated Applications For Enterprise", icon: "document", color: "bg-rose-500" },
  { title: "Access Control System", icon: "card", color: "bg-rose-500" },
  { title: "Canteen Management System", icon: "tray", color: "bg-rose-500" },
  { title: "Biometric Attendance System", icon: "id", color: "bg-violet-500" },
  { title: "Visitor Management System", icon: "person", color: "bg-violet-500" },
  { title: "Contract Management System", icon: "document-pen", color: "bg-violet-500" },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ServiceIcon({ icon, className }: { icon: string; className?: string }) {
  const c = "h-6 w-6";
  return (
    <span className={className}>
      {icon === "document" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
      {icon === "card" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
      {icon === "tray" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
      {icon === "id" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>}
      {icon === "person" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
      {icon === "document-pen" && <svg className={c} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
    </span>
  );
}

export default function TimeAndAttendancePage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero – dark blue-grey with clock illustration */}
        <motion.section
          className="relative min-h-[320px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gray-900" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='60' cy='60' r='50' fill='none' stroke='%236b7280' stroke-width='1'/%3E%3Cline x1='60' y1='60' x2='60' y2='25' stroke='%239ca3af' stroke-width='2'/%3E%3Cline x1='60' y1='60' x2='85' y2='60' stroke='%239ca3af' stroke-width='1.5'/%3E%3Ccircle cx='60' cy='60' r='4' fill='%239ca3af'/%3E%3C%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.12),transparent)]" />
          <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-32 h-40 rounded-lg bg-gray-600/30 border border-gray-500/20 hidden lg:block" aria-hidden />
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              Time & Attendance
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
              <span className="text-blue-300 font-medium">Time & Attendance</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Main content – title, intro, benefits diagram, description */}
        <section className="py-8 lg:py-12 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
              {/* Left: title + circular benefits infographic */}
              <motion.div
                className="flex flex-col items-center lg:items-start"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Time & Attendance
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed text-base lg:max-w-md">
                  Inopes Company introduces an innovative Time & Attendance Biometric Device, revolutionizing how businesses manage their workforce.
                </p>
                {/* Circular benefits infographic */}
                <div className="mt-10 relative w-full max-w-sm aspect-square mx-auto lg:mx-0">
                  <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden>
                    {/* Connecting lines from center to nodes */}
                    {benefits.map((_, i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const x1 = 200 + 75 * Math.cos(angle);
                      const y1 = 200 + 75 * Math.sin(angle);
                      const x2 = 200 + 140 * Math.cos(angle);
                      const y2 = 200 + 140 * Math.sin(angle);
                      return (
                        <line
                          key={i}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="rgba(148, 163, 184, 0.5)"
                          strokeWidth="2"
                        />
                      );
                    })}
                    {/* Center circle */}
                    <circle cx="200" cy="200" r="70" fill="rgb(30 41 59)" stroke="rgb(71 85 105)" strokeWidth="2" />
                    <text x="200" y="195" textAnchor="middle" fill="#e2e8f0" style={{ fontSize: "11px", fontWeight: 600 }}>Benefits of</text>
                    <text x="200" y="210" textAnchor="middle" fill="#e2e8f0" style={{ fontSize: "11px", fontWeight: 600 }}>Attendance</text>
                    <text x="200" y="225" textAnchor="middle" fill="#e2e8f0" style={{ fontSize: "11px", fontWeight: 600 }}>Tracking Software</text>
                    {/* Outer benefit nodes */}
                    {benefits.map((b, i) => {
                      const angle = (i * 60 - 90) * (Math.PI / 180);
                      const cx = 200 + 155 * Math.cos(angle);
                      const cy = 200 + 155 * Math.sin(angle);
                      const colors: Record<string, string> = {
                        "bg-violet-500": "#8b5cf6",
                        "bg-pink-500": "#ec4899",
                        "bg-amber-500": "#f59e0b",
                        "bg-yellow-500": "#eab308",
                        "bg-emerald-500": "#10b981",
                        "bg-cyan-500": "#06b6d4",
                      };
                      const fill = colors[b.color] || "#06b6d4";
                      const words = b.label.split(" ");
                      const line1 = words.length > 2 ? words.slice(0, 2).join(" ") : b.label;
                      const line2 = words.length > 2 ? words.slice(2).join(" ") : "";
                      return (
                        <g key={b.label}>
                          <circle cx={cx} cy={cy} r="44" fill={fill} />
                          <text x={cx} y={line2 ? cy - 4 : cy} textAnchor="middle" dominantBaseline="middle" fill="white" style={{ fontSize: "9px", fontWeight: 600 }}>{line1}</text>
                          {line2 && <text x={cx} y={cy + 8} textAnchor="middle" dominantBaseline="middle" fill="white" style={{ fontSize: "8px" }}>{line2}</text>}
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </motion.div>

              {/* Right: intro + second paragraph */}
              <motion.div
                className="lg:pt-8"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
              >
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  With cutting-edge technology and user-friendly features, our device streamlines attendance tracking, boosts productivity, and ensures accurate timekeeping. Below are eight features and benefits that set our device apart:
                </p>
                {/* Benefit list as text backup */}
                <ul className="mt-8 space-y-3">
                  {benefits.map((b, i) => (
                    <li key={b.label} className="flex items-center gap-3 text-gray-600">
                      <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${b.color} text-sm font-bold text-white`}>
                        {i + 1}
                      </span>
                      <span>{b.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-8 lg:py-12 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-center text-2xl font-bold text-white sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Features & Benefits
            </motion.h2>
            <div className="mx-auto mt-2 h-0.5 w-20 rounded-full bg-blue-500" aria-hidden />
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
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    <div>
                      <p className="font-semibold text-blue-300 text-sm">{item.sub.title}</p>
                      <p className="mt-1 text-gray-500 text-sm leading-relaxed">{item.sub.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Time & Attendance Biometric Device – title + empowerment paragraph */}
        <section className="py-6 lg:py-8 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
            <motion.h2
              className="text-2xl font-bold text-white sm:text-3xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Time & Attendance Biometric Device
            </motion.h2>
            <div className="mx-auto mt-2 h-0.5 w-16 rounded-full bg-blue-500" aria-hidden />
            <motion.p
              className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.08 }}
            >
              Inopes Company&apos;s Time & Attendance Biometric Device empowers businesses to optimize workforce management, improve operational efficiency, and drive growth. Invest in our innovative solution today and experience the transformation firsthand.
            </motion.p>
          </div>
        </section>

        {/* Product visualization – device + software on monitor */}
        <section className="py-8 lg:py-12 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                <div className="relative aspect-[4/3] max-w-md mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-gray-900 shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85"
                    alt="Time and attendance biometric device"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 px-4 py-3 font-mono text-white">
                    <p className="text-2xl font-bold">08:30</p>
                    <p className="text-xs text-gray-600">Thursday 23 November</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
              >
                <div className="relative aspect-[4/3] max-w-md mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-gray-900 shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=85"
                    alt="Attendance software dashboard on monitor"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-gray-600">
                    <span>Weekly</span>
                    <span>Planning</span>
                    <span>Reporting</span>
                    <span>John Scott</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/95 p-3 text-gray-900">
                    <p className="text-lg font-bold">01:23 — Friday 18th September</p>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      {["Present", "Absent", "Late", "Early Leave", "Overtime", "Leave Day", "Holiday"].map((l) => (
                        <span key={l} className="rounded bg-gray-200 px-2 py-0.5">{l}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Powerful Services for Your Business */}
        <section className="py-8 lg:py-12 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-2xl font-bold text-white sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Powerful Services for Your Business
            </motion.h2>
            <div className="mt-2 h-0.5 w-20 rounded-full bg-blue-500" />
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

        {/* Empowering Smarter Workplaces + mobile app */}
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
                <div className="relative w-[280px] rounded-[2.5rem] border-[10px] border-gray-200 bg-gray-100 p-2 shadow-2xl">
                  <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-100" aria-hidden />
                  <div className="overflow-hidden rounded-[1.5rem] bg-gray-100 border border-gray-200">
                    <div className="bg-gray-200/80 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                      <span className="font-semibold text-gray-900 text-sm">My Attendance</span>
                      <div className="flex gap-2">
                        <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                      </div>
                    </div>
                    <div className="flex gap-1 p-2 border-b border-gray-200">
                      <button type="button" className="flex-1 rounded-lg bg-blue-500/20 py-2 text-xs font-medium text-blue-300">SCAN</button>
                      <button type="button" className="flex-1 rounded-lg bg-gray-200 py-2 text-xs font-medium text-gray-500">ADMIN</button>
                    </div>
                    <div className="px-3 py-2 text-xs text-gray-500 font-medium text-center">&lt; 13-Jan-2019 - 19-Jan-2019 &gt;</div>
                    <div className="px-3 pb-2 space-y-2">
                      {[
                        { time: "11:00", label: "CHECK IN", color: "bg-emerald-500" },
                        { time: "14:20", label: "CHECK OUT", color: "bg-rose-500" },
                        { time: "—", label: "LEAVE DAY", color: "bg-amber-500" },
                        { time: "—", label: "HOLIDAY", color: "bg-gray-500" },
                      ].map((row) => (
                        <div key={row.label} className="flex items-center gap-2 text-sm">
                          <span className={`w-1 h-6 rounded-full ${row.color}`} aria-hidden />
                          <span className="text-gray-700">{row.time}</span>
                          <span className="text-gray-500 text-xs">{row.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-gray-200">
                      <button type="button" className="w-full rounded-lg bg-emerald-500 py-3 text-sm font-semibold text-white">Check In</button>
                    </div>
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
