import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Atom, ArrowDown, Activity, Clock } from 'lucide-react';

export default function DynamicHero({ onExplorePlanner, onExploreScience }) {
  return (
    <div className="relative pt-8 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-parchment-300 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-culinary-accent animate-ping" />
            <span className="text-xs font-mono font-bold text-culinary-deep uppercase tracking-wider">
              Computational Gastronomy • Powered by CoSy Lab APIs
            </span>
          </motion.div>
        </div>

        {/* Hero Title & Editorial Statement */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black text-culinary-dark tracking-tight leading-[1.05]"
          >
            Eat for your workout.{' '}
            <span className="bg-gradient-to-r from-culinary-deep via-emerald-800 to-culinary-accent bg-clip-text text-transparent italic">
              Cook from your fridge.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-stone-600 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
          >
            An intelligent computational gastronomy engine that pairs on-hand ingredients with scientific metabolic timing—bridging missing items with 10-minute Zepto & Blinkit delivery.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={onExplorePlanner}
              className="px-7 py-4 rounded-2xl bg-culinary-deep text-white font-bold text-sm shadow-soft-lift hover:bg-culinary-moss transition-all flex items-center gap-2 group"
            >
              <span>Build My Meal</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onExploreScience}
              className="px-7 py-4 rounded-2xl bg-white text-culinary-dark font-bold text-sm border border-parchment-300 hover:border-culinary-moss shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <Activity className="w-4 h-4 text-culinary-accent" />
              <span>Explore Science Hub</span>
            </button>
          </motion.div>
        </div>

        {/* Dynamic Floating Interactive Food Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Showcase Banner */}
          <div className="bg-gradient-to-br from-white/95 via-parchment-50/90 to-white/95 backdrop-blur-xl rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-parchment-300 shadow-2xl relative overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-200/30 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-200/20 via-culinary-mint/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Showcase Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Side: Editorial Pitch & Metrics */}
              <div className="max-w-xl text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-culinary-accent"></span>
                  <span className="text-xs font-mono font-bold tracking-widest text-culinary-accent uppercase">
                    Zero Waste • Molecular Harmony • 10-Min Delivery
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-culinary-dark leading-tight mb-4">
                  Transform random groceries into peak athletic fuel.
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed mb-6 font-medium">
                  Select your running or lifting schedule, check what you have in the fridge, and let <strong>RecipeDB</strong> calculate exact macro timing while <strong>FlavorDB</strong> pairs complementary volatile aroma molecules.
                </p>

                {/* Micro Metric Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-white/80 p-3 rounded-2xl border border-parchment-200 shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                      <Atom className="w-3.5 h-3.5 text-culinary-deep" />
                      <span>FlavorDB</span>
                    </div>
                    <span className="text-base font-bold text-culinary-dark">94-97% Match</span>
                  </div>

                  <div className="bg-white/80 p-3 rounded-2xl border border-parchment-200 shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                      <Zap className="w-3.5 h-3.5 text-orange-600" />
                      <span>Quick-Com</span>
                    </div>
                    <span className="text-base font-bold text-culinary-dark">7-9m ETA</span>
                  </div>

                  <div className="bg-white/80 p-3 rounded-2xl border border-parchment-200 shadow-sm col-span-2 sm:col-span-1">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Prep Time</span>
                    </div>
                    <span className="text-base font-bold text-culinary-dark">Under 10 mins</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Floating Assembled Dish Preview Card */}
              <div className="w-full lg:w-80 flex-shrink-0">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-white rounded-3xl p-4 border border-parchment-300 shadow-xl relative"
                >
                  {/* Food Image */}
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80"
                      alt="Anabolic Oat Bowl"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-white/95 backdrop-blur-md text-culinary-deep text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-sm">
                      Pre-Run Glycogen
                    </span>
                    <span className="absolute bottom-2 right-2 bg-culinary-deep text-culinary-citron text-[10px] font-bold px-2 py-0.5 rounded-full">
                      94% Harmony
                    </span>
                  </div>

                  {/* Title & Floating Ingredients */}
                  <h4 className="font-serif font-bold text-sm text-culinary-dark">
                    Anabolic Saffron Honey Oat Bowl
                  </h4>
                  <p className="text-[11px] text-stone-500 mb-3">
                    395 kcal • 16g Protein • 68g Fast Carbs
                  </p>

                  <div className="flex items-center justify-between pt-2.5 border-t border-parchment-200 text-xs">
                    <span className="text-[11px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      ✓ 4 in Pantry
                    </span>
                    <span className="text-[11px] text-orange-800 font-bold bg-orange-50 px-2 py-0.5 rounded">
                      + 2 via Zepto (7m)
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
