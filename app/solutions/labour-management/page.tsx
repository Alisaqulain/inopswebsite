"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const insightBoxes = [
  {
    num: "01",
    text: "Which customers are making/ losing you money on labor.",
    color: "bg-emerald-600",
    borderColor: "border-emerald-500/50",
  },
  {
    num: "02",
    text: "How much time and money is being spent on each indirect or non-value-add process.",
    color: "bg-lime-500",
    borderColor: "border-lime-400/50",
  },
  {
    num: "03",
    text: "Which employees to promote or reward, & which might need training or counseling.",
    color: "bg-orange-500",
    borderColor: "border-orange-400/50",
  },
  {
    num: "04",
    text: "Staffing levels are needed for the work forecast, so you have just the right amount of staff for the job.",
    color: "bg-rose-600",
    borderColor: "border-rose-500/50",
  },
  {
    num: "05",
    text: "Which processes need improvement because they are inefficient or many employees are struggling with it.",
    color: "bg-violet-700",
    borderColor: "border-violet-500/50",
  },
];

const featuresAndBenefits = [
  {
    title: "Employee Scheduling",
    circleColor: "bg-orange-500",
    description: "Create and manage employee schedules with ease, taking into account factors such as availability, skills, and labor laws.",
    benefit: "Reduced Overtime Costs and Improved Workforce Efficiency.",
  },
  {
    title: "Task Management",
    circleColor: "bg-pink-600",
    description: "Assign tasks to employees based on skillsets and availability, ensuring optimal utilization of resources and timely completion of projects.",
    benefit: "Enhanced Task Allocation and Improved Productivity.",
  },
  {
    title: "Performance Monitoring",
    circleColor: "bg-yellow-500",
    description: "Monitor employee performance metrics in real-time, enabling managers to identify top performers and areas for improvement.",
    benefit: "Enhanced Performance Management and Employee Development.",
  },
  {
    title: "Payroll Integration",
    circleColor: "bg-orange-500",
    description: "Seamlessly integrate with payroll systems to automate payroll processing, eliminating manual data entry and reducing errors.",
    benefit: "Time Savings and Increased Payroll Accuracy.",
  },
  {
    title: "Time and Attendance Tracking",
    circleColor: "bg-emerald-500",
    description: "Track employee attendance accurately using biometric or digital clock-in/out systems, ensuring compliance with labor regulations and payroll accuracy.",
    benefit: "Elimination of Time Theft and Improved Payroll Accuracy.",
  },
  {
    title: "Leave Management",
    circleColor: "bg-cyan-500",
    description: "Streamline the leave request and approval process, allowing employees to submit requests digitally and managers to approve them efficiently.",
    benefit: "Reduced Administrative Burden and Improved Employee Satisfaction.",
  },
  {
    title: "Compliance Management",
    circleColor: "bg-violet-600",
    description: "Stay compliant with labor laws and regulations by automating compliance tasks such as overtime tracking, breaks, and rest periods.",
    benefit: "Minimized Legal Risks and Improved Regulatory Compliance.",
  },
  {
    title: "Analytics and Reporting",
    circleColor: "bg-blue-900",
    description: "Generate comprehensive reports on labor costs, productivity metrics, and workforce trends, empowering data-driven decision-making.",
    benefit: "Enhanced Strategic Planning and Operational Efficiency.",
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

const timesheetRows = [
  { job: "TEST 1", date: "2019-11-02", hours: "06:00", start: "21:30:00", finish: "00:30:00" },
  { job: "TEST 2", date: "2019-11-02", hours: "08:00", start: "09:00:00", finish: "17:00:00" },
  { job: "TEST 3", date: "2019-11-03", hours: "04:00", start: "14:00:00", finish: "18:00:00" },
];

const toknEntries = [
  { weeklyDate: "28/11/2019", dailyDate: "28/11/2019", job: "MHL0983", hours: "05:00", start: "11:00", finish: "16:00" },
  { weeklyDate: "28/11/2019", dailyDate: "27/11/2019", job: "MHL0983", hours: "06:00", start: "09:00", finish: "15:00" },
  { weeklyDate: "28/11/2019", dailyDate: "26/11/2019", job: "MHL0984", hours: "04:00", start: "10:00", finish: "14:00" },
  { weeklyDate: "28/11/2019", dailyDate: "25/11/2019", job: "MHL0983", hours: "08:00", start: "08:00", finish: "16:00" },
];

export default function LabourManagementPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero – dark with industrial-style backdrop */}
        <motion.section
          className="relative min-h-[320px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gray-900" />
          <div className="absolute inset-0 opacity-25">
            <Image
              src="https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=1600&q=60"
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
              Labour Management Software
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
              <span className="text-blue-400 font-medium">Labour Management Software</span>
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
              Labour Management Software
            </motion.h2>
            <div className="mx-auto mt-2 h-0.5 w-24 rounded-full bg-blue-500" aria-hidden />
            <motion.p
              className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.1 }}
            >
              At InOps Company, we understand the critical role that effective labor management plays in the success of businesses. With our Labour Management Software&apos;s advanced features and corresponding benefits, organizations can optimize their workforce management processes, drive productivity, and achieve their business goals efficiently. Join us in revolutionizing labor management with InOps Company today.
            </motion.p>
          </div>
        </section>

        {/* Main content – arrow insight boxes left, intro text right */}
        <section className="py-8 lg:py-12 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              {/* Left – vertical stack of arrow-shaped insight boxes */}
              <motion.div
                className="flex flex-col gap-4"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease: smoothEase }}
              >
                {insightBoxes.map((item, i) => (
                  <motion.div
                    key={item.num}
                    className={`relative flex items-center gap-4 rounded-l-xl rounded-r-sm border ${item.borderColor} py-4 pl-5 pr-10 ${item.color} min-h-[72px]`}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.4, ease: smoothEase, delay: i * 0.06 }}
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)",
                    }}
                  >
                    <span className="text-2xl font-bold text-white tabular-nums flex-shrink-0">
                      {item.num}
                    </span>
                    <p className="text-sm font-medium text-white leading-snug pr-2">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
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
                  Labour Management Software
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                  Welcome to InOps Company&apos;s Labour Management Software, a comprehensive solution designed to streamline workforce management and optimize productivity.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                  Our software offers a range of features tailored to meet the dynamic needs of businesses, empowering organizations to efficiently manage their workforce while maximizing operational efficiency. Explore the eight key features and their corresponding benefits:
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

        {/* Application screenshots – Timesheet+ Manager (desktop) + TOKN User (mobile) */}
        <section className="py-8 lg:py-12 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <motion.div
              className="relative flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              {/* Desktop – Timesheet+ Manager */}
              <div className="w-full max-w-2xl rounded-xl border border-gray-200 bg-gray-100 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-200/80 px-4 py-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-gray-500 text-xs ml-2">MY TOKN · MADER GROUP · DEVELOPMENT · TIMESHEET+ MAN</span>
                </div>
                <div className="p-4">
                  <h3 className="text-gray-700 font-semibold text-lg mb-3">Submitted Timesheets</h3>
                  <div className="overflow-x-auto rounded border border-gray-200">
                    <table className="w-full min-w-[500px] text-xs">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-200/80">
                          <th className="px-3 py-2 text-left font-medium text-gray-600">Job No.</th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">Date</th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">Hours</th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">Start Time</th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">Finish Time</th>
                          <th className="px-3 py-2 text-left font-medium text-gray-600">Select</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-500">
                        {timesheetRows.map((row, i) => (
                          <tr key={i} className="border-b border-gray-200">
                            <td className="px-3 py-2">{row.job}</td>
                            <td className="px-3 py-2">{row.date}</td>
                            <td className="px-3 py-2">{row.hours}</td>
                            <td className="px-3 py-2">{row.start}</td>
                            <td className="px-3 py-2">{row.finish}</td>
                            <td className="px-3 py-2"><input type="checkbox" className="rounded" readOnly /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Mobile – TOKN User (overlapping) */}
              <div className="relative w-[280px] flex-shrink-0 lg:-ml-8 lg:mt-12">
                <div className="rounded-[2rem] border-[10px] border-gray-200 bg-gray-100 p-2 shadow-2xl">
                  <div className="absolute left-1/2 top-0 h-5 w-28 -translate-x-1/2 rounded-b-xl bg-gray-100" aria-hidden />
                  <div className="overflow-hidden rounded-[1.25rem] bg-gray-100 border border-gray-200">
                    <div className="bg-blue-500/90 px-4 py-3 border-b border-gray-200">
                      <span className="font-semibold text-white text-sm">TOKN User</span>
                    </div>
                    <div className="px-3 py-2 text-xs text-blue-300 font-medium text-center">W/E Date - 28/11/2019</div>
                    <div className="px-2 pb-2 space-y-1 max-h-[240px] overflow-y-auto">
                      {toknEntries.map((row, i) => (
                        <div key={i} className="rounded-lg bg-gray-200/80 p-2 text-xs">
                          <div className="text-gray-500">Weekly Date: {row.weeklyDate} · Daily: {row.dailyDate}</div>
                          <div className="mt-1 flex justify-between text-gray-700">
                            <span>Job {row.job}</span>
                            <span>Hours {row.hours}</span>
                          </div>
                          <div className="text-gray-500">Start {row.start} · Finish {row.finish}</div>
                          <div className="mt-1 text-blue-400 flex items-center gap-1">Sent <span aria-hidden>ℹ</span></div>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 border-t border-gray-200 flex gap-2">
                      <button type="button" className="flex-1 rounded-lg bg-blue-500 py-2 text-xs font-medium text-white">New Daily</button>
                      <button type="button" className="flex-1 rounded-lg bg-blue-500 py-2 text-xs font-medium text-white">New Weekly</button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Powerful Services for Your Business */}
        <section className="py-8 lg:py-12 bg-gray-50 border-t border-gray-200">
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
        <section className="py-8 lg:py-12 bg-white border-t border-gray-200">
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
                    <div className="bg-gray-200/80 px-4 py-3 border-b border-gray-200 flex gap-2">
                      <span className="font-semibold text-gray-900 text-sm">My Attendance</span>
                      <span className="text-xs text-gray-500 ml-auto">Today</span>
                      <span className="text-xs text-gray-500">Month</span>
                    </div>
                    <div className="px-3 py-2 text-xs text-gray-500 text-center">Calendar view</div>
                    <div className="px-3 pb-2 space-y-2">
                      {["08:30", "09:00", "10:00"].map((time, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1 h-8 rounded-full bg-emerald-500" aria-hidden />
                          <span className="text-gray-700">{time}</span>
                        </div>
                      ))}
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
