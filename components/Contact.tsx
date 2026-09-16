"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return; // Prevent duplicate submissions

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) {
      setErrorMessage("Please enter both your name and email.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorText =
          data.errors?.join(" ") ||
          data.error ||
          "Failed to submit message. Please try again.";
        setErrorMessage(errorText);
        return;
      }

      setSubmitted(true);
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      style={{ backgroundColor: "#111111" }}
      className="w-full relative z-20 py-24 sm:py-32 md:py-40 px-6 sm:px-10 md:px-14 lg:px-16 text-white overflow-hidden select-none"
    >
      <div className="max-w-[1380px] mx-auto">
        {/* Giant Headline */}
        <h2 className="font-sans font-normal sm:font-medium uppercase tracking-[-0.035em] text-[2.6rem] sm:text-[4.2rem] md:text-[5.5rem] lg:text-[6.8rem] xl:text-[8rem] leading-[0.96] text-white">
          {/* Line 1: READY FOR [Avatar] YOUR */}
          <div className="flex items-center flex-wrap gap-x-2 sm:gap-x-4 md:gap-x-5 lg:gap-x-6">
            <span className="whitespace-nowrap transition-colors duration-300 hover:text-[#ff6a3d] cursor-pointer">
              READY F
              <span className="text-[#ff6a3d] bg-gradient-to-r from-[#ff6036] to-[#ff7d48] bg-clip-text text-transparent">
                OR
              </span>
            </span>

            {/* Embedded Avatar - Close-up Headshot crop with hover image swap */}
            <span className="group/avatar relative inline-block w-[0.82em] h-[0.92em] rounded-xl sm:rounded-2xl md:rounded-[20px] overflow-hidden align-middle border border-white/10 hover:border-[#ff6a3d]/50 shadow-2xl mx-1 sm:mx-2 md:mx-3 flex-shrink-0 bg-[#161616] cursor-pointer transition-all duration-300">
              <Image
                src="/images/4.jpeg"
                alt="Portrait"
                fill
                sizes="(max-width: 768px) 64px, 120px"
                className="object-cover object-[72%_30%] scale-150 transition-all duration-500 ease-out group-hover/avatar:opacity-0 group-hover/avatar:scale-125"
                priority
              />
              <Image
                src="/images/2.jpeg"
                alt="Portrait Alternate"
                fill
                sizes="(max-width: 768px) 64px, 120px"
                className="object-cover object-center scale-125 opacity-0 transition-all duration-500 ease-out group-hover/avatar:opacity-100 group-hover/avatar:scale-105"
              />
            </span>

            <span className="whitespace-nowrap transition-colors duration-300 hover:text-[#ff6a3d] cursor-pointer">
              YOUR
            </span>
          </div>

          {/* Line 2: PRESTIGE MOMENT? */}
          <div className="mt-1 sm:mt-2 md:mt-3 whitespace-nowrap">
            <span className="transition-colors duration-300 hover:text-[#ff6a3d] cursor-pointer">
              <span>PRESTI</span>
              <span className="text-[#ff6a3d] bg-gradient-to-r from-[#ff6036] via-[#ff6f40] to-[#ff844e] bg-clip-text text-transparent">
                GE MO
              </span>
              <span>MENT?</span>
            </span>
          </div>
        </h2>

        {/* Input Form Bar */}
        <div className="mt-14 sm:mt-20 md:mt-24 w-full">
          {submitted ? (
            <div className="bg-[#181818] border border-[#2e2e2e] p-6 sm:p-8 flex items-center justify-between">
              <div>
                <h4 className="text-xl sm:text-2xl font-medium text-white mb-1">
                  Message received.
                </h4>
                <p className="text-sm text-[#888888]">
                  Thanks {name}, I&apos;ll get back to you at {email} shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                  setErrorMessage(null);
                }}
                className="text-xs font-mono uppercase tracking-widest text-[#ff6a3d] hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <div>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col md:flex-row items-stretch bg-[#161616] border border-[#242424]"
              >
                {/* Name Input */}
                <div className="flex-1 border-b md:border-b-0 md:border-r border-[#242424]">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Name"
                    className="w-full h-14 sm:h-16 md:h-[68px] px-6 sm:px-8 bg-transparent text-white placeholder-[#505050] text-sm sm:text-base font-sans focus:outline-none focus:bg-[#1c1c1c] transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div className="flex-1 border-b md:border-b-0 md:border-r border-[#242424]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Email"
                    className="w-full h-14 sm:h-16 md:h-[68px] px-6 sm:px-8 bg-transparent text-white placeholder-[#505050] text-sm sm:text-base font-sans focus:outline-none focus:bg-[#1c1c1c] transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-56 lg:w-64 h-14 sm:h-16 md:h-[68px] px-6 sm:px-8 bg-[#f0eee9] hover:bg-white text-[#111111] transition-all flex items-center justify-between font-sans font-medium text-sm sm:text-base active:scale-[0.99] group disabled:opacity-75 cursor-pointer"
                >
                  <span>{loading ? "Sending..." : "Submit"}</span>
                  <span className="text-lg leading-none font-mono text-[#111111] group-hover:translate-x-0.5 transition-transform">
                    ↵
                  </span>
                </button>
              </form>

              {/* Error Feedback Message */}
              {errorMessage && (
                <div className="mt-3 px-4 py-3 bg-red-950/40 border border-red-800/60 text-red-300 text-xs sm:text-sm font-mono flex items-center justify-between">
                  <span>{errorMessage}</span>
                  <button
                    type="button"
                    onClick={() => setErrorMessage(null)}
                    className="text-red-400 hover:text-red-200 ml-4"
                    aria-label="Dismiss error"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Sub-Bar */}
        <div className="mt-20 sm:mt-28 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-light text-white/40 tracking-wider gap-4">
          <span className="transition-colors duration-300 hover:text-[#ff6a3d] cursor-pointer">
            © {new Date().getFullYear()} ARUNA SOMESH. ALL RIGHTS RESERVED.
          </span>
          <span className="transition-colors duration-300 hover:text-[#ff6a3d] cursor-pointer">
            AVAILABLE FOR SELECT CLIENTS WORLDWIDE
          </span>
        </div>
      </div>
    </section>
  );
}
