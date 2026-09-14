"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ManifestoCurve() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Respect user motion preferences
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (textPathRef.current) {
        textPathRef.current.setAttribute("startOffset", "50%");
      }
      return;
    }

    const ctx = gsap.context(() => {
      if (!triggerRef.current || !containerRef.current || !textPathRef.current) return;

      // Set starting position: offscreen left
      textPathRef.current.setAttribute("startOffset", "-35%");

      // Animate along downward circular path from -35% to 135%
      gsap.to(textPathRef.current, {
        attr: { startOffset: "135%" },
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: containerRef.current,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={triggerRef}
      id="manifesto"
      aria-label="Manifesto Section"
      className="relative w-full h-[380vh] bg-[#f5f3f3] text-[#111111]"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={containerRef}
        className="w-full h-screen overflow-hidden flex flex-col justify-between relative bg-[#f5f3f3] select-none"
      >
        {/* Top Micro-Typography Bar */}
        <header className="w-full pt-16 md:pt-20 px-8 sm:px-14 md:px-20 flex items-center justify-between text-[10px] md:text-xs font-mono tracking-[0.35em] uppercase text-[#111111]/70 z-20">
          <span className="font-light text-base md:text-lg opacity-40">{"{"}</span>
          <span className="font-medium tracking-[0.35em]">AUTONOMOUS AGENTS</span>
          <span className="text-sm md:text-base opacity-90">♠</span>
          <span className="font-medium tracking-[0.35em]">PRODUCTION SYSTEMS</span>
          <span className="font-light text-base md:text-lg opacity-40">{"}"}</span>
        </header>

        {/* Center: Invisible Circular Arc & Giant Sweeping Downside Typography */}
        <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden px-2 md:px-6">
          {/* Accessible Screen-Reader Headline */}
          <h2 className="sr-only">
            Full-stack developer turning 1.5 years of self-taught grind into AI agents that actually ship.
          </h2>

          {/* Precision SVG Downward Circular TextPath (Completing the Circle with Top Arc) */}
          <svg
            viewBox="0 0 2400 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-h-[85vh] overflow-visible pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/*
                Exact mathematical circular arc dipping downwards:
                Center: (1200, -3820), Radius: 4400
                Trough bottom: (1200, 580)
                Mirrors the top arc (center 1200, 4720, apex 1200, 320) to form a complete circular geometry
              */}
              <path
                id="manifesto-circular-path"
                d="M -3000 -2509 A 4400 4400 0 0 0 5400 -2509"
                fill="none"
              />
            </defs>

            <text
              textAnchor="middle"
              className="fill-[#111111] font-semibold uppercase select-none tracking-[0.025em]"
              style={{
                fontSize: "190px",
                fontFamily: "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
                fontWeight: 600,
              }}
            >
              <textPath
                ref={textPathRef}
                href="#manifesto-circular-path"
                xlinkHref="#manifesto-circular-path"
                startOffset="-35%"
              >
                FULL-STACK DEVELOPER TURNING 1.5 YEARS OF SELF-TAUGHT GRIND INTO AI AGENTS THAT ACTUALLY SHIP
              </textPath>
            </text>
          </svg>
        </div>

        {/* Bottom subtle negative space anchor */}
        <footer className="w-full pb-8 md:pb-12 px-6 sm:px-10 md:px-16 flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#111111]/40 z-20">
          <span>02 // AUTONOMOUS AI AGENTS</span>
          <span className="hidden sm:inline">TURNING GRIND INTO CODE THAT SHIPS</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </section>
  );
}
