import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#f4f4f4] text-[#171717] py-24 md:py-32 px-6 md:px-12 flex justify-center z-20 relative">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="text-[10px] md:text-xs uppercase font-medium tracking-widest leading-relaxed mb-12">
            <p>Self-Taught AI Developer.</p>
            <p>1.5+ Years.</p>
            <p>Full-Stack + AI Agents.</p>
            <p>Build systems that think.</p>
          </div>
          
          <div className="relative w-full aspect-[4/3] bg-black/10 overflow-hidden mt-auto">
             {/* Replace with actual collage image later, using a hero image for now */}
            <Image 
              src="/images/1.jpeg" 
              alt="Work Collage" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 flex flex-col">
          <h2 className="text-2xl md:text-3xl lg:text-[2.8rem] font-medium leading-[1.15] tracking-tight mb-12">
            Full-stack developer with 1.5+ years building AI driven products, a background rooted in realworld shipping over theory, and a process shaped by one obsession software that doesn&apos;t just run, it decides.
          </h2>
          
          <h2 className="text-2xl md:text-3xl lg:text-[2.8rem] font-medium leading-[1.15] tracking-tight mb-16 md:mb-24">
            I don&apos;t do templates. I build custom AI solutions and agents that convert visitors into believers.
          </h2>

          <div className="flex flex-col sm:flex-row w-full gap-4 mt-auto">
            <Link 
              href="#contact" 
              className="group relative bg-[#eb3d26] text-white px-10 py-5 text-sm font-medium hover:bg-[#d03520] transition-colors w-full sm:w-auto text-center inline-block cursor-pointer"
            >
              <span className="relative z-10">Let&apos;s talk</span>
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-white opacity-70"></div>
              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-white opacity-70"></div>
            </Link>
            <Link 
              href="#work" 
              className="group relative bg-[#0f0f0f] text-white px-10 py-5 text-sm font-medium hover:bg-[#1a1a1a] transition-colors w-full sm:w-auto text-center inline-block cursor-pointer"
            >
              <span className="relative z-10">See the work</span>
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-white opacity-70"></div>
              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-white opacity-70"></div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
