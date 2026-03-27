"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const assetSegments = [
  { label: "Asset Accounting", color: "#dc2626" },
  { label: "Asset Tracking", color: "#16a34a" },
  { label: "Maintenance Management", color: "#ea580c" },
  { label: "Business Intelligence", color: "#2563eb" },
  { label: "Capital Expenditure", color: "#eab308" },
];

const featuresAndBenefits = [
  {
    title: "Asset Tracking",
    circleColor: "bg-orange-500",
    description: "Our FAM system provides a centralized database for tracking all fixed assets, including their location, status, and maintenance history.",
    benefit: "Improved Visibility and Control Over Asset Inventory.",
  },
  {
    title: "Depreciation Management",
    circleColor: "bg-pink-500",
    description: "Automate depreciation calculations based on various methods such as straight-line or declining balance, ensuring accurate financial reporting and compliance.",
    benefit: "Simplified Accounting Processes and Compliance Adherence.",
  },
  {
    title: "Asset Lifecycle Management",
    circleColor: "bg-yellow-500",
    description: "Manage the entire lifecycle of assets from acquisition to disposal, ensuring optimal utilization and maximizing return on investment.",
    benefit: "Improved Asset Utilization and Cost Savings.",
  },
  {
    title: "Integration with Accounting Systems",
    circleColor: "bg-orange-500",
    description: "Seamlessly integrate with accounting software to ensure accurate asset valuation, financial reporting, and budgeting.",
    benefit: "Streamlined Financial Processes and Improved Decision-making.",
  },
  {
    title: "Barcode and RFID Integration",
    circleColor: "bg-emerald-500",
    description: "Easily track assets using barcode or RFID tags, enabling quick and accurate asset identification and inventory management.",
    benefit: "Streamlined Asset Identification and Reduced Manual Errors.",
  },
  {
    title: "Maintenance Scheduling",
    circleColor: "bg-cyan-500",
    description: "Schedule and track asset maintenance activities, including preventive maintenance tasks, to prolong asset lifespan and minimize downtime.",
    benefit: "Reduced Equipment Downtime and Increased Operational Efficiency.",
  },
  {
    title: "Compliance Management",
    circleColor: "bg-blue-600",
    description: "Stay compliant with regulatory requirements and industry standards by tracking asset-related documentation and certifications.",
    benefit: "Minimized Legal Risks and Improved Audit Preparedness.",
  },
  {
    title: "Customizable Reporting",
    circleColor: "bg-blue-700",
    description: "Generate customizable reports on asset performance, utilization, and maintenance history, providing valuable insights for strategic decision-making.",
    benefit: "Enhanced Data Visibility and Informed Decision-making.",
  },
];

const powerfulServices = [
  { title: "Integrated Applications For Enterprise", icon: "document", color: "bg-amber-500" },
  { title: "Access Control System", icon: "card", color: "bg-pink-500" },
  { title: "Canteen Management System", icon: "tray", color: "bg-cyan-500" },
  { title: "Biometric Attendance System", icon: "id", color: "bg-sky-400" },
  { title: "Visitor Management System", icon: "person", color: "bg-violet-500" },
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

export default function FixedAssetManagementPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero – dark industrial (factory/warehouse) backdrop */}
        <motion.section
          className="relative min-h-[320px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gray-900" />
          <div className="absolute inset-0 opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=60"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gray-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.15),transparent)]" />
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              Fixed Asset Management
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
              <span className="text-blue-400 font-medium">Fixed Asset Management</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Content – asset register diagram left, text right */}
        <section className="py-8 lg:py-12 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              {/* Left – circular diagram: ASSET REGISTER center + segments */}
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                <div className="relative w-full max-w-md aspect-square">
                  <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden>
                    {/* 5 segments as pie slices (72° each), starting from top */}
                    {assetSegments.map((seg, i) => {
                      const startAngle = (i * 72 - 90) * (Math.PI / 180);
                      const endAngle = ((i + 1) * 72 - 90) * (Math.PI / 180);
                      const r1 = 95;
                      const r2 = 180;
                      const cx = 200;
                      const cy = 200;
                      const x1 = cx + r1 * Math.cos(startAngle);
                      const y1 = cy + r1 * Math.sin(startAngle);
                      const x2 = cx + r2 * Math.cos(startAngle);
                      const y2 = cy + r2 * Math.sin(startAngle);
                      const x3 = cx + r2 * Math.cos(endAngle);
                      const y3 = cy + r2 * Math.sin(endAngle);
                      const x4 = cx + r1 * Math.cos(endAngle);
                      const y4 = cy + r1 * Math.sin(endAngle);
                      const path = `M ${cx} ${cy} L ${x1} ${y1} L ${x2} ${y2} A ${r2} ${r2} 0 0 1 ${x3} ${y3} L ${x4} ${y4} Z`;
                      const midAngle = (startAngle + endAngle) / 2;
                      const tx = cx + 140 * Math.cos(midAngle);
                      const ty = cy + 140 * Math.sin(midAngle);
                      return (
                        <g key={i}>
                          <path
                            d={path}
                            fill={seg.color}
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="1"
                          />
                          <text
                            x={tx}
                            y={ty}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            style={{ fontSize: "11px", fontWeight: 600 }}
                          >
                            {seg.label}
                          </text>
                        </g>
                      );
                    })}
                    {/* Center circle – ASSET REGISTER (light blue-green) */}
                    <circle
                      cx="200"
                      cy="200"
                      r="88"
                      fill="rgb(45 212 191)"
                      fillOpacity="0.9"
                      stroke="rgb(94 234 212)"
                      strokeWidth="2"
                    />
                    <text
                      x="200"
                      y="195"
                      textAnchor="middle"
                      fill="white"
                      style={{ fontSize: "13px", fontWeight: 700 }}
                    >
                      ASSET
                    </text>
                    <text
                      x="200"
                      y="212"
                      textAnchor="middle"
                      fill="white"
                      style={{ fontSize: "13px", fontWeight: 700 }}
                    >
                      REGISTER
                    </text>
                  </svg>
                  {/* Labels list for small screens */}
                  <div className="mt-4 flex flex-wrap justify-center gap-2 lg:mt-6">
                    {assetSegments.map((seg, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-lg px-2.5 py-1.5 text-xs font-medium text-white"
                        style={{ backgroundColor: seg.color }}
                      >
                        {seg.label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right – heading + paragraphs */}
              <motion.div
                className="lg:pl-4"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                  Fixed Asset Management
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                  Welcome to InOps Company&apos;s Fixed Asset Management (FAM) solution, where we simplify and streamline the management of your organization&apos;s valuable assets.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                  Our comprehensive FAM system is designed to make asset tracking and maintenance smooth, reliable, and efficient. Explore the eight key features and their corresponding benefits:
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

        {/* Fixed Asset Management solution – intro title + paragraph */}
        <section className="py-6 lg:py-8 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
            <motion.h2
              className="text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Fixed Asset Management solution
            </motion.h2>
            <div className="mx-auto mt-2 h-0.5 w-24 rounded-full bg-cyan-500" aria-hidden />
            <motion.p
              className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.1 }}
            >
              With InOps Company&apos;s Fixed Asset Management solution, organizations can effectively manage their assets throughout their lifecycle, from acquisition to disposal. By leveraging our system&apos;s advanced features and corresponding benefits, businesses can improve operational efficiency, reduce costs, and ensure compliance with regulatory requirements. Experience the power of streamlined asset management with InOps Company today.
            </motion.p>
          </div>
        </section>

        {/* Laptop – Asset Distribution dashboard mockup */}
        <section className="py-8 lg:py-12 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <motion.div
              className="rounded-b-2xl border border-gray-600/80 bg-slate-800 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              <div className="flex items-center gap-2 border-b border-gray-600/80 bg-slate-700/80 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2 text-sm font-medium text-slate-300">Asset Distribution</span>
              </div>
              <div className="flex min-h-[320px]">
                <aside className="w-44 flex-shrink-0 border-r border-gray-600/80 bg-slate-800/80 p-3 text-xs text-slate-400 space-y-1">
                  {["Dashboard", "Assets", "Maintenance", "Transactions", "Reports", "New Profile", "Settings", "Change Password", "Change Theme", "Sign Out"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">{item}</div>
                  ))}
                </aside>
                <div className="flex-1 p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {[["71", "Total"], ["2", "Pending"], ["5", "Active"], ["12", "Reports"]].map(([num, label], i) => (
                      <div key={i} className="rounded-lg border border-gray-600/80 bg-slate-700/50 p-3 text-center">
                        <span className="text-lg font-bold text-white">{num}</span>
                        <span className="block text-xs text-slate-400">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Asset Count Location Wise", "Asset Value Location Wise", "Asset Count Category Wise", "Asset Value Category Wise"].map((title, i) => (
                      <div key={i} className="rounded-lg border border-gray-600/80 bg-slate-700/30 p-3">
                        <p className="text-xs font-medium text-slate-300 mb-2">{title}</p>
                        <div className="flex items-end gap-1 h-20">
                          {[40, 65, 35, 80, 55].map((h, j) => (
                            <div key={j} className="flex-1 rounded-t bg-orange-500" style={{ height: `${h}%` }} aria-hidden />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
              Powerful Services for Your Business
            </motion.h2>
            <div className="mt-2 h-0.5 w-20 rounded-full bg-cyan-500" />
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {powerfulServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-cyan-100"
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
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Empowering Smarter Workplaces Across all Industries
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                  InOps Tech empowers smarter workplaces across diverse industries by providing innovative technology solutions tailored to optimize efficiency, collaboration, and productivity.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-500"
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
                <div className="relative w-[280px] rounded-[2.5rem] border-[10px] border-gray-800 bg-slate-800 p-2 shadow-2xl">
                  <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-800" aria-hidden />
                  <div className="overflow-hidden rounded-[1.5rem] bg-slate-800 border border-gray-600/80">
                    <div className="bg-slate-700/80 px-4 py-3 border-b border-gray-600/80 flex items-center justify-between">
                      <span className="font-semibold text-slate-100 text-sm">My Attendance</span>
                    </div>
                    <div className="flex gap-2 px-3 py-2 border-b border-gray-600/80">
                      <span className="text-xs font-medium text-white py-1 px-2 rounded bg-emerald-500">PRESENT</span>
                      <span className="text-xs text-slate-400 py-1 px-2">ABSENT</span>
                    </div>
                    <div className="px-3 py-2 text-xs text-slate-400 text-center">12-Jun-2018 - 18-Jun-2018</div>
                    <div className="px-3 pb-2 space-y-1.5 max-h-[180px] overflow-y-auto">
                      {[
                        { time: "17:00", status: "APPROVED", color: "bg-emerald-500" },
                        { time: "09:00", status: "APPROVED", color: "bg-emerald-500" },
                        { time: "—", status: "WEEKEND", color: "bg-slate-500" },
                        { time: "—", status: "HOLIDAY", color: "bg-rose-500" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <span className={`w-1.5 h-5 rounded-full ${item.color} flex-shrink-0`} aria-hidden />
                          <span className="text-slate-200">{item.time}</span>
                          <span className="text-slate-400 ml-auto">{item.status}</span>
                        </div>
                      ))}
                    </div>
                    <button type="button" className="mx-3 mb-2 w-[calc(100%-24px)] rounded-lg bg-emerald-500 py-2.5 text-sm font-semibold text-white">CHECK IN</button>
                    <div className="p-3 border-t border-gray-600/80 text-center text-sm text-slate-400">Total Hours (39:42)</div>
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
