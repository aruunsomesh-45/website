"use client";

import React, { useState, useEffect, useId } from "react";

export interface TechItem {
  id: string;
  name: string;
  role: string;
  brandColor: string;
  bgGlow: string;
  tagline: string;
  description: string;
  tags: string[];
  docUrl?: string;
  icon: (props: { className?: string; style?: React.CSSProperties }) => React.JSX.Element;
}

export const TECH_STACK: TechItem[] = [
  // --- FRONTEND & DESIGN ---
  {
    id: "react",
    name: "React",
    role: "UI Library",
    brandColor: "#61DAFB",
    bgGlow: "rgba(97, 218, 251, 0.16)",
    tagline: "Component-driven UI library",
    description: "The core foundation for building dynamic, stateful client applications with fast virtual DOM reconciliation and reactive hooks.",
    tags: ["UI Library", "Hooks", "Virtual DOM", "SPA"],
    docUrl: "https://react.dev",
    icon: ({ className, style }) => (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} style={style} fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    id: "nextjs",
    name: "Next.js",
    role: "React Framework",
    brandColor: "#FFFFFF",
    bgGlow: "rgba(255, 255, 255, 0.12)",
    tagline: "The React framework for the Web",
    description: "Production-grade full-stack framework with Server Components, App Router, SSR/SSG rendering, and automated optimization.",
    tags: ["React Framework", "RSC", "SSR", "Edge API"],
    docUrl: "https://nextjs.org",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 180 180" className={className} style={style}>
        <mask height="180" id="next-mask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#next-mask)">
          <circle cx="90" cy="90" data-theme="dark" fill="#000000" r="90" stroke="#333" strokeWidth="6" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="url(#next-grad-a)"
          />
          <rect fill="url(#next-grad-b)" height="72" width="12" x="115" y="54" />
        </g>
        <defs>
          <linearGradient id="next-grad-a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="next-grad-b" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    role: "Type Safety",
    brandColor: "#3178C6",
    bgGlow: "rgba(49, 120, 198, 0.18)",
    tagline: "Typed JavaScript at Any Scale",
    description: "Strongly typed superset of JavaScript providing compile-time type safety, intelligent autocompletion, and robust architecture.",
    tags: ["Type Safety", "Strict Checking", "Generics", "DX"],
    docUrl: "https://www.typescriptlang.org",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 128 128" className={className} style={style}>
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path
          d="M62.618 70.835h-13.62v36.082H36.31V70.835H22.753V59.986h39.865v10.849zm14.195 24.316c3.743 2.505 8.167 3.992 12.871 3.992 5.626 0 8.847-2.677 8.847-6.726 0-4.049-2.92-5.782-9.743-8.683-9.529-4.049-14.881-8.684-14.881-17.143 0-9.641 7.728-17.202 21.054-17.202 5.568 0 10.74 1.253 14.88 3.754l-3.801 9.879c-3.626-2.148-7.787-3.158-11.492-3.158-5.334 0-8.087 2.619-8.087 6.028 0 3.874 2.802 5.433 9.47 8.286 10.222 4.341 15.212 9.07 15.212 17.55 0 10.428-7.787 17.728-22.378 17.728-7.009 0-13.064-1.786-17.275-4.469l4.426-9.879z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    role: "Modern Styling",
    brandColor: "#06B6D4",
    bgGlow: "rgba(6, 182, 212, 0.18)",
    tagline: "Utility-first modern CSS framework",
    description: "Rapid, highly customizable utility styling engine allowing precise zero-runtime responsive design and consistent design tokens.",
    tags: ["Utility CSS", "Responsive", "Design Tokens", "JIT"],
    docUrl: "https://tailwindcss.com",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style} fill="none">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
          fill="#06B6D4"
        />
      </svg>
    ),
  },
  {
    id: "javascript",
    name: "JavaScript",
    role: "Core Web Engine",
    brandColor: "#F7DF1E",
    bgGlow: "rgba(247, 223, 30, 0.18)",
    tagline: "The core language of the web",
    description: "Modern ECMAScript standards with async/await, closures, functional programming paradigms, and high-speed V8 execution.",
    tags: ["ECMAScript", "Async/Await", "Event Loop", "V8 Engine"],
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 630 630" className={className} style={style}>
        <rect width="630" height="630" rx="90" fill="#F7DF1E" />
        <path
          d="M323.2 367.5c-7.7-12.7-18-22-34.4-22-13.7 0-22.1 7.4-22.1 17.3 0 12.2 9.6 16.7 25.8 23.8l8.6 3.7c31.3 13.5 52.4 28.5 52.4 64.9 0 32.2-25.2 56.6-65.7 56.6-37.3 0-58.4-18.4-68-41.4l32.7-18.9c5.7 10.9 14.3 19.3 29.5 19.3 15.3 0 24.3-7.5 24.3-17.7 0-11.7-8.6-16.4-24.8-23.5l-8.6-3.7c-29.2-12.6-49.4-27.3-49.4-62.5 0-30.8 23.5-54.8 59.8-54.8 28.8 0 49.3 12.2 60.4 33.6l-30.5 19.3zm-136.6-9.6v148.5c0 19.5-10.4 28.3-28.8 28.3-15.6 0-25-6.7-30.8-16.7l28.8-17.5c2.3 4.4 4.5 7.1 8.5 7.1 5.3 0 7.8-3.4 7.8-13.2v-136.5h14.5z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    id: "html5",
    name: "HTML5",
    role: "Semantic Structure",
    brandColor: "#E34F26",
    bgGlow: "rgba(227, 79, 38, 0.18)",
    tagline: "Semantic Structure & Web Standards",
    description: "Modern semantic HTML5 markup prioritizing accessibility (a11y), clean DOM structure, and rich multimedia integration.",
    tags: ["Semantic Web", "Accessibility", "A11y", "DOM"],
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 512 512" className={className} style={style}>
        <path d="M71.5 460L35 52h442l-36.5 408L256 504 71.5 460z" fill="#E34F26" />
        <path d="M256 472l154-42.5L441 84H256v388z" fill="#EF652A" />
        <path
          d="M256 208h78.5l-5.5 61.5H256v54.5h73.5l-8.5 95-65 18-65-18-4.5-50.5H231l2.5 28.5 22.5 6 22.5-6 3.5-39H183l-4-45h77v-54.5H176l-4-45.5h84V208zm0-92h143l-4 46H256v-46zm-80 0h80v46h-76l-4-46z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "css3",
    name: "CSS3",
    role: "Layouts & Animations",
    brandColor: "#1572B6",
    bgGlow: "rgba(21, 114, 182, 0.18)",
    tagline: "Advanced layout, fluid typography & styles",
    description: "Modern CSS capabilities including Flexbox, CSS Grid, custom properties, smooth transitions, and complex transforms.",
    tags: ["CSS Grid", "Flexbox", "Animations", "Variables"],
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 512 512" className={className} style={style}>
        <path d="M71.5 460L35 52h442l-36.5 408L256 504 71.5 460z" fill="#1572B6" />
        <path d="M256 472l154-42.5L441 84H256v388z" fill="#33A9DC" />
        <path
          d="M256 208h78.5l-5.5 61.5H256v54.5h73.5l-8.5 95-65 18-65-18-4.5-50.5h49.5l2.5 28.5 22.5 6 22.5-6 3.5-39H183l-4-45h155l3.5-40H176l-4-45.5h167l3.5-40.5H171l-4-45.5h233l-12 134.5H256V208z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "figma",
    name: "Figma",
    role: "UI/UX Design",
    brandColor: "#F24E1E",
    bgGlow: "rgba(242, 78, 30, 0.2)",
    tagline: "Collaborative interface design & prototyping",
    description: "Industry-standard vector UI/UX design tool with interactive prototyping, auto-layout tokens, and seamless design-to-code pipelines.",
    tags: ["UI/UX Design", "Design Systems", "Prototyping", "Auto-layout"],
    docUrl: "https://www.figma.com",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 38 57" className={className} style={style}>
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    id: "framer",
    name: "Framer",
    role: "Motion & Interaction",
    brandColor: "#0055FF",
    bgGlow: "rgba(0, 85, 255, 0.2)",
    tagline: "Interactive motion & spatial web experience",
    description: "High-fidelity interactive web canvas, expressive motion graphics, micro-interactions, and visual storytelling environments.",
    tags: ["Motion Design", "Interactivity", "Spatial Web", "Prototyping"],
    docUrl: "https://www.framer.com",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style}>
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
      </svg>
    ),
  },
  {
    id: "vercel",
    name: "Vercel",
    role: "Edge Deployment",
    brandColor: "#FFFFFF",
    bgGlow: "rgba(255, 255, 255, 0.16)",
    tagline: "Develop. Preview. Ship. Global Edge Network",
    description: "Instant zero-configuration deployment, automatic preview environments, edge routing, serverless compute, and performance analytics.",
    tags: ["Edge Network", "Serverless", "Instant Previews", "CI/CD"],
    docUrl: "https://vercel.com",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style}>
        <path d="M12 2L24 22H0L12 2Z" fill="#FFFFFF" />
      </svg>
    ),
  },

  // --- BACKEND, CLOUD, AUTH & DATA ---
  {
    id: "python",
    name: "Python",
    role: "AI & Automation",
    brandColor: "#3776AB",
    bgGlow: "rgba(55, 118, 171, 0.2)",
    tagline: "AI workflows, scripts & powerful backends",
    description: "Versatile language powering modern AI agent orchestration, data processing, backend microservices, and neural networks.",
    tags: ["AI & ML", "LangChain", "FastAPI", "Automation"],
    docUrl: "https://www.python.org",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 128 128" className={className} style={style}>
        <path
          d="M63.585 0c-16.71 0-31.252 2.658-31.252 14.622v10.966h31.252v3.655H19.78C7.79 29.243 0 37.195 0 53.64c0 16.444 6.786 24.397 19.78 24.397h7.82V67.07c0-10.966 9.387-20.103 20.33-20.103h31.253c8.86 0 16.16-7.3 16.16-16.161V14.622C95.343 2.658 80.295 0 63.585 0zm-14.075 7.82a4.433 4.433 0 11.002 8.868 4.433 4.433 0 01-.002-8.868z"
          fill="#3776AB"
        />
        <path
          d="M64.415 128c16.71 0 31.252-2.658 31.252-14.622V102.41H64.415v-3.655h43.805c11.99 0 19.78-7.952 19.78-24.397 0-16.445-6.79-24.398-19.78-24.398h-7.82v10.967c0 10.966-9.387 20.103-20.33 20.103H49.07c-8.86 0-16.16 7.3-16.16 16.16v16.162c0 11.964 15.048 14.622 31.505 14.622zm14.075-7.82a4.434 4.434 0 11-.002-8.868 4.434 4.434 0 01.002 8.868z"
          fill="#FFD438"
        />
      </svg>
    ),
  },
  {
    id: "django",
    name: "Django",
    role: "Python Backend",
    brandColor: "#2BA977",
    bgGlow: "rgba(43, 169, 119, 0.18)",
    tagline: "The Web framework for perfectionists with deadlines",
    description: "Robust high-level Python web framework encouraging clean design, battery-included ORM, secure authentication, and administrative tooling.",
    tags: ["Python Web", "ORM", "REST API", "Enterprise"],
    docUrl: "https://www.djangoproject.com",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style} fill="#2BA977">
        <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z" />
      </svg>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    role: "Relational SQL",
    brandColor: "#4169E1",
    bgGlow: "rgba(65, 105, 225, 0.2)",
    tagline: "The world's most advanced open source SQL database",
    description: "Enterprise-grade relational database with ACID guarantees, complex indexing, JSONB support, and high concurrency.",
    tags: ["Relational SQL", "ACID", "JSONB", "Transactions"],
    docUrl: "https://www.postgresql.org",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style} fill="#336791">
        <path d="M23.56 14.723a.5.5 0 0 0-.057-.12q-.21-.395-1.007-.231c-1.654.34-2.294.13-2.526-.02c1.342-2.048 2.445-4.522 3.041-6.83c.272-1.05.798-3.523.122-4.73a1.6 1.6 0 0 0-.15-.236C21.693.91 19.8.025 17.51.001c-1.495-.016-2.77.346-3.116.479a10 10 0 0 0-.516-.082a8 8 0 0 0-1.312-.127c-1.182-.019-2.203.264-3.05.84C8.66.79 4.729-.534 2.296 1.19C.935 2.153.309 3.873.43 6.304c.041.818.507 3.334 1.243 5.744q.69 2.26 1.433 3.582q.83 1.493 1.714 1.79c.448.148 1.133.143 1.858-.729a56 56 0 0 1 1.945-2.206c.435.235.906.362 1.39.377v.004a11 11 0 0 0-.247.305c-.339.43-.41.52-1.5.745c-.31.064-1.134.233-1.146.811a.6.6 0 0 0 .091.327c.227.423.922.61 1.015.633c1.335.333 2.505.092 3.372-.679c-.017 2.231.077 4.418.345 5.088c.221.553.762 1.904 2.47 1.904q.375.001.829-.094c1.782-.382 2.556-1.17 2.855-2.906c.15-.87.402-2.875.539-4.101c.017-.07.036-.12.057-.136c0 0 .07-.048.427.03l.044.007l.254.022l.015.001c.847.039 1.911-.142 2.531-.43c.644-.3 1.806-1.033 1.595-1.67M2.37 11.876c-.744-2.435-1.178-4.885-1.212-5.571c-.109-2.172.417-3.683 1.562-4.493c1.837-1.299 4.84-.54 6.108-.13l-.01.01C6.795 3.734 6.843 7.226 6.85 7.44c0 .082.006.199.016.36c.034.586.1 1.68-.074 2.918c-.16 1.15.194 2.276.973 3.089q.12.126.252.237c-.347.371-1.1 1.193-1.903 2.158c-.568.682-.96.551-1.088.508c-.392-.13-.813-.587-1.239-1.322c-.48-.839-.963-2.032-1.415-3.512m6.007 5.088a1.6 1.6 0 0 1-.432-.178c.089-.039.237-.09.483-.14c1.284-.265 1.482-.451 1.915-1a8 8 0 0 1 .367-.443a.4.4 0 0 0 .056-.07c.01-.017.02-.034.028-.053l.11-.278l.21.218c.28.29.62.5 1 .61a3 3 0 0 1 .73.3c.09.055.15.12.18.19a.44.44 0 0 1-.02.39c-.11.23-.42.42-.9.56a6.7 6.7 0 0 1-1.94.13c-.64-.04-1.12-.19-1.3-.45z" />
      </svg>
    ),
  },
  {
    id: "supabase",
    name: "Supabase",
    role: "Realtime DB",
    brandColor: "#3ECF8E",
    bgGlow: "rgba(62, 207, 142, 0.2)",
    tagline: "The Open Source Firebase Alternative",
    description: "Instant PostgreSQL backend with realtime WebSocket listeners, auto-generated REST/GraphQL APIs, and serverless edge functions.",
    tags: ["Serverless Postgres", "Realtime", "Auth", "Edge Functions"],
    docUrl: "https://supabase.com",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style}>
        <path
          d="M21.362 9.354H12V.343a.343.343 0 0 0-.594-.234L.12 13.06a.343.343 0 0 0 .243.586h9.362v9.011a.343.343 0 0 0 .594.234l11.286-12.951a.343.343 0 0 0-.243-.586z"
          fill="url(#supabase-grad)"
        />
        <defs>
          <linearGradient id="supabase-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3ECF8E" />
            <stop offset="100%" stopColor="#249361" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "firebase",
    name: "Firebase",
    role: "NoSQL Cloud DB",
    brandColor: "#FFCA28",
    bgGlow: "rgba(255, 202, 40, 0.2)",
    tagline: "App development platform by Google",
    description: "Cloud Firestore NoSQL, push messaging, instant authentication, and serverless hosting backed by Google Cloud infrastructure.",
    tags: ["NoSQL", "Cloud Firestore", "Push Notifications", "Serverless"],
    docUrl: "https://firebase.google.com",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style}>
        <path d="M3.89 15.67L6.44 2.8a.74.74 0 0 1 1.4-.14l2.77 5.25z" fill="#FFA000" />
        <path d="M3.89 15.67L8.9 6.22a.74.74 0 0 1 1.34.13l1.83 9.32z" fill="#F57C00" />
        <path
          d="M12.07 15.67l3.86-7.37a.74.74 0 0 1 1.33.15l2.85 7.22-8.04 4.54a1.5 1.5 0 0 1-1.46 0z"
          fill="#FFCA28"
        />
        <path d="M3.89 15.67l8.18 4.61a1.5 1.5 0 0 0 1.46 0l6.58-3.72-8.04-10.34z" fill="#FFA000" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "clerk",
    name: "Clerk",
    role: "User Auth & Identity",
    brandColor: "#6C47FF",
    bgGlow: "rgba(108, 71, 255, 0.22)",
    tagline: "Complete User Management & Auth",
    description: "Complete identity layer featuring passwordless login, OAuth providers, MFA security, session management, and organization roles.",
    tags: ["Authentication", "SSO / OAuth", "User Management", "MFA"],
    docUrl: "https://clerk.com",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style}>
        <rect width="24" height="24" rx="6" fill="#6C47FF" />
        <path
          d="M12 6.5A5.5 5.5 0 0 0 6.5 12c0 2.22 1.32 4.14 3.22 5l1.08-1.87A3.33 3.33 0 0 1 8.67 12 3.33 3.33 0 0 1 12 8.67c1.37 0 2.54.82 3.05 2h2.24A5.49 5.49 0 0 0 12 6.5zm5.5 5.5c0 .76-.15 1.48-.43 2.14l-1.92-1.11c.12-.32.18-.67.18-1.03 0-1.84-1.49-3.33-3.33-3.33V6.5c3.04 0 5.5 2.46 5.5 5.5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "twilio",
    name: "Twilio",
    role: "SMS & Voice API",
    brandColor: "#F22F46",
    bgGlow: "rgba(242, 47, 70, 0.2)",
    tagline: "Customer engagement & global SMS/Voice APIs",
    description: "Programmable SMS, voice calling, WhatsApp messaging, and two-factor verification APIs connecting software to phone networks.",
    tags: ["SMS API", "Voice Calling", "2FA Verification", "Telephony"],
    docUrl: "https://www.twilio.com",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style}>
        <circle cx="12" cy="12" r="11" fill="#F22F46" />
        <circle cx="8.5" cy="8.5" r="2.1" fill="#FFFFFF" />
        <circle cx="15.5" cy="8.5" r="2.1" fill="#FFFFFF" />
        <circle cx="8.5" cy="15.5" r="2.1" fill="#FFFFFF" />
        <circle cx="15.5" cy="15.5" r="2.1" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: "stripe",
    name: "Stripe",
    role: "Payments & Billing",
    brandColor: "#635BFF",
    bgGlow: "rgba(99, 91, 255, 0.22)",
    tagline: "Financial infrastructure for the internet",
    description: "Secure global payment processing, subscriptions, invoice automation, fraud prevention with Radar, and worldwide checkout flows.",
    tags: ["Payments", "Subscriptions", "Webhooks", "Billing"],
    docUrl: "https://stripe.com",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style}>
        <rect width="24" height="24" rx="6" fill="#635BFF" />
        <path
          d="M13.9 10.3c0-.7-.6-1.1-1.6-1.1-1.4 0-3.1.5-4.4 1.3V7.2c1.4-.6 3.1-.9 4.7-.9 3.5 0 5.7 1.8 5.7 4.9 0 4.6-6.4 3.9-6.4 5.9 0 .9.8 1.2 1.9 1.2 1.6 0 3.6-.7 4.9-1.5v3.3c-1.6.7-3.4 1-5.2 1-3.6 0-6.1-1.8-6.1-5 0-4.9 6.5-4.1 6.5-6z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "aws",
    name: "AWS",
    role: "Cloud Infrastructure",
    brandColor: "#FF9900",
    bgGlow: "rgba(255, 153, 0, 0.2)",
    tagline: "Amazon Web Services cloud computing",
    description: "Scalable cloud infrastructure powering S3 storage, Lambda serverless computation, ECS containers, CloudFront CDN, and IAM security.",
    tags: ["Cloud Infra", "S3 Storage", "Lambda", "CloudFront"],
    docUrl: "https://aws.amazon.com",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style}>
        <rect width="24" height="24" rx="5" fill="#232F3E" />
        <path
          d="M17.47 16.48c-2.31 1.7-5.59 2.59-8.49 2.59-4.08 0-7.76-1.52-10.54-4.07-.22-.2-.02-.48.24-.32 2.99 1.73 6.64 2.77 10.3 2.77 2.58 0 5.42-.62 7.97-1.92.39-.2.72.3.52.95zm.9-1.21c-.29-.38-1.94-.18-2.68-.09-.23.03-.26-.16-.06-.3 1.28-.9 3.39-.64 3.64-.34.26.3-.06 2.45-1.28 3.44-.19.15-.36.07-.28-.13.29-.7.95-2.2.66-2.58z"
          fill="#FF9900"
        />
        <path
          d="M12.92 7.72c-.17 1.13-1.07 1.83-2.12 1.83-.87 0-1.45-.51-1.45-1.34 0-.97.77-1.57 2.1-1.57.48 0 .97.06 1.47.16v.92zm2.08 3.91h-1.84v-.75c-.6.64-1.4 1-2.4 1-1.58 0-2.82-1.03-2.82-2.73 0-1.78 1.34-2.8 3.51-2.8.54 0 1.11.07 1.7.2v-.41c0-.76-.5-1.19-1.58-1.19-.83 0-1.7.23-2.41.65-.13.08-.26.02-.32-.1l-.39-.81c-.06-.13-.03-.27.1-.36.96-.58 2.12-.89 3.32-.89 2.18 0 3.42 1.05 3.42 3.12v4.07c0 .4.07.69.19.89.07.13.02.28-.11.33l-1.37.52c-.12.04-.26-.03-.3-.15l-.2-.59z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "railway",
    name: "Railway",
    role: "PaaS & Hosting",
    brandColor: "#A855F7",
    bgGlow: "rgba(168, 85, 247, 0.2)",
    tagline: "Infrastructure made simple for developers",
    description: "Instant cloud provisioning for databases, background cron workers, Docker containers, and microservices with zero configuration drag.",
    tags: ["PaaS", "Docker Containers", "Microservices", "Databases"],
    docUrl: "https://railway.app",
    icon: ({ className, style }) => (
      <svg viewBox="0 0 24 24" className={className} style={style} fill="#A855F7">
        <path d="M.113 10.27A13.026 13.026 0 000 11.48h18.23c-.064-.125-.15-.237-.235-.347-3.117-4.027-4.793-3.677-7.19-3.78-.8-.034-1.34-.048-4.524-.048-1.704 0-3.555.005-5.358.01-.234.63-.459 1.24-.567 1.737h9.342v1.216H.113v.002zm18.26 2.426H.009c.02.326.05.645.094.961h16.955c.754 0 1.179-.429 1.315-.96zm-17.318 4.28s2.81 6.902 10.93 7.024c4.855 0 9.027-2.883 10.92-7.024H1.056zM11.988 0C7.5 0 3.593 2.466 1.531 6.108l4.75-.005v-.002c3.71 0 3.849.016 4.573.047l.448.016c1.563.052 3.485.22 4.996 1.364.82.621 2.007 1.99 2.712 2.965.654.902.842 1.94.396 2.934-.408.914-1.289 1.458-2.353 1.458H.391s.099.42.249.886h22.748A12.026 12.026 0 0024 12.005C24 5.377 18.621 0 11.988 0z" />
      </svg>
    ),
  },
];

// Balanced 2-Row Split (10 items each)
export const ROW_1_TECHS = [
  TECH_STACK.find((t) => t.id === "react")!,
  TECH_STACK.find((t) => t.id === "nextjs")!,
  TECH_STACK.find((t) => t.id === "typescript")!,
  TECH_STACK.find((t) => t.id === "tailwindcss")!,
  TECH_STACK.find((t) => t.id === "javascript")!,
  TECH_STACK.find((t) => t.id === "html5")!,
  TECH_STACK.find((t) => t.id === "css3")!,
  TECH_STACK.find((t) => t.id === "figma")!,
  TECH_STACK.find((t) => t.id === "framer")!,
  TECH_STACK.find((t) => t.id === "vercel")!,
];

export const ROW_2_TECHS = [
  TECH_STACK.find((t) => t.id === "python")!,
  TECH_STACK.find((t) => t.id === "django")!,
  TECH_STACK.find((t) => t.id === "postgresql")!,
  TECH_STACK.find((t) => t.id === "supabase")!,
  TECH_STACK.find((t) => t.id === "firebase")!,
  TECH_STACK.find((t) => t.id === "stripe")!,
  TECH_STACK.find((t) => t.id === "clerk")!,
  TECH_STACK.find((t) => t.id === "twilio")!,
  TECH_STACK.find((t) => t.id === "aws")!,
  TECH_STACK.find((t) => t.id === "railway")!,
];

export default function TechStackCarousel() {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [copiedHex, setCopiedHex] = useState(false);
  const modalHeadingId = useId();

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedTech(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(true);
    setTimeout(() => setCopiedHex(false), 2000);
  };

  // Repeated arrays to create a seamless infinite loop
  const loopRow1 = [...ROW_1_TECHS, ...ROW_1_TECHS, ...ROW_1_TECHS];
  const loopRow2 = [...ROW_2_TECHS, ...ROW_2_TECHS, ...ROW_2_TECHS];

  return (
    <section
      id="tech-stack"
      className="w-full bg-[#000000] text-white py-10 sm:py-14 md:py-20 relative overflow-hidden border-t border-b border-white/[0.06]"
      aria-label="Technologies and Tech Stack Carousel"
    >
      {/* Ambient background glow layers */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-red-600/[0.03] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-600/[0.03] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Header (Clean & Compact for Mobile & Desktop) */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 mb-6 sm:mb-8 md:mb-10 relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#eb3d26] animate-pulse" />
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-mono text-[#888894]">
            Production Stack & Infrastructure
          </p>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white">
          Built with modern, battle-tested technologies.
        </h2>
      </div>

      {/* Dual Row Infinite Scrolling Track (Compact Mobile-First Proportions) */}
      <div className="relative w-full mask-gradient-x pause-on-hover py-1 sm:py-2 select-none">
        
        {/* ROW 1: Scrolling Left */}
        <div className="flex mb-2.5 sm:mb-3">
          <div className="animate-marquee-left flex gap-2.5 sm:gap-3">
            {loopRow1.map((tech, idx) => (
              <LogoCard
                key={`r1-${tech.id}-${idx}`}
                tech={tech}
                isSelected={selectedTech?.id === tech.id}
                onClick={() => setSelectedTech(tech)}
              />
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className="flex">
          <div className="animate-marquee-right flex gap-2.5 sm:gap-3">
            {loopRow2.map((tech, idx) => (
              <LogoCard
                key={`r2-${tech.id}-${idx}`}
                tech={tech}
                isSelected={selectedTech?.id === tech.id}
                onClick={() => setSelectedTech(tech)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Details Modal (Mobile-Optimized) */}
      {selectedTech && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedTech(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalHeadingId}
        >
          <div
            className="relative w-full max-w-sm sm:max-w-md bg-[#131419] border border-white/15 rounded-2xl p-5 sm:p-6 shadow-2xl overflow-hidden"
            style={{
              boxShadow: `0 20px 40px -10px ${selectedTech.bgGlow}, 0 0 0 1px rgba(255,255,255,0.08)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Accent Glow */}
            <div
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-35 pointer-events-none"
              style={{ backgroundColor: selectedTech.brandColor }}
            />

            {/* Modal Header */}
            <div className="flex items-start justify-between relative z-10 mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center p-2.5 border border-white/10 bg-white/[0.04] shadow-inner shrink-0"
                  style={{
                    boxShadow: `inset 0 0 12px ${selectedTech.bgGlow}`,
                  }}
                >
                  <selectedTech.icon className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 id={modalHeadingId} className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      {selectedTech.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                      {selectedTech.role}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5">{selectedTech.tagline}</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedTech(null)}
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-xs"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-3.5 relative z-10">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedTech.description}
              </p>

              {/* Tags */}
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5">
                  Core Capabilities
                </p>
                <div className="flex flex-wrap gap-1">
                  {selectedTech.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-zinc-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color Specs */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: selectedTech.brandColor }}
                  />
                  <div className="text-xs font-mono text-zinc-400">
                    Hex: <span className="text-white font-medium">{selectedTech.brandColor}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyHex(selectedTech.brandColor)}
                  className="text-xs px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer"
                >
                  {copiedHex ? "Copied!" : "Copy Hex"}
                </button>
              </div>

              {/* External Documentation Link */}
              {selectedTech.docUrl && (
                <div className="pt-1">
                  <a
                    href={selectedTech.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] text-xs font-medium text-white transition-all border border-white/10 group"
                  >
                    <span>View Official Documentation</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

interface LogoCardProps {
  tech: TechItem;
  isSelected?: boolean;
  onClick: () => void;
}

function LogoCard({ tech, isSelected, onClick }: LogoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl border transition-all duration-300 cursor-pointer shrink-0 ${
        isSelected
          ? "border-white bg-white/15 scale-105 shadow-md shadow-white/5"
          : "border-white/[0.06] bg-[#09090b] hover:bg-[#121318] hover:border-white/20 hover:scale-[1.03]"
      }`}
      style={{
        boxShadow: isHovered
          ? `0 8px 20px -4px ${tech.bgGlow}, 0 0 0 1px ${tech.brandColor}33`
          : undefined,
      }}
    >
      {/* Brand accent glow inside card */}
      <div
        className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${tech.bgGlow} 0%, transparent 70%)`,
        }}
      />

      {/* SVG Icon (Compact) */}
      <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-110">
        <tech.icon className="w-full h-full object-contain" />
      </div>

      {/* Brand Text & Specific Role */}
      <div className="flex flex-col text-left relative z-10 pr-0.5">
        <span className="text-xs sm:text-sm font-medium text-white tracking-tight leading-tight group-hover:text-white transition-colors">
          {tech.name}
        </span>
        <span className="text-[9px] sm:text-[10px] text-zinc-400 font-mono tracking-tight leading-tight group-hover:text-zinc-300 transition-colors">
          {tech.role}
        </span>
      </div>

      {/* Mini Color Indicator Pill */}
      <div
        className="w-1.5 h-1.5 rounded-full shrink-0 relative z-10 transition-all duration-300 group-hover:scale-125"
        style={{ backgroundColor: tech.brandColor }}
      />
    </div>
  );
}
