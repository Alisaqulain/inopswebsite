"use client";

import Image from "next/image";

const clientLogos = [
  "/client-5.png",
  "/client-8.png",
  "/client-9.svg",
  "/client2.png",
  "/client6.png",
  "/client7.png",
  "/client10.png",
  "/client17.png",
  "/client18.png",
  "/client19.jpg",
  "/client20.png",
  "/client22.png",
  "/client23.webp",
  "/client24.png",
  "/client25.svg",
  "/client26.png",
  "/client29.png",
  "/client30.svg",
];

function logoAltFromSrc(src: string) {
  const name = src.split("/").pop() ?? "Client logo";
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function LogoCard({ src }: { src: string }) {
  return (
    <div className="group relative flex h-20 min-w-[140px] flex-shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white/90 px-6 py-4 shadow-sm shadow-gray-900/5 backdrop-blur transition hover:-translate-y-0.5 hover:border-gray-200 hover:bg-white hover:shadow-md hover:shadow-gray-900/10 sm:min-w-[170px]">
      <Image
        src={src}
        alt={logoAltFromSrc(src)}
        width={140}
        height={56}
        className="h-12 w-auto max-w-[120px] object-contain object-center opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        sizes="140px"
        unoptimized={src.endsWith(".svg")}
      />
    </div>
  );
}

export default function BrandsSlider() {
  return (
    <section className="relative overflow-x-hidden border-y border-gray-100 bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 lg:py-24 noise-overlay">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid-subtle opacity-40" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600/80">Trusted by industry leaders</p>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Teams rely on our platform for consistent, compliant, and efficient operations.
          </p>
          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-blue-500/80" aria-hidden />
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl border border-gray-200/70 bg-white/70 py-10 shadow-depth backdrop-blur">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent" aria-hidden />

          <div className="relative flex">
            <div className="flex animate-marquee gap-6 px-6 motion-reduce:animate-none">
              {clientLogos.map((src, i) => (
                <LogoCard key={`a-${i}`} src={src} />
              ))}
            </div>
            <div className="flex animate-marquee gap-6 px-6 motion-reduce:animate-none" aria-hidden>
              {clientLogos.map((src, i) => (
                <LogoCard key={`b-${i}`} src={src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
