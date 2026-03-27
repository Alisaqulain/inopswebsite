"use client";

import Image from "next/image";

const industries = [
  { name: "Manufacturing", imageUrl: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80" },
  { name: "Logistics", imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { name: "Automobile", imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80" },
  { name: "Construction", imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { name: "Retail", imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" },
];

function IndustryCard({ name, imageUrl }: { name: string; imageUrl: string }) {
  return (
    <div className="industry-card group w-[280px] flex-shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-100 sm:w-[320px]">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image src={imageUrl} alt={name} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="320px" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-heading text-white drop-shadow-md">{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesSlider() {
  return (
    <section className="relative py-10 lg:py-14 bg-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center">
          <span className="section-badge">Industries</span>
          <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Trusted across manufacturing, logistics, construction, and more
          </p>
        </div>
        <div className="hover-pause relative mt-8 overflow-hidden">
          <div className="flex w-max gap-6 md:gap-8 animate-marquee-slow" style={{ willChange: "transform" }}>
            {[...industries, ...industries].map((ind, i) => (
              <IndustryCard key={`${ind.name}-${i}`} name={ind.name} imageUrl={ind.imageUrl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
