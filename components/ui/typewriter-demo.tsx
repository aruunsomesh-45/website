"use client";

import { Typewriter } from "@/components/ui/typewriter";

export default function TypewriterDemo() {
  const words = [
    "Welcome to Typewriter",
    "Create beautiful effects",
    "With React & Tailwind",
    "Type away!",
  ];

  return (
    <main className="flex items-center justify-center min-h-[50vh] p-8 text-white bg-[#070709]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          <Typewriter
            words={words}
            speed={80}
            delayBetweenWords={2000}
            cursor={true}
            cursorChar="|"
            className="text-white"
          />
        </h2>
      </div>
    </main>
  );
}
