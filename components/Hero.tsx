"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import MenuOverlay from "@/components/MenuOverlay";

gsap.registerPlugin(useGSAP, CustomEase);

// We use 4 placeholder images here. Replace these URLs with "/hero1.jpg", "/hero2.jpg", etc., once you save them in the public folder.
const BASE_IMAGES = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.png",
  "/images/6.png",
];

// Loop the 6 images multiple times so they cycle quickly during the 3.2s animation
const IMAGES = [...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES];

const WORDS = ["Studios", "Films", "Stories", "Visions", "Futures", "Concepts"];

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const rotatingWordRef = useRef<HTMLSpanElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const preloaderContentRefs = useRef<HTMLDivElement[]>([]);
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    CustomEase.create("hop", "M0,0 C0.05,0.8 0.1,1 1,1");
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(preloaderRef.current, { display: "none" });
      gsap.set(imageFrameRef.current, {
        bottom: 0, right: 0, width: "100vw", height: "100vh", zIndex: 0
      });
      gsap.set(headlineRef.current, { y: 0, opacity: 1 });
      setActiveImageIndex(IMAGES.length - 1);
      return;
    }

    gsap.set(headlineRef.current, { y: 60, opacity: 0 });
    gsap.set(navRef.current, { yPercent: -100, opacity: 0 });
    gsap.set(footerRef.current, { opacity: 0 });

    gsap.set(imageFrameRef.current, { 
      x: "-110vw",
      y: 0, 
      bottom: "2rem",
      right: "2rem",
      width: "20vw",
      height: "10vw",
      minWidth: "120px",
      minHeight: "60px",
    });

    const tl = gsap.timeline();
    const countObj = { val: 0 };

    tl.to(countObj, {
      val: 100,
      duration: 3.2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.round(countObj.val).toString();
        }
        
        const totalImages = IMAGES.length;
        const imgIndex = Math.min(Math.floor((countObj.val / 100) * totalImages), totalImages - 1);
        setActiveImageIndex(imgIndex);

        const totalWords = WORDS.length;
        const wordIndex = Math.min(Math.floor((countObj.val / 100) * totalWords), totalWords - 1);
        setActiveWordIndex(wordIndex);
      }
    }, "start")
    .to(imageFrameRef.current, {
      x: 0,
      duration: 3.2,
      ease: "power2.inOut",
    }, "start");

    tl.to(preloaderContentRefs.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut"
    }, "reveal")
    .to(preloaderRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.8,
      ease: "hop"
    }, "reveal")
    .add(() => {
      if (imageFrameRef.current) {
        gsap.set(imageFrameRef.current, { zIndex: 0 });
        
        gsap.to(imageFrameRef.current, {
          bottom: 0,
          right: 0,
          x: 0,
          y: 0,
          width: "100vw",
          height: "100vh",
          duration: 0.8,
          ease: "hop",
        });
      }
    }, "reveal")
    .to(navRef.current, {
      yPercent: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "reveal+=0.2")
    .to(headlineRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.0,
      ease: "hop"
    }, "reveal+=0.3")
    .to(footerRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "reveal+=0.6");
  }, { scope: container });

  const addToPreloaderRefs = (el: HTMLDivElement | null) => {
    if (el && !preloaderContentRefs.current.includes(el)) {
      preloaderContentRefs.current.push(el);
    }
  };

  return (
    <div ref={container} className="relative w-full h-screen overflow-hidden bg-[#f8f9fa] selection:bg-black selection:text-white">
      
      <div 
        ref={imageFrameRef} 
        className="fixed overflow-hidden z-[60]"
      >
        {IMAGES.map((src, idx) => (
          <div key={idx} className="absolute inset-0 w-full h-full" style={{ opacity: activeImageIndex === idx ? 1 : 0 }}>
            <Image 
              src={src} 
              alt={`Stack ${idx}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={idx < 4 || idx >= IMAGES.length - 4}
              loading={idx < 4 || idx >= IMAGES.length - 4 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div 
        ref={preloaderRef} 
        className="preloader fixed inset-0 z-50 flex flex-col justify-between p-8 bg-[#171717] text-[#ededed] origin-top"
        style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      >
        <div ref={addToPreloaderRefs} className="preloader-header flex flex-col uppercase text-4xl sm:text-6xl font-medium tracking-tighter leading-none">
          <span>Aruna Somesh</span>
          <span ref={rotatingWordRef}>{WORDS[activeWordIndex]}</span>
        </div>
        <div ref={addToPreloaderRefs} className="preloader-footer flex justify-between items-end uppercase text-sm sm:text-base font-medium tracking-widest">
          <p>Portfolio v1.0<br/>Initialize Sequence</p>
          <div className="text-6xl sm:text-9xl leading-none tracking-tighter">
            <span ref={counterRef}>0</span>
          </div>
        </div>
      </div>

      {/* Global Fixed Navigation Header */}
      <nav ref={navRef} className="fixed top-0 left-0 w-full p-6 sm:p-8 flex justify-between items-center z-40 text-[#171717] mix-blend-difference uppercase font-medium tracking-widest text-sm pointer-events-none">
        <Link href="/" className="text-white pointer-events-auto hover:text-[#ff6a3d] transition-colors">
          Aruna Somesh
        </Link>
        
        {/* Interactive iPhone Style Menu Trigger with SF Symbols 3-Bar Icon */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="group text-white pointer-events-auto flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/20 hover:border-[#ff6a3d] hover:text-[#ff6a3d] hover:bg-white/5 transition-all active:scale-95 cursor-pointer bg-black/30 backdrop-blur-md shadow-md"
        >
          <span className="font-mono text-xs tracking-widest">
            {isMenuOpen ? "CLOSE" : "MENU"}
          </span>
          <div className="relative w-4 h-3.5 flex flex-col justify-between items-center" aria-hidden="true">
            <span
              className={`block w-4 h-[1.75px] rounded-full bg-current transform-gpu transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMenuOpen ? "translate-y-[6px] rotate-45" : "translate-y-0 rotate-0"
              }`}
            />
            <span
              className={`block w-4 h-[1.75px] rounded-full bg-current transform-gpu transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`block w-4 h-[1.75px] rounded-full bg-current transform-gpu transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isMenuOpen ? "-translate-y-[6px] -rotate-45" : "translate-y-0 rotate-0"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Interactive Full-Screen / Slide-Over Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <section className="hero relative w-full h-full flex flex-col justify-end items-center z-20 pb-8 sm:pb-12 md:pb-16 px-4 pointer-events-none overflow-hidden">
        
        <div 
          ref={headlineRef} 
          className="w-full max-w-6xl flex justify-center items-center relative z-20 pointer-events-auto text-center mx-auto px-4"
        >
          <h1 
            className="elevate-text text-center select-none" 
            aria-label="The Best Trick in Business Is a System That Runs Itself."
          >
            The Best Trick in Business<br className="hidden md:inline" /> Is a System That Runs Itself.
          </h1>
        </div>

        <div ref={footerRef} className="hero-footer absolute bottom-8 left-8 right-8 flex justify-between items-end text-white mix-blend-difference uppercase font-medium tracking-widest text-xs sm:text-sm">
          {/* Footer content */}
        </div>

      </section>

    </div>
  );
}
