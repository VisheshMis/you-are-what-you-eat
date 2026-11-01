import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ShoppingBag, Clock, Atom, ArrowRight, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Check, Plus } from 'lucide-react';

export default function RecipeCard({
  recipe,
  pantryItems,
  selectedIngredientIds = [],
  activityName = '',
  onOpenQuickCommerce,
  onOpenWhyRecommend,
  onAddIngredientToPantry,
  onAddAllMissingToPantry
}) {
  const [showSubstitutions, setShowSubstitutions] = useState(false);
  const [appliedSubs, setAppliedSubs] = useState({});
  const [activeTooltip, setActiveTooltip] = useState(null);

  // 3D Tilt Hook
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Calculate missing items by checking with user's pantry state
  const inStockItems = pantryItems.filter(p => p.inStock);
  const inStockIds = new Set(inStockItems.map(p => p.id.toLowerCase()));
  const inStockNames = new Set(inStockItems.map(p => p.name.toLowerCase()));

  const checkItemAvailability = (ing) => {
    if (!ing) return false;
    const idLower = (ing.id || '').toLowerCase().trim();
    const nameLower = (ing.name || '').toLowerCase().trim();

    if (inStockIds.has(idLower) || inStockNames.has(nameLower)) return true;

    const singName = nameLower.replace(/s$/, '').replace(/es$/, '');
    const singId = idLower.replace(/s$/, '').replace(/es$/, '');

    for (const stock of inStockItems) {
      const sName = stock.name.toLowerCase();
      const sId = stock.id.toLowerCase();
      const sSing = sName.replace(/s$/, '').replace(/es$/, '');
      if (sSing === singName || sId === singId) return true;
      if (sName.includes(singName) || singName.includes(sName)) return true;
      if (sId.includes(singId) || singId.includes(sId)) return true;
    }
    return false;
  };

  const resolvedIngredients = (recipe.ingredients || []).map(ing => {
    const isPantryAvailable = ing.inPantry !== undefined ? ing.inPantry : checkItemAvailability(ing);
    const isSubstituted = !!appliedSubs[ing.name];
    const isUserSelected = selectedIngredientIds.includes(ing.id);
    return {
      ...ing,
      isAvailable: isPantryAvailable || isSubstituted,
      isUserSelected,
      substitutedWith: appliedSubs[ing.name] || null
    };
  });

  // Count user-selected ingredients matched in this recipe
  const matchedSelectedIngredients = resolvedIngredients.filter(i => i.isUserSelected);

  const missingIngredients = resolvedIngredients.filter(i => !i.isAvailable);
  const totalCartPrice = missingIngredients.reduce((sum, item) => sum + (item.price || 60), 0);
  const fastestEta = missingIngredients.length > 0 ? (missingIngredients[0].eta || '8 mins') : null;
  const storeName = missingIngredients.length > 0 ? (missingIngredients[0].store || 'Zepto') : null;

  const handleSubClick = (missingName, subName) => {
    setAppliedSubs(prev => ({
      ...prev,
      [missingName]: subName
    }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="bg-white rounded-3xl border border-parchment-300 shadow-soft-lift hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
    >
      {/* Top Media & Tags */}
      <div>
        <div className="relative h-64 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

          {/* Badges on Image */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="bg-white/95 backdrop-blur-md text-culinary-deep px-3 py-1 rounded-full text-xs font-mono font-bold shadow-sm">
                RecipeDB ID: {recipe.recipeDbId}
              </span>
              {recipe.isLiveApi && (
                <span className="bg-emerald-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  Live Foodoscope
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {recipe.relevanceMetrics?.overallScore && (
                <span className="bg-amber-400 text-stone-900 px-3 py-1 rounded-full text-xs font-mono font-bold shadow-md flex items-center gap-1">
                  <span>⚡</span>
                  <span>{recipe.relevanceMetrics.overallScore}% Relevance Score</span>
                </span>
              )}
              <div className="flex items-center gap-1 bg-culinary-deep/95 backdrop-blur-md text-culinary-citron px-2.5 py-1 rounded-full text-xs font-bold border border-white/20 shadow-sm">
                <Atom className="w-3.5 h-3.5" />
                <span>{recipe.flavorDb.harmonyScore}%</span>
              </div>
            </div>
          </div>

          {/* Title on Image bottom */}
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <div className="flex items-center gap-2 text-xs font-medium text-parchment-200 mb-1">
              <Clock className="w-3.5 h-3.5 text-culinary-accent" />
              <span>Prep: {recipe.prepTime}</span>
              <span>•</span>
              <span className="text-culinary-citron font-semibold">{recipe.digestionSpeed}</span>
            </div>
            <h3 className="font-serif text-2xl font-bold leading-tight">
              {recipe.title}
            </h3>
            <p className="text-xs text-parchment-200 mt-1 line-clamp-1">
              {recipe.subtitle}
            </p>
          </div>
        </div>

        {/* User Selected Ingredients Match Banner */}
        {matchedSelectedIngredients.length > 0 && (
          <div className="px-6 py-2.5 bg-emerald-50/90 border-b border-emerald-200 flex items-center justify-between gap-2 text-xs text-emerald-950">
            <div className="flex items-center gap-1.5 font-medium overflow-hidden">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span className="font-bold text-emerald-800 flex-shrink-0">
                Matches {matchedSelectedIngredients.length} chosen ingredients:
              </span>
              <span className="truncate text-emerald-900 font-semibold">
                {matchedSelectedIngredients.map(i => i.name).join(', ')}
              </span>
            </div>
            <span className="font-mono text-[10px] bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded-full font-bold flex-shrink-0">
              {matchedSelectedIngredients.length}/{recipe.ingredients.length} match
            </span>
          </div>
        )}

        {/* Nutritional Macronutrient Bar (RecipeDB Nutrition Engine) */}
        <div className="p-6 bg-parchment-50 border-b border-parchment-200">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-2">
            <span>Macro Matrix</span>
            <span className="text-culinary-deep font-bold">{recipe.macros.calories} kcal</span>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-white p-2.5 rounded-xl border border-parchment-200 shadow-sm">
              <span className="text-[10px] font-mono text-stone-400 block uppercase">Protein</span>
              <span className="text-base font-bold text-culinary-deep">{recipe.macros.protein}g</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-parchment-200 shadow-sm">
              <span className="text-[10px] font-mono text-stone-400 block uppercase">Carbs</span>
              <span className="text-base font-bold text-amber-700">{recipe.macros.carbs}g</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-parchment-200 shadow-sm">
              <span className="text-[10px] font-mono text-stone-400 block uppercase">Lipids</span>
              <span className="text-base font-bold text-stone-700">{recipe.macros.fat}g</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-parchment-200 shadow-sm">
              <span className="text-[10px] font-mono text-stone-400 block uppercase">Fiber</span>
              <span className="text-base font-bold text-emerald-700">{recipe.macros.fiber}g</span>
            </div>
          </div>

          {/* Scientific Weighting Breakdown Bar */}
          {recipe.relevanceMetrics && (
            <div className="mt-3.5 pt-3 border-t border-parchment-200/80">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-stone-500 mb-1.5">
                <span className="flex items-center gap-1 text-culinary-dark">
                  <span>⚖️ Selection Weighting Algorithm</span>
                </span>
                <span className="text-amber-800 font-bold bg-amber-100/80 px-2 py-0.5 rounded-md">
                  {recipe.relevanceMetrics.overallScore}/100 Relevance Score
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] font-mono">
                <div className="bg-white px-2 py-1 rounded-lg border border-parchment-300 flex items-center justify-between">
                  <span className="text-stone-500">📦 Pantry (40%):</span>
                  <strong className={recipe.relevanceMetrics.inventoryScore >= 70 ? 'text-emerald-700' : 'text-orange-700'}>
                    {recipe.relevanceMetrics.inventoryScore}%
                  </strong>
                </div>
                <div className="bg-white px-2 py-1 rounded-lg border border-parchment-300 flex items-center justify-between">
                  <span className="text-stone-500">🧬 Target Fit (30%):</span>
                  <strong className="text-culinary-deep">
                    {recipe.relevanceMetrics.metabolicScore}%
                  </strong>
                </div>
                <div className="bg-white px-2 py-1 rounded-lg border border-parchment-300 flex items-center justify-between">
                  <span className="text-stone-500">⏱️ Digestion (20%):</span>
                  <strong className="text-amber-700">
                    {recipe.relevanceMetrics.timingKineticsScore}%
                  </strong>
                </div>
                <div className="bg-white px-2 py-1 rounded-lg border border-parchment-300 flex items-center justify-between">
                  <span className="text-stone-500">⚗️ FlavorDB (10%):</span>
                  <strong className="text-purple-700">
                    {recipe.relevanceMetrics.flavorScore}%
                  </strong>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Computational Gastronomy Science Box (FlavorDB Hook) */}
        <div className="p-6 border-b border-parchment-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-culinary-accent" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-culinary-deep font-mono">
                FlavorDB Molecular Analysis
              </h4>
            </div>

            {/* Prominent "Why We Recommend This" Trigger Button */}
            <button
              onClick={() => onOpenWhyRecommend(recipe)}
              className="text-xs font-bold font-mono text-culinary-accent hover:text-orange-700 flex items-center gap-1 group/btn"
              title="View full scientific and metabolic rationale"
            >
              <span>🔬 Why this recipe?</span>
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed mb-3">
            {recipe.flavorDb.pairingExplanation}
          </p>

          {/* Molecular Chips with Tooltip */}
          <div className="flex flex-wrap gap-1.5">
            {recipe.flavorDb.primaryMolecules.map((mol, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTooltip(activeTooltip === mol ? null : mol)}
                className="bg-culinary-mint/70 hover:bg-culinary-mint text-culinary-deep text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md border border-culinary-leaf/20 transition-colors flex items-center gap-1"
              >
                <span>⚗️ {mol}</span>
              </button>
            ))}
          </div>

          {activeTooltip && (
            <div className="mt-2 p-2.5 rounded-xl bg-culinary-deep text-white text-[11px] font-mono animate-fade-in flex items-center justify-between">
              <span>Volatile Compound: <strong>{activeTooltip}</strong> (Active Receptor Match)</span>
              <button onClick={() => setActiveTooltip(null)} className="text-xs text-white/60 hover:text-white">✕</button>
            </div>
          )}

          {/* Interactive Scientific Deep Dive Pill */}
          <button
            onClick={() => onOpenWhyRecommend(recipe)}
            className="w-full mt-3 py-2 px-3 rounded-xl bg-parchment-100 hover:bg-culinary-deep hover:text-white text-culinary-dark text-xs font-bold font-mono transition-all border border-parchment-300 flex items-center justify-between group/why"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-culinary-accent"></span>
              <span className="truncate">Science breakdown: {recipe.whyWeRecommend?.activityHeadline || 'Metabolic Timing'}</span>
            </div>
            <span className="text-[11px] text-culinary-accent group-hover/why:text-culinary-citron font-semibold">
              Deep-Dive →
            </span>
          </button>
        </div>

        {/* Ingredient Breakdown */}
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-culinary-dark font-mono">
              Required Ingredients ({resolvedIngredients.length})
            </span>
            <div className="flex items-center gap-2">
              {missingIngredients.length > 0 && onAddAllMissingToPantry && (
                <button
                  type="button"
                  onClick={() => onAddAllMissingToPantry(missingIngredients)}
                  className="text-[10px] font-mono font-bold text-culinary-deep hover:text-emerald-900 bg-parchment-200 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-parchment-300 hover:border-emerald-300 transition-all flex items-center gap-1 shadow-2xs"
                  title="Mark all missing ingredients from this recipe as in-stock in your pantry"
                >
                  <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                  <span>I have all of these ({missingIngredients.length})</span>
                </button>
              )}
              <span className="text-xs text-stone-500 font-mono font-medium">
                {resolvedIngredients.filter(i => i.isAvailable).length} / {resolvedIngredients.length} Ready
              </span>
            </div>
          </div>

          <div className="space-y-2">
            {resolvedIngredients.map((ing, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-xl text-xs flex items-center justify-between border transition-all ${
                  ing.isAvailable
                    ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                    : 'bg-orange-50/70 border-orange-200 text-orange-950'
                }`}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  {ing.isAvailable ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  )}
                  <div className="truncate">
                    <span className="font-semibold">{ing.name}</span>
                    <span className="text-stone-500 ml-1.5 font-mono text-[11px]">({ing.amount})</span>
                    {ing.isUserSelected && (
                      <span className="inline-block ml-2 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                        ✓ In Pantry
                      </span>
                    )}
                    {ing.substitutedWith && (
                      <span className="block text-[10px] text-emerald-700 font-medium">
                        ↳ Substituted with: {ing.substitutedWith}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {!ing.isAvailable && onAddIngredientToPantry && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddIngredientToPantry(ing.name || ing);
                      }}
                      className="px-2 py-0.5 rounded-lg bg-white hover:bg-emerald-100 text-stone-700 hover:text-emerald-900 border border-stone-200 hover:border-emerald-300 text-[10px] font-mono font-bold transition-all shadow-2xs flex items-center gap-0.5 group/btn"
                      title={`I have ${ing.name} - add to my pantry`}
                    >
                      <Plus className="w-2.5 h-2.5 text-emerald-600 group-hover/btn:scale-125 transition-transform" />
                      <span>I have this</span>
                    </button>
                  )}
                  {!ing.isAvailable && (
                    <span className="font-mono text-[11px] font-bold text-orange-700 bg-white px-2 py-0.5 rounded border border-orange-200">
                      ₹{ing.price || 60} ({ing.store || 'Zepto'})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Substitutions Accordion (Foodoscope Powered) */}
        {recipe.smartSubstitutions && recipe.smartSubstitutions.length > 0 && (
          <div className="px-6 pb-6">
            <button
              onClick={() => setShowSubstitutions(!showSubstitutions)}
              className="w-full flex items-center justify-between py-2 text-xs font-bold text-culinary-leaf hover:text-culinary-deep transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <Atom className="w-3.5 h-3.5" />
                <span>FlavorDB Smart Pantry Substitutions</span>
              </div>
              {showSubstitutions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showSubstitutions && (
              <div className="mt-2 space-y-2.5 bg-parchment-100 p-3.5 rounded-2xl border border-parchment-300">
                {recipe.smartSubstitutions.map((sub, sIdx) => (
                  <div key={sIdx} className="bg-white p-3 rounded-xl border border-parchment-200 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-stone-700">Missing: {sub.missingItem}</span>
                      <span className="bg-emerald-100 text-emerald-800 font-mono text-[10px] px-1.5 py-0.5 rounded font-bold">
                        {sub.gastronomyScore}% Volatile Match
                      </span>
                    </div>
                    <p className="text-culinary-deep font-semibold text-xs mb-1">
                      💡 Swap with: {sub.pantrySubstitute}
                    </p>
                    <p className="text-[11px] text-stone-500 mb-2">
                      {sub.nutritionalMatch}
                    </p>
                    <button
                      onClick={() => handleSubClick(sub.missingItem, sub.pantrySubstitute)}
                      className="text-[11px] font-bold bg-culinary-deep text-white px-2.5 py-1 rounded-lg hover:bg-culinary-moss transition-colors"
                    >
                      Use Pantry Swap
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div className="p-6 bg-parchment-50 border-t border-parchment-200">
        {missingIngredients.length > 0 ? (
          <button
            onClick={() => onOpenQuickCommerce(recipe, missingIngredients, totalCartPrice, fastestEta, storeName)}
            className="w-full py-3.5 px-4 bg-culinary-accent hover:bg-orange-600 text-white rounded-2xl font-bold text-sm shadow-glow-accent transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Get Missing ({missingIngredients.length} items) in {fastestEta}</span>
            </div>
            <div className="flex items-center gap-1 font-mono text-xs">
              <span>₹{totalCartPrice}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ) : (
          <div className="w-full py-3 px-4 bg-emerald-600 text-white rounded-2xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>Pantry Ready • Cook Immediately!</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
