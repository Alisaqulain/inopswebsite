"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const infographicSegments = [
  { label: "Discrepancies in number of meals issued", color: "#1e3a5f" },
  { label: "False/un accounted meals", color: "#2563eb" },
  { label: "Incorrect deduction from employees", color: "#991b1b" },
  { label: "Financial & material Losses.", color: "#c2410c" },
  { label: "Incorrect estimation of supplies.", color: "#ea580c" },
];

const featuresAndBenefits = [
  {
    title: "Menu Management",
    circleColor: "bg-amber-500",
    description: "Easily create and update menus with our intuitive interface, allowing canteen managers to offer diverse and nutritious meal options.",
    benefit: "Improved Variety and Healthier Food Choices for Employees.",
  },
  {
    title: "Integration with Payment Systems",
    circleColor: "bg-pink-500",
    description: "Seamlessly integrate with various payment systems, including cashless payment options, for quick and hassle-free transactions.",
    benefit: "Faster Transaction Processing and Reduced Cash Handling.",
  },
  {
    title: "Allergen and Dietary Information",
    circleColor: "bg-yellow-500",
    description: "Provide detailed information on allergens and dietary preferences for each menu item, catering to the diverse needs of employees.",
    benefit: "Enhanced Employee Satisfaction and Healthier Dining Choices.",
  },
  {
    title: "Meal Subsidy Management",
    circleColor: "bg-cyan-400",
    description: "Manage employee meal subsidies seamlessly within the system, ensuring accurate tracking and compliance with company policies.",
    benefit: "Streamlined Subsidy Management and Reduced Administrative Burden.",
  },
  {
    title: "Automated Ordering",
    circleColor: "bg-emerald-500",
    description: "Employees can place orders conveniently through our user-friendly platform, reducing wait times and minimizing errors in the ordering process.",
    benefit: "Enhanced Convenience and Efficiency in Ordering.",
  },
  {
    title: "Inventory Management",
    circleColor: "bg-teal-500",
    description: "Keep track of inventory levels in real-time, ensuring efficient stock management and minimizing wastage.",
    benefit: "Reduced Food Wastage and Cost Savings for the Organization.",
  },
  {
    title: "Feedback and Rating System",
    circleColor: "bg-violet-600",
    description: "Gather feedback from employees on their dining experience and use ratings to continually improve food quality and service.",
    benefit: "Continuous Improvement and Customer Satisfaction.",
  },
  {
    title: "Analytics and Reporting",
    circleColor: "bg-blue-800",
    description: "Generate insightful reports on canteen performance, including sales trends, popular menu items, and peak dining hours, aiding in strategic decision-making.",
    benefit: "Data-driven Insights for Operational Optimization and Cost Control.",
  },
];

const powerfulServices = [
  { title: "Integrated Applications For Enterprise", icon: "document", color: "bg-amber-500" },
  { title: "Biometric Attendance System", icon: "id", color: "bg-sky-400" },
  { title: "Access Control System", icon: "card", color: "bg-pink-500" },
  { title: "Visitor Management System", icon: "person", color: "bg-violet-500" },
  { title: "Canteen Management System", icon: "tray", color: "bg-pink-500" },
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

const mealTableRows = [
  { date: "28/10/2019", id: "Samanth#24", name: "Narendra Prasad", type: "Dinner", total: "50.00", payment: "Paid", status: "Consumed" },
  { date: "28/10/2019", id: "Samanth#25", name: "Samanth M", type: "Lunch", total: "280.00", payment: "Paid", status: "Approved" },
  { date: "28/10/2019", id: "Samanth#26", name: "Site Administrator", type: "Breakfast", total: "150.00", payment: "Not Applicable", status: "Consumed" },
  { date: "28/10/2019", id: "Samanth#27", name: "Narendra Prasad", type: "Lunch", total: "400.00", payment: "Paid", status: "Consumed" },
  { date: "28/10/2019", id: "Samanth#28", name: "Samanth M", type: "Breakfast", total: "60.00", payment: "Paid", status: "Approved" },
];

export default function CanteenManagementPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero – dark with abstract canteen-style backdrop */}
        <motion.section
          className="relative min-h-[320px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gray-100" />
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1600&q=60"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gray-900/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.12),transparent)]" />
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              Canteen Management System
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
              <span className="text-blue-300 font-medium">Canteen Management System</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Content – infographic left, text right */}
        <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              {/* Left – semi-circular / pie-style infographic */}
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                <div className="relative w-full max-w-md aspect-square">
                  <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden>
                    {/* 5 segments as pie slices (72° each) */}
                    {infographicSegments.map((seg, i) => {
                      const startAngle = (i * 72 - 90) * (Math.PI / 180);
                      const endAngle = ((i + 1) * 72 - 90) * (Math.PI / 180);
                      const r1 = 80;
                      const r2 = 180;
                      const x1 = 200 + r1 * Math.cos(startAngle);
                      const y1 = 200 + r1 * Math.sin(startAngle);
                      const x2 = 200 + r2 * Math.cos(startAngle);
                      const y2 = 200 + r2 * Math.sin(startAngle);
                      const x3 = 200 + r2 * Math.cos(endAngle);
                      const y3 = 200 + r2 * Math.sin(endAngle);
                      const x4 = 200 + r1 * Math.cos(endAngle);
                      const y4 = 200 + r1 * Math.sin(endAngle);
                      const largeArc = 72 > 180 ? 1 : 0;
                      const path = `M 200 200 L ${x1} ${y1} L ${x2} ${y2} A ${r2} ${r2} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} Z`;
                      const midAngle = (startAngle + endAngle) / 2;
                      const tx = 200 + 130 * Math.cos(midAngle);
                      const ty = 200 + 130 * Math.sin(midAngle);
                      return (
                        <g key={i}>
                          <path d={path} fill={seg.color} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                          <text
                            x={tx}
                            y={ty}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="white"
                            style={{ fontSize: "10px", fontWeight: 600 }}
                          >
                            {i + 1}
                          </text>
                        </g>
                      );
                    })}
                    {/* Center circle with plate/fork/knife icon */}
                    <circle cx="200" cy="200" r="70" fill="rgb(15 23 42)" stroke="rgb(71 85 105)" strokeWidth="2" />
                    <g fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round">
                      <ellipse cx="200" cy="198" rx="28" ry="22" />
                      <path d="M200 176 v44 M184 198 h32" />
                      <path d="M165 165 l12 33 M235 165 l-12 33" />
                      <path d="M175 155 l8 43 M225 155 l-8 43" />
                    </g>
                  </svg>
                  {/* Labels list below or beside for readability on small screens */}
                  <div className="mt-4 flex flex-wrap justify-center gap-2 lg:mt-6">
                    {infographicSegments.map((seg, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-white"
                        style={{ backgroundColor: seg.color }}
                      >
                        <span>{i + 1}.</span>
                        <span className="max-w-[140px] truncate sm:max-w-none">{seg.label}</span>
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
                  Canteen Management System
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                  Welcome to the InOps Company Canteen Management System, where we redefine the dining experience for organizations with our cutting-edge technology and comprehensive features.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                  Our system is designed to streamline canteen operations, enhance efficiency, and elevate the dining experience for employees. Explore the eight key features and their corresponding benefits:
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
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
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    <p className="font-semibold text-blue-300 text-sm">{item.benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Canteen Management System – title, paragraph, laptop mockup */}
        <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Canteen Management System
              </h2>
              <div className="mx-auto mt-2 h-0.5 w-24 rounded-full bg-blue-500" aria-hidden />
              <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                At InOps Solution, we believe that a well-managed canteen is essential for fostering a healthy and productive work environment. With our Canteen Management System&apos;s advanced features and corresponding benefits, organizations can transform their dining facilities into efficient, employee-friendly spaces that promote well-being and satisfaction. Join us in revolutionizing workplace dining experiences with InOps Company today.
              </p>
            </motion.div>
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              {/* Laptop mockup – Meal Consumption screen */}
              <div className="w-full max-w-4xl rounded-b-2xl border border-gray-200 bg-gray-100 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-200/80 px-4 py-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="flex-1 text-center text-sm font-medium text-gray-600">Meal Consumption</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                    <input type="text" placeholder="Meal Request ID" className="rounded border border-gray-200 bg-gray-200 px-2 py-1.5 text-xs text-gray-700 placeholder-gray-500" readOnly />
                    <div className="flex gap-1 col-span-2">
                      <input type="text" placeholder="From" defaultValue="28/10/2019" className="flex-1 rounded border border-gray-200 bg-gray-200 px-2 py-1.5 text-xs text-gray-700" readOnly />
                      <input type="text" placeholder="To" className="flex-1 rounded border border-gray-200 bg-gray-200 px-2 py-1.5 text-xs text-gray-700" readOnly />
                    </div>
                    <select className="rounded border border-gray-200 bg-gray-200 px-2 py-1.5 text-xs text-gray-600" defaultValue="">
                      <option>Meal Request Name -Select-</option>
                    </select>
                    <select className="rounded border border-gray-200 bg-gray-200 px-2 py-1.5 text-xs text-gray-600" defaultValue="all">
                      <option>Meal Type: All</option>
                    </select>
                    <select className="rounded border border-gray-200 bg-gray-200 px-2 py-1.5 text-xs text-gray-600" defaultValue="all">
                      <option>Meal Status: All</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <button type="button" className="rounded bg-rose-500 px-3 py-1.5 text-xs font-medium text-white">Search</button>
                    <button type="button" className="rounded bg-amber-500 px-3 py-1.5 text-xs font-medium text-white">Clear</button>
                  </div>
                  <div className="overflow-x-auto rounded border border-gray-200">
                    <table className="w-full min-w-[600px] text-xs">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-200/80">
                          <th className="px-2 py-2 text-left font-medium text-gray-600">Select</th>
                          <th className="px-2 py-2 text-left font-medium text-gray-600">Meal Requested Date</th>
                          <th className="px-2 py-2 text-left font-medium text-gray-600">Meal Request ID</th>
                          <th className="px-2 py-2 text-left font-medium text-gray-600">Meal Requested Name</th>
                          <th className="px-2 py-2 text-left font-medium text-gray-600">Meal Type</th>
                          <th className="px-2 py-2 text-left font-medium text-gray-600">Total(INR)</th>
                          <th className="px-2 py-2 text-left font-medium text-gray-600">Payment Status</th>
                          <th className="px-2 py-2 text-left font-medium text-gray-600">Meal Consumption Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-500">
                        {mealTableRows.map((row, i) => (
                          <tr key={i} className="border-b border-gray-200">
                            <td className="px-2 py-1.5"><input type="checkbox" className="rounded" readOnly /></td>
                            <td className="px-2 py-1.5">{row.date}</td>
                            <td className="px-2 py-1.5">{row.id}</td>
                            <td className="px-2 py-1.5">{row.name}</td>
                            <td className="px-2 py-1.5">{row.type}</td>
                            <td className="px-2 py-1.5">{row.total}</td>
                            <td className="px-2 py-1.5">{row.payment}</td>
                            <td className="px-2 py-1.5">{row.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-end text-xs text-gray-500">1 &lt; 1 &gt; 100</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Powerful Services for Your Business */}
        <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
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
            <div className="mt-2 h-0.5 w-20 rounded-full bg-blue-500" />
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {powerfulServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-100/80 p-6 backdrop-blur-sm"
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
        <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
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
                    <div className="bg-gray-200/80 px-4 py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-900 text-sm">My Attendance</span>
                    </div>
                    <div className="px-3 py-2 text-xs text-gray-500 text-center">12 - Jan 2018 - 19 - Jan 2018</div>
                    <div className="px-3 pb-2 space-y-2">
                      {["10:00", "10:00", "10:00", "10:00", "10:00"].map((time, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className={`w-1 h-8 rounded-full ${["bg-emerald-500", "bg-rose-500", "bg-amber-500", "bg-orange-500", "bg-cyan-500"][i % 5]}`} aria-hidden />
                          <span className="text-gray-700">{time}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-gray-200 text-center text-sm text-gray-500">Total Hours 09:43</div>
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
