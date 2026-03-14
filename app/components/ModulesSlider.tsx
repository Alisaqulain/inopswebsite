"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const CARD_WIDTH = 260;
const CARD_GAP = 16;
const AUTO_SCROLL_INTERVAL_MS = 4000;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

const modules = [
  {
    title: "Time, Attendance & Leave",
    description: "Accurate tracking of employee hours and leave for better productivity and compliance.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
  },
  {
    title: "KYE - Employee Verification",
    description: "Next-Gen CLMs through AI for document verification, challans, records, with smart reporting & analytics.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    title: "Visitor Management",
    description: "Secure visitor tracking with seamless check-in/out processes.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    title: "Contractor & Payroll",
    description: "End-to-end contractor lifecycle and payroll processing with statutory compliance.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
  },
  {
    title: "Compliance & Reporting",
    description: "Automated PF, ESIC, and labour law reporting with audit-ready documentation.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Access Control & Security",
    description: "Biometric and card-based access control with real-time monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
  },
  {
    title: "Shift & Roster Management",
    description: "Plan shifts, manage rosters, and handle overtime with ease.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  },
  {
    title: "Analytics & Dashboards",
    description: "Real-time insights and reports for workforce and compliance metrics.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
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
    <div className="group relative h-[280px] w-[260px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md transition-all duration-300 hover:shadow-lg hover:border-blue-200">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="260px"
      />
      {/* Hover overlay: title + description */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="p-4 text-white">
          <h3 className="text-base font-heading leading-tight">{title}</h3>
          <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-white/90">{description}</p>
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
    <section id="solutions" className="relative py-28 lg:py-40 bg-gray-50">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">
          {/* Left: text block */}
          <div className="flex flex-shrink-0 flex-col justify-center lg:w-[28%] xl:w-[26%]">
            <span className="section-badge">Solutions</span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Our Modules
            </h2>
            <p className="mt-3 max-w-sm text-gray-600">
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
          <div className="relative flex-1 min-w-0 lg:max-w-[72%] xl:max-w-[70%]">
            <div className="relative flex items-center gap-2">
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

              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth py-2 px-12 scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
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
