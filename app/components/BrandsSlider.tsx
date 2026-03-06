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

function LogoCard({ src }: { src: string }) {
  return (
    <div className="relative flex h-20 min-w-[140px] flex-shrink-0 items-center justify-center rounded-xl border border-slate-600/80 bg-slate-800 px-6 py-4 shadow-depth transition hover:border-cyan-500/50 hover:shadow-depth sm:min-w-[160px]">
      <Image
        src={src}
        alt=""
        width={140}
        height={56}
        className="h-12 w-auto max-w-[120px] object-contain object-center"
        sizes="140px"
        unoptimized={src.endsWith(".svg")}
      />
    </div>
  );
}

export default function BrandsSlider() {
  return (
    <section className="overflow-x-hidden border-t border-slate-700/80 bg-slate-900 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-slate-400">Trusted by industry leaders</p>
        <div className="overflow-hidden rounded-2xl border border-slate-600/80 bg-slate-800 py-8 shadow-depth">
          <div className="relative flex">
            <div className="flex animate-marquee gap-8 pr-8">
              {clientLogos.map((src, i) => (
                <LogoCard key={`a-${i}`} src={src} />
              ))}
            </div>
            <div className="flex animate-marquee gap-8 pr-8" aria-hidden>
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
