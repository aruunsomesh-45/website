"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [inquiryId, setInquiryId] = useState<string | null>(null);
  const [queryMessages, setQueryMessages] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return; // Prevent duplicate submissions

    const nameVal = (document.getElementById("name") as HTMLInputElement)?.value || name;
    const emailVal = (document.getElementById("email") as HTMLInputElement)?.value || email;
    const subjectVal = (document.getElementById("subject") as HTMLInputElement)?.value || subject;
    const messageVal = (document.getElementById("message") as HTMLTextAreaElement)?.value || message;
    const websiteUrl = typeof window !== "undefined" ? window.location.href : "https://arunasomesh.com";

    const trimmedName = nameVal.trim();
    const trimmedEmail = emailVal.trim();
    const trimmedSubject = subjectVal.trim() || "General Inquiry";
    const trimmedMessage = messageVal.trim();

    if (!trimmedName || !trimmedEmail) {
      setErrorMessage("Please provide both your name and a valid email address.");
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    const payload = {
      name: trimmedName,
      email: trimmedEmail,
      phone: phone.trim() || undefined,
      subject: trimmedSubject,
      message: trimmedMessage || undefined,
      websiteUrl: websiteUrl,
    };

    try {
      // Submit via internal Next.js API route (which proxies to the AIS webhook server-side to avoid CORS blocks)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && (result.success !== false)) {
        if (result.inquiryId) {
          console.log("Inquiry ID:", result.inquiryId);
          setInquiryId(result.inquiryId);
        }

        if (result.queryMessages && Array.isArray(result.queryMessages) && result.queryMessages.length > 0) {
          setQueryMessages(result.queryMessages);
          alert(result.queryMessages.join("\n"));
        } else if (result.message) {
          setQueryMessages([result.message]);
        }

        setSubmitted(true);
        setName("");
        setEmail("");
        setSubject("");
        setPhone("");
        setMessage("");
      } else {
        const errorText =
          result.error ||
          result.message ||
          (result.errors && result.errors.join(" ")) ||
          "Failed to submit message. Please try again.";
        setErrorMessage(errorText);
      }
    } catch (error) {
      console.error("Submission error:", error);
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
      className="w-full relative z-20 py-10 sm:py-16 md:py-28 px-4 sm:px-8 md:px-14 lg:px-16 text-white overflow-hidden select-none"
    >
      <div className="max-w-[1380px] mx-auto">
        {/* Responsive Headline */}
        <h2 className="font-sans font-normal sm:font-medium uppercase tracking-tight text-[clamp(1.75rem,7.5vw,7.5rem)] leading-[1.05] sm:leading-[0.96] text-white">
          {/* Line 1: READY FOR [Avatar] YOUR */}
          <div className="flex items-center flex-wrap gap-x-2 sm:gap-x-4 md:gap-x-5 lg:gap-x-6">
            <span className="transition-colors duration-300 hover:text-[#ff6a3d] cursor-pointer">
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
                sizes="(max-width: 768px) 48px, 120px"
                className="object-cover object-[72%_30%] scale-150 transition-all duration-500 ease-out group-hover/avatar:opacity-0 group-hover/avatar:scale-125"
                priority
              />
              <Image
                src="/images/2.jpeg"
                alt="Portrait Alternate"
                fill
                sizes="(max-width: 768px) 48px, 120px"
                className="object-cover object-center scale-125 opacity-0 transition-all duration-500 ease-out group-hover/avatar:opacity-100 group-hover/avatar:scale-105"
              />
            </span>

            <span className="transition-colors duration-300 hover:text-[#ff6a3d] cursor-pointer">
              YOUR
            </span>
          </div>

          {/* Line 2: PRESTIGE MOMENT? */}
          <div className="mt-1 sm:mt-2 md:mt-3">
            <span className="transition-colors duration-300 hover:text-[#ff6a3d] cursor-pointer">
              <span>PRESTI</span>
              <span className="text-[#ff6a3d] bg-gradient-to-r from-[#ff6036] via-[#ff6f40] to-[#ff844e] bg-clip-text text-transparent">
                GE MO
              </span>
              <span>MENT?</span>
            </span>
          </div>
        </h2>

        {/* Input Form Section */}
        <div className="mt-6 sm:mt-10 md:mt-16 w-full">
          {submitted ? (
            <div className="bg-[#181818] border border-[#2e2e2e] p-5 sm:p-8 md:p-10 flex flex-col items-start justify-between gap-5 transition-all rounded-lg">
              <div className="w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#10b981]">
                    Inquiry Received & Automation Dispatched
                  </span>
                </div>
                
                <h4 className="text-xl sm:text-2xl font-medium text-white mb-2">
                  Thanks! Your request has been recorded.
                </h4>

                {inquiryId && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.05] border border-white/10 rounded font-mono text-xs text-zinc-300 mb-3">
                    <span className="text-zinc-500 uppercase">Inquiry ID:</span>
                    <span className="text-[#ff6a3d] font-semibold">{inquiryId}</span>
                  </div>
                )}

                {queryMessages && queryMessages.length > 0 ? (
                  <div className="mt-3 p-4 bg-white/[0.03] border border-white/10 rounded-md">
                    <p className="text-xs uppercase font-mono text-zinc-400 mb-1.5 tracking-wider">
                      Response from AI System:
                    </p>
                    <div className="space-y-1 text-sm text-zinc-200">
                      {queryMessages.map((msg, index) => (
                        <p key={index} className="leading-relaxed">
                          {msg}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-[#888888]">
                    Your inquiry has been successfully transmitted. You will receive an automated response shortly.
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setErrorMessage(null);
                  setQueryMessages([]);
                  setInquiryId(null);
                }}
                className="text-xs font-mono uppercase tracking-widest text-[#ff6a3d] hover:underline whitespace-nowrap pt-2 cursor-pointer"
              >
                Send another message →
              </button>
            </div>
          ) : (
            <div>
              <form
                id="contactForm"
                onSubmit={handleSubmit}
                className="w-full flex flex-col bg-[#161616] border border-[#242424] shadow-2xl"
              >
                {/* Row 1: Name, Email, Subject, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch border-b border-[#242424]">
                  {/* Name Input */}
                  <div className="border-b sm:border-b-0 sm:border-r border-[#242424]">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                      }}
                      placeholder="Name *"
                      className="w-full h-12 sm:h-14 md:h-[60px] px-5 sm:px-6 md:px-8 bg-transparent text-white placeholder-[#505050] text-sm sm:text-base font-sans focus:outline-none focus:bg-[#1c1c1c] transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="border-b sm:border-b-0 lg:border-r border-[#242424]">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                      }}
                      placeholder="Email *"
                      className="w-full h-12 sm:h-14 md:h-[60px] px-5 sm:px-6 md:px-8 bg-transparent text-white placeholder-[#505050] text-sm sm:text-base font-sans focus:outline-none focus:bg-[#1c1c1c] transition-colors"
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="border-b sm:border-b-0 sm:border-r border-[#242424]">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                      }}
                      placeholder="Subject (optional)"
                      className="w-full h-12 sm:h-14 md:h-[60px] px-5 sm:px-6 md:px-8 bg-transparent text-white placeholder-[#505050] text-sm sm:text-base font-sans focus:outline-none focus:bg-[#1c1c1c] transition-colors"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                      }}
                      placeholder="Phone (optional)"
                      className="w-full h-12 sm:h-14 md:h-[60px] px-5 sm:px-6 md:px-8 bg-transparent text-white placeholder-[#505050] text-sm sm:text-base font-sans focus:outline-none focus:bg-[#1c1c1c] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Message Textarea + Submit Action */}
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="flex-1 border-b md:border-b-0 md:border-r border-[#242424]">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errorMessage) setErrorMessage(null);
                      }}
                      placeholder="Message / Tell me about your project or inquiry..."
                      className="w-full py-3.5 px-5 sm:px-6 md:px-8 bg-transparent text-white placeholder-[#505050] text-sm sm:text-base font-sans focus:outline-none focus:bg-[#1c1c1c] transition-colors resize-none min-h-[80px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-64 lg:w-72 min-h-[56px] sm:min-h-[60px] px-6 sm:px-8 bg-[#f0eee9] hover:bg-white text-[#111111] transition-all flex items-center justify-between font-sans font-medium text-sm sm:text-base active:scale-[0.99] group disabled:opacity-70 cursor-pointer"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                    <span className="text-lg leading-none font-mono text-[#111111] group-hover:translate-x-1 transition-transform">
                      {loading ? "…" : "↵"}
                    </span>
                  </button>
                </div>
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
      </div>
    </section>
  );
}
