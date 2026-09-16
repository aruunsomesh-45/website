"use client";

import { useState } from "react";
import Image from "next/image";

interface ServiceItem {
  _id?: string;
  id: string;
  title: string;
  tagline?: string;
  description: string;
  imageUrl: string;
}

const fallbackServices: ServiceItem[] = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    tagline: "Every Trick Leaves Evidence — Clean Code Is What Remains",
    description: "End-to-end development of fast, scalable web applications. I handle everything from database architecture to smooth, interactive frontends using modern frameworks.",
    imageUrl: "/images/1.jpeg",
  },
  {
    id: "02",
    title: "Design",
    tagline: "Intuitive, accessible, and visually stunning UI/UX.",
    description: "Crafting beautiful, user-centric interfaces. From wireframes to high-fidelity prototypes, I design experiences that are intuitive, accessible, and visually stunning.",
    imageUrl: "/images/2.jpeg",
  },
  {
    id: "03",
    title: "AI Agents",
    tagline: "Autonomous systems that reason and execute complex workflows.",
    description: "I build custom, autonomous AI agents that can think, reason, and execute complex workflows without human intervention. From customer support to internal tools, these agents scale your operations.",
    imageUrl: "/images/3.jpeg",
  },
  {
    id: "04",
    title: "AI Automation",
    tagline: "Intelligent pipelines that automate repetitive operations.",
    description: "Streamline your business by integrating intelligent AI models and automating repetitive tasks. I create pipelines that save time, reduce human error, and boost productivity.",
    imageUrl: "/images/4.jpeg",
  },
  {
    id: "05",
    title: "Video Editing",
    tagline: "High-impact visual storytelling and motion graphics.",
    description: "Professional video editing and motion graphics to tell your story. I create engaging visual content optimized for social media, marketing campaigns, and digital platforms.",
    imageUrl: "/images/5.png",
  },
];

export default function Services({ sanityServices = [] }: { sanityServices?: ServiceItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const displayServices = sanityServices && sanityServices.length > 0 ? sanityServices : fallbackServices;

  return (
    <section id="services" className="w-full bg-[#111111] text-white py-24 md:py-32 px-6 md:px-12 flex justify-center z-20 relative">
      <div className="max-w-[1400px] w-full">
        <div className="border-t border-[#333]">
          {displayServices.map((service, index) => {
            const isOpen = openIndex === index;
            const uniqueKey = service._id || service.id;
            
            return (
              <div 
                key={uniqueKey} 
                className="border-b border-[#333] group"
                onMouseEnter={() => setOpenIndex(index)}
                onClick={() => setOpenIndex(index)}
              >
                <div className="flex flex-col md:flex-row py-8 md:py-10">
                  {/* Left Column: Number + Title + Description */}
                  <div className="flex md:w-1/2 lg:w-[60%]">
                    <div className="text-[#888] font-mono text-sm w-16 md:w-24 shrink-0 pt-2">
                      [ {service.id ? String(service.id).padStart(2, "0") : String(index + 1).padStart(2, "0")} ]
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight group-hover:text-gray-300 transition-colors">
                        {service.title}
                      </h3>
                      
                      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4 md:mt-6" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                        <div className="overflow-hidden">
                          {(() => {
                            const isWebDev = service.id === "01" || service.id === "1" || service.title.toLowerCase().includes("web");
                            const currentTagline = (service.tagline && !service.tagline.includes("Money-Making Website"))
                              ? service.tagline
                              : (isWebDev ? "Every Trick Leaves Evidence  Clean Code Is What Remains" : service.tagline);

                            return currentTagline ? (
                              <div className="text-white font-bold text-xl md:text-2xl lg:text-3xl tracking-tight leading-snug mb-3 md:mb-4">
                                {currentTagline}
                              </div>
                            ) : null;
                          })()}
                          <p className="text-[#a3a3a3] text-base md:text-lg leading-relaxed max-w-xl">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column: Image */}
                  <div className="hidden md:flex md:w-1/2 lg:w-[40%] justify-end items-start mt-6 md:mt-0">
                    <div className={`grid transition-all duration-500 ease-in-out w-full max-w-[450px] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <div className="relative w-full aspect-[16/9] bg-[#222] overflow-hidden">
                          {service.imageUrl && (
                            <Image
                              src={service.imageUrl}
                              alt={service.title}
                              fill
                              sizes="(max-width: 1024px) 50vw, 450px"
                              className="object-cover"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Image (Visible only on small screens when open) */}
                  <div className={`md:hidden transition-all duration-500 ease-in-out w-full mt-6 ${isOpen ? "grid grid-rows-[1fr] opacity-100" : "grid grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="relative w-full aspect-video bg-[#222] overflow-hidden">
                         {service.imageUrl && (
                           <Image
                             src={service.imageUrl}
                             alt={service.title}
                             fill
                             sizes="100vw"
                             className="object-cover"
                           />
                         )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
