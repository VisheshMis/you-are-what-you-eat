import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Atom, Zap, PieChart, ShieldAlert, CheckCircle2, ChevronRight, Info } from 'lucide-react';

const GLYCEMIC_MODES = [
  {
    id: 'pre_run',
    name: 'Pre-Run Fast Spike',
    timeframe: '30-45m Window',
    peak: '20 mins',
    desc: 'High-glycemic simple carbs rapidly absorbed to saturate muscle glycogen without stomach bloat.',
    svgPath: 'M 10 120 Q 60 20, 110 50 T 210 110 T 310 125',
    color: '#FF5E36',
    dotX: 60,
    dotY: 20
  },
  {
    id: 'pre_gym',
    name: 'Pre-Gym Sustained Plateau',
    timeframe: '60-90m Window',
    peak: '50 mins',
    desc: 'Complex starches & amino acids delivering steady ATP output for compound heavy lifting.',
    svgPath: 'M 10 120 C 60 70, 120 40, 180 45 C 240 50, 270 90, 310 115',
    color: '#1D3323',
    dotX: 180,
    dotY: 45
  },
  {
    id: 'post_recovery',
    name: 'Post-Workout Leucine Spike',
    timeframe: 'Immediate 45m Window',
    peak: '35 mins',
    desc: 'Fast amino acid transit achieving the 3.2g Leucine threshold to trigger Muscle Protein Synthesis (MPS).',
    svgPath: 'M 10 125 Q 70 15, 130 35 T 220 95 T 310 120',
    color: '#10B981',
    dotX: 70,
    dotY: 15
  },
  {
    id: 'endurance',
    name: 'Endurance Multi-Hour Oxidation',
    timeframe: '60m - 3h Window',
    peak: 'Sustained Plateau (1.2g/min)',
    desc: 'SGLT-1 (glucose) and GLUT-5 (fructose) dual transporters prevent GI saturation and glycogen bonking.',
    svgPath: 'M 10 120 C 50 60, 100 55, 160 55 C 220 55, 270 58, 310 65',
    color: '#D97706',
    dotX: 160,
    dotY: 55
  },
  {
    id: 'deep_work',
    name: 'Cognitive Zero-Crash Plateau',
    timeframe: 'All-Day Deep Work',
    peak: 'Flat Insulin Curve',
    desc: 'Ultra-stable blood glucose with choline and polyphenol precursors preventing afternoon brain fog.',
    svgPath: 'M 10 100 C 60 80, 120 80, 180 82 C 240 82, 280 83, 310 85',
    color: '#4F46E5',
    dotX: 180,
    dotY: 82
  }
];

const MOLECULAR_NODES = [
  { id: 'vanillin', name: 'Vanillin', class: 'Phenolic Aldehyde', note: 'Sweet, creamy aroma', pairsWith: 'Banana, Honey, Oats', x: 70, y: 55 },
  { id: 'cinnamaldehyde', name: 'Cinnamaldehyde', class: 'Phenylpropanoid', note: 'Warm spice, insulin sensitizer', pairsWith: 'Cinnamon, Apples, Oatmeal', x: 190, y: 40 },
  { id: 'eugenol', name: 'Eugenol', class: 'Allylbenzene', note: 'Clove aromatic, anti-inflammatory', pairsWith: 'Spices, Berries, Dark Chocolate', x: 270, y: 95 },
  { id: 'limonene', name: 'Limonene', class: 'Cyclic Monoterpene', note: 'Citrus zest, dopamine release', pairsWith: 'Lemon, Berries, Spinach', x: 120, y: 135 },
  { id: 'curcumin', name: 'Curcumin', class: 'Diarylheptanoid', note: 'Potent COX-2 inhibitor', pairsWith: 'Turmeric, Black Pepper, Rice', x: 230, y: 145 },
];

export default function BentoScienceHub({ id }) {
  const [activeGlycemic, setActiveGlycemic] = useState(GLYCEMIC_MODES[0]);
  const [selectedMolecule, setSelectedMolecule] = useState(MOLECULAR_NODES[0]);

  return (
    <section id={id} className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-culinary-leaf"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-culinary-leaf uppercase">
              The Science Engine • CoSy Lab Foundation
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-culinary-dark">
            Computational Gastronomy & Metabolic Kinetics
          </h2>
        </div>
        <p className="text-stone-500 text-xs sm:text-sm max-w-md">
          How our platform pairs dynamic human glycemic response with volatile chemical food pairing and 10-minute dark store logistics.
        </p>
      </div>

      {/* 4-Quadrant Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Quadrant 1: Interactive Glycemic Curve (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-parchment-300 shadow-soft-lift flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-culinary-accent flex items-center justify-center font-bold">
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-bold text-culinary-dark">
                  Dynamic Glycemic Response Simulator
                </h3>
              </div>
              <span className="text-xs font-mono font-bold bg-parchment-100 text-culinary-leaf px-2.5 py-1 rounded-lg border border-parchment-200">
                Peak: {activeGlycemic.peak}
              </span>
            </div>

            <p className="text-xs text-stone-600 mb-6">
              {activeGlycemic.desc}
            </p>

            {/* Mode Switcher Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {GLYCEMIC_MODES.map((m) => {
                const isActive = activeGlycemic.id === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveGlycemic(m)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-culinary-deep text-white shadow-sm'
                        : 'bg-parchment-100 text-stone-600 hover:bg-parchment-200'
                    }`}
                  >
                    {m.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SVG Animated Curve Visualizer */}
          <div className="bg-parchment-50 rounded-2xl p-4 border border-parchment-200 relative overflow-hidden">
            <div className="flex justify-between text-[10px] font-mono text-stone-400 mb-1">
              <span>0m (Ingestion)</span>
              <span>60m</span>
              <span>120m</span>
              <span>180m (Recovery)</span>
            </div>

            <svg viewBox="0 0 320 140" className="w-full h-36 overflow-visible">
              {/* Grid lines */}
              <line x1="10" y1="30" x2="310" y2="30" stroke="#E5E0D5" strokeDasharray="3 3" />
              <line x1="10" y1="75" x2="310" y2="75" stroke="#E5E0D5" strokeDasharray="3 3" />
              <line x1="10" y1="120" x2="310" y2="120" stroke="#D5CBB9" strokeWidth="1.5" />

              {/* Dynamic Path */}
              <motion.path
                key={activeGlycemic.id}
                d={activeGlycemic.svgPath}
                fill="none"
                stroke={activeGlycemic.color}
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />

              {/* Peak Marker Dot */}
              <motion.circle
                cx={activeGlycemic.dotX}
                cy={activeGlycemic.dotY}
                r="5"
                fill={activeGlycemic.color}
                className="animate-pulse"
              />
            </svg>

            <div className="flex items-center justify-between mt-2 pt-2 border-t border-parchment-200 text-[11px] font-mono text-stone-500">
              <span>Digestion Protocol: <strong className="text-culinary-dark">{activeGlycemic.timeframe}</strong></span>
              <span className="text-emerald-700 font-bold">Optimal ATP Bioavailability</span>
            </div>
          </div>
        </div>

        {/* Quadrant 2: FlavorDB Volatile Resonance Network (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-parchment-300 shadow-soft-lift flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-culinary-mint text-culinary-deep flex items-center justify-center font-bold">
                  <Atom className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl font-bold text-culinary-dark">
                  FlavorDB Molecular Web
                </h3>
              </div>
              <span className="text-[10px] font-mono uppercase bg-culinary-deep text-white px-2 py-0.5 rounded font-bold">
                CoSy Lab API
              </span>
            </div>

            <p className="text-xs text-stone-600 mb-4">
              Click a volatile flavor molecule node to explore shared chemical receptors and cross-ingredient compatibility:
            </p>
          </div>

          {/* Interactive SVG Network Graph */}
          <div className="bg-culinary-dark rounded-2xl p-4 text-white relative">
            <svg viewBox="0 0 340 180" className="w-full h-40">
              {/* Connector lines between nodes */}
              <line x1="70" y1="55" x2="190" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="190" y1="40" x2="270" y2="95" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="70" y1="55" x2="120" y2="135" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="120" y1="135" x2="230" y2="145" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="270" y1="95" x2="230" y2="145" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="190" y1="40" x2="120" y2="135" stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />

              {/* Molecule Nodes */}
              {MOLECULAR_NODES.map((node) => {
                const isSelected = selectedMolecule.id === node.id;
                return (
                  <g
                    key={node.id}
                    onClick={() => setSelectedMolecule(node)}
                    className="cursor-pointer group"
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? '10' : '7'}
                      fill={isSelected ? '#FF5E36' : '#2E5037'}
                      stroke="#FFFFFF"
                      strokeWidth={isSelected ? '2.5' : '1.5'}
                      className="transition-all duration-300"
                    />
                    <text
                      x={node.x}
                      y={node.y - 12}
                      textAnchor="middle"
                      fill={isSelected ? '#E5FF7F' : '#E4F0E8'}
                      fontSize="9"
                      fontFamily="JetBrains Mono"
                      fontWeight="600"
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Selected Molecule Details Box */}
            <div className="mt-2 pt-2 border-t border-white/10 text-xs">
              <div className="flex items-center justify-between text-[11px] font-mono text-culinary-citron font-bold">
                <span>Molecule: {selectedMolecule.name}</span>
                <span className="text-white/60">{selectedMolecule.class}</span>
              </div>
              <p className="text-[11px] text-white/80 mt-1">
                Aroma: <strong className="text-white">{selectedMolecule.note}</strong>
              </p>
              <p className="text-[11px] text-emerald-400 mt-0.5">
                Pairs Chemically With: <span className="text-white">{selectedMolecule.pairsWith}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Quadrant 3: Quick-Commerce Dark Store Radar (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-parchment-300 shadow-soft-lift flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Zap className="w-4 h-4 fill-orange-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-culinary-dark">
                Live Quick-Commerce Micro-Hub
              </h3>
            </div>
            <span className="bg-emerald-100 text-emerald-800 font-mono text-[11px] px-2.5 py-0.5 rounded-full font-bold">
              ⚡ 7-9m ETA
            </span>
          </div>

          <p className="text-xs text-stone-600 mb-4">
            Real-time geospatial dark store proximity for Sector 62 / IIIT Delhi radius:
          </p>

          <div className="bg-parchment-50 rounded-2xl p-4 border border-parchment-200 flex items-center gap-4">
            {/* Animated Concentric Radar Rings */}
            <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <span className="absolute w-16 h-16 rounded-full bg-orange-400/20 animate-ping" />
              <span className="absolute w-12 h-12 rounded-full bg-orange-400/30" />
              <span className="w-6 h-6 rounded-full bg-culinary-accent text-white flex items-center justify-center text-[10px] font-bold z-10 shadow-sm">
                Hub
              </span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-culinary-dark">Blinkit & Zepto Dark Store #104</span>
                <span className="text-emerald-700 font-mono text-[11px] font-bold">• 0.7 km away</span>
              </div>
              <p className="text-stone-500 text-[11px]">
                Average Picking & Cold-Chain Packing: <strong>78 seconds</strong>
              </p>
              <p className="text-stone-500 text-[11px]">
                Active Couriers in Zone: <strong className="text-culinary-deep">14 Riders</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Quadrant 4: Macro Readiness Fuel Gauge (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-parchment-300 shadow-soft-lift flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <PieChart className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-xl font-bold text-culinary-dark">
                Pantry Readiness Fuel Gauge
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-culinary-leaf bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Macro Balanced
            </span>
          </div>

          <p className="text-xs text-stone-600 mb-4">
            Current kitchen inventory fulfills <strong>82% of target macronutrient bioavailability</strong>:
          </p>

          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            <div className="bg-parchment-50 p-3 rounded-2xl border border-parchment-200">
              <span className="text-[10px] font-mono text-stone-400 uppercase block">Protein</span>
              <span className="text-lg font-bold text-culinary-deep">38g / 40g</span>
              <span className="text-[10px] text-emerald-700 block font-semibold">95% Ready</span>
            </div>
            <div className="bg-parchment-50 p-3 rounded-2xl border border-parchment-200">
              <span className="text-[10px] font-mono text-stone-400 uppercase block">Carbs</span>
              <span className="text-lg font-bold text-amber-700">62g / 65g</span>
              <span className="text-[10px] text-emerald-700 block font-semibold">95% Ready</span>
            </div>
            <div className="bg-parchment-50 p-3 rounded-2xl border border-parchment-200">
              <span className="text-[10px] font-mono text-stone-400 uppercase block">Micros</span>
              <span className="text-lg font-bold text-culinary-accent">Missing 2</span>
              <span className="text-[10px] text-orange-700 block font-semibold">Zepto 7m</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
