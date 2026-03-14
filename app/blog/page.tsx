"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.15 };

const posts = [
  {
    title: "Top 8 Access Control Technology Trends For 2024",
    author: "admin",
    date: "September 13, 2024",
    snippet:
      "In a rapidly evolving digital landscape, access control technology continues to redefine security and convenience. Explore the key trends shaping the industry this year.",
    slug: "access-control-trends-2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    imageAlt: "Access control and security technology",
  },
  {
    title: "The Future of Work: How Biometric Attendance Systems are Shaping the Workplace",
    author: "admin",
    date: "September 13, 2024",
    snippet:
      "In today's rapidly evolving business landscape, the future of work is being shaped by smart attendance and identity solutions. Learn how biometrics are transforming workforce management.",
    slug: "biometric-attendance-future-of-work",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    imageAlt: "Biometric and workplace technology",
  },
  {
    title: "Navigating the Future of Work: 6 Trends in Employee Time and Attendance Tracking",
    author: "admin",
    date: "September 13, 2024",
    snippet:
      "In today's dynamic work environment, where remote work, flexible hours, and hybrid models are the norm, effective time and attendance tracking has never been more critical.",
    slug: "time-attendance-tracking-trends",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    imageAlt: "Employee time tracking and workspace",
  },
  {
    title: "Maximizing Employee Efficiency and Engagement: 6 Ways HR Technology Drives Success",
    author: "admin",
    date: "September 13, 2024",
    snippet:
      "In today's fast-paced business environment, organizations are turning to HR technology to boost efficiency, engagement, and overall workforce performance.",
    slug: "hr-technology-efficiency-engagement",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    imageAlt: "HR technology and team collaboration",
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero */}
        <motion.section
          className="relative min-h-[280px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gray-900/70" />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              Blog
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
              <span className="text-blue-300 font-medium">Blog</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Blog posts grid */}
        <section className="py-28 lg:py-40 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-12">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-md hover:border-blue-100"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.6,
                    ease: smoothEase,
                    delay: 0.08 * i,
                  }}
                >
                  <div className="block">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    <h2 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
                      <span className="transition-colors">{post.title}</span>
                    </h2>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <svg
                          className="h-4 w-4 text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg
                          className="h-4 w-4 text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {post.date}
                      </span>
                    </div>
                    <p className="mt-4 flex-1 text-gray-600 leading-relaxed line-clamp-3">
                      {post.snippet}
                    </p>
                    <Link
                      href="#"
                      className="mt-5 inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                    >
                      Read More
                      <span className="ml-1" aria-hidden>
                        &gt;
                      </span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
