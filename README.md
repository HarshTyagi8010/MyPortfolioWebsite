# Harsh Tyagi — Portfolio

**Software Developer | React.js | Next.js**  
Production-grade portfolio built with React.js + Vite.

---

## 🚀 Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build
```

---

## 🏗️ Architecture

```
src/
├── assets/               # Static assets (images, icons)
├── components/
│   ├── common/           # Atomic reusable components
│   │   ├── Button        # Polymorphic CTA (link or button)
│   │   ├── SectionTitle  # Uniform section headings
│   │   ├── SkillBadge    # Pill tag for skills/technologies
│   │   └── SocialLinks   # GitHub + LinkedIn icons
│   └── sections/         # Page sections (one per folder)
│       ├── Navbar        # Sticky scroll-aware navigation
│       ├── Hero          # Landing fold with typewriter
│       ├── About         # Summary + stats
│       ├── Skills        # Category-grouped tech skills
│       ├── Experience    # Timeline with ExperienceCard
│       ├── ExperienceCard # Single job entry
│       ├── Projects      # Project grid
│       ├── ProjectCard   # Single project entry
│       ├── Contact       # CTA section
│       └── Footer        # Copyright
├── data/
│   └── portfolio.js      # ← SINGLE SOURCE OF TRUTH for all content
├── styles/
│   └── global.css        # Design tokens (CSS variables) + reset
├── App.jsx               # Root: layout composition only
└── main.jsx              # React entry point
```

### Key Design Decisions

| Decision | Reason |
|---|---|
| **CSS Modules** | Scoped styles, zero class conflicts, colocated with component |
| **portfolio.js SSOT** | Update content without touching components |
| **No state management lib** | Portfolio is static; React state is sufficient |
| **Vite** | 10-100x faster HMR than CRA; native ESM |
| **CSS Custom Properties** | Theming without runtime cost |
| **No heavy animation lib** | CSS keyframes + minimal JS for performance |

---

## 📦 Deployment (Vercel)

1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Framework: **Vite**
4. Build: `npm run build`
5. Output: `dist/`

---

## ✏️ Updating Content

All portfolio content lives in **one file**: `src/data/portfolio.js`

- Add a project → push to `projects[]`
- Add a skill category → push to `skills[]`
- Update contact info → edit `meta` object
- Change experience → edit `experience[]`

Zero component changes needed.

---

## 🧩 Adding a New Section

1. Create `src/components/sections/NewSection.jsx` + `NewSection.module.css`
2. Add data to `portfolio.js` if needed
3. Import and add `<NewSection />` to `App.jsx`
4. Add nav link to `nav[]` in `portfolio.js`

---

**Built by Harsh Tyagi** · [LinkedIn](https://linkedin.com/in/harsh80) · [GitHub](https://github.com/HarshTyagi8010)
