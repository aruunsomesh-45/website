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
        className="w-full h-screen overflow-hidden flex items-center justify-center relative bg-[#f5f3f3] select-none"
      >
        {/* Center: Invisible Circular Arc & Giant Sweeping Downside Typography */}
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden px-2 md:px-6">
          {/* Accessible Screen-Reader Headline */}
          <h2 className="sr-only">
            Full-stack developer turning 1.5 years of self-taught grind into AI agents that actually ship.
          </h2>

          {/* Precision SVG Downward Circular TextPath */}
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
      </div>
    </section>
  );
}
