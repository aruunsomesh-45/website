"use client";

import Image from "next/image";
import Link from "next/link";

export interface ProjectItem {
  _id?: string;
  id: string;
  title: string;
  clientTag: string;
  description: string;
  backgroundColor?: string;
  accentColor?: string;
  imageUrl?: string;
  projectUrl?: string;
}

const fallbackProjects: ProjectItem[] = [
  {
    id: "01",
    clientTag: "NBNZIA",
    title: "CTO BEES",
    description:
      "A boutique consulting firm uniting strategic foresight with technical depth — empowering businesses to transform, scale, and deliver exceptional customer experiences through the power of AI and a premium CTO-to-CMO partnership.",
    backgroundColor: "#ffcd71",
    accentColor: "#123d8c",
    imageUrl: "/images/cto-bees-showcase.png",
  },
];

export default function Projects({
  sanityProjects = [],
}: {
  sanityProjects?: ProjectItem[];
}) {
  const projects =
    sanityProjects && sanityProjects.length > 0
      ? sanityProjects
      : fallbackProjects;

  return (
    <div id="work" className="w-full relative z-20">
      {projects.map((project, index) => {
        const bg = project.backgroundColor || "#ffcd71";
        const accent = project.accentColor || "#123d8c";
        const imageSrc = project.imageUrl || "/images/cto-bees-showcase.png";
        const displayId = project.id ? (project.id.startsWith("0") ? project.id : `0${project.id}`) : `0${index + 1}`;

        return (
          <section
            key={project._id || index}
            style={{ backgroundColor: bg }}
            className="w-full relative min-h-[90vh] lg:min-h-screen py-10 md:py-14 px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col justify-between overflow-hidden transition-colors duration-500"
          >
            {/* Row 1: [Client Tag NBNZIA] on left, [Nav] in center, [Let's talk] on right */}
            <div className="w-full flex items-center justify-between gap-4 mb-2 md:mb-3">
              <div className="flex-1">
                <span
                  style={{ color: accent }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-none uppercase"
                >
                  {project.clientTag || "NBNZIA"}
                </span>
              </div>

              {/* Centered Navigation */}
              <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-12 text-sm md:text-base font-medium text-[#111111]/90">
                <a href="#about" className="hover:text-black transition-colors">About</a>
                <a href="#services" className="hover:text-black transition-colors">Services</a>
                <a href="#process" className="hover:text-black transition-colors">Process</a>
                <a href="#work" className="hover:text-black transition-colors font-semibold">Work</a>
              </nav>

              {/* Right CTA Button ("Let's talk" in navy blue with corner accents) */}
              <div className="flex-1 flex justify-end">
                <a
                  href="#contact"
                  className="group relative px-7 sm:px-9 py-3 sm:py-3.5 text-xs sm:text-sm font-medium transition-all shadow-sm hover:brightness-110 active:scale-95"
                  style={{
                    backgroundColor: accent,
                    color: bg === "#171717" ? "#ffffff" : bg,
                  }}
                >
                  <span className="relative z-10 font-semibold tracking-wide">
                    Let&apos;s talk
                  </span>
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/70" />
                  <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/70" />
                </a>
              </div>
            </div>

            {/* Row 2: [Project Title CTO BEES] on Left, [Index (01)] on Right */}
            <div className="w-full flex items-baseline justify-between mb-8 sm:mb-12">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] font-bold tracking-tight text-[#171717] leading-none uppercase">
                {project.title || "CTO BEES"}
              </h2>

              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.8rem] font-normal text-[#171717] tracking-tight leading-none">
                ({displayId})
              </div>
            </div>

            {/* Content Body Row: [Description] on Left, [Mockup Showcase] on Right */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mt-auto">
              {/* Left Column: Description */}
              <div className="lg:col-span-5 flex flex-col justify-center pb-4 sm:pb-8 lg:pb-12">
                <p className="text-base sm:text-lg md:text-[1.15rem] leading-[1.65] font-normal text-[#171717]/90 max-w-xl">
                  {project.description}
                </p>

                {project.projectUrl && (
                  <div className="mt-6">
                    <Link
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase hover:underline"
                      style={{ color: accent }}
                    >
                      <span>Visit Live Website</span>
                      <span>↗</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Right Column: Desktop & Silhouette Mockup Showcase */}
              <div className="lg:col-span-7 flex justify-end items-end w-full relative">
                <div className="relative w-full max-w-[820px] aspect-[416/296] overflow-hidden rounded-sm shadow-xl sm:shadow-2xl">
                  <Image
                    src={imageSrc}
                    alt={project.title || "Project Mockup"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 820px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
