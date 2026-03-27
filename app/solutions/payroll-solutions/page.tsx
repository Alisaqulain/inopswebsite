"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const payrollFeatures = [
  { num: "01", label: "Customization", color: "#7c3aed" },
  { num: "02", label: "Direct Deposit", color: "#ea580c" },
  { num: "03", label: "Employee Self Service", color: "#f59e0b" },
  { num: "04", label: "Tax Filing", color: "#eab308" },
  { num: "05", label: "Compliance Management", color: "#2563eb" },
  { num: "06", label: "Mobile App", color: "#16a34a" },
];

const featuresAndBenefits = [
  {
    title: "Automated Payroll Processing",
    circleColor: "bg-orange-500",
    description: "Our payroll solution automates the entire payroll process, from calculating employee salaries to generating paychecks or direct deposits.",
    benefit: "Reduced Administrative Burden and Increased Efficiency in Payroll Processing.",
  },
  {
    title: "Tax Calculation and Filing",
    circleColor: "bg-emerald-500",
    description: "Automatically calculate taxes, including federal, state, and local taxes, and generate tax forms for filing, ensuring compliance with tax regulations.",
    benefit: "Minimized Risk of Tax Penalties and Simplified Tax Filing.",
  },
  {
    title: "Employee Self-Service Portal",
    circleColor: "bg-pink-500",
    description: "Provide employees with access to a self-service portal where they can view pay stubs, update personal information, and submit time-off requests.",
    benefit: "Empowered Employees and Reduced HR Workload.",
  },
  {
    title: "Integration with Time and Attendance Systems",
    circleColor: "bg-cyan-500",
    description: "Seamlessly integrate with time and attendance systems to ensure accurate tracking of employee hours and facilitate payroll processing.",
    benefit: "Elimination of Manual Data Entry Errors and Improved Payroll Accuracy.",
  },
  {
    title: "Customizable Deductions and Benefits",
    circleColor: "bg-yellow-500",
    description: "Customize deductions and benefits for each employee, such as health insurance, retirement contributions, and garnishments, to meet individual needs.",
    benefit: "Enhanced Employee Satisfaction and Retention.",
  },
  {
    title: "Compliance Management",
    circleColor: "bg-violet-500",
    description: "Stay compliant with labor laws and regulations by automating compliance tasks such as overtime calculations, minimum wage requirements, and leave entitlements.",
    benefit: "Reduced Risk of Non-Compliance and Legal Penalties.",
  },
  {
    title: "Direct Deposit and Payment Options",
    circleColor: "bg-orange-500",
    description: "Offer employees the convenience of direct deposit and other payment options, such as paycards or paper checks, to suit their preferences.",
    benefit: "Enhanced Employee Convenience and Satisfaction.",
  },
  {
    title: "Comprehensive Reporting and Analytics",
    circleColor: "bg-blue-900",
    description: "Generate customizable reports on payroll expenses, tax liabilities, and employee earnings, providing valuable insights for financial planning and analysis.",
    benefit: "Enhanced Data Visibility and Informed Decision-making.",
  },
];

const payrollHighlights = [
  "Supports dynamic component reaction",
  "End to end payroll process management",
  "Customized and fully automated payroll processing",
  "Data security and confidentiality SSAE 18 Type 2 Compliant",
  "Flexibility to accommodate multiple salary revisions",
  "Robust payroll software/supports complex pay structures",
  "Clearly defined SLAs-No hidden cost",
  "Multi-level process checks to mitigate errors",
  "Yearly payroll calendar-Proactive planning for the year",
  "Support most bank uploadable formats",
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

export default function PayrollSolutionsPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero – dark with abstract geometric backdrop */}
        <motion.section
          className="relative min-h-[320px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gray-900" />
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=60"
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
              Payroll Solutions
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
              <span className="text-blue-400 font-medium">Payroll Solutions</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Intro – title, underline, paragraph */}
        <section className="py-6 lg:py-8 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
            <motion.h2
              className="text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Payroll Solutions
            </motion.h2>
            <div className="mx-auto mt-2 h-0.5 w-24 rounded-full bg-blue-500" aria-hidden />
            <motion.p
              className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.1 }}
            >
              At InOps Company, our payroll solutions help you streamline processes, reduce errors, and ensure compliance—saving time and resources while leveraging advanced features for greater efficiency and employee satisfaction.
            </motion.p>
          </div>
        </section>

        {/* Highlights of our payroll services – central oval + pills */}
        <section className="py-8 lg:py-12 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <motion.div
              className="relative flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-10 xl:gap-14 lg:items-stretch"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              {/* Left pills – 5 */}
              <div className="flex flex-col justify-center gap-3 w-full max-w-[280px]">
                {payrollHighlights.slice(0, 5).map((text, i) => (
                  <div
                    key={i}
                    className={`rounded-full px-4 py-2.5 text-sm font-medium text-gray-900 border border-gray-200 ${i < 2 ? "bg-blue-400/90" : "bg-violet-400/90"}`}
                  >
                    {text}
                  </div>
                ))}
              </div>
              {/* Central oval with gradient border */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="rounded-full bg-gradient-to-r from-blue-400 to-violet-500 p-[2px]">
                  <div className="rounded-full bg-gray-800 px-6 py-3.5 sm:px-8 sm:py-4">
                    <span className="text-white font-bold text-sm sm:text-base uppercase tracking-wide whitespace-nowrap">
                      Highlights of our payroll services
                    </span>
                  </div>
                </div>
              </div>
              {/* Right pills – 5 */}
              <div className="flex flex-col justify-center gap-3 w-full max-w-[280px]">
                {payrollHighlights.slice(5, 10).map((text, i) => (
                  <div
                    key={i}
                    className="rounded-full px-4 py-2.5 text-sm font-medium text-gray-900 bg-violet-400/90 border border-gray-200"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main content – infographic left, text right */}
        <section className="py-8 lg:py-12 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              {/* Left – circular infographic: six must-have features */}
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                <div className="relative w-full max-w-md aspect-square">
                  <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden>
                    {/* 6 segments as pie slices (60° each), starting from top */}
                    {payrollFeatures.map((seg, i) => {
                      const startAngle = (i * 60 - 90) * (Math.PI / 180);
                      const endAngle = ((i + 1) * 60 - 90) * (Math.PI / 180);
                      const r1 = 90;
                      const r2 = 170;
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
                      const lineEndR = 192;
                      const labelR = 218;
                      const labelX = cx + labelR * Math.cos(midAngle);
                      const labelY = cy + labelR * Math.sin(midAngle);
                      return (
                        <g key={i}>
                          <path
                            d={path}
                            fill={seg.color}
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="1"
                          />
                          <line
                            x1={cx + 170 * Math.cos(midAngle)}
                            y1={cy + 170 * Math.sin(midAngle)}
                            x2={cx + lineEndR * Math.cos(midAngle)}
                            y2={cy + lineEndR * Math.sin(midAngle)}
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="1"
                          />
                          <g transform={`translate(${labelX}, ${labelY})`}>
                            <rect
                              x="-48"
                              y="-12"
                              width="96"
                              height="24"
                              rx="6"
                              fill="rgb(30 41 59)"
                              stroke="rgb(71 85 105)"
                              strokeWidth="1"
                            />
                            <circle cx="-32" cy="0" r="8" fill={seg.color} />
                            <text x="-32" y="0" textAnchor="middle" dominantBaseline="middle" fill="white" style={{ fontSize: "8px", fontWeight: 700 }}>
                              {seg.num}
                            </text>
                            <text x="4" y="0" textAnchor="start" dominantBaseline="middle" fill="#e2e8f0" style={{ fontSize: "9px", fontWeight: 500 }}>
                              {seg.label}
                            </text>
                          </g>
                        </g>
                      );
                    })}
                    {/* Center circle with text */}
                    <circle
                      cx="200"
                      cy="200"
                      r="85"
                      fill="rgb(15 23 42)"
                      stroke="rgb(71 85 105)"
                      strokeWidth="2"
                    />
                    <text
                      x="200"
                      y="185"
                      textAnchor="middle"
                      fill="white"
                      style={{ fontSize: "11px", fontWeight: 700 }}
                    >
                      SIX MUST-HAVE
                    </text>
                    <text
                      x="200"
                      y="200"
                      textAnchor="middle"
                      fill="white"
                      style={{ fontSize: "11px", fontWeight: 700 }}
                    >
                      FEATURES IN
                    </text>
                    <text
                      x="200"
                      y="215"
                      textAnchor="middle"
                      fill="white"
                      style={{ fontSize: "11px", fontWeight: 700 }}
                    >
                      PAYROLL SOFTWARE
                    </text>
                  </svg>
                  {/* Labels list for small screens */}
                  <div className="mt-6 flex flex-wrap justify-center gap-2 lg:hidden">
                    {payrollFeatures.map((seg, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-white"
                        style={{ backgroundColor: seg.color }}
                      >
                        <span>{seg.num}</span>
                        <span>{seg.label}</span>
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
                  Payroll Solutions
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                  Welcome to InOps Company&apos;s payroll solutions, where we revolutionize the way organizations manage their payroll processes.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                  Our comprehensive payroll system is designed to simplify payroll administration, enhance accuracy, and ensure compliance with regulations. Explore the eight key features and their corresponding benefits:
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
                <div className="relative w-[280px] rounded-[2.5rem] border-[10px] border-gray-800 bg-gray-100 p-2 shadow-2xl">
                  <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-gray-100" aria-hidden />
                  <div className="overflow-hidden rounded-[1.5rem] bg-gray-100 border border-gray-200">
                    <div className="bg-gray-200/80 px-4 py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-900 text-sm">My Attendance</span>
                    </div>
                    <div className="px-3 py-2 text-xs text-slate-400 text-center">15-JAN-2023 - 15-JAN-2023</div>
                    <div className="px-3 pb-2 space-y-2">
                      {[
                        { time: "09:00", color: "bg-emerald-500" },
                        { time: "12:00", color: "bg-rose-500" },
                        { time: "13:00", color: "bg-emerald-500" },
                        { time: "17:00", color: "bg-rose-500" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className={`w-1 h-8 rounded-full ${item.color}`} aria-hidden />
                          <span className="text-gray-700">{item.time}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-gray-200 text-center text-sm text-slate-400">Total Hours 09:43</div>
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
