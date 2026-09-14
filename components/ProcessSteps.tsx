"use client";

import React from "react";

interface StepItem {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  rotation: string;
  translate: string;
}

const STEPS: StepItem[] = [
  {
    step: "STEP 01",
    title: "The Pledge",
    description:
      "We start with discovery. I dig into your business, your audience, and your goals. No fluff. Just clarity on what the site needs to do and who it needs to impress.",
    deliverables: [
      "DISCOVERY CALL",
      "PROJECT BRIEF",
      "SITEMAP",
      "TIMELINE",
      "CONTENT PLAN",
    ],
    rotation: "-rotate-[3.5deg] hover:rotate-0",
    translate: "translate-y-4 hover:-translate-y-2",
  },
  {
    step: "STEP 02",
    title: "The Turn",
    description:
      "Design, development, and animation come together. My team and I build your site piece by piece — every layout intentional, every interaction purposeful. You see progress in real time, not after weeks of silence.",
    deliverables: [
      "WIREFRAMES",
      "UI DESIGN",
      "DEVELOPMENT",
      "ANIMATIONS",
      "CMS SETUP",
      "CONTENT INTEGRATION",
    ],
    rotation: "rotate-0 hover:-rotate-1",
    translate: "-translate-y-2 hover:-translate-y-6",
  },
  {
    step: "STEP 03",
    title: "The Prestige",
    description:
      "Launch day. Your site goes live, polished, fast, and ready to perform. But the trick isn't over — I stick around to make sure everything works exactly as promised.",
    deliverables: [
      "QA TESTING",
      "PERFORMANCE OPTIMIZATION",
      "LAUNCH",
      "POST-LAUNCH SUPPORT",
      "DOCUMENTATION",
    ],
    rotation: "rotate-[3.5deg] hover:rotate-0",
    translate: "translate-y-4 hover:-translate-y-2",
  },
];

const ROTATIONS = [
  "-rotate-[3.5deg] hover:rotate-0",
  "rotate-0 hover:-rotate-1",
  "rotate-[3.5deg] hover:rotate-0",
];

const TRANSLATES = [
  "translate-y-4 hover:-translate-y-2",
  "-translate-y-2 hover:-translate-y-6",
  "translate-y-4 hover:-translate-y-2",
];

export interface SanityStep {
  _id?: string;
  order?: number;
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export default function ProcessSteps({ sanitySteps = [] }: { sanitySteps?: SanityStep[] }) {
  const steps = sanitySteps && sanitySteps.length > 0
    ? sanitySteps.map((item, idx) => ({
        ...item,
        rotation: ROTATIONS[idx % ROTATIONS.length],
        translate: TRANSLATES[idx % TRANSLATES.length],
      }))
    : STEPS;
  return (
    <section
      id="process-steps"
      aria-label="Process Steps"
      style={{ backgroundColor: "#ece9e4" }}
      className="w-full relative z-20 py-24 sm:py-32 md:py-40 px-4 sm:px-8 lg:px-12 overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-7 items-stretch justify-center">
          {steps.map((item, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: "#ffffff" }}
              className={`group relative rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 lg:p-11 
                border border-black/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.03)]
                transition-all duration-500 ease-out will-change-transform flex flex-col justify-between
                min-h-[580px] sm:min-h-[620px] lg:min-h-[640px]
                ${item.rotation} ${item.translate}
                hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] hover:z-30 cursor-default`}
            >
              {/* Card Top: Step tag + Title + Paragraph */}
              <div>
                <span className="inline-block text-[#e84a27] font-mono font-medium text-[11px] sm:text-xs tracking-[0.25em] uppercase">
                  {item.step}
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#111111] tracking-tight leading-[1.12] mt-4 sm:mt-5 mb-5 sm:mb-6 font-sans">
                  {item.title}
                </h3>

                <p className="text-[#333333] text-[14px] sm:text-[15px] leading-[1.6] font-normal">
                  {item.description}
                </p>
              </div>

              {/* Card Bottom: Deliverables List */}
              <div className="pt-12 sm:pt-16 mt-auto">
                <ul className="space-y-1.5 sm:space-y-2 text-[10.5px] sm:text-[11px] font-mono tracking-[0.16em] uppercase text-[#666666] font-medium">
                  {item.deliverables.map((deliverable, dIdx) => (
                    <li
                      key={dIdx}
                      className="transition-colors duration-200 group-hover:text-[#111111]"
                    >
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
