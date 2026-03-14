"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85",
    alt: "Team collaboration and workforce management",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=85",
    alt: "Corporate team meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=85",
    alt: "Software dashboard and analytics",
  },
];

const SLIDE_INTERVAL_MS = 4500;
const easeSmooth = [0.32, 0.72, 0, 1] as const;
const transition = { duration: 2.2, ease: easeSmooth, type: "tween" as const };

function getSlideVariants(imageIndex: number) {
  const opacitySoft = 0.96;
  if (imageIndex === 0) {
    return {
      initial: { x: "100%", opacity: opacitySoft },
      animate: { x: 0, opacity: 1 },
      exit: { x: "-100%", opacity: opacitySoft },
    };
  }
  if (imageIndex === 1) {
    return {
      initial: { y: "100%", opacity: opacitySoft },
      animate: { y: 0, opacity: 1 },
      exit: { y: "-100%", opacity: opacitySoft },
    };
  }
  return {
    initial: { x: "-100%", opacity: opacitySoft },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: opacitySoft },
  };
}

type HeroBackgroundSliderProps = {
  onPhaseChange?: (isDark: boolean) => void;
};

export default function HeroBackgroundSlider({ onPhaseChange }: HeroBackgroundSliderProps) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  const phaseStartRef = useRef(Date.now());

  indexRef.current = index;
  const variants = getSlideVariants(index);

  useEffect(() => {
    onPhaseChange?.(false);
  }, [onPhaseChange]);

  useEffect(() => {
    const id = setInterval(() => {
      const elapsed = Date.now() - phaseStartRef.current;
      if (elapsed >= SLIDE_INTERVAL_MS) {
        const next = (indexRef.current + 1) % HERO_IMAGES.length;
        indexRef.current = next;
        phaseStartRef.current = Date.now();
        setIndex(next);
      }
    }, 100);
    return () => clearInterval(id);
  }, []);

  const slideKey = `hero-${index}`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={slideKey}
          className="absolute inset-0 z-0 will-change-transform"
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={transition}
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={HERO_IMAGES[index].src}
            alt={HERO_IMAGES[index].alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              indexRef.current = i;
              phaseStartRef.current = Date.now();
              setIndex(i);
            }}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              i === index ? "scale-110 bg-white" : "border-2 border-white/80 bg-transparent"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
