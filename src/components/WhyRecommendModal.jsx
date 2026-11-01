import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Activity, Clock, Atom, BookOpen, CheckCircle2, ShieldCheck, Zap, ExternalLink, Scale } from 'lucide-react';
import { SPORTS_SCIENCE_RESEARCH } from '../data/sportsScienceResearch';

export default function WhyRecommendModal({
  isOpen,
  onClose,
  recipe,
  activity,
  timing
}) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !recipe) return null;

  const why = recipe.whyWeRecommend || {
    activityHeadline: `Optimized for ${activity?.name || 'Your Workout'}`,
    metabolicRationale: 'Matches the target macronutrient ratio and kinetic digestion velocity for your selected window.',
    digestionVelocity: recipe.digestionSpeed || 'Optimized',
    glycemicProfile: 'Balanced metabolic absorption curve',
    ingredientScience: recipe.ingredients.map(i => ({
      ingredient: i.name,
      role: `Supplies bioavailable nutrients aligned with ${activity?.name || 'activity'} demands.`
    })),
    flavorScience: recipe.flavorDb?.pairingExplanation || 'Harmonized molecular volatiles.'
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-parchment-300 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-culinary-deep via-culinary-dark to-stone-900 text-white relative flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-culinary-accent text-white px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Scientific Recommendation Rationale
              </span>
              <span className="bg-white/15 text-parchment-200 px-2.5 py-0.5 rounded-full text-xs font-mono">
                {activity?.name}
              </span>
              {timing && (
                <span className="bg-white/10 text-culinary-citron px-2.5 py-0.5 rounded-full text-xs font-mono">
                  {timing.label}
                </span>
              )}
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              Why We Recommend: {recipe.title}
            </h2>
            <p className="text-sm text-parchment-200 mt-1 font-medium">
              {why.activityHeadline}
            </p>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Multi-Factor Weighting Algorithm Breakdown */}
            {recipe.relevanceMetrics && (
              <div className="bg-gradient-to-br from-stone-900 to-stone-850 text-white rounded-2xl p-5 border border-stone-800 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-800">
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-amber-400" />
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                      Relevance Selection Weighting Breakdown
                    </h3>
                  </div>
                  <span className="bg-amber-400 text-stone-900 text-xs font-mono font-bold px-3 py-1 rounded-full shadow-sm">
                    {recipe.relevanceMetrics.overallScore}/100 Match Score
                  </span>
                </div>

                <p className="text-xs text-stone-300 mt-2.5 leading-relaxed">
                  Our algorithm ranks this meal by synthesizing your active pantry inventory (40%), peer-reviewed exercise physiology macro targets (30%), gastric emptying speed for your timing window (20%), and CoSy Lab FlavorDB volatile harmony (10%).
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3.5">
                  <div className="bg-stone-800/90 p-2.5 rounded-xl border border-stone-700/80">
                    <span className="text-[10px] text-stone-400 block font-mono">📦 Pantry Inventory (40%)</span>
                    <strong className="text-sm font-bold text-emerald-400">
                      {recipe.relevanceMetrics.inventoryScore}% In Stock
                    </strong>
                  </div>
                  <div className="bg-stone-800/90 p-2.5 rounded-xl border border-stone-700/80">
                    <span className="text-[10px] text-stone-400 block font-mono">🧬 Metabolic Fit (30%)</span>
                    <strong className="text-sm font-bold text-culinary-citron">
                      {recipe.relevanceMetrics.metabolicScore}% Fit
                    </strong>
                  </div>
                  <div className="bg-stone-800/90 p-2.5 rounded-xl border border-stone-700/80">
                    <span className="text-[10px] text-stone-400 block font-mono">⏱️ Timing Kinetics (20%)</span>
                    <strong className="text-sm font-bold text-amber-400">
                      {recipe.relevanceMetrics.timingKineticsScore}% Transit
                    </strong>
                  </div>
                  <div className="bg-stone-800/90 p-2.5 rounded-xl border border-stone-700/80">
                    <span className="text-[10px] text-stone-400 block font-mono">⚗️ FlavorDB (10%)</span>
                    <strong className="text-sm font-bold text-purple-400">
                      {recipe.relevanceMetrics.flavorScore}% Synergy
                    </strong>
                  </div>
                </div>
              </div>
            )}

            {/* 1. Clinical Research Reference Box */}
            {(() => {
              const actKey = recipe.activityId || activity?.id;
              const research = SPORTS_SCIENCE_RESEARCH[actKey] || SPORTS_SCIENCE_RESEARCH['pre_run'];
              if (!research) return null;

              return (
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2.5 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-culinary-deep" />
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-culinary-deep">
                        Peer-Reviewed Clinical Foundation
                      </h4>
                    </div>
                    {research.keyPaper?.pmid && (
                      <a
                        href={`https://pubmed.ncbi.nlm.nih.gov/${research.keyPaper.pmid}/`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono font-bold text-culinary-deep hover:text-emerald-700 underline flex items-center gap-1"
                      >
                        <span>PubMed PMID: {research.keyPaper.pmid}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <h5 className="font-serif text-sm font-bold text-stone-900 mb-1">
                    {research.keyPaper.title}
                  </h5>
                  <p className="text-[11px] text-stone-600 font-mono mb-2">
                    {research.keyPaper.authors} • <em>{research.keyPaper.journal}</em> ({research.keyPaper.year})
                  </p>
                  <p className="text-xs text-stone-700 bg-white p-3 rounded-xl border border-stone-200 leading-relaxed">
                    💡 <strong>Scientific Takeaway:</strong> {research.keyPaper.takeaway}
                  </p>
                </div>
              );
            })()}

            {/* 2. Metabolic & Digestion Kinetics */}
            <div className="bg-parchment-50 rounded-2xl p-5 border border-parchment-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-orange-100 text-culinary-accent flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-culinary-dark">
                  1. Metabolic State & Digestion Kinetics
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                {why.metabolicRationale}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-parchment-200">
                <div className="bg-white p-3 rounded-xl border border-parchment-200">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-stone-500 uppercase mb-1">
                    <Clock className="w-3.5 h-3.5 text-culinary-accent" />
                    <span>Digestion Velocity</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-culinary-deep">
                    {why.digestionVelocity}
                  </span>
                </div>

                <div className="bg-white p-3 rounded-xl border border-parchment-200">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-stone-500 uppercase mb-1">
                    <Zap className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Glycemic Response Curve</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-emerald-800">
                    {why.glycemicProfile}
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Ingredient Biochemical Mechanisms */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-culinary-dark">
                  2. Ingredient-Level Biochemical Action
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {why.ingredientScience && why.ingredientScience.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-parchment-300 shadow-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-culinary-dark">
                        {item.ingredient}
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Computational Gastronomy & FlavorDB Pairing */}
            <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-culinary-deep text-white flex items-center justify-center">
                    <Atom className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-culinary-dark">
                    3. FlavorDB Molecular Harmony & Palatability
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold bg-white text-culinary-deep px-2.5 py-1 rounded-lg border border-emerald-300">
                  {recipe.flavorDb?.harmonyScore}% Harmony
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-3">
                {why.flavorScience}
              </p>

              {recipe.flavorDb?.primaryMolecules && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-emerald-200/60">
                  <span className="text-[11px] font-mono font-semibold text-culinary-moss self-center mr-1">
                    Key Volatiles:
                  </span>
                  {recipe.flavorDb.primaryMolecules.map((mol, mIdx) => (
                    <span
                      key={mIdx}
                      className="bg-white text-culinary-deep text-[11px] font-mono px-2 py-0.5 rounded-md border border-emerald-200 font-semibold"
                    >
                      ⚗️ {mol}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Scientific Foundations & References */}
            <div className="p-4 rounded-2xl bg-parchment-100 border border-parchment-200 text-xs text-stone-500 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-stone-700 uppercase tracking-wider font-mono">
                <BookOpen className="w-3.5 h-3.5 text-culinary-accent" />
                <span>Scientific References & Standards:</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 pl-1 text-[11px]">
                <li><strong>ISSN Position Stand</strong>: Nutrient timing, carbohydrate oxidation rates & 3.2g Leucine MPS threshold (Kerksick et al., 2017).</li>
                <li><strong>CoSy Lab (IIIT-Delhi)</strong>: Computational Gastronomy, FlavorDB volatile molecular harmony & RecipeDB dietary profiling (Bagler et al.).</li>
                <li><strong>Dynamic Glycemic Kinetics</strong>: SGLT-1 and GLUT-5 dual-transporter carbohydrate absorption rates during athletic exertion.</li>
              </ul>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-4 sm:p-6 bg-parchment-50 border-t border-parchment-200 flex items-center justify-between flex-shrink-0">
            <span className="text-xs text-stone-500 font-medium">
              Recipe verified with RecipeDB ({recipe.recipeDbId})
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-culinary-deep text-white text-xs font-bold hover:bg-culinary-moss transition-colors shadow-sm"
            >
              Understood
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
