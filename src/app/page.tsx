"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {PurposeCards} from "@/components/PurposeCards";
import {fontDisplayDefault} from "@/resources/fonts";

export default function Home() {
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const fadeDistance = 400; // px to fully fade out
      const scrolled = typeof window !== "undefined" ? window.scrollY : 0;
      const next = 1 - Math.min(scrolled / fadeDistance, 1);
      setHeroOpacity(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-700 dark:bg-stone-700 dark:text-stone-100">
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-stone-800/80 backdrop-blur shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Image src="/fxst-logo.svg" alt="FXST Logo" width={32} height={32} />
            <span className="text-lg font-semibold text-stone-800 dark:text-stone-100">
              FXST
            </span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-stone-600 dark:text-stone-200 sm:flex">
            <a href="#contact" className="hover:text-stone-900 dark:hover:text-white">
              Contact
            </a>
            <a href="#sales" className="hover:text-stone-900 dark:hover:text-white">
              Sales
            </a>
            <a href="#about" className="hover:text-stone-900 dark:hover:text-white">
              About
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="flex min-h-[100vh] items-center justify-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <h1 className={`${fontDisplayDefault.className} mx-auto max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-stone-800 dark:text-stone-100 sm:text-5xl md:text-6xl`}>
              A discovery platform built for creators, tinkerers, designers and engineers alike.
          </h1>
        </section>

          <PurposeCards/>

      </main>
    </div>
  );
}
