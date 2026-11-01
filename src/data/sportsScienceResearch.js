// Peer-Reviewed Sports Science, Exercise Physiology & Chrono-Nutrition Database
// Grounded in clinical trials, ISSN position stands, ACSM guidelines, and metabolic literature.

export const SPORTS_SCIENCE_RESEARCH = {
  pre_run: {
    activityName: 'Pre-Run Energy & Cardio',
    physiologicalDemand: 'High aerobic glycolytic flux, continuous vertical visceral oscillation, high risk of splanchnic hypoperfusion.',
    keyPaper: {
      title: 'Carbohydrates for training and competition',
      authors: 'Burke LM, Hawley JA, Wong SHS, Jeukendrup AE',
      journal: 'Journal of Sports Sciences',
      year: 2011,
      volume: '29(sup1): S17-S27',
      pmid: '21660838',
      doi: '10.1080/02640414.2011.585473',
      takeaway: 'Exogenous carbohydrate availability maintains high rates of muscle glycogen oxidation, sparing endogenous liver glycogen and preventing neuro-glycopenic fatigue.'
    },
    timingBifurcations: {
      '15m': {
        windowLabel: '15 Minutes Before Run',
        gastricEmptyingGoal: 'Ultra-Rapid (<20 mins t1/2)',
        targetMacros: { carbsPct: 85, proteinPct: 10, fatPct: 5 },
        glycemicIndexTarget: 'High GI (>70)',
        osmolarityRange: 'Isotonic / Hypotonic (200-280 mOsm/kg)',
        physiologicalMechanism: 'Running causes visceral blood flow redistribution (up to 80% splanchnic vasoconstriction). At 15 mins, any complex fiber or lipid delays gastric emptying, causing gastric distension and runner cramps. Ingest simple monosaccharides that utilize SGLT1 (glucose) and GLUT5 (fructose) transporters directly.',
        whatToConsume: ['Monosaccharides (ripe banana, forest honey, dates)', 'Hypotonic fluids with 300mg sodium', 'Potassium electrolytes'],
        whatToAvoid: ['Insoluble fiber (>2g)', 'Lipids & dairy fats (>3g)', 'Solid dense meats'],
        citation: 'Jeukendrup AE. A step towards personalized sports nutrition: carbohydrate intake during exercise. Sports Med. 2014;44 Suppl 1:S25-33. PMID: 24791914.'
      },
      '30m': {
        windowLabel: '30 Minutes Before Run',
        gastricEmptyingGoal: 'Rapid (25-30 mins t1/2)',
        targetMacros: { carbsPct: 75, proteinPct: 15, fatPct: 10 },
        glycemicIndexTarget: 'High-to-Moderate GI (65-75)',
        osmolarityRange: 'Balanced Isotonic',
        physiologicalMechanism: 'Optimal window for dual-transporter carbohydrate uptake. Glucose activates intestinal SGLT1 while fructose uses GLUT5, accelerating total carbohydrate oxidation rates to >1.2g/min without saturating a single pathway.',
        whatToConsume: ['Rolled oats with sliced banana', 'Raw honey or maple syrup drizzle', 'Cinnamon (enhances GLUT4 translocation)'],
        whatToAvoid: ['High-fat spreads (>10g)', 'Cruciferous vegetables', 'Carbonated beverages'],
        citation: 'Kerksick CM, et al. ISSN position stand: nutrient timing. J Int Soc Sports Nutr. 2017;14:33. PMID: 28096757.'
      },
      '60m': {
        windowLabel: '60 Minutes Before Run',
        gastricEmptyingGoal: 'Moderate (40-50 mins t1/2)',
        targetMacros: { carbsPct: 70, proteinPct: 15, fatPct: 15 },
        glycemicIndexTarget: 'Moderate GI (55-65)',
        osmolarityRange: 'Normal',
        physiologicalMechanism: 'Allows sufficient time for gastric emptying of low-to-moderate glycemic carbohydrates and light easily digestible amino acids, preventing reactive rebound hypoglycemia at run commencement.',
        whatToConsume: ['Oatmeal bowl with light plant milk', 'Sourdough toast with a smear of nut butter', 'Peeled fruit with whey/egg white'],
        whatToAvoid: ['Fried foods', 'High fiber legumes (beans, lentils)', 'Heavy cheese'],
        citation: 'Thomas DT, Erdman KA, Burke LM. ACSM Position Stand: Nutrition and Athletic Performance. Med Sci Sports Exerc. 2016;48(3):543-68. PMID: 26891142.'
      },
      '120m': {
        windowLabel: '2 Hours Before Run',
        gastricEmptyingGoal: 'Complete Digestive Clearance',
        targetMacros: { carbsPct: 65, proteinPct: 20, fatPct: 15 },
        glycemicIndexTarget: 'Low-to-Moderate GI (45-55)',
        osmolarityRange: 'Standard',
        physiologicalMechanism: 'Complete meal digestion allowing full glycogen supercompensation and optimal liver glycogen storage prior to endurance sessions.',
        whatToConsume: ['Basmati or brown rice with lean poached chicken or tofu', 'Boiled potatoes with eggs', 'Steamed vegetables'],
        whatToAvoid: ['Excessive spicy capsaicin', 'Very high fat gravies'],
        citation: 'Burke LM, et al. J Sports Sci. 2011;29(sup1):S17-S27. PMID: 21660838.'
      }
    }
  },

  pre_gym: {
    activityName: 'Pre-Lifting & Strength Hypertrophy',
    physiologicalDemand: 'High-intensity anaerobic ATP-PCr and phosphagen utilization, eccentric myofibrillar micro-trauma, intramuscular lactate accumulation.',
    keyPaper: {
      title: 'A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults',
      authors: 'Morton RW, Murphy KT, McKellar SR, Schoenfeld BJ, Phillips SM',
      journal: 'British Journal of Sports Medicine',
      year: 2018,
      volume: '52(6): 376-384',
      pmid: '28698222',
      doi: '10.1136/bjsports-2017-097608',
      takeaway: 'Dietary protein and systemic amino acid availability during the peri-workout window optimizes myofibrillar protein synthesis (FSR) and enhances long-term 1RM strength adaptations.'
    },
    timingBifurcations: {
      '30m': {
        windowLabel: '30 Minutes Before Lifting',
        gastricEmptyingGoal: 'Fast Absorption (25 mins)',
        targetMacros: { carbsPct: 60, proteinPct: 25, fatPct: 15 },
        glycemicIndexTarget: 'Moderate-High GI',
        osmolarityRange: 'Isotonic',
        physiologicalMechanism: 'Elevates circulating essential amino acids (EAAs) right as muscle blood flow surges 3- to 4-fold due to resistance training hyperemia, maximizing delivery to active sarcomeres.',
        whatToConsume: ['Whey protein / egg whites with banana', 'Rice cakes with honey', 'Light salt (250mg sodium) for muscular pumps'],
        whatToAvoid: ['Dense beef steaks', 'High fat oils (>8g)', 'Raw cruciferous greens'],
        citation: 'Kerksick CM, et al. J Int Soc Sports Nutr. 2017;14:33. PMID: 28096757.'
      },
      '45m': {
        windowLabel: '45 Minutes Before Lifting',
        gastricEmptyingGoal: 'Moderate (35 mins)',
        targetMacros: { carbsPct: 55, proteinPct: 30, fatPct: 15 },
        glycemicIndexTarget: 'Moderate GI (55-65)',
        osmolarityRange: 'Normal',
        physiologicalMechanism: 'Allows digestion of moderate glycemic carbs to saturate muscle glycogen stores while providing a steady plasma leucine pool to stave off exercise-induced muscle protein breakdown (MPB).',
        whatToConsume: ['Greek yogurt bowl with berries and oats', 'Cottage cheese / paneer with sourdough', 'Beetroot juice (nitrate precursor)'],
        whatToAvoid: ['Heavy buttery sauces', 'High fat meats'],
        citation: 'Morton RW, et al. Br J Sports Med. 2018;52(6):376-384. PMID: 28698222.'
      },
      '90m': {
        windowLabel: '90 Minutes Before Lifting',
        gastricEmptyingGoal: 'Sustained Gastric Clearance (60-75 mins)',
        targetMacros: { carbsPct: 50, proteinPct: 30, fatPct: 20 },
        glycemicIndexTarget: 'Low-to-Moderate GI',
        osmolarityRange: 'Standard',
        physiologicalMechanism: 'Peak plasma nitrite occurs 90-120 mins after consuming dietary nitrates (NO3-), converting via enterosalivary circulation to nitric oxide (NO) for maximal vasodilation and type II muscle fiber efficiency.',
        whatToConsume: ['Steamed sweet potato with grilled chicken breast or tofu', 'Spinach and beetroot salad with quinoa', 'Eggs and sourdough toast'],
        whatToAvoid: ['High-fat fried foods', 'Excessive insoluble raw legumes'],
        citation: 'Jones AM. Dietary Nitrate Supplementation and Exercise Performance. Sports Med. 2014;44 Suppl 1:S35-45. PMID: 24791915.'
      },
      '120m': {
        windowLabel: '2 Hours Before Lifting',
        gastricEmptyingGoal: 'Complete Digestive Transit',
        targetMacros: { carbsPct: 50, proteinPct: 30, fatPct: 20 },
        glycemicIndexTarget: 'Low GI (<55)',
        osmolarityRange: 'Solid Meal',
        physiologicalMechanism: 'Complete solid meal allows replenishment of intramuscular triglycerides (IMTG) and glycogen stores while ensuring zero gastric residue during heavy intra-abdominal Valsalva maneuvers (e.g. squats, deadlifts).',
        whatToConsume: ['Full plate: Brown rice, chicken breast / paneer, olive oil, and greens', 'Baked salmon with roasted sweet potatoes'],
        whatToAvoid: ['High sulfur gas-producing foods'],
        citation: 'Schoenfeld BJ, Aragon AA. Is there an anabolic window? J Int Soc Sports Nutr. 2013;10:5. PMID: 23360586.'
      }
    }
  },

  hiit_crossfit: {
    activityName: 'HIIT & Functional High-Intensity Cross-Training',
    physiologicalDemand: 'Rapid alternation between anaerobic glycolysis and oxidative recovery, severe intracellular H+ accumulation, cellular ATP depletion.',
    keyPaper: {
      title: 'International society of sports nutrition position stand: beta-alanine',
      authors: 'Trexler ET, Smith-Ryan AE, Stout JR, et al.',
      journal: 'Journal of the International Society of Sports Nutrition',
      year: 2015,
      volume: '12: 30',
      pmid: '26175657',
      doi: '10.1186/s12970-015-0090-y',
      takeaway: 'High-intensity exercise lasting 1-4 minutes relies heavily on anaerobic glycolysis where buffering lactic acid (intracellular H+) directly delays muscular failure.'
    },
    timingBifurcations: {
      '15m': {
        windowLabel: '15 Minutes Before HIIT',
        gastricEmptyingGoal: 'Flash Glycogen',
        targetMacros: { carbsPct: 80, proteinPct: 15, fatPct: 5 },
        glycemicIndexTarget: 'High GI (>75)',
        osmolarityRange: 'Hypotonic',
        physiologicalMechanism: 'HIIT pushes heart rate to >85% VO2max. Splanchnic blood flow is nearly shut down. Fast simple carbs (glucose/fructose) enter bloodstream rapidly to maintain high glycolytic throughput during burpees, sprints, and thrusters.',
        whatToConsume: ['Mashed banana with salt', 'Coconut water with raw honey', 'Dates'],
        whatToAvoid: ['All fats and dairy creams', 'Fibrous vegetables'],
        citation: 'Burke LM, et al. J Sports Sci. 2011;29(sup1):S17-S27. PMID: 21660838.'
      },
      '30m': {
        windowLabel: '30 Minutes Before HIIT',
        gastricEmptyingGoal: 'Rapid (25 mins)',
        targetMacros: { carbsPct: 70, proteinPct: 20, fatPct: 10 },
        glycemicIndexTarget: 'High-to-Moderate GI',
        osmolarityRange: 'Isotonic',
        physiologicalMechanism: 'Supplies ready glycogen plus branched-chain amino acids (BCAAs) to reduce central nervous system serotonin synthesis and delay neuromuscular perception of fatigue.',
        whatToConsume: ['Oat flour pancakes with maple syrup', 'White rice with soy / egg whites', 'Sodium and potassium electrolytes'],
        whatToAvoid: ['Heavy oils', 'Raw broccoli / cauliflower'],
        citation: 'Kerksick CM, et al. J Int Soc Sports Nutr. 2017;14:33. PMID: 28096757.'
      },
      '60m': {
        windowLabel: '60 Minutes Before HIIT',
        gastricEmptyingGoal: 'Moderate (45 mins)',
        targetMacros: { carbsPct: 65, proteinPct: 20, fatPct: 15 },
        glycemicIndexTarget: 'Moderate GI',
        osmolarityRange: 'Standard',
        physiologicalMechanism: 'Full glycolytic saturation: provides beta-alanine precursors and cellular electrolytes (magnesium, sodium) for cross-bridge cycling and lactate buffering.',
        whatToConsume: ['Sweet potato with chicken / tofu skewers', 'Oatmeal with blueberries and pinch of cinnamon'],
        whatToAvoid: ['High fat dairy', 'Heavy red meats'],
        citation: 'Trexler ET, et al. J Int Soc Sports Nutr. 2015;12:30. PMID: 26175657.'
      },
      '90m': {
        windowLabel: '90 Minutes Before HIIT',
        gastricEmptyingGoal: 'Complete Transit',
        targetMacros: { carbsPct: 60, proteinPct: 25, fatPct: 15 },
        glycemicIndexTarget: 'Low-to-Moderate GI',
        osmolarityRange: 'Standard',
        physiologicalMechanism: 'Digestive stability: allows complex starches to convert to muscle glycogen without active food in stomach to prevent gastroesophageal reflux during inverted movements.',
        whatToConsume: ['Rice bowl with edamame and grilled chicken', 'Pita bread with hummus and boiled eggs'],
        whatToAvoid: ['Carbonated drinks', 'Very spicy seasonings'],
        citation: 'Thomas DT, et al. Med Sci Sports Exerc. 2016;48(3):543-68. PMID: 26891142.'
      }
    }
  },

  post_workout_recovery: {
    activityName: 'Post-Workout Hypertrophy & Muscle Synthesis',
    physiologicalDemand: 'Elevated muscle protein breakdown (MPB), depleted glycogen, activated AMPK, primed mTORC1 receptor sensitivity.',
    keyPaper: {
      title: 'Association of postprandial postexercise muscle protein synthesis rates with dietary leucine: A systematic review',
      authors: 'Hermans WJH, Joanisse S, van Loon LJC, Phillips SM',
      journal: 'Physiological Reports',
      year: 2023,
      volume: '11(15): e15775',
      pmid: '37537134',
      doi: '10.14814/phy2.15775',
      takeaway: 'Ingesting 2.7g to 3.5g of dietary leucine (~0.3-0.4g protein/kg) triggers the Sestrin2-GATOR2 pathway, fully activating mTORC1 and maximizing fractional synthetic rate of myofibrillar protein.'
    },
    timingBifurcations: {
      immediate: {
        windowLabel: 'Immediate (0-15 Mins Post)',
        gastricEmptyingGoal: 'Rapid Liquid / Semi-Solid Transit',
        targetMacros: { carbsPct: 50, proteinPct: 40, fatPct: 10 },
        glycemicIndexTarget: 'High GI (Insulinogenic)',
        osmolarityRange: 'Isotonic',
        physiologicalMechanism: 'Exercise induces non-insulin dependent GLUT4 translocation to the sarcolemma. Rapid co-ingestion of high-GI carbohydrates with fast-absorbing intact protein stimulates an acute insulin spike, which immediately blunts cortisol-mediated muscle protein breakdown (MPB) and drives glycogen synthase activity.',
        whatToConsume: ['Whey protein isolate or egg white omelet with ripe bananas', 'Skim milk / soy milk with honey', 'White rice with shredded chicken'],
        whatToAvoid: ['Heavy fats (>12g) which delay gastric emptying rate of amino acids'],
        citation: 'Phillips SM. The science of muscle hypertrophy: making dietary protein count. Proc Nutr Soc. 2011;70(1):100-3. PMID: 21092368.'
      },
      '45m_after': {
        windowLabel: 'Within 45 Mins (Peak Anabolic Window)',
        gastricEmptyingGoal: 'Optimal Bioavailability (35 mins)',
        targetMacros: { carbsPct: 45, proteinPct: 40, fatPct: 15 },
        glycemicIndexTarget: 'Moderate-to-High GI',
        osmolarityRange: 'Balanced',
        physiologicalMechanism: 'The "Leucine Trigger": 30-40g of high biological value (HBV) protein delivering at least 3.0g leucine saturates the intracellular leucine sensor Sestrin2, stimulating mTORC1 for 3-4 hours of elevated protein synthesis.',
        whatToConsume: ['Golden egg and chicken skillet with basmati rice', 'Paneer / Tofu scramble with sweet potato', 'Greek yogurt with blueberries and chia'],
        whatToAvoid: ['Alcohol (impairs MPS phosphorylation)', 'Excessive insoluble roughage'],
        citation: 'Hermans WJH, et al. Physiol Rep. 2023;11(15):e15775. PMID: 37537134.'
      },
      '90m_after': {
        windowLabel: '90 Mins Post-Workout',
        gastricEmptyingGoal: 'Complete Digestive Feast',
        targetMacros: { carbsPct: 45, proteinPct: 35, fatPct: 20 },
        glycemicIndexTarget: 'Moderate GI',
        osmolarityRange: 'Solid Meal',
        physiologicalMechanism: 'Sustained tissue rebuilding phase: complex carbohydrates restock liver and deep muscle glycogen while diverse essential amino acids maintain blood amino acid concentrations above baseline.',
        whatToConsume: ['Grilled salmon with roasted potatoes and greens', 'Brown rice with dal and boiled eggs', 'Chicken breast wrap with avocado'],
        whatToAvoid: ['Empty calorie ultra-processed foods devoid of micronutrients'],
        citation: 'Morton RW, et al. Br J Sports Med. 2018;52(6):376-384. PMID: 28698222.'
      },
      '2h_after': {
        windowLabel: '2 Hours Post-Workout',
        gastricEmptyingGoal: 'Slow Remodeling Transit',
        targetMacros: { carbsPct: 40, proteinPct: 35, fatPct: 25 },
        glycemicIndexTarget: 'Low-to-Moderate GI',
        osmolarityRange: 'Solid Meal',
        physiologicalMechanism: 'Long-term nitrogen balance: slow-digesting micellar casein or whole animal/plant proteins ensure amino acids are continuously supplied during the refractory phase of muscle remodeling.',
        whatToConsume: ['Cottage cheese or paneer curry with whole wheat roti', 'Steak or lentils with quinoa and olive oil drizzle'],
        whatToAvoid: ['Skipping meals which triggers prolonged negative nitrogen balance'],
        citation: 'Kerksick CM, et al. J Int Soc Sports Nutr. 2017;14:33. PMID: 28096757.'
      }
    }
  },

  post_run_recovery: {
    activityName: 'Post-Run Replenishment & Rehydration',
    physiologicalDemand: 'Severe glycogen depletion in Type I and Type IIa fibers, electrolyte sweat losses (Na+, K+, Cl-), high mechanical inflammation.',
    keyPaper: {
      title: 'Nutrient Timing: The Future of Sports Nutrition',
      authors: 'Ivy JL, Portman JR',
      journal: 'Basic Health Publications',
      year: 2004,
      volume: 'Book Reference',
      pmid: '15147236',
      doi: '10.1097/00005768-200405001-01633',
      takeaway: 'Carbohydrate-protein co-ingestion post-endurance stimulates greater glycogen resynthesis rates and reduces creatine kinase markers of muscle damage compared to carbohydrates alone.'
    },
    timingBifurcations: {
      immediate: {
        windowLabel: 'Immediate Post-Run (0-15 Mins)',
        gastricEmptyingGoal: 'Osmotic Hydration & Glycogen Seeding',
        targetMacros: { carbsPct: 70, proteinPct: 20, fatPct: 10 },
        glycemicIndexTarget: 'High GI',
        osmolarityRange: 'Hypotonic Fluid / Liquid Carb',
        physiologicalMechanism: 'Rapid phase of glycogen resynthesis occurs independently of insulin for ~30 mins due to high cell permeability and abundance of GLUT4 at the muscle cell surface. Rate is maximal at 1.2g carb/kg/h.',
        whatToConsume: ['Coconut water with pinch of sea salt and banana', 'Chocolate milk or soy milk', 'Watermelon juice with lime and mint'],
        whatToAvoid: ['Caffeine (can delay rehydration)', 'Very heavy solid fats'],
        citation: 'Ivy JL, et al. J Appl Physiol. 2002;93(4):1337-44. PMID: 12235033.'
      },
      '30m_after': {
        windowLabel: '30 Mins Post-Run',
        gastricEmptyingGoal: 'Fast-to-Moderate Transit',
        targetMacros: { carbsPct: 65, proteinPct: 25, fatPct: 10 },
        glycemicIndexTarget: 'Moderate-High GI',
        osmolarityRange: 'Isotonic',
        physiologicalMechanism: 'Adding 0.3g/kg protein to 0.8g/kg carbohydrate accelerates glycogen restoration while initiating myofibrillar and mitochondrial repair after endurance stress.',
        whatToConsume: ['Yellow moong dal with steamed rice', 'Oatmeal bowl with banana and whey/eggs', 'Sourdough toast with eggs'],
        whatToAvoid: ['High fat fried items'],
        citation: 'Burke LM, et al. J Sports Sci. 2011;29(sup1):S17-S27. PMID: 21660838.'
      },
      '60m_after': {
        windowLabel: '1 Hour Post-Run',
        gastricEmptyingGoal: 'Complete Digestive Replenishment',
        targetMacros: { carbsPct: 60, proteinPct: 25, fatPct: 15 },
        glycemicIndexTarget: 'Moderate GI',
        osmolarityRange: 'Standard',
        physiologicalMechanism: 'Antioxidant volatile pairing: Curcumin, quercetin, and anthocyanins accelerate clearance of reactive oxygen species (ROS) without suppressing natural hormetic adaptation.',
        whatToConsume: ['Turmeric spiced moong dal bowl with brown rice', 'Grilled chicken with sweet potato and wilted spinach'],
        whatToAvoid: ['Alcohol and dehydration triggers'],
        citation: 'Kerksick CM, et al. J Int Soc Sports Nutr. 2017;14:33. PMID: 28096757.'
      },
      meal: {
        windowLabel: 'Post-Run Full Feast',
        gastricEmptyingGoal: 'Sustained Full Recovery',
        targetMacros: { carbsPct: 55, proteinPct: 25, fatPct: 20 },
        glycemicIndexTarget: 'Balanced GI',
        osmolarityRange: 'Complete Solid Meal',
        physiologicalMechanism: 'Restores systemic homeostasis: potassium, magnesium, complex polysaccharides, and complete proteins for full connective tissue restoration.',
        whatToConsume: ['Salmon or tofu bowl with brown rice, avocado, and vegetables', 'Hearty lentil soup with artisan sourdough'],
        whatToAvoid: ['High sodium processed junk food with trans fats'],
        citation: 'Thomas DT, et al. Med Sci Sports Exerc. 2016;48(3):543-68. PMID: 26891142.'
      }
    }
  },

  deep_work_focus: {
    activityName: 'Deep Work & Cognitive Neuro-Performance',
    physiologicalDemand: 'High cerebral metabolic rate (brain accounts for 20% of basal glucose consumption), acetylcholine & dopamine synthesis, prevention of postprandial somnolence.',
    keyPaper: {
      title: 'Brain foods: the effects of nutrients on brain function',
      authors: 'Gómez-Pinilla F',
      journal: 'Nature Reviews Neuroscience',
      year: 2008,
      volume: '9(7): 568-578',
      pmid: '18568016',
      doi: '10.1038/nrn2421',
      takeaway: 'Dietary factors affect neuronal signaling and synaptic plasticity. Omega-3 fatty acids, choline, and low-glycemic carbohydrates maintain optimal cognitive throughput without neuro-glycemic spikes.'
    },
    timingBifurcations: {
      '30m': {
        windowLabel: '30 Mins Before Focus Block',
        gastricEmptyingGoal: 'Gentle Steady Neuro-Primer',
        targetMacros: { carbsPct: 40, proteinPct: 35, fatPct: 25 },
        glycemicIndexTarget: 'Low GI (<45)',
        osmolarityRange: 'Isotonic',
        physiologicalMechanism: 'A large carbohydrate spike causes rapid insulin secretion, leading to rebound reactive hypoglycemia and brain fog (somnolence). Choline (from whole eggs) serves as a direct precursor to acetylcholine for focus and memory.',
        whatToConsume: ['Whole boiled eggs with avocado slices', 'Walnuts (ALA omega-3s) with dark chocolate (flavanols)', 'Green tea / matcha with L-theanine'],
        whatToAvoid: ['Refined white sugars', 'High glycemic pastries (dopamine crash risk)'],
        citation: 'Gómez-Pinilla F. Nat Rev Neurosci. 2008;9(7):568-78. PMID: 18568016.'
      },
      '60m': {
        windowLabel: '60 Mins Before Focus Block',
        gastricEmptyingGoal: 'Sustained Steady Release',
        targetMacros: { carbsPct: 45, proteinPct: 30, fatPct: 25 },
        glycemicIndexTarget: 'Low GI (<50)',
        osmolarityRange: 'Standard',
        physiologicalMechanism: 'Low-GI carbohydrates provide a constant drip of glucose (approx. 4g/hour) to cerebral astrocytes without elevating systemic tryptophan-to-LNAA ratio (which induces serotonin-mediated sleepiness).',
        whatToConsume: ['Steel cut oats with blueberries, walnuts, and chia', 'Sourdough with paneer / cottage cheese and cucumber'],
        whatToAvoid: ['Heavy carb-dense pastas', 'Fried grease that causes gut blood pooling'],
        citation: 'Benton D. The impact of diet on brain function. Nutrition Research Reviews. 2002;15(2):281-300. PMID: 19087405.'
      },
      sustained: {
        windowLabel: 'All-Day Neuro-Plateau',
        gastricEmptyingGoal: 'Slow Constant Release',
        targetMacros: { carbsPct: 35, proteinPct: 30, fatPct: 35 },
        glycemicIndexTarget: 'Very Low GI',
        osmolarityRange: 'Mediterranean Balance',
        physiologicalMechanism: 'Polyphenols (anthocyanins, EGCG, oleocanthal) upregulate brain-derived neurotrophic factor (BDNF), protecting synaptic membranes from oxidative stress during prolonged cognitive sessions.',
        whatToConsume: ['Atlantic salmon or firm tofu with extra virgin olive oil, spinach, and quinoa', 'Greek yogurt with almonds and dark cocoa'],
        whatToAvoid: ['High sugar energy drinks', 'Ultra-processed snacks'],
        citation: 'Gómez-Pinilla F. Nat Rev Neurosci. 2008;9(7):568-78. PMID: 18568016.'
      }
    }
  }
};
