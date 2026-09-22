"use client";

import React, { useState } from "react";
import Link from "next/link";

const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/aruunsomesh-45" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter / X", href: "https://twitter.com" },
  { label: "Instagram", href: "https://www.instagram.com/arunsomesh._45/" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="site-footer"
      className="w-full bg-[#ffffff] text-[#000000] pt-14 sm:pt-20 md:pt-24 pb-8 sm:pb-12 px-6 sm:px-10 md:px-14 lg:px-16 border-t border-black/10 select-none overflow-hidden relative z-20"
      aria-label="Site Footer"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col justify-between min-h-[60vh]">
        
        {/* Top Section: Brand + Navigation Columns + Subscribe + Menu Button */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-16 sm:pb-24 lg:pb-32">
          
          {/* Brand Mark Column */}
          <div className="col-span-2 md:col-span-3">
            <Link
              href="/"
              className="inline-block text-lg sm:text-xl font-bold tracking-tight text-black hover:opacity-75 transition-opacity"
            >
              Aruna Somesh®
            </Link>
            <p className="text-xs text-[#666666] font-mono mt-2 max-w-xs">
              Full-Stack Developer & AI Systems Specialist.
            </p>
          </div>

          {/* Column 1: Menu */}
          <div className="col-span-1 md:col-span-3">
            <div className="pb-2 mb-4 border-b border-black text-sm font-medium tracking-tight text-black">
              Menu
            </div>
            <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-[15px] font-normal text-[#222222]">
              {MENU_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-black hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Social */}
          <div className="col-span-1 md:col-span-3">
            <div className="pb-2 mb-4 border-b border-black text-sm font-medium tracking-tight text-black">
              Social
            </div>
            <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-[15px] font-normal text-[#222222]">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Subscribe & Back to Top */}
          <div className="col-span-2 md:col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-4 border-b border-black text-sm font-medium tracking-tight text-black">
                <span>Subscribe</span>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-black hover:opacity-60 transition-opacity cursor-pointer"
                  title="Scroll to top"
                >
                  <span>Top</span>
                  <span className="text-sm font-sans">✢</span>
                </button>
              </div>

              {/* Newsletter Toggle / Input Form */}
              <div className="text-sm sm:text-[15px] text-[#222222]">
                <button
                  type="button"
                  onClick={() => setIsNewsletterOpen((prev) => !prev)}
                  className="group inline-flex items-center gap-1 font-normal text-black hover:opacity-75 transition-opacity cursor-pointer mb-3"
                >
                  <span>Newsletter</span>
                  <span className="text-xs transition-transform duration-200 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </button>

                {/* Newsletter Form */}
                <form
                  onSubmit={handleSubscribe}
                  className={`transition-all duration-300 overflow-hidden ${
                    isNewsletterOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex items-center border-b border-black py-1.5">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full text-xs font-mono bg-transparent text-black placeholder-neutral-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="text-xs font-mono uppercase font-bold text-black hover:opacity-60 pl-2 cursor-pointer"
                    >
                      Join
                    </button>
                  </div>
                  {subscribed && (
                    <p className="text-[11px] font-mono text-emerald-700 mt-2">
                      ✓ Subscribed to newsletter!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Center: Massive Display Headline "ARUNA SOMESH" */}
        <div className="w-full my-auto pt-4 pb-8 sm:pb-12">
          <h2 className="text-[clamp(3.2rem,13.2vw,14rem)] font-black uppercase tracking-[-0.035em] leading-[0.88] text-black select-none pointer-events-none w-full break-words">
            ARUNA SOMESH
          </h2>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="w-full pt-8 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-[13px] font-normal text-[#333333] gap-4">
          <div className="flex items-center gap-2">
            <span>©{new Date().getFullYear()}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <Link
              href="/terms"
              className="hover:text-black transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="hover:text-black transition-colors"
            >
              Cookie Policy
            </Link>
            <span className="hidden lg:inline text-neutral-400 font-mono text-[10px]">
              AVAILABLE WORLDWIDE
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
