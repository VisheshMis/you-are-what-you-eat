import React from 'react';
import { Utensils, Zap, Sparkles, Database } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onBuildMeal }) {
  return (
    <header className="sticky top-0 z-40 bg-parchment-100/90 backdrop-blur-md border-b border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-culinary-deep flex items-center justify-center text-white shadow-soft-lift">
              <span className="text-2xl">🥑</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-2xl tracking-tight text-culinary-dark">
                  You Are What You Eat
                </span>
                <span className="bg-culinary-mint text-culinary-deep font-mono text-[11px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  YAWYE
                </span>
              </div>
              <p className="text-xs text-culinary-leaf font-medium hidden sm:block">
                Computational Gastronomy × 10-Minute Metabolic Fuel
              </p>
            </div>
          </div>

          {/* Quick Commerce Live Hub Badge */}
          <div className="hidden md:flex items-center gap-3 bg-white px-3.5 py-1.5 rounded-full border border-parchment-300 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>⚡ Zepto & Blinkit Hub:</span>
              <span className="text-culinary-moss">Active (7-9m ETA)</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setActiveTab('planner')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'planner'
                  ? 'bg-culinary-deep text-white shadow-soft-lift'
                  : 'text-culinary-moss hover:bg-parchment-200'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span className="hidden sm:inline">Meal Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('apis')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'apis'
                  ? 'bg-culinary-deep text-white shadow-soft-lift'
                  : 'text-culinary-moss hover:bg-parchment-200'
              }`}
            >
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">CoSy Lab APIs</span>
            </button>

            <button
              onClick={onBuildMeal}
              className="px-4 py-2 rounded-xl text-sm font-bold bg-culinary-accent text-white hover:bg-orange-600 shadow-glow-accent transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Create Meal</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
