import { SPORTS_SCIENCE_RESEARCH } from './sportsScienceResearch.js';

// Computational Gastronomy Dynamic Recipe Engine
// Powers dynamic recipe synthesis matching user pantry ingredients,
// activity metabolic targets, and CoSy Lab FlavorDB volatile pairing models.

export const EXPANDED_RECIPEDB_CATALOG = [
  {
    id: 'rec_01',
    recipeDbId: 'RDB-78291',
    title: 'Anabolic Saffron Honey Oat Bowl',
    subtitle: 'High-glycogen pre-run energy with volatile terpenes for sustained pacing',
    activityId: 'pre_run',
    suitableTimings: ['30m', '60m'],
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=1000&q=80',
    prepTime: '6 mins',
    cookTime: '0 mins',
    digestionSpeed: 'Rapid (25 mins)',
    macros: { calories: 395, protein: 16, carbs: 68, fat: 7, fiber: 6.2 },
    ingredients: [
      { id: 'oats', name: 'Rolled Oats', amount: '60g', price: 85, store: 'Zepto', eta: '7 mins' },
      { id: 'banana', name: 'Ripe Banana', amount: '1 medium', price: 45, store: 'Zepto', eta: '7 mins' },
      { id: 'honey', name: 'Raw Forest Honey', amount: '1 tbsp', price: 130, store: 'Zepto', eta: '8 mins' },
      { id: 'cinnamon', name: 'Ceylon Cinnamon', amount: '1/2 tsp', price: 65, store: 'Zepto', eta: '7 mins' },
      { id: 'blueberries', name: 'Fresh Blueberries', amount: '50g', price: 119, store: 'Zepto', eta: '7 mins' },
      { id: 'chia_seeds', name: 'Chia Seeds', amount: '10g', price: 65, store: 'Blinkit', eta: '9 mins' }
    ],
    flavorDb: {
      harmonyScore: 94,
      pairingType: 'Positive Shared Volatiles',
      primaryMolecules: ['Eugenol', 'Cinnamaldehyde', 'Isoamyl Acetate', 'Vanillin'],
      pairingExplanation: 'Cinnamon (Cinnamaldehyde) shares binding receptors with banana volatiles (Isoamyl Acetate), smoothing bitter polyphenol notes from oats while preventing blood sugar spikes.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Fresh Blueberries',
        pantrySubstitute: 'Pomegranate Arils or Sliced Banana + Lemon Drop',
        sharedVolatiles: ['Limonene', 'Malic Acid'],
        gastronomyScore: 89,
        nutritionalMatch: '95% antioxidant equivalence, identical GI curve.'
      }
    ]
  },
  {
    id: 'rec_02',
    recipeDbId: 'RDB-44102',
    title: 'Nitric Beet & Cottage Cheese Power Toast',
    subtitle: 'Vasodilation & sustained strength output for heavy compound lifting',
    activityId: 'pre_gym',
    suitableTimings: ['45m', '90m'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80',
    prepTime: '8 mins',
    cookTime: '3 mins',
    digestionSpeed: 'Medium (45 mins)',
    macros: { calories: 440, protein: 29, carbs: 52, fat: 12, fiber: 5.5 },
    ingredients: [
      { id: 'sourdough', name: 'Artisan Sourdough', amount: '2 thick slices', price: 90, store: 'Zepto', eta: '8 mins' },
      { id: 'paneer', name: 'Fresh Crumbled Paneer', amount: '100g', price: 95, store: 'Zepto', eta: '7 mins' },
      { id: 'spinach', name: 'Sauteed Baby Spinach', amount: '40g', price: 35, store: 'Zepto', eta: '6 mins' },
      { id: 'honey', name: 'Honey Drizzle', amount: '1 tsp', price: 130, store: 'Zepto', eta: '7 mins' },
      { id: 'beetroot', name: 'Organic Grated Beetroot', amount: '60g', price: 35, store: 'Blinkit', eta: '8 mins' }
    ],
    flavorDb: {
      harmonyScore: 91,
      pairingType: 'Complementary Contrast',
      primaryMolecules: ['Geosmin', 'Lactic Acid', 'Diacetyl', 'Limonene'],
      pairingExplanation: 'Paneer’s rich lactic acid compounds neutralize the earthy geosmin odor of raw beetroot, unlocking a bright, savory profile backed by nitrate-induced cellular vasodilation.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Organic Grated Beetroot',
        pantrySubstitute: 'Sautéed Spinach + Lemon Juice (Pantry Ready)',
        sharedVolatiles: ['Chlorophyll', 'Oxalic Acid'],
        gastronomyScore: 86,
        nutritionalMatch: 'Maintains dietary nitrate levels for muscular blood flow without waiting for delivery.'
      }
    ]
  },
  {
    id: 'rec_03',
    recipeDbId: 'RDB-90218',
    title: 'Golden Anabolic Protein Skillet',
    subtitle: 'High-leucine muscle protein synthesis with turmeric-curcumin anti-inflammatory synergy',
    activityId: 'post_workout_recovery',
    suitableTimings: ['immediate', '1h_after'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    prepTime: '12 mins',
    cookTime: '8 mins',
    digestionSpeed: 'Optimal Synthesis (35 mins)',
    macros: { calories: 520, protein: 42, carbs: 48, fat: 14, fiber: 7.0 },
    ingredients: [
      { id: 'eggs', name: 'Whole Eggs & Whites', amount: '3 eggs', price: 75, store: 'Zepto', eta: '7 mins' },
      { id: 'brown_rice', name: 'Steamed Rice / Quinoa', amount: '120g', price: 95, store: 'Zepto', eta: '8 mins' },
      { id: 'spinach', name: 'Wilted Greens', amount: '50g', price: 35, store: 'Zepto', eta: '6 mins' },
      { id: 'chicken_breast', name: 'Smoked Chicken Cubes', amount: '100g', price: 149, store: 'Zepto', eta: '6 mins' },
      { id: 'greek_yogurt', name: 'Garlic Yogurt Sauce', amount: '50g', price: 60, store: 'Blinkit', eta: '9 mins' },
      { id: 'turmeric', name: 'Curcumin Spiced Dusting', amount: '1/2 tsp', price: 45, store: 'Zepto', eta: '7 mins' }
    ],
    flavorDb: {
      harmonyScore: 97,
      pairingType: 'FlavorDB Negative Pairing (Indian Heritage Model)',
      primaryMolecules: ['Curcumin', 'Piperine', 'Methional', 'Glutamic Acid'],
      pairingExplanation: 'Egg umami compounds (Glutamic acid) bind with rice starches. FlavorDB identifies sulfurous methional volatiles in eggs that harmonize with curcuma terpenes, multiplying amino acid absorption.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Smoked Chicken Cubes',
        pantrySubstitute: 'Pan-Seared Paneer (120g) + Extra Egg White',
        sharedVolatiles: ['Glutamate', 'Maillard Pyrazines'],
        gastronomyScore: 94,
        nutritionalMatch: 'Delivers 38g total complete protein with 3.2g Leucine threshold.'
      }
    ]
  },
  {
    id: 'rec_04',
    recipeDbId: 'RDB-61845',
    title: 'Hydrating Electrolyte Berry Smoothie',
    subtitle: 'Osmotic rapid cellular rehydration with potassium & tart cherry anthocyanins',
    activityId: 'post_run_recovery',
    suitableTimings: ['immediate', 'meal'],
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=80',
    prepTime: '4 mins',
    cookTime: '0 mins',
    digestionSpeed: 'Instant Absorption (10 mins)',
    macros: { calories: 310, protein: 24, carbs: 46, fat: 3.5, fiber: 4.8 },
    ingredients: [
      { id: 'banana', name: 'Frozen Banana', amount: '1 medium', price: 45, store: 'Zepto', eta: '7 mins' },
      { id: 'honey', name: 'Raw Honey', amount: '1 tbsp', price: 130, store: 'Zepto', eta: '7 mins' },
      { id: 'greek_yogurt', name: 'Epigamia Greek Yogurt', amount: '150g', price: 60, store: 'Blinkit', eta: '8 mins' },
      { id: 'blueberries', name: 'Wild Blueberries', amount: '80g', price: 119, store: 'Zepto', eta: '6 mins' }
    ],
    flavorDb: {
      harmonyScore: 95,
      pairingType: 'Ester-Terpene Resonance',
      primaryMolecules: ['Linalool', 'Vanillin', 'Isoamyl Acetate', 'Citric Acid'],
      pairingExplanation: 'Linalool from blueberries triggers autonomic relaxation post-endurance, while dairy lactic cultures temper the fruit’s tartness without requiring added processed cane sugars.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Greek Yogurt & Blueberries',
        pantrySubstitute: 'Mashed Banana with Splash of Water, Honey & Pinch of Rock Salt',
        sharedVolatiles: ['Potassium Ions', 'Glucose Oligomers'],
        gastronomyScore: 90,
        nutritionalMatch: 'Instant oral rehydration formula matching WHO electrolyte ratios.'
      }
    ]
  },
  {
    id: 'rec_05',
    recipeDbId: 'RDB-33819',
    title: 'Pan-Seared Atlantic Salmon & Quinoa Bowl',
    subtitle: 'High Omega-3 EPA/DHA with complete plant amino acids for cellular mitochondrial recovery',
    activityId: 'post_workout_recovery',
    suitableTimings: ['immediate', '1h_after'],
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1000&q=80',
    prepTime: '10 mins',
    cookTime: '12 mins',
    digestionSpeed: 'Sustained (40 mins)',
    macros: { calories: 510, protein: 38, carbs: 44, fat: 18, fiber: 6.8 },
    ingredients: [
      { id: 'salmon', name: 'Atlantic Salmon Fillet', amount: '150g', price: 280, store: 'Zepto', eta: '8 mins' },
      { id: 'quinoa', name: 'Steamed Quinoa', amount: '100g', price: 145, store: 'Blinkit', eta: '9 mins' },
      { id: 'spinach', name: 'Baby Spinach Leaves', amount: '50g', price: 35, store: 'Zepto', eta: '6 mins' },
      { id: 'olive_oil', name: 'Cold Pressed Olive Oil', amount: '1 tbsp', price: 210, store: 'Zepto', eta: '7 mins' },
      { id: 'lemon', name: 'Fresh Lemon Juice', amount: '1/2 lemon', price: 25, store: 'Zepto', eta: '7 mins' }
    ],
    flavorDb: {
      harmonyScore: 96,
      pairingType: 'Aldehyde-Citral Synergy',
      primaryMolecules: ['Citral', 'Decenal', 'Oleocanthal', 'Docosahexaenoic Acid'],
      pairingExplanation: 'Citral in fresh lemon cuts fish lipids, accelerating pepsin secretion in the stomach to speed up amino acid delivery to stressed muscle fibers.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Atlantic Salmon Fillet',
        pantrySubstitute: 'Pan-Fried Tofu or Paneer with Flaxseed Oil',
        sharedVolatiles: ['Maillard Pyrazines', 'Alpha-Linolenic Acid'],
        gastronomyScore: 91,
        nutritionalMatch: 'Achieves equivalent plant-based anti-inflammatory lipid profile.'
      }
    ]
  },
  {
    id: 'rec_06',
    recipeDbId: 'RDB-51920',
    title: 'Avocado Egg & Chia Power Sourdough',
    subtitle: 'Healthy monounsaturated lipids with sustained glycogen release for long endurance workouts',
    activityId: 'pre_gym',
    suitableTimings: ['45m', '90m'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80',
    prepTime: '7 mins',
    cookTime: '5 mins',
    digestionSpeed: 'Sustained (50 mins)',
    macros: { calories: 460, protein: 26, carbs: 42, fat: 20, fiber: 8.5 },
    ingredients: [
      { id: 'sourdough', name: 'Toasted Sourdough', amount: '2 slices', price: 90, store: 'Zepto', eta: '7 mins' },
      { id: 'avocado', name: 'Hass Avocado', amount: '1/2 fruit', price: 99, store: 'Zepto', eta: '8 mins' },
      { id: 'eggs', name: 'Poached Eggs', amount: '2 eggs', price: 75, store: 'Zepto', eta: '7 mins' },
      { id: 'chia_seeds', name: 'Sprinkled Chia Seeds', amount: '1 tsp', price: 65, store: 'Blinkit', eta: '9 mins' },
      { id: 'black_pepper', name: 'Cracked Black Pepper', amount: 'Pinch', price: 50, store: 'Zepto', eta: '6 mins' }
    ],
    flavorDb: {
      harmonyScore: 93,
      pairingType: 'Fatty-Acid Esters',
      primaryMolecules: ['Oleic Acid', 'Piperine', 'Lactic Acid'],
      pairingExplanation: 'Oleic acid from avocado coats gastric mucosa, smoothing the glycemic release curve of toasted sourdough carbohydrates for steady blood glucose.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Hass Avocado',
        pantrySubstitute: 'Almond Butter or Olive Oil Drizzle',
        sharedVolatiles: ['Oleic Acid', 'Tocopherols'],
        gastronomyScore: 88,
        nutritionalMatch: '98% monounsaturated fat parity with identical satiety index.'
      }
    ]
  },
  {
    id: 'rec_07',
    recipeDbId: 'RDB-18274',
    title: 'Rapid High-Glycogen Banana Honey Toast',
    subtitle: 'Ultra-fast gastric clearance for runners hitting the track in under 30 minutes',
    activityId: 'pre_run',
    suitableTimings: ['30m'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    prepTime: '3 mins',
    cookTime: '2 mins',
    digestionSpeed: 'Ultra-Fast (15 mins)',
    macros: { calories: 330, protein: 8, carbs: 72, fat: 2.5, fiber: 4.1 },
    ingredients: [
      { id: 'sourdough', name: 'White / Sourdough Bread', amount: '2 slices', price: 90, store: 'Zepto', eta: '7 mins' },
      { id: 'banana', name: 'Thin Sliced Banana', amount: '1 large', price: 45, store: 'Zepto', eta: '7 mins' },
      { id: 'honey', name: 'Forest Wild Honey', amount: '1.5 tbsp', price: 130, store: 'Zepto', eta: '7 mins' },
      { id: 'cinnamon', name: 'Dusting of Cinnamon', amount: '1/4 tsp', price: 65, store: 'Zepto', eta: '6 mins' }
    ],
    flavorDb: {
      harmonyScore: 95,
      pairingType: 'Ester Resonance',
      primaryMolecules: ['Isoamyl Acetate', 'Cinnamaldehyde', 'Maltose'],
      pairingExplanation: 'Cinnamaldehyde enhances cellular glucose transporter (GLUT4) translocation, shuttling carbs directly into muscle tissue without insulin crashes.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Forest Wild Honey',
        pantrySubstitute: 'Maple Syrup or Medjool Dates Mash',
        sharedVolatiles: ['Vanillin', 'Sucrose'],
        gastronomyScore: 92,
        nutritionalMatch: 'Identical glycemic index with equal fast glucose spikes.'
      }
    ]
  },
  {
    id: 'rec_08',
    recipeDbId: 'RDB-82195',
    title: 'Post-Run Replenish Moong Dal Protein Bowl',
    subtitle: 'High biological value plant proteins with potassium-rich cumin tempering',
    activityId: 'post_run_recovery',
    suitableTimings: ['immediate', 'meal'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    prepTime: '8 mins',
    cookTime: '15 mins',
    digestionSpeed: 'Standard (35 mins)',
    macros: { calories: 410, protein: 28, carbs: 58, fat: 6, fiber: 11.2 },
    ingredients: [
      { id: 'yellow_moong', name: 'Yellow Moong Dal (Lentils)', amount: '80g', price: 60, store: 'Zepto', eta: '7 mins' },
      { id: 'brown_rice', name: 'Steamed Rice', amount: '100g', price: 95, store: 'Zepto', eta: '7 mins' },
      { id: 'spinach', name: 'Fresh Spinach', amount: '40g', price: 35, store: 'Zepto', eta: '6 mins' },
      { id: 'turmeric', name: 'Turmeric Powder', amount: '1/2 tsp', price: 45, store: 'Zepto', eta: '6 mins' },
      { id: 'cumin', name: 'Cumin Seed Tempering', amount: '1 tsp', price: 45, store: 'Zepto', eta: '6 mins' }
    ],
    flavorDb: {
      harmonyScore: 96,
      pairingType: 'Indian Heritage Negative Food Pairing',
      primaryMolecules: ['Cuminaldehyde', 'Curcumin', 'L-Arginine'],
      pairingExplanation: 'CoSy Lab computational gastronomy model demonstrates that Indian dal spice mixtures counteract digestive sluggishness while accelerating amino acid absorption post-endurance.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Yellow Moong Dal',
        pantrySubstitute: 'Red Lentils (Masoor) or Chickpea Broth',
        sharedVolatiles: ['Glutamate', 'Phytosterols'],
        gastronomyScore: 93,
        nutritionalMatch: 'Matches amino acid profile and total leucine content.'
      }
    ]
  }
];

/**
 * Checks if a recipe ingredient is satisfied by the user's active pantry inventory
 */
function isIngredientInStock(ing, inStockItems, inStockIds, inStockNames) {
  if (!ing) return false;
  const idLower = (ing.id || '').toLowerCase().trim();
  const nameLower = (ing.name || '').toLowerCase().trim();

  // 1. Direct ID or Name match
  if (inStockIds.has(idLower) || inStockNames.has(nameLower)) return true;

  // 2. Singular/plural normalization (e.g. "eggs" vs "egg", "tomatoes" vs "tomato")
  const singName = nameLower.replace(/s$/, '').replace(/es$/, '');
  const singId = idLower.replace(/s$/, '').replace(/es$/, '');

  for (const item of inStockItems) {
    const sName = item.name.toLowerCase();
    const sId = item.id.toLowerCase();
    const sSingName = sName.replace(/s$/, '').replace(/es$/, '');
    const sSingId = sId.replace(/s$/, '').replace(/es$/, '');

    if (sSingName === singName || sSingId === singId) return true;
    if (sName.includes(singName) || singName.includes(sName)) return true;
    if (sId.includes(singId) || singId.includes(sId)) return true;
  }

  return false;
}

/**
 * Weighting importance of ingredients
 * Primary macros (chicken, salmon, eggs, rice, oats, lentils) carry 3x weight,
 * Secondary produce/dairy carry 2x weight, seasonings carry 1x.
 */
function getIngredientImportance(ingName = '') {
  const name = ingName.toLowerCase();
  if (/chicken|salmon|steak|beef|fish|egg|tofu|paneer|tuna|shrimp|whey|oats|rice|sweet potato|pasta|quinoa|lentil|beans/.test(name)) {
    return 3;
  }
  if (/spinach|broccoli|mushroom|tomato|onion|banana|apple|berry|berries|avocado|butter|milk|yogurt|cheese|sourdough|bread|flour/.test(name)) {
    return 2;
  }
  return 1;
}

/**
 * Calculates a rigorous multi-factor Gastronomic Relevance Score (0 - 100)
 * Evaluates:
 *  1. Weighted Pantry Inventory (40%): How ready the meal is to cook
 *  2. Metabolic Concordance (30%): Distance to peer-reviewed sports science macro targets
 *  3. Digestive Kinetics & Timing Fit (20%): Gastric clearance safety & leucine trigger
 *  4. FlavorDB Molecular Volatiles (10%): CoSy Lab volatile pairing synergy
 */
export function calculateGastronomicRelevanceScore(recipe, pantryItems, activityId, timingId) {
  const inStockItems = pantryItems.filter(p => p.inStock);
  const inStockIds = new Set(inStockItems.map(p => p.id.toLowerCase()));
  const inStockNames = new Set(inStockItems.map(p => p.name.toLowerCase()));

  // 1. Inventory Weighted Availability (Weight: 40%)
  const ingredients = recipe.ingredients || [];
  let availableWeighted = 0;
  let totalWeighted = 0;
  let availableCount = 0;

  const resolvedIngredients = ingredients.map(ing => {
    const isAvailable = isIngredientInStock(ing, inStockItems, inStockIds, inStockNames);
    const weight = getIngredientImportance(ing.name || ing.id || '');
    totalWeighted += weight;
    if (isAvailable) {
      availableWeighted += weight;
      availableCount++;
    }
    return {
      ...ing,
      inPantry: isAvailable,
      importanceWeight: weight
    };
  });

  const inventoryScore = totalWeighted > 0 
    ? Math.round((availableWeighted / totalWeighted) * 100) 
    : 50;
  const rawPantryMatchPercentage = ingredients.length > 0
    ? Math.round((availableCount / ingredients.length) * 100)
    : 50;

  // 2. Metabolic Nutrient Fit (Weight: 30%)
  const researchTarget = SPORTS_SCIENCE_RESEARCH[activityId]?.timingBifurcations?.[timingId] 
    || SPORTS_SCIENCE_RESEARCH[activityId]?.timingBifurcations?.['30m']
    || SPORTS_SCIENCE_RESEARCH['pre_run']?.timingBifurcations?.['30m'];

  const targetMacros = researchTarget?.targetMacros || { carbsPct: 60, proteinPct: 25, fatPct: 15 };

  // Calculate recipe's actual macro energy distribution
  const carbsG = recipe.macros?.carbs || 45;
  const proteinG = recipe.macros?.protein || 20;
  const fatG = recipe.macros?.fat || 10;
  const totalCalsFromMacros = (carbsG * 4) + (proteinG * 4) + (fatG * 9);

  const carbsPct = totalCalsFromMacros > 0 ? Math.round((carbsG * 4 / totalCalsFromMacros) * 100) : 55;
  const proteinPct = totalCalsFromMacros > 0 ? Math.round((proteinG * 4 / totalCalsFromMacros) * 100) : 25;
  const fatPct = totalCalsFromMacros > 0 ? Math.round((fatG * 9 / totalCalsFromMacros) * 100) : 20;

  // Normalized Euclidean distance to target
  const macroDelta = Math.sqrt(
    Math.pow(carbsPct - targetMacros.carbsPct, 2) +
    Math.pow(proteinPct - targetMacros.proteinPct, 2) +
    Math.pow(fatPct - targetMacros.fatPct, 2)
  );
  const metabolicScore = Math.max(15, Math.min(100, Math.round(100 - (macroDelta * 1.25))));

  // 3. Digestion Velocity & Timing Kinetics Fit (Weight: 20%)
  let timingKineticsScore = 75; // baseline

  const isPreExerciseTight = timingId === '15m' || timingId === '30m';
  const isPostWorkout = activityId.includes('post') || timingId === 'immediate' || timingId === '45m_after';

  if (isPreExerciseTight) {
    if (fatG > 14) timingKineticsScore -= 30; // Gastric delay penalty
    else if (fatG <= 8) timingKineticsScore += 15;

    if (recipe.macros?.fiber > 6) timingKineticsScore -= 20; // Gut distension risk
    else if (recipe.macros?.fiber <= 3) timingKineticsScore += 10;

    if (carbsPct >= 65) timingKineticsScore += 15; // Glycogen surge reward
  } else if (isPostWorkout) {
    if (proteinG >= 30) timingKineticsScore += 25; // Exceeds leucine trigger threshold
    else if (proteinG < 18) timingKineticsScore -= 25;

    if (carbsG >= 35) timingKineticsScore += 10; // Glycogen resynthesis
  } else {
    timingKineticsScore = recipe.suitableTimings?.includes(timingId) ? 95 : 80;
  }
  timingKineticsScore = Math.max(15, Math.min(100, timingKineticsScore));

  // 4. FlavorDB Molecular Volatiles Score (Weight: 10%)
  const flavorScore = recipe.flavorDb?.harmonyScore || 90;

  // Final Weighted Score (0 to 100)
  const finalRelevanceScore = Math.round(
    (inventoryScore * 0.40) +
    (metabolicScore * 0.30) +
    (timingKineticsScore * 0.20) +
    (flavorScore * 0.10)
  );

  return {
    finalRelevanceScore,
    resolvedIngredients,
    inventoryScore,
    rawPantryMatchPercentage,
    availableCount,
    totalCount: ingredients.length,
    metabolicScore,
    timingKineticsScore,
    flavorScore,
    macroActual: { carbsPct, proteinPct, fatPct },
    macroTarget: targetMacros,
    researchTarget
  };
}

/**
 * Ranks and scores recipes dynamically against active pantry inventory and sports science targets
 * @param {Array} recipes - Base catalog or live API recipes
 * @param {Array} pantryItems - Current user pantry state
 * @param {string} activityId - Selected workout activity
 * @param {string} timingId - Selected digestion timing
 * @returns {Array} Sorted & annotated recipes
 */
export function getRecommendedRecipes(recipes, pantryItems, activityId, timingId) {
  // If live API recipes exist in the pool, keep all live API recipes
  const hasLiveApi = recipes.some(r => r.isLiveApi);
  let targetPool = recipes;

  if (!hasLiveApi) {
    const matchingActivity = recipes.filter(r => r.activityId === activityId);
    if (matchingActivity.length > 0) {
      targetPool = matchingActivity;
    }
  }

  // Score each recipe using the Multi-Factor Gastronomic Weighting Algorithm
  return [...targetPool].map(recipe => {
    const metrics = calculateGastronomicRelevanceScore(recipe, pantryItems, activityId, timingId);
    const matchesTiming = recipe.suitableTimings?.includes(timingId) ? 1 : 0;

    return {
      ...recipe,
      ingredients: metrics.resolvedIngredients,
      pantryMatchPercentage: metrics.inventoryScore,
      rawAvailableCount: metrics.availableCount,
      totalCount: metrics.totalCount,
      matchesTiming,
      relevanceMetrics: {
        overallScore: metrics.finalRelevanceScore,
        inventoryScore: metrics.inventoryScore,
        metabolicScore: metrics.metabolicScore,
        timingKineticsScore: metrics.timingKineticsScore,
        flavorScore: metrics.flavorScore,
        macroActual: metrics.macroActual,
        macroTarget: metrics.macroTarget,
        researchTarget: metrics.researchTarget
      }
    };
  }).sort((a, b) => {
    // 0. Live API recipes get priority if both live and static are present
    if (b.isLiveApi && !a.isLiveApi) return 1;
    if (a.isLiveApi && !b.isLiveApi) return -1;

    // 1. Highest Overall Gastronomic Relevance Score
    if (b.relevanceMetrics.overallScore !== a.relevanceMetrics.overallScore) {
      return b.relevanceMetrics.overallScore - a.relevanceMetrics.overallScore;
    }
    // 2. Highest Inventory Weighted Score
    if (b.relevanceMetrics.inventoryScore !== a.relevanceMetrics.inventoryScore) {
      return b.relevanceMetrics.inventoryScore - a.relevanceMetrics.inventoryScore;
    }
    // 3. Timing match
    return (b.matchesTiming || 0) - (a.matchesTiming || 0);
  });
}
