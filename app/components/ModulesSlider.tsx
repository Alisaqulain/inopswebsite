"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const CARD_WIDTH = 320;
const CARD_GAP = 0;
const AUTO_SCROLL_INTERVAL_MS = 4000;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

const modules = [
  {
    title: "Time, Attendance & Leave",
    description: "Accurate tracking of employee hours and leave for better productivity and compliance.",
    imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&q=85",
  },
  {
    title: "KYE - Employee Verification",
    description: "Next-Gen CLMs through AI for document verification, challans, records, with smart reporting & analytics.",
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&q=85",
  },
  {
    title: "Visitor Management",
    description: "Secure visitor tracking with seamless check-in/out processes.",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85",
  },
  {
    title: "Contractor & Payroll",
    description: "End-to-end contractor lifecycle and payroll processing with statutory compliance.",
    imageUrl: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=900&q=85",
  },
  {
    title: "Compliance & Reporting",
    description: "Automated PF, ESIC, and labour law reporting with audit-ready documentation.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=85",
  },
  {
    title: "Access Control & Security",
    description: "Biometric and card-based access control with real-time monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=900&q=85",
  },
  {
    title: "Shift & Roster Management",
    description: "Plan shifts, manage rosters, and handle overtime with ease.",
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=85",
  },
  {
    title: "Analytics & Dashboards",
    description: "Real-time insights and reports for workforce and compliance metrics.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85",
  },
];

function ModuleCard({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="group relative h-[320px] w-[320px] flex-shrink-0 overflow-hidden transition-transform duration-300">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover object-center transition duration-500 group-hover:scale-105"
        sizes="320px"
      />
      {/* Hover overlay: title + description */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="p-4 text-white">
          <h3 className="text-sm sm:text-base font-heading leading-tight">{title}</h3>
          <p className="mt-1.5 line-clamp-3 text-[11px] sm:text-xs leading-relaxed text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function ModulesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -SCROLL_STEP : SCROLL_STEP, behavior: "smooth" });
  };

  // Auto-slide every few seconds; loop back when near end
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const id = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      if (scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
      }
    }, AUTO_SCROLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="solutions" className="relative py-10 lg:py-14">
      <div className="relative mx-auto max-w-full lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
          {/* Left: text block */}
          <div className="flex flex-shrink-0 flex-col justify-center items-center text-center lg:items-start lg:text-left lg:w-[28%] xl:w-[26%]">
            <span className="section-badge">Solutions</span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Our Modules
            </h2>
            <p className="mt-3 max-w-sm text-gray-600 mx-auto lg:mx-0">
              End-to-end tools for time, compliance, and workforce management
            </p>
            <div className="mt-4 h-0.5 w-12 rounded-full bg-blue-500" />
            <a
              href="#solutions"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              View all modules
              <span className="inline-block h-px flex-1 max-w-[80px] bg-gray-300" aria-hidden />
            </a>
          </div>

          {/* Right: slider with reduced width */}
          <div className="relative flex-1 min-w-0 lg:max-w-[72%] xl:max-w-[72%]">
            <div className="relative flex items-center">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600"
                aria-label="Previous"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div ref={scrollRef} className="flex gap-0 overflow-x-auto scroll-smooth py-4 px-14 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {modules.map((mod, i) => (
                  <ModuleCard
                    key={`${mod.title}-${i}`}
                    title={mod.title}
                    description={mod.description}
                    imageUrl={mod.imageUrl}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600"
                aria-label="Next"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
