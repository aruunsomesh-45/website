"use client";

import React, { useEffect } from "react";
import Link from "next/link";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  id: string;
  title: string;
  href: string;
}

// Aligned with XML Sitemap and Site Architecture
const NAV_ITEMS: NavItem[] = [
  { id: "01", title: "HOME", href: "/" },
  { id: "02", title: "ABOUT", href: "/about" },
  { id: "03", title: "SERVICES", href: "/services" },
  { id: "04", title: "WORK", href: "/work" },
  { id: "05", title: "PROCESS", href: "/process" },
  { id: "06", title: "FAQ", href: "/faq" },
  { id: "07", title: "BLOG", href: "/blog" },
  { id: "08", title: "CONTACT", href: "/contact" },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation Menu"
      className="fixed inset-0 z-[100] bg-black text-white flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 select-none"
    >
      {/* Top Close Bar */}
      <div className="w-full flex justify-end items-center px-6 sm:px-10 md:px-14 pt-6 sm:pt-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="group p-2 text-white hover:text-zinc-400 transition-colors cursor-pointer"
        >
          {/* Crisp Minimalist Close Icon ✕ */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Main Container */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 md:px-14 py-4 sm:py-6 flex-1 flex flex-col justify-center">
        
        {/* 2-Column Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 border-t border-[#222222] pt-4 sm:pt-6">
          
          {/* Left Column: Navigation Links (from XML Sitemap) */}
          <nav className="lg:col-span-7 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between py-3.5 sm:py-4 md:py-5 border-b border-[#1c1c1c] transition-all duration-300 hover:bg-white/[0.02] px-2 sm:px-3"
              >
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                  {/* Number Index */}
                  <span className="text-xs sm:text-sm font-mono text-[#546274] tracking-widest">
                    {item.id}
                  </span>

                  {/* Nav Item Title */}
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] font-black uppercase tracking-tight text-white transition-transform duration-300 group-hover:translate-x-2">
                    {item.title}
                  </span>
                </div>

                {/* Diagonal Arrow ↗ */}
                <span className="text-lg sm:text-xl md:text-2xl font-light text-[#555555] transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Column: Contact & Info Sidebar */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-6 lg:pt-4 lg:pl-12 lg:border-l lg:border-[#222222]">
            
            {/* Contact Information Details */}
            <div className="space-y-5 sm:space-y-6">
              {/* Header Label */}
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#637286]">
                CONTACT & INQUIRIES
              </div>

              {/* Email */}
              <div>
                <a
                  href="mailto:aruunsomesh@gmail.com"
                  className="text-sm sm:text-base font-mono text-zinc-200 hover:text-white transition-colors"
                >
                  aruunsomesh@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="text-sm sm:text-base font-mono text-zinc-400 leading-relaxed">
                <p>Bengaluru, India</p>
              </div>

              {/* Social Icons Row */}
              <div className="flex items-center gap-5 pt-2 text-zinc-300">
                {/* GitHub */}
                <a
                  href="https://github.com/aruunsomesh-45"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-5 h-5 text-zinc-400 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-5 h-5 text-zinc-400 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-5 h-5 text-zinc-400 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/arunsomesh._45/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-5 h-5 text-zinc-400 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom CTA Button: START A PROJECT */}
            <div className="pt-6 sm:pt-8 lg:pt-10">
              <Link
                href="/#contact"
                onClick={onClose}
                className="group w-full bg-white hover:bg-zinc-200 text-black px-6 py-3.5 sm:py-4 flex items-center justify-between font-sans font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-lg"
              >
                <span>START A PROJECT</span>
                <span className="text-base font-mono transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

          </div>

        </div>

      </div>

      {/* Subtle bottom space */}
      <div className="h-4 sm:h-6" />
    </div>
  );
}
