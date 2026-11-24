# WebPilot — Marketing Website

> **"Say it in your language. WebPilot does it on the web, safely."**  
> Hackathon Project for **Track 2: Beyond the Browser** at Ramaiya University Hackathon.

WebPilot is an AI browser agent that completes everyday web tasks (comparing products, simplifying complex portals, filling forms) in regional languages with strict, transparent safety gates.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (tested on Node.js 24)
- npm 9+

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Preview
```bash
# Build TypeScript and bundle assets
npm run build

# Preview optimized production bundle
npm run preview
```

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## 📁 File Structure

```
├── index.html                  # HTML entry point with Google Fonts
├── package.json                # Project dependencies & scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Design tokens (colors, fonts, radii, shadows)
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── src/
│   ├── main.tsx                # React root mount
│   ├── App.tsx                 # Main application layout and landmark shells
│   ├── index.css               # Global CSS, scrollbar, .mark swipe styles
│   ├── types.ts                # TypeScript interfaces
│   ├── data/                   # 100% of copy lives here (content editing)
│   │   ├── site.ts             # Metadata, nav, social links, footer, trust items
│   │   ├── features.ts         # Bento grid items & Before/After text
│   │   ├── personas.ts         # 4 user persona profiles and quotes
│   │   ├── comparison.ts       # Solution comparison table data
│   │   ├── howItWorks.ts       # 5 lifecycle stages & architecture schema
│   │   ├── safety.ts           # 3 risk tiers, 4 principles & interactive demo
│   │   ├── useCases.ts         # 6 everyday use case scenarios with prompts
│   │   ├── techStack.ts        # Under-the-hood technologies & roles
│   │   ├── roadmap.ts          # MVP, 3-month, and 1-year deliverables
│   │   └── team.ts             # 4 team member profiles & social links
│   ├── hooks/
│   │   ├── useScrollSpy.ts     # Active navbar section tracking
│   │   ├── useCountUp.ts       # Metric counting animation
│   │   └── useReducedMotion.ts # prefers-reduced-motion detector
│   └── components/
│       ├── ui/
│       │   ├── Button.tsx      # Pill button with hover arrow
│       │   ├── Section.tsx     # Semantic section wrapper with max-width container
│       │   ├── Reveal.tsx      # Scroll entrance animation
│       │   ├── Marker.tsx      # Yellow .mark swipe highlight
│       │   └── ProgressBar.tsx # 3px yellow scroll indicator
│       ├── Navbar.tsx          # 72px blur navbar + mobile drawer
│       ├── Hero.tsx            # Hero with mock browser 4-step loop
│       ├── StatsStrip.tsx      # 4-col ink stats band
│       ├── Problem.tsx         # Problem narrative + 6 tabs collapse visual
│       ├── Personas.tsx        # 4 persona cards with hover effects
│       ├── Comparison.tsx      # Tool comparison table
│       ├── Features.tsx        # Bento grid with interactive Before/After slider
│       ├── HowItWorks.tsx      # 5-step numbered timeline + SVG architecture
│       ├── Safety.tsx          # 3-tier risk cards + interactive approval demo
│       ├── Privacy.tsx         # Local vault illustration with bouncing particles
│       ├── UseCases.tsx        # 6 prompt cards
│       ├── TechStack.tsx       # Pill badges
│       ├── Roadmap.tsx         # 3-stage milestone timeline
│       ├── Team.tsx            # Team grid with initials avatars
│       ├── FinalCTA.tsx        # Yellow-500 rounded panel
│       ├── Footer.tsx          # 4-column ink footer
│       └── BackToTop.tsx       # Floating 48px circle button
```

---

## ✏️ Where to Edit Content

To modify any copy, text, links, or data, **you never need to edit JSX components**. Edit the files in `src/data/`:

| What you want to change | File to edit |
|---|---|
| GitHub repo URL, contact email, nav links, stats | `src/data/site.ts` |
| Feature descriptions, Before/After text | `src/data/features.ts` |
| Persona names, quotes, demographics | `src/data/personas.ts` |
| Comparison table competitors and checkmarks | `src/data/comparison.ts` |
| 5-step lifecycle descriptions & architecture nodes | `src/data/howItWorks.ts` |
| Risk tiers, safety principles & interactive mock dialog | `src/data/safety.ts` |
| Use case scenarios and sample prompts | `src/data/useCases.ts` |
| Under-the-hood technologies | `src/data/techStack.ts` |
| Roadmap milestones and timelines | `src/data/roadmap.ts` |
| Team members, roles, bios, and links | `src/data/team.ts` |

---

## 🎨 Design Tokens & Constraints

- **Strict Palette**:
  - `ink`: `#0A0A0A`, `ink-2`: `#141414`, `ink-3`: `#1F1F1F`
  - `white`: `#FFFFFF`, `paper`: `#FAFAF7`
  - `line`: `#E8E8E3`, `line-dark`: `#262626`
  - `muted`: `#6B6B66`, `muted-dark`: `#A3A39B`
  - `yellow-500`: `#FFD60A`, `yellow-600`: `#FFC800`, `yellow-100`: `#FFF8D6`, `yellow-50`: `#FFFCEB`
- **Typography**:
  - Headings: *Plus Jakarta Sans* 700/800
  - Body: *Inter* 400/500/600
  - Code/Prompts: *JetBrains Mono* 500
- **Accessibility**:
  - Semantic landmark tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
  - Minimum 44px tap targets.
  - Zero yellow text on white backgrounds.
  - Full `prefers-reduced-motion` support.
