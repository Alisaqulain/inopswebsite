"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type Props = {
  children: React.ReactNode;
};

function getReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    if (getReducedMotion()) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.25,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el, { offset: -80, duration: 1.05 });
      history.pushState(null, "", href);
    };

    document.addEventListener("click", onClick, { capture: true });

    const initialHash = window.location.hash;
    if (initialHash && initialHash !== "#") {
      const el = document.getElementById(initialHash.slice(1));
      if (el) {
        lenis.scrollTo(el, { offset: -80, immediate: true });
      }
    }

    return () => {
      document.removeEventListener("click", onClick, { capture: true } as AddEventListenerOptions);
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}

