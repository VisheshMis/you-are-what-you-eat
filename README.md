# 🥑 You Are What You Eat (YAWYE)
> **Precision Chrono-Nutrition × Computational Gastronomy × 10-Minute Dark-Store Dispatch**  
> *Developed for the Foodoscope: Fork It Challenge 2026 (Esya'26, IIIT Delhi / CoSy Lab)*

[![Vercel Deployment Ready](https://img.shields.io/badge/Vercel-Deploy_Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)](#-deploying-to-vercel)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-amber.svg?style=for-the-badge)](LICENSE)

---

## 📖 Overview

**You Are What You Eat** is an intelligent culinary engine that calculates what you should consume based on:
1. **Your Immediate Metabolic Demand:** Pre-Run, Pre-Gym, HIIT, Post-Workout Recovery, Post-Run Replenish, or Deep Work Cognitive Focus.
2. **Exact Timing Horizons:** 15m, 30m, 60m, 90m, or Immediate Post-Workout.
3. **Pantry Inventory Matching:** Prioritizes recipes using ingredients you already have in your kitchen.
4. **Peer-Reviewed Exercise Science:** Backed by published clinical studies from the *Journal of Sports Sciences*, *British Journal of Sports Medicine*, *JISSN*, and *Nature Reviews Neuroscience*.
5. **FlavorDB Volatile Compound Harmony:** Molecular pairing scores based on shared aromatic compounds (e.g., *Vanillin*, *Eugenol*, *Cinnamaldehyde*).
6. **10-Minute Dark Store Dispatch:** 1-Click order dispatch for missing ingredients via Blinkit and Zepto (0.7 km local dark stores).

---

## 🔬 Scientific Foundations & Chrono-Nutrition

Unlike conventional fitness apps that prescribe static generic calorie targets, **YAWYE** models gastric transit kinetics, transporter saturability, and myofibrillar stimulus:

| Activity & Window | Clinical Citation | Target Macro Ratio | Physiological Mechanism |
| :--- | :--- | :--- | :--- |
| **Pre-Run (15m)** | *Burke et al. (2011)*, *J Sports Sci* ([PMID: 21660838](https://pubmed.ncbi.nlm.nih.gov/21660838/)) | 85% C / 10% P / 5% F | Rapid gastric clearance ($t_{1/2} < 20\text{m}$), dual-transporter hexose absorption (SGLT1 & GLUT5) without GI distress. |
| **Pre-Run (60m)** | *Jeukendrup (2014)*, *Sports Med* ([PMID: 24791914](https://pubmed.ncbi.nlm.nih.gov/24791914/)) | 70% C / 15% P / 15% F | Moderate-GI amyloses for sustained hepatic glycogen loading; dietary nitrate vasodilation. |
| **Pre-Gym (30m)** | *Schoenfeld et al. (2017)*, *JISSN* ([PMID: 28919842](https://pubmed.ncbi.nlm.nih.gov/28919842/)) | 60% C / 30% P / 10% F | Free amino acid pool priming; cyclic AMP stimulation without insulin spikes. |
| **Pre-Gym (90m)** | *Kerksick et al. (2017)*, *JISSN* ([PMID: 28096757](https://pubmed.ncbi.nlm.nih.gov/28096757/)) | 50% C / 35% P / 15% F | Sustained hyperaminoacidemia (20–40g intact protein) + slow-release amylose for intra-set ATP regeneration. |
| **Post-Workout (Recovery)** | *Morton, Phillips et al. (2018)*, *Br J Sports Med* ([PMID: 28698222](https://pubmed.ncbi.nlm.nih.gov/28698222/)) | 40% C / 45% P / 15% F | Leucine threshold trigger ($\ge 3.0\text{g}$) to stimulate mTORC1 phosphorylation and muscle protein synthesis (MPS). |
| **Post-Run (Recovery)** | *Beelen et al. (2010)*, *Int J Sport Nutr* ([PMID: 21116024](https://pubmed.ncbi.nlm.nih.gov/21116024/)) | 65% C / 25% P / 10% F | Non-insulin dependent GLUT4 translocation for supercompensated glycogen resynthesis. |
| **Deep Work / Cognitive** | *Gómez-Pinilla (2008)*, *Nat Rev Neurosci* ([PMID: 18568016](https://pubmed.ncbi.nlm.nih.gov/18568016/)) | 35% C / 30% P / 35% F | Neuro-glycemic stability to prevent postprandial lethargy; DHA/EPA neuronal membrane fluidity. |

---

## 🧮 Multi-Factor Mathematical Selection Weighting

Recipes are ranked and selected using a 4-dimensional objective function:

$$\text{Relevance Score} = 0.40 \times S_{\text{inventory}} + 0.30 \times S_{\text{metabolic}} + 0.20 \times S_{\text{timing}} + 0.10 \times S_{\text{flavor}}$$

```
┌────────────────────────────────────────────────────────────────────────┐
│                      RELEVANCE SCORE BREAKDOWN                         │
├──────────────────────┬─────────┬───────────────────────────────────────┤
│ Metric               │ Weight  │ Description                           │
├──────────────────────┼─────────┼───────────────────────────────────────┤
│ Inventory Stock      │ 40%     │ Category-weighted availability:       │
│                      │         │  • Core staples (protein/carbs): 3×   │
│                      │         │  • Fresh produce & dairy: 2×          │
│                      │         │  • Seasonings & condiments: 1×        │
├──────────────────────┼─────────┼───────────────────────────────────────┤
│ Target Fit (Macros)  │ 30%     │ Euclidean distance between recipe     │
│                      │         │ macronutrients and clinical targets.  │
├──────────────────────┼─────────┼───────────────────────────────────────┤
│ Digestive Kinetics   │ 20%     │ Gastric transit constraints:          │
│                      │         │  • Penalizes fat/fiber pre-workout    │
│                      │         │  • Rewards leucine/protein post-lift  │
├──────────────────────┼─────────┼───────────────────────────────────────┤
│ FlavorDB Harmony     │ 10%     │ Molecular shared volatile compounds   │
│                      │         │ (CoSy Lab aromatic profile pairing).  │
└──────────────────────┴─────────┴───────────────────────────────────────┘
```

---

## ✨ Core Features

- 🎯 **Interactive Chrono-Activity Selector:** Switch between 6 physical and mental states with 4 time windows; inspect peer-reviewed clinical rationale, PubMed citation buttons, and Consume vs. Avoid guides.
- 🥫 **Expanded 400+ Pantry Catalog + Open Food Facts:** Instant search across comprehensive pantry staples + live search across 3,000,000+ items via Open Food Facts API with automated classification into proteins, grains, vegetables, fruits, dairy, and spices.
- ⚡ **Dynamic Recipe Relevance Scoring:** Every recipe card displays its composite score with an interactive breakdown bar.
- 🧪 **FlavorDB Molecular Gastronomy:** Discover overlapping chemical volatiles (*e.g., Eugenol, Linalool, Cineole*) and scientific substitutions for missing ingredients.
- 🛵 **10-Minute Dark-Store Bridge:** 1-Click micro-cart for missing items connected to Zepto and Blinkit mock dispatch with live courier simulation and confetti celebrations.
- 🔍 **Live Foodoscope & RecipeDB API Inspector:** Direct payload inspection and bearer token authentication for IIIT Delhi's official CoSy Lab endpoints.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18.x or 20.x
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/you-are-what-you-eat.git
cd you-are-what-you-eat

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

Visit **`http://localhost:3000`** in your browser.

---

## 🌐 Deploying to Vercel

### Method 1: 1-Click via GitHub (Recommended)
1. Push this project to your GitHub account (see instructions below).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your site will be live on `https://your-project.vercel.app` in under 60 seconds!

### Method 2: Deploying via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

---

## 📤 Pushing to GitHub

To upload this project to your GitHub account:

```bash
# 1. Initialize git and stage all project files
git init
git add .

# 2. Commit the repository
git commit -m "feat: complete precision chrono-nutrition & computational gastronomy engine"

# 3. Create a new repository on GitHub (https://github.com/new) named 'you-are-what-you-eat'

# 4. Link and push to GitHub (replace with your GitHub username)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/you-are-what-you-eat.git
git push -u origin main
```

---

## 🛠️ Tech Stack

- **Framework:** [React 18.3](https://react.dev/)
- **Build Tool:** [Vite 6.0](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations:** [Framer Motion 14.9](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **FX:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **External Data:** Open Food Facts REST API + Foodoscope / RecipeDB (IIIT Delhi CoSy Lab)

---

## 🗺️ Roadmap: Making This Platform Production-Ready

To elevate this project from a winning hackathon demonstration to a commercial-scale platform:

1. **Wearable & Sensor Integration (Continuous Metabolic Sensing):**
   - Connect Apple HealthKit, Garmin Connect, and Whoop API.
   - Automatically trigger post-workout replenishment modal the moment a run or lift ends based on heart rate recovery and active calories burned.
2. **Computer Vision Fridge Scanner:**
   - On-device camera scanning using YOLOv8 or Gemini Multimodal to photograph an open refrigerator and instantly populate the pantry inventory.
3. **Real Quick-Commerce Deep Linking:**
   - Integrate actual Blinkit / Zepto / Swiggy Instamart URL schemes and cart affiliate APIs for true 1-click cart fulfillment.
4. **Gut Microbiome & Allergen Profiling:**
   - Add FODMAP, histamine intolerance, celiac, and personalized glycemic response (CGM) modifiers to the ranking formula.
5. **Offline PWA & PDF Chrono-Meal Export:**
   - Service worker caching for zero-latency kitchen access and exportable weekly chrono-nutrition schedules.

---

## 📄 License & Acknowledgments

- Built for **Foodoscope: Fork It Challenge 2026** (Esya'26, IIIT Delhi).
- Data inspired by **CoSy Lab, IIIT Delhi** (RecipeDB & FlavorDB).
- Nutritional literature credited to respective peer-reviewed journals cited in the research table.
- Licensed under the [MIT License](LICENSE).
