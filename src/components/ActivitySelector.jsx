import React, { useState } from 'react';
import {
  Footprints,
  Dumbbell,
  Flame,
  HeartPulse,
  Zap,
  Bike,
  Brain,
  Moon,
  Flower2,
  Trophy,
  Clock,
  Sparkles,
  Filter,
  BookOpen,
  ExternalLink,
  CheckCircle2,
  AlertOctagon,
  Atom
} from 'lucide-react';
import { SPORTS_SCIENCE_RESEARCH } from '../data/sportsScienceResearch';

const iconMap = {
  Footprints,
  Dumbbell,
  Flame,
  HeartPulse,
  Zap,
  Bike,
  Brain,
  Moon,
  Flower2,
  Trophy
};

const CATEGORIES = [
  { id: 'all', label: 'All Activities' },
  { id: 'pre', label: 'Pre-Workout' },
  { id: 'post', label: 'Post-Workout' },
  { id: 'endurance', label: 'Endurance & Mobility' },
  { id: 'focus', label: 'Focus & Sleep' },
  { id: 'sports', label: 'Competitive Sports' }
];

export default function ActivitySelector({
  activities,
  selectedActivity,
  onSelectActivity,
  selectedTiming,
  onSelectTiming
}) {
  const [activeCategory, setActiveCategory] = useState('all');

  const current = activities.find(a => a.id === selectedActivity) || activities[0];

  const filteredActivities = activities.filter(act => {
    if (activeCategory === 'all') return true;
    return act.category === activeCategory;
  });

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-parchment-300 shadow-soft-lift mb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-parchment-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-culinary-accent"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-culinary-accent uppercase">
              Step 1: Activity & Metabolic Timing
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-culinary-dark">
            What activity are you preparing for or recovering from?
          </h2>
        </div>
        <div className="flex items-center gap-2 bg-parchment-100 px-4 py-2 rounded-2xl border border-parchment-200 text-xs font-medium text-culinary-moss self-start md:self-auto">
          <Clock className="w-4 h-4 text-culinary-accent flex-shrink-0" />
          <span>Dynamic Digestion & Glycemic Modeling</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mt-6">
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-stone-400 mr-1 uppercase">
          <Filter className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </div>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === cat.id
                ? 'bg-culinary-deep text-white shadow-sm'
                : 'bg-parchment-100 text-stone-600 hover:bg-parchment-200 border border-parchment-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Activity Grid (Responsive 1 to 3/4 cols) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 mt-5">
        {filteredActivities.map(act => {
          const Icon = iconMap[act.icon] || Dumbbell;
          const isSelected = act.id === selectedActivity;

          return (
            <button
              key={act.id}
              onClick={() => {
                onSelectActivity(act.id);
                if (act.timingOptions && act.timingOptions.length > 0) {
                  onSelectTiming(act.timingOptions[0].id);
                }
              }}
              className={`p-4 rounded-2xl text-left transition-all relative overflow-hidden border flex flex-col justify-between ${
                isSelected
                  ? 'bg-culinary-deep text-white border-culinary-deep shadow-soft-lift ring-2 ring-culinary-leaf ring-offset-2'
                  : 'bg-parchment-50 text-culinary-dark border-parchment-300 hover:border-culinary-moss hover:bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-white/15 text-white' : 'bg-parchment-200 text-culinary-deep'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-culinary-citron text-culinary-dark' : 'bg-parchment-200 text-culinary-moss'
                    }`}
                  >
                    {act.badge}
                  </span>
                </div>
                <h3 className="font-bold text-sm leading-snug mb-1">{act.name}</h3>
                <p
                  className={`text-[11px] line-clamp-2 leading-relaxed ${
                    isSelected ? 'text-parchment-200' : 'text-stone-600'
                  }`}
                >
                  {act.description}
                </p>
              </div>

              {isSelected && (
                <div className="mt-2 text-[10px] font-mono text-culinary-citron font-semibold flex items-center gap-1">
                  <span>✓ Active Target</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Expanded Timing Selection Sub-bar */}
      <div className="mt-6 pt-6 border-t border-parchment-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-culinary-dark uppercase tracking-wider">
            When is your session or meal window?
          </span>
          <span className="text-xs text-culinary-leaf font-medium hidden sm:inline">
            (Adjusts required digestion velocity)
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {current.timingOptions && current.timingOptions.map(t => {
            const isSelected = t.id === selectedTiming;
            return (
              <button
                key={t.id}
                onClick={() => onSelectTiming(t.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-culinary-accent text-white shadow-glow-accent ring-2 ring-culinary-accent ring-offset-1'
                    : 'bg-parchment-100 text-culinary-moss hover:bg-parchment-200 border border-parchment-300'
                }`}
              >
                <span>{t.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-mono ${
                    isSelected ? 'bg-white/20 text-white font-bold' : 'bg-white text-culinary-leaf'
                  }`}
                >
                  {t.digestion}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Target Nutritional Architecture Banner */}
      <div className="mt-4 bg-parchment-100/80 rounded-2xl p-4 border border-parchment-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-culinary-accent flex-shrink-0" />
          <span className="font-semibold text-culinary-deep">Target Metabolic Balance:</span>
          <span className="font-mono text-culinary-leaf bg-white px-2 py-0.5 rounded border border-parchment-300 font-bold">
            {current.macroFocus}
          </span>
        </div>
        <div className="text-stone-600 font-medium text-[11px] sm:text-xs">
          Recommended timing window: <strong className="text-culinary-deep">{current.recommendedTiming}</strong>
        </div>
      </div>

      {/* Peer-Reviewed Sports Science & Chrono-Nutrition Protocol */}
      {(() => {
        const activeResearch = SPORTS_SCIENCE_RESEARCH[selectedActivity];
        const activeTiming = activeResearch?.timingBifurcations?.[selectedTiming] 
          || (activeResearch?.timingBifurcations ? Object.values(activeResearch.timingBifurcations)[0] : null);

        if (!activeResearch || !activeTiming) return null;

        return (
          <div className="mt-5 p-5 bg-stone-900 text-stone-100 rounded-3xl border border-stone-800 shadow-xl overflow-hidden relative">
            {/* Top Atmospheric Gradient Pill */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-culinary-accent flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Atom className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-culinary-citron">
                      Clinical Literature Protocol ({activeTiming.windowLabel})
                    </span>
                    <span className="bg-emerald-950 text-emerald-400 border border-emerald-800/80 text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
                      Peer-Reviewed
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-0.5">
                    {activeResearch.keyPaper.title}
                  </h4>
                </div>
              </div>

              {activeResearch.keyPaper.pmid && (
                <a
                  href={`https://pubmed.ncbi.nlm.nih.gov/${activeResearch.keyPaper.pmid}/`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors self-start sm:self-auto flex-shrink-0"
                  title="View on PubMed National Library of Medicine"
                >
                  <BookOpen className="w-3.5 h-3.5 text-culinary-citron" />
                  <span>PubMed PMID: {activeResearch.keyPaper.pmid}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              )}
            </div>

            {/* Physiological Mechanism & Kinetic Targets */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="md:col-span-2">
                <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block mb-1">
                  Physiological Mechanism ({activeTiming.windowLabel})
                </span>
                <p className="text-stone-300 leading-relaxed text-xs">
                  {activeTiming.physiologicalMechanism}
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="bg-stone-800 text-stone-300 px-2.5 py-1 rounded-lg border border-stone-700">
                    ⏱️ Emptying: <strong className="text-white">{activeTiming.gastricEmptyingGoal}</strong>
                  </span>
                  <span className="bg-stone-800 text-stone-300 px-2.5 py-1 rounded-lg border border-stone-700">
                    📈 Target GI: <strong className="text-white">{activeTiming.glycemicIndexTarget}</strong>
                  </span>
                  <span className="bg-stone-800 text-stone-300 px-2.5 py-1 rounded-lg border border-stone-700">
                    💧 Osmolarity: <strong className="text-white">{activeTiming.osmolarityRange}</strong>
                  </span>
                </div>
              </div>

              {/* Research Target Macro Breakdown */}
              <div className="bg-stone-800/80 p-3.5 rounded-2xl border border-stone-700/60 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block mb-2">
                    Research Target Macro Split
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    <div className="bg-stone-900 p-2 rounded-xl border border-stone-700">
                      <span className="text-[10px] text-amber-400 block font-mono">Carbs</span>
                      <strong className="text-base font-bold text-white">{activeTiming.targetMacros.carbsPct}%</strong>
                    </div>
                    <div className="bg-stone-900 p-2 rounded-xl border border-stone-700">
                      <span className="text-[10px] text-red-400 block font-mono">Protein</span>
                      <strong className="text-base font-bold text-white">{activeTiming.targetMacros.proteinPct}%</strong>
                    </div>
                    <div className="bg-stone-900 p-2 rounded-xl border border-stone-700">
                      <span className="text-[10px] text-yellow-400 block font-mono">Lipids</span>
                      <strong className="text-base font-bold text-white">{activeTiming.targetMacros.fatPct}%</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-stone-700/60 text-[10px] text-stone-400 font-mono">
                  {activeResearch.keyPaper.authors.split(',')[0]} et al., {activeResearch.keyPaper.journal} ({activeResearch.keyPaper.year})
                </div>
              </div>
            </div>

            {/* Time-Bifurcated Consume vs Avoid Matrix */}
            <div className="mt-4 pt-3.5 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-emerald-950/40 p-3 rounded-2xl border border-emerald-900/60">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold font-mono text-[11px] mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>PRIORITIZE FOR THIS WINDOW:</span>
                </div>
                <ul className="space-y-1 text-emerald-100 text-[11px]">
                  {activeTiming.whatToConsume.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-950/40 p-3 rounded-2xl border border-rose-900/60">
                <div className="flex items-center gap-1.5 text-rose-400 font-bold font-mono text-[11px] mb-1.5">
                  <AlertOctagon className="w-3.5 h-3.5" />
                  <span>STRICTLY AVOID / LIMIT:</span>
                </div>
                <ul className="space-y-1 text-rose-100 text-[11px]">
                  {activeTiming.whatToAvoid.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Detailed Footnote Citation */}
            <div className="mt-3 text-[10px] text-stone-400 font-mono flex items-center justify-between">
              <span>Primary Reference: {activeTiming.citation}</span>
              <span className="text-stone-500 hidden md:inline">ISSN / ACSM Nutrient Timing Standards</span>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
