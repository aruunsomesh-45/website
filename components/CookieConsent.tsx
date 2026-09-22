"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = "aruna_cookie_consent_v1";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
    functional: true,
    marketing: false,
    timestamp: "",
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Delay slightly for smooth entrance
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      } else {
        setPreferences(JSON.parse(saved));
      }
    } catch {
      // Fallback if localStorage is restricted
      setIsVisible(true);
    }
  }, []);

  const saveAndClose = (prefs: CookiePreferences) => {
    try {
      const payload = { ...prefs, timestamp: new Date().toISOString() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setPreferences(payload);
    } catch {
      // ignore
    }
    setIsVisible(false);
    setIsModalOpen(false);
  };

  const handleAcceptAll = () => {
    saveAndClose({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
      timestamp: "",
    });
  };

  const handleRejectNonEssential = () => {
    saveAndClose({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
      timestamp: "",
    });
  };

  const handleSaveCustom = () => {
    saveAndClose(preferences);
  };

  return (
    <>
      {/* Small Reopen Trigger Button (Always available in bottom-left) */}
      {!isVisible && (
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label="Manage Cookie Preferences"
          title="Cookie Settings"
          className="fixed bottom-4 left-4 z-40 p-2.5 rounded-full bg-[#121218]/90 hover:bg-[#1c1c24] border border-white/10 text-zinc-400 hover:text-white backdrop-blur-md shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:rotate-12 text-[#eb3d26]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 13v.01" />
          </svg>
        </button>
      )}

      {/* Primary Floating Consent Banner */}
      {isVisible && !isModalOpen && (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-5 sm:p-6 rounded-2xl bg-[#111116]/95 border border-white/15 text-white backdrop-blur-xl shadow-2xl animate-in slide-in-from-bottom-6 duration-300 select-none"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-[#eb3d26] shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
                <circle cx="16" cy="15.5" r="1" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-tight">
                Cookie &amp; Privacy Preferences
              </h3>
              <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">
                We use cookies and analytics to enhance speed, remember preferences, and analyze traffic. Read our{" "}
                <Link href="/cookies" className="text-[#eb3d26] hover:underline underline-offset-2">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10 text-xs font-medium">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 py-2 px-3 rounded-xl bg-[#eb3d26] hover:bg-[#d6331d] text-white transition-colors cursor-pointer text-center font-semibold"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="flex-1 py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-200 transition-colors cursor-pointer text-center"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto py-2 px-3 rounded-xl text-zinc-400 hover:text-white transition-colors text-center text-[11px] font-mono"
            >
              Preferences ⚙
            </button>
          </div>
        </aside>
      )}

      {/* Detailed Preferences Customization Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-[#121218] border border-white/15 p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h2 id="cookie-settings-title" className="text-xl font-bold tracking-tight text-white">
                  Cookie Management
                </h2>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  Customize which cookies you permit
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Categories List */}
            <div className="space-y-4 py-6 overflow-y-auto pr-1">
              
              {/* Essential */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-white">Strictly Necessary</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Required
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">
                    Essential for navigation, secure authentication, CSRF tokens, and core site operation.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="w-4 h-4 rounded text-[#eb3d26] accent-[#eb3d26] cursor-not-allowed mt-1"
                />
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-white">Performance &amp; Analytics</h4>
                  <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">
                    Helps measure page load times, Lighthouse metrics, and visitor journeys to optimize speed.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="cookie-analytics"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                  }
                  className="w-4 h-4 rounded text-[#eb3d26] accent-[#eb3d26] cursor-pointer mt-1"
                />
              </div>

              {/* Functional */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-white">Functional &amp; Experience</h4>
                  <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">
                    Stores UI state, reduced-motion preferences, and active filter selections.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="cookie-functional"
                  checked={preferences.functional}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, functional: e.target.checked }))
                  }
                  className="w-4 h-4 rounded text-[#eb3d26] accent-[#eb3d26] cursor-pointer mt-1"
                />
              </div>

              {/* Marketing */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-white">Marketing &amp; Referrals</h4>
                  <p className="text-xs text-zinc-400 font-light mt-1 leading-relaxed">
                    Measures newsletter conversions and referral channels without third-party ad profiling.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="cookie-marketing"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                  }
                  className="w-4 h-4 rounded text-[#eb3d26] accent-[#eb3d26] cursor-pointer mt-1"
                />
              </div>

            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                href="/cookies"
                onClick={() => setIsModalOpen(false)}
                className="text-xs text-zinc-400 hover:text-white underline underline-offset-2"
              >
                Read full Cookie Policy →
              </Link>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none py-2 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="flex-1 sm:flex-none py-2 px-5 rounded-xl bg-[#eb3d26] hover:bg-[#d6331d] text-xs font-semibold text-white transition-colors cursor-pointer shadow-md shadow-red-600/20"
                >
                  Save Choices
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
