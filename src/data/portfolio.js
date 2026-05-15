/**
 * portfolio.js — Single Source of Truth (SSOT)
 *
 * ARCHITECTURE DECISION: All portfolio content lives here as pure data.
 * Components are "dumb" — they only know how to render, not what to render.
 * This separation means you can update content without touching any component.
 *
 * SCALABILITY: Adding a new project = one object push to `projects`.
 * Adding a new skill category = one object push to `skills`.
 * Zero component changes needed.
 *
 * DATA FLOW: portfolio.js → components receive via props or direct import
 */

export const meta = {
  name: "Harsh Tyagi",
  title: "Software Developer | React.js | Next.js",
  tagline: "Building scalable React.js & Next.js applications for high-traffic platforms.",
  description:
    "Software Developer with 1.5+ years of experience building scalable React.js and Next.js applications for high-traffic platforms including for our client IRCTC. Proficient in REST API integration, component-driven UI architecture, and performance optimization.",
  location: "Ghaziabad, India",
  email: "harshtyagi8010@gmail.com",
  phone: "+91-8010803534",
  linkedin: "https://linkedin.com/in/harsh80",
  github: "https://github.com/HarshTyagi8010",
  resumeUrl: "/Harsh_Tyagi_Resume.pdf",
};

export const about = {
  summary:
    "Software Developer with 1.5+ years of experience building scalable React.js and Next.js applications for high-traffic platforms including IRCTC. Proficient in REST API integration, component-driven UI architecture, and performance optimization. Passionate about delivering responsive frontend solutions for fintech and product-focused environments.",
  roles: [
    "Software Developer",
    "React Engineer",
    "Frontend Product Developer",
    "UI Systems Engineer",
    "Dashboard Developer",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript ES6+", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "Context API", "Component State"],
  },
  {
    category: "API & Integration",
    items: ["REST APIs", "Axios", "Fetch", "Async/Await", "JSON", "Real-time Data"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "GitHub Copilot"],
  },
  {
    category: "Cloud & Deploy",
    items: ["Vercel", "AWS EC2/S3", "Docker", "Serverless"],
  },
  {
    category: "Concepts",
    items: [
      "Component Architecture",
      "Dashboard UI",
      "Data Visualization",
      "Performance Optimization",
      "Cross-browser Compatibility",
      "SDLC",
    ],
  },
];

export const experience = [
  {
    id: "bpaas",
    role: "Software Developer Trainee",
    company: "BPAAS Solutions Pvt Ltd",
    location: "Gurgaon",
    period: "Jan 2026 – Present",
    current: true,
    bullets: [
      "Migrating 10+ legacy JSP screens to modern component-driven UI for IRCTC Passenger Management Framework using Git branching and PR workflows, reducing technical debt by ~30%.",
      "Built reusable UI modules with form validation and REST API integration, cutting redundant code across 5+ modules.",
      "Debugged JSON data-flow issues reducing integration defects by ~40%.",
    ],
  },
  {
    id: "pps",
    role: "Frontend Developer",
    company: "PPS International Pvt Ltd",
    location: "Greater Noida",
    period: "Jul 2024 – Oct 2025",
    current: false,
    bullets: [
      "Developed responsive React.js UI for Vande Bharat / IRCTC infotainment system, integrating REST APIs for real-time JSON-based content delivery to thousands of passengers.",
      "Ensured cross-browser compatibility across 5+ device configurations.",
      "Collaborated with backend teams to align API contracts, reducing integration turnaround time by ~20%.",
    ],
  },
];

export const projects = [
  {
    id: "aironix",
    title: "Aironix Solutions Website",
    description:
      "Production-grade responsive website with REST API integration, dynamic JSON-driven rendering, and Docker-based deployment on Vercel serverless infrastructure. Engineered reusable React components with optimized state management.",
    tags: ["React.js", "REST API", "Docker", "Vercel", "JSON Rendering"],
    liveUrl: "#",
    githubUrl: null,
    featured: true,
  },
  {
    id: "excel-dashboard",
    title: "Excel Dashboard Studio",
    description:
      "Next.js analytics dashboard for Excel/CSV upload with interactive data visualization, reusable components, Context API state management, and fully responsive design. Optimized via memoization improving load performance by ~35%.",
    tags: ["Next.js", "Context API", "Data Viz", "Memoization", "Fintech"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "fityou",
    title: "FitYou – Fit AI Chatbot",
    description:
      "Open-source AI chatbot with LLM API integration for real-time exercise recommendations. Reduced API response time by 20% through optimized component restructuring and efficient data flow.",
    tags: ["React.js", "LLM API", "Open Source", "Performance"],
    liveUrl: null,
    githubUrl: "#",
    featured: false,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "Fully responsive React portfolio with dynamic routing, REST API integration, Docker-based Vercel deployment. Clean component architecture with optimized rendering and seamless navigation.",
    tags: ["React.js", "Vite", "Docker", "Vercel", "Component Architecture"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "R.D. Engineering College, AKTU",
  location: "Ghaziabad",
  period: "2020 – 2024",
};

export const certifications = [
  "AWS Academy – Cloud Practitioner",
  "Google Cloud – Computing Foundations",
  "Introduction to Python – Coding Ninjas",
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
