import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChefHat, Play, Pause, RotateCcw, Check, CheckCircle2, Flame, Clock, Sparkles, Scale, Printer, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

// Web Audio API Pleasant Kitchen Chime
function playChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    // First note (A5 - 880Hz)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(880, ctx.currentTime);
    gain1.gain.setValueAtTime(0.2, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start();
    osc1.stop(ctx.currentTime + 0.6);

    // Second note (E6 - 1318Hz)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1318, ctx.currentTime + 0.15);
    gain2.gain.setValueAtTime(0.25, ctx.currentTime + 0.15);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(ctx.currentTime + 0.15);
    osc2.stop(ctx.currentTime + 0.9);
  } catch (e) {
    console.warn('Audio chime unavailable', e);
  }
}

/**
 * Generates sensible step-by-step instructions for any recipe
 */
function getRecipeSteps(recipe) {
  if (recipe.instructions && recipe.instructions.length > 0) {
    return recipe.instructions;
  }

  const ingNames = (recipe.ingredients || []).map(i => i.name || i.id);
  const title = (recipe.title || '').toLowerCase();

  if (title.includes('oat') || title.includes('bowl') || title.includes('smoothie')) {
    return [
      {
        step: 1,
        title: 'Measure Base & Hydrate',
        text: `Measure your base grains (${ingNames.slice(0, 2).join(', ')}) into a bowl. Add 150ml warm water or milk and let rest for 3 minutes to hydrate soluble beta-glucan fibers.`,
        timerSeconds: 180
      },
      {
        step: 2,
        title: 'Layer Glycogen Fruits',
        text: `Slice fresh fruits (${ingNames.filter(n => n.includes('Banana') || n.includes('Berry') || n.includes('Pomegranate')).join(', ') || 'banana or berries'}). Layer uniformly across the warm base for dual-transporter carbohydrate uptake.`,
        timerSeconds: 90
      },
      {
        step: 3,
        title: 'Activate Terpenes & Season',
        text: `Drizzle raw wild honey and dust with cinnamon or aromatic spices. The volatile terpenes bind with olfactory receptors and support glycemic stability.`,
        timerSeconds: 60
      },
      {
        step: 4,
        title: 'Plate & Consume on Schedule',
        text: `Top with seeds or crushed nuts. Consume immediately according to your activity timing window for optimal gastric transit velocity.`,
        timerSeconds: 0
      }
    ];
  }

  if (title.includes('toast') || title.includes('skillet') || title.includes('egg') || title.includes('chicken') || title.includes('protein')) {
    return [
      {
        step: 1,
        title: 'Mise en Place & Pan Pre-Heat',
        text: `Set skillet or toaster to medium heat. Measure and prep your protein staples (${ingNames.slice(0, 3).join(', ')}).`,
        timerSeconds: 120
      },
      {
        step: 2,
        title: 'Sear & Sauté Myofibrillar Base',
        text: `Lightly toast artisan bread or sear your protein for 3-4 minutes until aromatic Maillard compounds develop and core protein coagulates.`,
        timerSeconds: 240
      },
      {
        step: 3,
        title: 'Infuse Micronutrients & Vasodilators',
        text: `Fold in greens, vegetables, or spices (${ingNames.filter(n => n.includes('Spinach') || n.includes('Beet') || n.includes('Turmeric')).join(', ') || 'greens'}). Cook for 90 seconds until vibrant.`,
        timerSeconds: 90
      },
      {
        step: 4,
        title: 'Assemble & Serve in Window',
        text: `Plate immediately with a pinch of black pepper and sea salt. Consume within your chrono-nutrition window for maximal MPS or glycogen replenishment.`,
        timerSeconds: 0
      }
    ];
  }

  // Universal Fallback Steps
  return [
    {
      step: 1,
      title: 'Pantry Preparation',
      text: `Gather all pantry ingredients: ${ingNames.join(', ')}. Wash produce and measure portions cleanly.`,
      timerSeconds: 120
    },
    {
      step: 2,
      title: 'Active Culinary Assembly',
      text: `Combine your carbohydrate and protein sources according to the recipe profile. Cook or mix until ingredients reach ideal mouthfeel.`,
      timerSeconds: 300
    },
    {
      step: 3,
      title: 'Final Seasoning & Volatiles Infusion',
      text: `Garnish with delicate herbs, seeds, and spices to maximize FlavorDB volatile compound synergy.`,
      timerSeconds: 60
    },
    {
      step: 4,
      title: 'Optimal Chrono-Window Consumption',
      text: `Plate with clean presentation. Enjoy your meal in alignment with your metabolic exercise schedule.`,
      timerSeconds: 0
    }
  ];
}

export default function CookModeModal({ isOpen, onClose, recipe, activityName, timingLabel }) {
  if (!isOpen || !recipe) return null;

  // Portion Scaling Factor: 0.75x, 1x, 1.5x, 2x
  const [portionMultiplier, setPortionMultiplier] = useState(1);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [timerSecondsLeft, setTimerSecondsLeft] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = getRecipeSteps(recipe);
  const currentStep = steps[currentStepIndex] || steps[0];

  // Initialize timer on step change
  useEffect(() => {
    if (currentStep.timerSeconds > 0) {
      setTimerSecondsLeft(currentStep.timerSeconds);
      setIsTimerRunning(false);
    } else {
      setTimerSecondsLeft(0);
      setIsTimerRunning(false);
    }
  }, [currentStepIndex]);

  // Timer Tick
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsTimerRunning(false);
            playChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSecondsLeft]);

  const toggleIngredientCheck = (id) => {
    setCheckedIngredients(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleFinishCooking = () => {
    setIsCompleted(true);
    playChime();
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E06D53', '#10B981', '#F59E0B', '#1C3F3A']
    });
  };

  const handlePrint = () => {
    window.print();
  };

  // Scaled Macros
  const scaledMacros = {
    calories: Math.round((recipe.macros?.calories || 400) * portionMultiplier),
    protein: Math.round((recipe.macros?.protein || 25) * portionMultiplier),
    carbs: Math.round((recipe.macros?.carbs || 45) * portionMultiplier),
    fat: Math.round((recipe.macros?.fat || 12) * portionMultiplier)
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
          className="fixed inset-0 bg-stone-900/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-parchment-50 rounded-3xl shadow-2xl border border-parchment-300 overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Header Bar */}
          <div className="bg-culinary-deep text-white px-6 py-4 flex items-center justify-between border-b border-culinary-leaf/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-culinary-accent flex items-center justify-center shadow-md">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-900/50 px-2 py-0.5 rounded">
                    Interactive Kitchen Mode
                  </span>
                  <span className="text-xs text-stone-300">
                    {activityName} • {timingLabel}
                  </span>
                </div>
                <h2 className="text-lg font-serif font-bold text-white leading-tight">
                  {recipe.title}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-stone-200 transition-colors"
                title="Print Kitchen Recipe Sheet"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Portion & Macro Scaler Bar */}
          <div className="bg-parchment-200/80 px-6 py-3 border-b border-parchment-300 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-culinary-deep" />
              <span className="text-xs font-bold text-stone-700">Portion Scaler:</span>
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-parchment-300 shadow-2xs">
                {[
                  { mult: 0.75, label: '0.75× Cut' },
                  { mult: 1, label: '1.0× Standard' },
                  { mult: 1.5, label: '1.5× Fuel' },
                  { mult: 2, label: '2.0× Batch' }
                ].map((tier) => (
                  <button
                    key={tier.mult}
                    onClick={() => setPortionMultiplier(tier.mult)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                      portionMultiplier === tier.mult
                        ? 'bg-culinary-deep text-white shadow-2xs'
                        : 'text-stone-600 hover:bg-parchment-100'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scaled Macro Badges */}
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="font-bold text-stone-800">
                🔥 {scaledMacros.calories} kcal
              </span>
              <span className="text-emerald-700 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
                🥩 {scaledMacros.protein}g Protein
              </span>
              <span className="text-amber-800 font-semibold bg-amber-100 px-2 py-0.5 rounded">
                🌾 {scaledMacros.carbs}g Carbs
              </span>
              <span className="text-stone-600 font-semibold bg-stone-200 px-2 py-0.5 rounded">
                🥑 {scaledMacros.fat}g Fat
              </span>
            </div>
          </div>

          {/* Body Content (Split Layout: Checklist on Left, Active Step & Timer on Right) */}
          <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left: Ingredients Checklist (4 cols) */}
            <div className="md:col-span-5 bg-white p-5 rounded-2xl border border-parchment-200 shadow-2xs flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-parchment-200 mb-3">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                  Mise en Place ({Object.values(checkedIngredients).filter(Boolean).length}/{recipe.ingredients?.length || 0})
                </span>
                <span className="text-[10px] text-stone-400">Click to check off</span>
              </div>

              <div className="space-y-2 overflow-y-auto flex-1 pr-1">
                {(recipe.ingredients || []).map((ing, idx) => {
                  const isChecked = !!checkedIngredients[ing.id || idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleIngredientCheck(ing.id || idx)}
                      className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-emerald-50 border-emerald-300 text-stone-400 line-through'
                          : 'bg-parchment-50 border-parchment-200 hover:border-culinary-leaf text-stone-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                            isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="font-medium">{ing.name || ing.id}</span>
                      </div>
                      <span className="font-mono text-[11px] font-bold text-stone-500">
                        {portionMultiplier !== 1
                          ? `${ing.amount} (×${portionMultiplier})`
                          : ing.amount}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Research Backing Mini Pill */}
              {recipe.relevanceMetrics?.researchTarget && (
                <div className="mt-4 pt-3 border-t border-parchment-200 text-[11px] text-stone-600 flex items-center justify-between bg-parchment-100 p-2.5 rounded-xl">
                  <span>Clinical Ref: {recipe.relevanceMetrics.researchTarget.author} ({recipe.relevanceMetrics.researchTarget.year})</span>
                  <a
                    href={`https://pubmed.ncbi.nlm.nih.gov/${recipe.relevanceMetrics.researchTarget.pmid}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-culinary-accent hover:underline flex items-center gap-0.5 font-bold"
                  >
                    <span>PMID</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Right: Step-by-Step Cooking Navigation & Kitchen Timer (7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              {!isCompleted ? (
                <>
                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-2xl border border-parchment-200 shadow-2xs flex-1 flex flex-col justify-between">
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-culinary-deep text-white font-mono text-xs font-bold rounded-lg">
                          STEP {currentStep.step} OF {steps.length}
                        </span>
                        <span className="text-xs font-bold text-stone-500 font-mono">
                          {Math.round(((currentStepIndex + 1) / steps.length) * 100)}% Complete
                        </span>
                      </div>

                      {/* Step Progress Bar */}
                      <div className="w-full bg-parchment-200 h-1.5 rounded-full overflow-hidden mb-5">
                        <div
                          className="bg-culinary-accent h-full transition-all duration-300"
                          style={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
                        />
                      </div>

                      <h3 className="text-lg font-serif font-bold text-culinary-dark mb-2">
                        {currentStep.title}
                      </h3>
                      <p className="text-sm text-stone-700 leading-relaxed font-sans">
                        {currentStep.text}
                      </p>
                    </div>

                    {/* Interactive Kitchen Timer (if this step is timed) */}
                    {currentStep.timerSeconds > 0 && (
                      <div className="mt-6 p-4 rounded-2xl bg-parchment-100 border border-parchment-300 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-lg shadow-inner ${
                            isTimerRunning ? 'bg-amber-100 text-amber-800 animate-pulse' : 'bg-white text-stone-800'
                          }`}>
                            <Clock className="w-5 h-5 text-culinary-accent" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase text-stone-500 tracking-wider block">
                              Stage Countdown
                            </span>
                            <span className="text-2xl font-mono font-bold text-culinary-dark tracking-tight">
                              {formatTimer(timerSecondsLeft)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setIsTimerRunning(!isTimerRunning)}
                            className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm ${
                              isTimerRunning
                                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                                : 'bg-culinary-deep hover:bg-culinary-moss text-white'
                            }`}
                          >
                            {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                            <span>{isTimerRunning ? 'Pause' : 'Start'}</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setIsTimerRunning(false);
                              setTimerSecondsLeft(currentStep.timerSeconds);
                            }}
                            className="p-2 rounded-xl bg-white hover:bg-parchment-200 text-stone-600 border border-parchment-300 transition-colors"
                            title="Reset Timer"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      disabled={currentStepIndex === 0}
                      onClick={() => setCurrentStepIndex(prev => Math.max(0, prev - 1))}
                      className="px-4 py-2.5 rounded-xl border border-parchment-300 bg-white hover:bg-parchment-100 text-stone-700 font-bold text-xs disabled:opacity-40 transition-colors"
                    >
                      ← Previous Step
                    </button>

                    {currentStepIndex < steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStepIndex(prev => prev + 1)}
                        className="px-6 py-2.5 rounded-xl bg-culinary-deep hover:bg-culinary-moss text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                      >
                        <span>Next Step</span>
                        <span>→</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleFinishCooking}
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-glow-accent transition-all flex items-center gap-1.5"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Finish &amp; Complete Plate</span>
                      </button>
                    )}
                  </div>
                </>
              ) : (
                /* Celebration Finished View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 rounded-2xl border border-emerald-200 shadow-md text-center flex flex-col items-center justify-center flex-1 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-culinary-dark">
                      Bon Appétit! Meal Prepared
                    </h3>
                    <p className="text-xs text-stone-600 max-w-sm mt-1">
                      Your meal is cooked to perfection and timed precisely for your <strong>{activityName}</strong> session.
                    </p>
                  </div>
                  <div className="p-3 bg-parchment-100 rounded-xl font-mono text-xs text-culinary-deep border border-parchment-300">
                    ⚡ {scaledMacros.calories} kcal • {scaledMacros.protein}g Protein ready for cellular absorption
                  </div>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-culinary-deep hover:bg-culinary-moss text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Done • Return to Platform
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
