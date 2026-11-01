export const ACTIVITIES = [
  {
    id: 'pre_run',
    name: 'Pre-Run Energy',
    category: 'pre',
    icon: 'Footprints',
    badge: 'Fast Glycogen',
    description: 'High simple carbs, low fiber & fat to prevent GI distress while maximizing running cadence.',
    recommendedTiming: '15-45 mins before',
    macroFocus: 'Carbs: 70% | Protein: 15% | Fat: 15%',
    timingOptions: [
      { id: '15m', label: 'In 15 mins (Flash Glycogen)', digestion: 'Rapid' },
      { id: '30m', label: 'In 30 mins (Rapid Glycogen)', digestion: 'Rapid' },
      { id: '60m', label: 'In 60 mins (Balanced Fuel)', digestion: 'Medium' },
      { id: '120m', label: 'In 2 hours (Complex Carbs)', digestion: 'Slow' }
    ]
  },
  {
    id: 'pre_gym',
    name: 'Pre-Lifting & Strength',
    category: 'pre',
    icon: 'Dumbbell',
    badge: 'Sustained Power',
    description: 'Medium glycemic carbs, moderate amino acid availability, and nitric oxide vasodilation.',
    recommendedTiming: '45-90 mins before',
    macroFocus: 'Carbs: 55% | Protein: 30% | Fat: 15%',
    timingOptions: [
      { id: '30m', label: 'In 30 mins (Light Primer)', digestion: 'Rapid' },
      { id: '45m', label: 'In 45 mins (Light Amino Fuel)', digestion: 'Medium' },
      { id: '90m', label: 'In 90 mins (Full Pre-Workout)', digestion: 'Sustained' },
      { id: '120m', label: 'In 2 hours (Solid Fuel Plate)', digestion: 'Slow' }
    ]
  },
  {
    id: 'hiit_crossfit',
    name: 'HIIT & Functional Fitness',
    category: 'pre',
    icon: 'Zap',
    badge: 'Lactate Buffering',
    description: 'Fast dual-source carbohydrates, beta-alanine and electrolytes to sustain high-threshold anaerobic glycolysis.',
    recommendedTiming: '30-60 mins before',
    macroFocus: 'Carbs: 65% | Protein: 20% | Fat: 15%',
    timingOptions: [
      { id: '15m', label: 'In 15 mins (Rapid ATP Surge)', digestion: 'Rapid' },
      { id: '30m', label: 'In 30 mins (Glycolytic Primer)', digestion: 'Rapid' },
      { id: '60m', label: 'In 60 mins (Sustained Intensity)', digestion: 'Medium' },
      { id: '90m', label: 'In 90 mins (Pre-WOD Solid Meal)', digestion: 'Sustained' }
    ]
  },
  {
    id: 'endurance_cycling',
    name: 'Endurance & Long Haul',
    category: 'endurance',
    icon: 'Bike',
    badge: 'Dual-Carb & Lipids',
    description: 'Sustained multi-transporter carbs (glucose:fructose 2:1) + slow lipids to spare glycogen during 2h+ efforts.',
    recommendedTiming: '60-120 mins before',
    macroFocus: 'Carbs: 65% | Protein: 15% | Fat: 20%',
    timingOptions: [
      { id: '30m', label: 'In 30 mins (Top-Up Fuel)', digestion: 'Rapid' },
      { id: '60m', label: 'In 60 mins (Pre-Ride Balanced)', digestion: 'Medium' },
      { id: '120m', label: 'In 2 hours (Long Ride Engine)', digestion: 'Sustained' },
      { id: '180m', label: 'In 3 hours (Carb Loading)', digestion: 'Slow' }
    ]
  },
  {
    id: 'post_workout_recovery',
    name: 'Post-Gym Hypertrophy',
    category: 'post',
    icon: 'Flame',
    badge: 'Muscle Synthesis',
    description: 'High biological value protein (30-40g) with 3.2g+ leucine + fast carbohydrates to trigger mTORC1 and MPS.',
    recommendedTiming: 'Within 45 mins after',
    macroFocus: 'Protein: 40% | Carbs: 45% | Fat: 15%',
    timingOptions: [
      { id: 'immediate', label: 'Just finished (0-15m Anabolic Kickstart)', digestion: 'Rapid' },
      { id: '45m_after', label: 'Within 45 mins (Peak MPS Window)', digestion: 'Standard' },
      { id: '90m_after', label: '90 mins post (Full Recovery Plate)', digestion: 'Sustained' },
      { id: '2h_after', label: '2 hours post (Slow Tissue Remodeling)', digestion: 'Standard' }
    ]
  },
  {
    id: 'post_run_recovery',
    name: 'Post-Run Replenish',
    category: 'post',
    icon: 'HeartPulse',
    badge: 'Electrolytes & Repair',
    description: 'Rehydrates sodium/potassium osmolarity, rapid glycogen re-synthesis, and reduces oxidative markers.',
    recommendedTiming: 'Within 30 mins after',
    macroFocus: 'Carbs: 60% | Protein: 25% | Fat: 15%',
    timingOptions: [
      { id: 'immediate', label: 'Just finished (Osmotic Rehydration)', digestion: 'Fast' },
      { id: '30m_after', label: 'Within 30 mins (Glycogen Reload)', digestion: 'Rapid' },
      { id: '60m_after', label: '1 hour post (Complete Nutrient Bowl)', digestion: 'Medium' },
      { id: 'meal', label: 'Post-Run Full Feast', digestion: 'Standard' }
    ]
  },
  {
    id: 'deep_work_focus',
    name: 'Deep Work & Cognitive Focus',
    category: 'focus',
    icon: 'Brain',
    badge: 'Neurotransmission',
    description: 'Zero-crash low-glycemic fuel, choline for acetylcholine, tyrosine for dopamine, and protective polyphenols.',
    recommendedTiming: '30-60 mins before work',
    macroFocus: 'Carbs: 40% | Protein: 30% | Fat: 30%',
    timingOptions: [
      { id: '30m', label: 'In 30 mins (Neuro-Primer)', digestion: 'Medium' },
      { id: '60m', label: 'In 60 mins (Sustained Cognitive Plateau)', digestion: 'Sustained' },
      { id: 'sustained', label: 'All-Day Grazing (Zero Sugar Dip)', digestion: 'Slow' }
    ]
  },
  {
    id: 'sleep_restoration',
    name: 'Restorative Sleep & Night Repair',
    category: 'focus',
    icon: 'Moon',
    badge: 'Nocturnal Anabolic',
    description: 'Tryptophan to serotonin/melatonin conversion, dietary magnesium for GABA activation, and slow casein repair.',
    recommendedTiming: '45-75 mins before sleep',
    macroFocus: 'Protein: 35% | Carbs: 35% | Fat: 30%',
    timingOptions: [
      { id: '30m', label: '30 mins before bed (Melatonin Surge)', digestion: 'Gentle' },
      { id: '60m', label: '60 mins before bed (Deep Repair Elixir)', digestion: 'Steady' },
      { id: '90m', label: '90 mins before bed (Light Restorative Plate)', digestion: 'Slow' }
    ]
  },
  {
    id: 'yoga_mobility',
    name: 'Yoga, Core & Mobility',
    category: 'endurance',
    icon: 'Flower2',
    badge: 'Gut Ease & Flexibility',
    description: 'Low-FODMAP, anti-inflammatory compounds, collagen co-factors, and zero stomach sloshing for inverted postures.',
    recommendedTiming: '45-60 mins before',
    macroFocus: 'Carbs: 50% | Protein: 25% | Fat: 25%',
    timingOptions: [
      { id: '30m', label: 'In 30 mins (Light Hydration & Electrolytes)', digestion: 'Rapid' },
      { id: '60m', label: 'In 60 mins (Gentle Digestible Fuel)', digestion: 'Medium' },
      { id: '90m', label: 'In 90 mins (Balanced Clean Energy)', digestion: 'Sustained' }
    ]
  },
  {
    id: 'match_day_sports',
    name: 'Competitive Sports & Agility',
    category: 'sports',
    icon: 'Trophy',
    badge: 'Agility & Neuromuscular',
    description: 'Fast glycogen + sustained starches, sodium loading, and neuro-reactive tyrosine for sharp reaction velocity.',
    recommendedTiming: '60-90 mins before kickoff',
    macroFocus: 'Carbs: 65% | Protein: 20% | Fat: 15%',
    timingOptions: [
      { id: '30m', label: 'In 30 mins (Sideline Quick Booster)', digestion: 'Rapid' },
      { id: '60m', label: 'In 60 mins (Matchday Pre-Ignition)', digestion: 'Medium' },
      { id: '90m', label: 'In 90 mins (Full Pre-Game Fuel)', digestion: 'Sustained' },
      { id: '120m', label: 'In 2 hours (Match Fuel Reserve)', digestion: 'Slow' }
    ]
  }
];

export const PANTRY_CATALOG = [
  { id: 'banana', name: 'Bananas', category: 'Carbs', icon: '🍌', inStock: true },
  { id: 'oats', name: 'Rolled Oats', category: 'Carbs', icon: '🌾', inStock: true },
  { id: 'eggs', name: 'Eggs', category: 'Protein', icon: '🥚', inStock: true },
  { id: 'peanut_butter', name: 'Peanut Butter', category: 'Fats', icon: '🥜', inStock: true },
  { id: 'honey', name: 'Wild Honey', category: 'Flavor', icon: '🍯', inStock: true },
  { id: 'greek_yogurt', name: 'Greek Yogurt', category: 'Protein', icon: '🥣', inStock: false },
  { id: 'chia_seeds', name: 'Chia Seeds', category: 'Fats', icon: '🌱', inStock: false },
  { id: 'blueberries', name: 'Fresh Blueberries', category: 'Produce', icon: '🫐', inStock: false },
  { id: 'paneer', name: 'Paneer / Tofu', category: 'Protein', icon: '🧀', inStock: true },
  { id: 'spinach', name: 'Baby Spinach', category: 'Produce', icon: '🥬', inStock: true },
  { id: 'chicken_breast', name: 'Chicken Breast', category: 'Protein', icon: '🍗', inStock: false },
  { id: 'brown_rice', name: 'Basmati / Brown Rice', category: 'Carbs', icon: '🍚', inStock: true },
  { id: 'whey_protein', name: 'Whey Protein', category: 'Protein', icon: '🥤', inStock: false },
  { id: 'sourdough', name: 'Sourdough Bread', category: 'Carbs', icon: '🍞', inStock: true },
  { id: 'cinnamon', name: 'Ceylon Cinnamon', category: 'Flavor', icon: '🪵', inStock: true },
  { id: 'beetroot', name: 'Fresh Beetroot', category: 'Produce', icon: '🫚', inStock: false },
  { id: 'sweet_potato', name: 'Roasted Sweet Potato', category: 'Carbs', icon: '🍠', inStock: true },
  { id: 'almonds', name: 'Raw Almonds / Walnuts', category: 'Fats', icon: '🌰', inStock: true },
  { id: 'dark_chocolate', name: 'Dark Chocolate (85%)', category: 'Flavor', icon: '🍫', inStock: true },
  { id: 'green_tea', name: 'Matcha / Green Tea', category: 'Flavor', icon: '🍵', inStock: false },
  { id: 'pomegranate', name: 'Fresh Pomegranate', category: 'Produce', icon: '🫐', inStock: false },
  { id: 'apple', name: 'Crisp Apple', category: 'Carbs', icon: '🍎', inStock: true },
  { id: 'avocado', name: 'Ripe Avocado', category: 'Fats', icon: '🥑', inStock: false },
  { id: 'turmeric', name: 'Turmeric & Black Pepper', category: 'Flavor', icon: '🧂', inStock: true },
  { id: 'coconut_water', name: 'Pure Coconut Water', category: 'Produce', icon: '🥥', inStock: false },
  { id: 'dates', name: 'Medjool Dates', category: 'Carbs', icon: '🌴', inStock: true }
];

export const RECIPES = [
  {
    id: 'rec_01',
    recipeDbId: 'RDB-78291',
    title: 'Anabolic Saffron Honey Oat Bowl',
    subtitle: 'High-glycogen pre-run energy with volatile terpenes for sustained pacing',
    activityId: 'pre_run',
    suitableTimings: ['15m', '30m', '60m'],
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=1000&q=80',
    prepTime: '6 mins',
    cookTime: '0 mins',
    digestionSpeed: 'Rapid (25 mins)',
    macros: {
      calories: 395,
      protein: 16,
      carbs: 68,
      fat: 7,
      fiber: 6.2
    },
    ingredients: [
      { id: 'oats', name: 'Rolled Oats', amount: '60g', inPantry: true },
      { id: 'banana', name: 'Ripe Banana', amount: '1 medium', inPantry: true },
      { id: 'honey', name: 'Raw Forest Honey', amount: '1 tbsp', inPantry: true },
      { id: 'cinnamon', name: 'Ceylon Cinnamon', amount: '1/2 tsp', inPantry: true },
      { id: 'blueberries', name: 'Fresh Blueberries', amount: '50g', inPantry: false, price: 119, store: 'Zepto', eta: '7 mins' },
      { id: 'chia_seeds', name: 'Chia Seeds', amount: '10g', inPantry: false, price: 65, store: 'Blinkit', eta: '9 mins' }
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
      },
      {
        missingItem: 'Chia Seeds',
        pantrySubstitute: 'Crushed Peanuts / Peanut Butter',
        sharedVolatiles: ['Pyrazines', 'Oleic Acid'],
        gastronomyScore: 91,
        nutritionalMatch: 'Satisfies lipid balance, slight protein boost (+3g).'
      }
    ],
    whyWeRecommend: {
      activityHeadline: 'Engineered for Rapid Gastric Emptying & Cadence Protection',
      metabolicRationale: 'Running induces continuous vertical vertical oscillation that jostles the gut. In the 15-45 min window before running, blood flow must be reserved for leg skeletal muscle rather than diverted to splanchnic digestion. High simple carbs with low fats and insoluble fiber allow 25-minute gastric transit, elevating blood glucose just as your warm-up begins.',
      digestionVelocity: 'Rapid (25 mins) — Osmotically Balanced',
      glycemicProfile: 'High-to-Moderate GI (72) — Rapid muscle glycogen replenishment without postprandial reactive hypoglycemia.',
      ingredientScience: [
        { ingredient: 'Ripe Banana', role: 'Dual-transporter carbohydrate uptake: Glucose uses SGLT1 while fructose uses GLUT5, accelerating intestinal absorption rate by 40%. Contains 420mg potassium to prevent exercise cramping.' },
        { ingredient: 'Rolled Oats', role: 'Provides beta-glucan soluble fiber that creates a steady slow-drip glycogen reservoir for later miles without GI dragging.' },
        { ingredient: 'Raw Forest Honey', role: 'Pure monosaccharide fuel that quickly enters circulation, elevating cellular ATP without requiring enzyme-heavy cleavage.' },
        { ingredient: 'Ceylon Cinnamon', role: 'Cinnamaldehyde activates insulin receptor kinase, directing incoming glucose directly into muscle glycogen synthase rather than fat cells.' }
      ],
      flavorScience: 'Isoamyl Acetate from banana harmonizes with oat avenanthramides and aromatic cinnamaldehyde, verified by FlavorDB shared volatile mapping.'
    }
  },
  {
    id: 'rec_02',
    recipeDbId: 'RDB-44102',
    title: 'Nitric Beet & Cottage Cheese Power Toast',
    subtitle: 'Vasodilation & sustained strength output for heavy compound lifting',
    activityId: 'pre_gym',
    suitableTimings: ['30m', '45m', '90m', '120m'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80',
    prepTime: '8 mins',
    cookTime: '3 mins',
    digestionSpeed: 'Medium (45 mins)',
    macros: {
      calories: 440,
      protein: 29,
      carbs: 52,
      fat: 12,
      fiber: 5.5
    },
    ingredients: [
      { id: 'sourdough', name: 'Artisan Sourdough', amount: '2 thick slices', inPantry: true },
      { id: 'paneer', name: 'Fresh Crumbled Paneer', amount: '100g', inPantry: true },
      { id: 'spinach', name: 'Sauteed Baby Spinach', amount: '40g', inPantry: true },
      { id: 'honey', name: 'Honey Drizzle', amount: '1 tsp', inPantry: true },
      { id: 'beetroot', name: 'Organic Grated Beetroot', amount: '60g', inPantry: false, price: 35, store: 'Blinkit', eta: '8 mins' }
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
    ],
    whyWeRecommend: {
      activityHeadline: 'Nitric Oxide Cellular Vasodilation & Intramuscular Amino Reserve',
      metabolicRationale: 'Heavy resistance training requires sustained ATP-CP replenishment, enhanced intramuscular blood volume (muscle pump), and pre-elevated blood amino acids to attenuate exercise-induced protein catabolism (ISSN Nutrient Timing Stand). The 45-90 min window permits moderate sourdough starches to digest while circulating bioactive nitrates.',
      digestionVelocity: 'Medium (45-50 mins) — Sustained ATP Plateau',
      glycemicProfile: 'Moderate GI (55) — Steady release preventing insulin spikes that could trigger sluggishness under heavy barbells.',
      ingredientScience: [
        { ingredient: 'Organic Beetroot', role: 'Inorganic dietary nitrates (NO3-) reduced by oral bacteria to nitrite and nitric oxide (NO), enhancing skeletal muscle vasodilation and reducing the ATP cost of cross-bridge cycling.' },
        { ingredient: 'Fresh Paneer / Cottage Cheese', role: 'Delivers 22g complete casein and whey amino acids, ensuring high systemic hyperaminoacidemia during heavy eccentric contractions.' },
        { ingredient: 'Artisan Sourdough', role: 'Naturally fermented lactic acid starches lower glycemic spike and accelerate mineral bioavailability (zinc, magnesium) for nerve signaling.' },
        { ingredient: 'Baby Spinach', role: 'Rich in dietary ecdysterone precursors and magnesium ions required for myofibril relaxation between maximal effort sets.' }
      ],
      flavorScience: 'Lactic acid volatiles in cultured dairy balance earthy soil terpenes (geosmin) in beetroot, creating a savory umami equilibrium.'
    }
  },
  {
    id: 'rec_03',
    recipeDbId: 'RDB-90218',
    title: 'Golden Anabolic Protein Skillet',
    subtitle: 'High-leucine muscle protein synthesis with turmeric-curcumin anti-inflammatory synergy',
    activityId: 'post_workout_recovery',
    suitableTimings: ['immediate', '45m_after', '90m_after'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    prepTime: '12 mins',
    cookTime: '8 mins',
    digestionSpeed: 'Optimal Synthesis (35 mins)',
    macros: {
      calories: 520,
      protein: 42,
      carbs: 48,
      fat: 14,
      fiber: 7.0
    },
    ingredients: [
      { id: 'eggs', name: 'Whole Eggs & Whites', amount: '3 eggs', inPantry: true },
      { id: 'brown_rice', name: 'Steamed Rice / Quinoa', amount: '120g', inPantry: true },
      { id: 'spinach', name: 'Wilted Greens', amount: '50g', inPantry: true },
      { id: 'chicken_breast', name: 'Smoked Chicken Cubes', amount: '100g', inPantry: false, price: 149, store: 'Zepto', eta: '6 mins' },
      { id: 'greek_yogurt', name: 'Garlic Yogurt Sauce', amount: '50g', inPantry: false, price: 55, store: 'Blinkit', eta: '9 mins' },
      { id: 'turmeric', name: 'Turmeric & Black Pepper', amount: '1 pinch', inPantry: true }
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
      },
      {
        missingItem: 'Garlic Greek Yogurt Sauce',
        pantrySubstitute: 'Eggs emulsified with a touch of olive oil & black pepper',
        sharedVolatiles: ['Piperine', 'Oleocanthal'],
        gastronomyScore: 88,
        nutritionalMatch: 'Bioavailability booster for curcumin absorption.'
      }
    ],
    whyWeRecommend: {
      activityHeadline: 'Surpassing the 3.2g Leucine Threshold to Trigger mTORC1',
      metabolicRationale: 'Following heavy resistance exercise, muscle protein breakdown (MPB) remains elevated above synthesis until hyperaminoacidemia is achieved. ISSN research confirms 35-40g of high-BV protein containing at least 3.0g leucine triggers maximal fractional synthetic rate (FSR) through ribosomal S6 kinase activation, while moderate rice carbs stimulate insulin to blunt cortisol.',
      digestionVelocity: 'Optimal Synthesis (35 mins) — High Bioavailability',
      glycemicProfile: 'Moderate GI (58) — Controlled insulin surge driving amino acid uptake into myocytes without lipogenesis.',
      ingredientScience: [
        { ingredient: 'Whole Eggs & Whites', role: 'Biological Value of 100. Egg yolk contains bioactive lipids and phosphatidic acid that synergistically augment myofibrillar protein synthesis by 42% over whites alone.' },
        { ingredient: 'Chicken Breast / Paneer', role: 'High-density essential amino acids (EAAs) providing rapid plasma elevation of branched-chain amino acids (BCAAs).' },
        { ingredient: 'Turmeric + Black Pepper', role: 'Piperine inhibits hepatic glucuronidation of curcumin by 2000%, suppressing nuclear factor kappa B (NF-kB) and dampening delayed-onset muscle soreness (DOMS).' },
        { ingredient: 'Steamed Rice', role: 'Provides high-osmolarity amylopectin that refills depleted skeletal glycogen stores within the acute 45-minute window.' }
      ],
      flavorScience: 'Negative pairing synergy between sulfurous egg methional and spicy piperine/curcumin terpenes produces deep culinary palatability.'
    }
  },
  {
    id: 'rec_04',
    recipeDbId: 'RDB-61845',
    title: 'Hydrating Electrolyte Berry Smoothie',
    subtitle: 'Osmotic rapid cellular rehydration with potassium & tart cherry anthocyanins',
    activityId: 'post_run_recovery',
    suitableTimings: ['immediate', '30m_after', '60m_after'],
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=80',
    prepTime: '4 mins',
    cookTime: '0 mins',
    digestionSpeed: 'Instant Absorption (10 mins)',
    macros: {
      calories: 310,
      protein: 24,
      carbs: 46,
      fat: 3.5,
      fiber: 4.8
    },
    ingredients: [
      { id: 'banana', name: 'Frozen Banana', amount: '1 medium', inPantry: true },
      { id: 'honey', name: 'Raw Honey', amount: '1 tbsp', inPantry: true },
      { id: 'greek_yogurt', name: 'Epigamia Greek Yogurt', amount: '150g', inPantry: false, price: 60, store: 'Blinkit', eta: '8 mins' },
      { id: 'blueberries', name: 'Wild Blueberries', amount: '80g', inPantry: false, price: 119, store: 'Zepto', eta: '6 mins' }
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
    ],
    whyWeRecommend: {
      activityHeadline: 'Rapid Plasma Volume Restoration & Exercise-Induced Hyperthermia Recovery',
      metabolicRationale: 'Post-running recovery prioritizes immediate rehydration of lost sweat volume and replacement of extracellular sodium and intracellular potassium. Liquid smoothies empty from the stomach in 10-15 minutes, re-expanding vascular volume and accelerating systemic glycogen resynthesis via glucose-sodium co-transport (SGLT1).',
      digestionVelocity: 'Instant Absorption (10 mins) — Osmotically Balanced Liquid',
      glycemicProfile: 'Rapid-to-High GI (74) — Spikes insulin acutely to halt post-endurance cortisol-induced muscle breakdown.',
      ingredientScience: [
        { ingredient: 'Frozen Banana', role: 'Supplies intracellular potassium ions (450mg) and easily digested monosaccharides that restore fluid retention without renal dumping.' },
        { ingredient: 'Wild Blueberries', role: 'Dense anthocyanins and polyphenols scavenge hydroxyl radicals and inhibit exercise-induced cyclooxygenase (COX) inflammation.' },
        { ingredient: 'Greek Yogurt', role: 'Provides high-quality whey proteins containing fast-digesting immunoglobulins and gut-protecting probiotics.' },
        { ingredient: 'Raw Honey', role: 'Supplies dual fructose/glucose ratios that re-saturate both liver and muscle glycogen pools simultaneously.' }
      ],
      flavorScience: 'Linalool and terpene esters in berries combine with vanilla-like notes in fermented dairy to create a refreshing retro-nasal cooling sensation.'
    }
  },
  {
    id: 'rec_05',
    recipeDbId: 'RDB-33019',
    title: 'Explosive Glycolytic Date & Cocoa Blast',
    subtitle: 'Rapid ATP-CP recharge, lactate buffering & nitrate delivery for intense WODs',
    activityId: 'hiit_crossfit',
    suitableTimings: ['15m', '30m', '60m'],
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1000&q=80',
    prepTime: '5 mins',
    cookTime: '0 mins',
    digestionSpeed: 'Ultra-Fast (15 mins)',
    macros: {
      calories: 360,
      protein: 14,
      carbs: 64,
      fat: 6,
      fiber: 5.8
    },
    ingredients: [
      { id: 'dates', name: 'Medjool Dates', amount: '4 pitted', inPantry: true },
      { id: 'banana', name: 'Ripe Banana', amount: '1 small', inPantry: true },
      { id: 'dark_chocolate', name: 'Dark Cocoa / Chocolate', amount: '20g', inPantry: true },
      { id: 'cinnamon', name: 'Ceylon Cinnamon', amount: '1/2 tsp', inPantry: true },
      { id: 'peanut_butter', name: 'Peanut Butter', amount: '1 tbsp', inPantry: true },
      { id: 'beetroot', name: 'Beetroot Powder / Extract', amount: '1 tsp', inPantry: false, price: 49, store: 'Blinkit', eta: '8 mins' }
    ],
    flavorDb: {
      harmonyScore: 96,
      pairingType: 'Pyrazine-Theobromine Synergy',
      primaryMolecules: ['Theobromine', 'Pyrazines', 'Vanillin', 'Cinnamaldehyde'],
      pairingExplanation: 'Roasted peanut pyrazines mesh perfectly with dark chocolate theobromine, while dates supply caramel sweetness that cuts bitterness.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Beetroot Extract',
        pantrySubstitute: 'Extra Cinnamon + Cocoa boost',
        sharedVolatiles: ['Flavanols', 'Polyphenols'],
        gastronomyScore: 92,
        nutritionalMatch: 'Maintains endothelial nitric oxide enhancement.'
      }
    ],
    whyWeRecommend: {
      activityHeadline: 'Anaerobic Glycolysis Priming & Central Nervous Activation',
      metabolicRationale: 'HIIT intervals rapidly deplete phosphocreatine and demand instantaneous glucose for anaerobic glycolysis. Medjool dates feature an ultra-high glycemic index (GI > 75) that saturates muscle cytoplasm with readily fermentable glucose, while cocoa theobromine provides central nervous arousal without the jitters of pure caffeine.',
      digestionVelocity: 'Ultra-Fast (15 mins) — Immediate Gastric Clearance',
      glycemicProfile: 'High GI (78) — Rapid cellular uptake to buffer intracellular lactate accumulation during maximal sprint efforts.',
      ingredientScience: [
        { ingredient: 'Medjool Dates', role: 'Pure glucose and fructose in natural fibrous matrix, offering instant intracellular energy without GI upset.' },
        { ingredient: 'Dark Chocolate / Cocoa', role: 'Rich in epicatechins that stimulate mitochondrial biogenesis and theobromine for adenosine receptor antagonism.' },
        { ingredient: 'Peanut Butter', role: 'Supplies essential arginine, the physiological substrate for nitric oxide synthase.' },
        { ingredient: 'Ceylon Cinnamon', role: 'Prevents sudden hypoglycemic crashes between intervals by stabilizing GLUT4 receptor sensitivity.' }
      ],
      flavorScience: 'Theobromine bitterness paired with rich pyrazines and date saccharides activates both sweet and bitter taste receptors, maximizing autonomic wakefulness.'
    }
  },
  {
    id: 'rec_06',
    recipeDbId: 'RDB-51104',
    title: 'Dual-Source Sweet Potato & Almond Energy Cake',
    subtitle: 'Multi-hour sustained glycogen release & lipid-sparing matrix for 50km+ rides',
    activityId: 'endurance_cycling',
    suitableTimings: ['30m', '60m', '120m', '180m'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    prepTime: '10 mins',
    cookTime: '15 mins',
    digestionSpeed: 'Sustained Time-Release (60 mins)',
    macros: {
      calories: 480,
      protein: 15,
      carbs: 76,
      fat: 14,
      fiber: 8.5
    },
    ingredients: [
      { id: 'sweet_potato', name: 'Roasted Sweet Potato', amount: '150g', inPantry: true },
      { id: 'oats', name: 'Rolled Oats', amount: '50g', inPantry: true },
      { id: 'almonds', name: 'Crushed Almonds', amount: '25g', inPantry: true },
      { id: 'honey', name: 'Raw Honey', amount: '1.5 tbsp', inPantry: true },
      { id: 'chia_seeds', name: 'Chia Seeds', amount: '15g', inPantry: false, price: 65, store: 'Zepto', eta: '7 mins' }
    ],
    flavorDb: {
      harmonyScore: 93,
      pairingType: 'Caramelized Maltol Harmony',
      primaryMolecules: ['Maltol', 'Benzaldehyde', 'Furaneol', 'Vanillin'],
      pairingExplanation: 'Slow-roasted sweet potato creates natural maltols that link with almond benzaldehyde, producing a rich nutty warmth that remains palatable for hours.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Chia Seeds',
        pantrySubstitute: 'Extra Almonds + pinch of Oats',
        sharedVolatiles: ['Lipid esters', 'Almond volatiles'],
        gastronomyScore: 91,
        nutritionalMatch: 'Maintains healthy fat profile and slow calorie burn.'
      }
    ],
    whyWeRecommend: {
      activityHeadline: 'Maximized Exogenous Carb Oxidation & Glycogen Sparing',
      metabolicRationale: 'Long-duration endurance cycling burns up to 60-90g of carbs per hour. Research demonstrates that pairing complex amylose (sweet potato and oats) with simple fructose (honey) utilizes multiple intestinal transporters simultaneously (SGLT1 and GLUT5), reaching oxidation rates of 1.2–1.5g/min without gastric stalling or nausea.',
      digestionVelocity: 'Sustained Time-Release (60 mins) — Continuous Energy Flow',
      glycemicProfile: 'Low-to-Medium GI (50) — Stable glucose curve prevents premature liver glycogen exhaustion.',
      ingredientScience: [
        { ingredient: 'Roasted Sweet Potato', role: 'Provides complex carbohydrates with high levels of beta-carotene, reducing exercise-induced lipid peroxidation during hours of oxidative stress.' },
        { ingredient: 'Crushed Almonds', role: 'High mono-unsaturated fatty acids and vitamin E (alpha-tocopherol) protect cellular membranes from aerobic radical damage.' },
        { ingredient: 'Rolled Oats', role: 'Supplies slow-digesting starches and soluble beta-glucan fibers that meter glucose entry into the bloodstream.' },
        { ingredient: 'Raw Honey', role: 'Provides fast-access liver glycogen replenishment, critical for maintaining normal blood sugar during extended pedaling.' }
      ],
      flavorScience: 'Maltol in roasted tuber marries benzaldehyde in almonds for a non-cloying, comforting endurance meal.'
    }
  },
  {
    id: 'rec_07',
    recipeDbId: 'RDB-88124',
    title: 'Neuro-Enhancing Choline Scramble with Avocado',
    subtitle: 'Acetylcholine synthesis, tyrosine dopamine support & zero brain fog',
    activityId: 'deep_work_focus',
    suitableTimings: ['30m', '60m', 'sustained'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80',
    prepTime: '7 mins',
    cookTime: '5 mins',
    digestionSpeed: 'Balanced Plateau (40 mins)',
    macros: {
      calories: 420,
      protein: 26,
      carbs: 22,
      fat: 25,
      fiber: 6.8
    },
    ingredients: [
      { id: 'eggs', name: 'Pasture Eggs (Rich in Choline)', amount: '3 eggs', inPantry: true },
      { id: 'spinach', name: 'Baby Spinach', amount: '50g', inPantry: true },
      { id: 'sourdough', name: 'Sourdough Toast (Low GI)', amount: '1 slice', inPantry: true },
      { id: 'avocado', name: 'Fresh Avocado', amount: '1/2 medium', inPantry: false, price: 99, store: 'Zepto', eta: '8 mins' },
      { id: 'dark_chocolate', name: 'Dark Chocolate Square', amount: '15g', inPantry: true }
    ],
    flavorDb: {
      harmonyScore: 92,
      pairingType: 'Savory Umami-Lipid Matrix',
      primaryMolecules: ['Glutamate', 'Methional', 'Oleic Acid', 'Theobromine'],
      pairingExplanation: 'Egg yolk lipids emulsify lutein and zeaxanthin in spinach, while dark chocolate polyphenol notes sharpen cognitive alertness.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Fresh Avocado',
        pantrySubstitute: 'Paneer cubes tossed in extra virgin olive oil',
        sharedVolatiles: ['Lactic Lipids', 'Oleic Acid'],
        gastronomyScore: 90,
        nutritionalMatch: 'Equally stable lipid profile for sustained cognitive energy.'
      }
    ],
    whyWeRecommend: {
      activityHeadline: 'Neurotransmitter Precursor Loading for High-Cognitive Deep Work',
      metabolicRationale: 'Intensive mental concentration requires continuous acetylcholine and dopamine turnover in the prefrontal cortex without postprandial glucose crashes. High choline from egg yolks directly fuels acetylcholine synthesis (essential for memory and focus), while low-GI sourdough prevents the reactive somnolence of high-carb meals.',
      digestionVelocity: 'Balanced Plateau (40 mins) — Stable Blood Sugar',
      glycemicProfile: 'Low GI (38) — Flat insulin curve ensures zero 2 PM cognitive brain fog.',
      ingredientScience: [
        { ingredient: 'Egg Yolks', role: 'World richest source of phosphatidylcholine (300mg per egg), the essential chemical building block for acetylcholine neurotransmission.' },
        { ingredient: 'Baby Spinach', role: 'Provides folate and magnesium, co-factors in the methylation pathway that clears homocysteine and enhances synaptic plasticity.' },
        { ingredient: 'Fresh Avocado / Healthy Fats', role: 'Oleic acid and monounsaturated lipids optimize blood-brain barrier nutrient transport.' },
        { ingredient: 'Dark Chocolate (85%)', role: 'Flavanols increase cerebral blood flow (CBF) in the dentate gyrus of the hippocampus within 45 minutes.' }
      ],
      flavorScience: 'Lecithin from eggs acts as a natural culinary binder, melding grassy spinach volatiles with sourdough tang.'
    }
  },
  {
    id: 'rec_08',
    recipeDbId: 'RDB-99412',
    title: 'Nocturnal Tryptophan & Golden Casein Pudding',
    subtitle: 'Serotonin to melatonin conversion, magnesium GABA support & slow overnight repair',
    activityId: 'sleep_restoration',
    suitableTimings: ['30m', '60m', '90m'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    prepTime: '6 mins',
    cookTime: '0 mins',
    digestionSpeed: 'Slow Overnight Time-Release (6-8 hours)',
    macros: {
      calories: 340,
      protein: 28,
      carbs: 32,
      fat: 10,
      fiber: 4.5
    },
    ingredients: [
      { id: 'paneer', name: 'Fresh Paneer / Cottage Cheese', amount: '120g', inPantry: true },
      { id: 'honey', name: 'Wild Honey', amount: '1 tsp', inPantry: true },
      { id: 'cinnamon', name: 'Ceylon Cinnamon', amount: '1/2 tsp', inPantry: true },
      { id: 'almonds', name: 'Crushed Almonds (Magnesium)', amount: '20g', inPantry: true },
      { id: 'turmeric', name: 'Turmeric Golden Spices', amount: '1/4 tsp', inPantry: true },
      { id: 'greek_yogurt', name: 'Greek Yogurt', amount: '80g', inPantry: false, price: 55, store: 'Blinkit', eta: '9 mins' }
    ],
    flavorDb: {
      harmonyScore: 98,
      pairingType: 'Warm Spiced Terpene Resonance',
      primaryMolecules: ['Curcumin', 'Cinnamaldehyde', 'Benzaldehyde', 'Lactic Acid'],
      pairingExplanation: 'Warm turmeric and cinnamon evoke autonomic parasympathetic relaxation, while sweet almond notes harmonize with delicate dairy esters.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Greek Yogurt',
        pantrySubstitute: 'Warm Milk or extra blended Paneer with splash of water',
        sharedVolatiles: ['Casein micelle', 'Lactic volatile'],
        gastronomyScore: 95,
        nutritionalMatch: 'Pure slow-release casein protein ideal for overnight repair.'
      }
    ],
    whyWeRecommend: {
      activityHeadline: 'Neuro-Endocrine Sleep Optimization & Sustained Nocturnal Protein Balance',
      metabolicRationale: 'Deep Stage-3 slow-wave sleep is the prime physiological window for growth hormone release and muscle tissue remodeling. Ingesting slow-digesting micellar casein (paneer/cottage cheese) supplies a continuous trickle of amino acids across 7 hours, preventing negative net protein balance while dietary tryptophan crosses the blood-brain barrier to synthesize melatonin.',
      digestionVelocity: 'Slow Overnight Time-Release (6-8 hours) — Sustained Plasma Amino Acids',
      glycemicProfile: 'Low GI (32) — A small honey micro-dose triggers an insulin nudge that preferentially shuttles competing BCAAs into muscle, leaving tryptophan free to cross into the brain.',
      ingredientScience: [
        { ingredient: 'Fresh Paneer / Casein', role: 'Forms a gentle gastric gel, steadily releasing leucine and glutamine across the entire 8-hour sleep architecture.' },
        { ingredient: 'Almonds', role: 'Rich source of dietary magnesium (80mg), which acts as a natural NMDA receptor blocker and GABA agonist, calming the nervous system.' },
        { ingredient: 'Wild Honey Micro-Dose', role: 'Prevents nocturnal cortisol spikes caused by depleted liver glycogen while facilitating tryptophan brain transit.' },
        { ingredient: 'Ceylon Cinnamon & Turmeric', role: 'Blunts nocturnal inflammatory cytokine cascades, promoting uninterrupted restorative sleep cycles.' }
      ],
      flavorScience: 'Warm terpenes like cinnamaldehyde stimulate olfactory bulb projections to the amygdala, decreasing sympathetic tone.'
    }
  },
  {
    id: 'rec_09',
    recipeDbId: 'RDB-72011',
    title: 'Anti-Inflammatory Turmeric Rice & Poached Greens',
    subtitle: 'Gut-soothing, zero-bloat flexibility fuel for inversions & mobility flows',
    activityId: 'yoga_mobility',
    suitableTimings: ['30m', '60m', '90m'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    prepTime: '8 mins',
    cookTime: '10 mins',
    digestionSpeed: 'Light & Clean (30 mins)',
    macros: {
      calories: 360,
      protein: 18,
      carbs: 56,
      fat: 7,
      fiber: 5.2
    },
    ingredients: [
      { id: 'brown_rice', name: 'Steamed Basmati Rice', amount: '120g', inPantry: true },
      { id: 'spinach', name: 'Steamed Baby Spinach', amount: '60g', inPantry: true },
      { id: 'paneer', name: 'Light Paneer Cubes', amount: '80g', inPantry: true },
      { id: 'turmeric', name: 'Turmeric & Black Pepper', amount: '1/2 tsp', inPantry: true },
      { id: 'coconut_water', name: 'Chilled Coconut Water', amount: '200ml', inPantry: false, price: 45, store: 'Zepto', eta: '7 mins' }
    ],
    flavorDb: {
      harmonyScore: 94,
      pairingType: 'Heritage Botanical Synergy',
      primaryMolecules: ['Curcumin', 'Piperine', 'Chlorophyll', 'Lauric Acid'],
      pairingExplanation: 'Basmati rice starches absorb turmeric terpenes and peppery piperine, while light dairy cubes soften digestive heat.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Chilled Coconut Water',
        pantrySubstitute: 'Filtered water with pinch of salt & lemon drop',
        sharedVolatiles: ['Citric Acid', 'Electrolytes'],
        gastronomyScore: 89,
        nutritionalMatch: 'Light clean hydration without high sugar load.'
      }
    ],
    whyWeRecommend: {
      activityHeadline: 'Low-Intra-Abdominal Pressure & Fascial Elasticity Support',
      metabolicRationale: 'Yoga flows and deep thoracic twists compress the abdominal cavity and diaphragm. Heavy, high-FODMAP, or high-fat meals induce gastric reflux and discomfort during downward dog or headstands. This light, soothing recipe combines non-bloating steamed basmati rice with anti-inflammatory turmeric to promote joint lubrication and fascia suppleness.',
      digestionVelocity: 'Light & Clean (30 mins) — Zero Gastric Heaviness',
      glycemicProfile: 'Medium-Low GI (48) — Light steady energy without heavy metabolic thermogenesis.',
      ingredientScience: [
        { ingredient: 'Steamed Basmati Rice', role: 'Naturally low-FODMAP carbohydrate that digests cleanly without producing gas or bloating during deep core compressions.' },
        { ingredient: 'Turmeric + Black Pepper', role: 'Inhibits COX-2 and 5-LOX inflammatory pathways, reducing joint stiffness and supporting ligamentous elasticity.' },
        { ingredient: 'Light Paneer', role: 'Supplies essential amino acids (proline and glycine) required for endogenous collagen turnover.' },
        { ingredient: 'Steamed Spinach', role: 'Packed with bioavailable potassium and magnesium to support muscular relaxation during deep mobility holds.' }
      ],
      flavorScience: 'Subtle aromatic basmati 2-acetyl-1-pyrroline volatiles soothe sensory receptors and lower digestive tension.'
    }
  },
  {
    id: 'rec_10',
    recipeDbId: 'RDB-84190',
    title: 'Match-Day High Agility Glycogen Stacker',
    subtitle: 'Dual-glycogen loading, neuromuscular tyrosine & sodium pre-hydration',
    activityId: 'match_day_sports',
    suitableTimings: ['30m', '60m', '90m', '120m'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80',
    prepTime: '9 mins',
    cookTime: '5 mins',
    digestionSpeed: 'Medium Sustained (50 mins)',
    macros: {
      calories: 490,
      protein: 26,
      carbs: 78,
      fat: 9,
      fiber: 6.4
    },
    ingredients: [
      { id: 'sourdough', name: 'Sourdough Bread', amount: '2 slices', inPantry: true },
      { id: 'banana', name: 'Sliced Banana', amount: '1 large', inPantry: true },
      { id: 'honey', name: 'Wild Honey', amount: '1.5 tbsp', inPantry: true },
      { id: 'peanut_butter', name: 'Natural Peanut Butter', amount: '1.5 tbsp', inPantry: true },
      { id: 'eggs', name: 'Soft Boiled Egg (Side)', amount: '1 egg', inPantry: true },
      { id: 'coconut_water', name: 'Coconut Water (Sodium Infused)', amount: '250ml', inPantry: false, price: 45, store: 'Blinkit', eta: '8 mins' }
    ],
    flavorDb: {
      harmonyScore: 96,
      pairingType: 'Classic High-Glycogen Triad',
      primaryMolecules: ['Isoamyl Acetate', 'Pyrazines', 'Vanillin', 'Lactic Acid'],
      pairingExplanation: 'Peanut butter roasted pyrazines bind with banana esters and sweet honey, providing high calorie density in a compact, non-bulky format.'
    },
    smartSubstitutions: [
      {
        missingItem: 'Coconut Water',
        pantrySubstitute: 'Water with pinch of sea salt & spoon of honey',
        sharedVolatiles: ['Electrolyte Balance'],
        gastronomyScore: 92,
        nutritionalMatch: 'Equally effective sodium/potassium pre-hydration for 90 minutes of running.'
      }
    ],
    whyWeRecommend: {
      activityHeadline: 'Neuromuscular Agility, Intermittent Sprint Capacity & Cramp Resistance',
      metabolicRationale: 'Field sports (football, tennis, basketball) demand repeated 5-10 second sprints interspersed with active recovery across 60-90 minutes. This induces severe glycogen depletion in type IIx fast-twitch muscle fibers. Combining high simple carbs with sourdough complex starches and sodium ensures full plasma volume and instantaneous sprint power.',
      digestionVelocity: 'Medium Sustained (50 mins) — Multi-Stage Digestion',
      glycemicProfile: 'Dual GI (70 immediate + 52 sustained) — Bridges the initial kickoff sprint with second-half stamina.',
      ingredientScience: [
        { ingredient: 'Sourdough Bread + Honey', role: 'Multi-stage carbohydrate blend supplying immediate glucose for quick reactions and complex starches for 90-minute stamina.' },
        { ingredient: 'Banana + Peanut Butter', role: 'Potassium and magnesium protect against exercise-induced heat cramps under direct sun.' },
        { ingredient: 'Egg (Tyrosine Source)', role: 'Provides L-tyrosine, the rate-limiting amino acid precursor for norepinephrine and dopamine, boosting reaction time.' },
        { ingredient: 'Coconut Water', role: 'Restores electrolyte balance and pre-loads intravascular fluid volume before sweat rates spike.' }
      ],
      flavorScience: 'The pairing of roasted pyrazines with sweet fruity esters is recognized in RecipeDB as the ultimate comfort fuel for high-arousal athletic states.'
    }
  }
];

export const FOODOSCOPE_API_SPECS = [
  {
    service: 'RecipeDB Region & Diet',
    endpoint: 'GET https://api.foodoscope.com/recipe2-api/recipe/region-diet/region-diet',
    purpose: 'Queries validated global recipes filtered by cultural region and dietary constraints with full macro & micro profiles.',
    latency: '42ms',
    samplePayload: 'Headers: { "Authorization": "Bearer <YOUR_API_KEY>" }\nParams: { region: "Indian", diet: "vegetarian", limit: 6 }'
  },
  {
    service: 'RecipeDB Information & Inventory',
    endpoint: 'GET https://api.foodoscope.com/recipe2-api/recipe/recipesinfo',
    purpose: 'Fetches paginated structured recipes with ingredient proportions, cooking processes, and metabolic timing.',
    latency: '35ms',
    samplePayload: 'Headers: { "Authorization": "Bearer <YOUR_API_KEY>" }\nParams: { page: 1, limit: 10 }'
  },
  {
    service: 'RecipeDB Title & Ingredient Search',
    endpoint: 'GET https://api.foodoscope.com/recipe2-api/recipe-bytitle',
    purpose: 'Performs title and component-level queries across 118,000+ global recipes.',
    latency: '54ms',
    samplePayload: 'Headers: { "Authorization": "Bearer <YOUR_API_KEY>" }\nParams: { title: "oat bowl" }'
  },
  {
    service: 'FlavorDB Entities & Pairing',
    endpoint: 'GET https://api.foodoscope.com/entities/by-entity-alias-readable',
    purpose: 'Maps food ingredients to chemical volatile fingerprints (e.g. Eugenol, Limonene, Vanillin) for objective flavor harmony.',
    latency: '68ms',
    samplePayload: 'Headers: { "Authorization": "Bearer <YOUR_API_KEY>" }\nParams: { entity: "cinnamon", pairing_model: "shared_volatile_density" }'
  }
];
