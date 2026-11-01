// Heuristic Ingredient Classifier for YAWYE
// Automatically infers macronutrient/culinary category and contextual food emoji
// for custom inputs or external API search results.

const CATEGORY_RULES = [
  {
    category: 'Staples',
    keywords: [
      'baking powder', 'baking soda', 'cornstarch', 'flour', 'atta', 'maida', 'yeast',
      'sugar', 'brown sugar', 'icing sugar', 'water', 'broth', 'stock', 'cocoa', 'chocolate chips',
      'cornmeal', 'polenta', 'semolina', 'sooji', 'besan', 'jaggery', 'gur', 'maple', 'syrup',
      'breadcrumb', 'breadcrumbs'
    ]
  },
  {
    category: 'Protein',
    keywords: [
      'chicken', 'turkey', 'beef', 'steak', 'pork', 'lamb', 'bacon', 'ham', 'mutton',
      'salmon', 'tuna', 'fish', 'cod', 'tilapia', 'shrimp', 'prawn', 'crab', 'seafood', 'lobster',
      'egg', 'eggs', 'albumin', 'tofu', 'tempeh', 'seitan', 'paneer', 'soya', 'soy',
      'cottage cheese', 'greek yogurt', 'yogurt', 'curd', 'dahi', 'whey', 'casein',
      'protein', 'lentil', 'lentils', 'dal', 'chickpea', 'chickpeas', 'edamame', 'bean', 'beans',
      'rajma', 'chana', 'cheddar', 'mozzarella', 'parmesan', 'feta', 'cheese', 'meat'
    ]
  },
  {
    category: 'Fats',
    keywords: [
      'oil', 'olive oil', 'avocado', 'butter', 'ghee', 'peanut butter', 'almond butter',
      'tahini', 'nut', 'nuts', 'walnut', 'almond', 'cashew', 'pecan', 'pistachio', 'hazelnut',
      'seed', 'seeds', 'chia', 'flax', 'hemp', 'pepitas', 'pumpkin seed', 'sunflower',
      'sesame', 'cream', 'coconut cream', 'coconut oil', 'olives', 'chocolate', 'cocoa', 'tallow', 'lard'
    ]
  },
  {
    category: 'Carbs',
    keywords: [
      'oat', 'oats', 'oatmeal', 'rice', 'quinoa', 'bread', 'sourdough', 'bagel', 'pita',
      'tortilla', 'wrap', 'pasta', 'spaghetti', 'penne', 'noodle', 'noodles', 'potato',
      'potatoes', 'sweet potato', 'yam', 'corn', 'flour', 'couscous', 'barley', 'wheat',
      'muesli', 'granola', 'cereal', 'waffle', 'pancake', 'banana', 'plantain', 'dates',
      'syrup', 'maple', 'cracker', 'maltodextrin', 'glucose', 'glycogen', 'soba'
    ]
  },
  {
    category: 'Flavor',
    keywords: [
      'cinnamon', 'turmeric', 'pepper', 'peppercorn', 'salt', 'cumin', 'coriander',
      'paprika', 'cayenne', 'chili', 'chilli', 'cardamom', 'clove', 'nutmeg', 'saffron',
      'herb', 'basil', 'cilantro', 'parsley', 'mint', 'oregano', 'rosemary', 'thyme',
      'vinegar', 'soy sauce', 'tamari', 'mustard', 'vanilla', 'sauce', 'sriracha',
      'seasoning', 'spice', 'extract', 'dill', 'tarragon', 'bay leaf', 'masala', 'curry'
    ]
  },
  {
    category: 'Produce',
    keywords: [
      'spinach', 'kale', 'lettuce', 'arugula', 'greens', 'broccoli', 'cauliflower',
      'tomato', 'onion', 'garlic', 'ginger', 'beet', 'beetroot', 'carrot', 'carrots',
      'cucumber', 'zucchini', 'mushroom', 'mushrooms', 'celery', 'berry', 'berries',
      'blueberry', 'strawberry', 'raspberry', 'blackberry', 'apple', 'orange', 'lemon',
      'lime', 'mango', 'watermelon', 'melon', 'kiwi', 'pineapple', 'grape', 'grapes',
      'asparagus', 'capsicum', 'pepper', 'eggplant', 'aubergine', 'radish', 'pea', 'peas',
      'cabbage', 'avocado', 'squash', 'pumpkin'
    ]
  }
];

const EMOJI_KEYWORD_MAP = [
  // Fruits & Produce
  { keys: ['banana'], emoji: '🍌' },
  { keys: ['apple'], emoji: '🍎' },
  { keys: ['blueberry', 'blueberries'], emoji: '🫐' },
  { keys: ['strawberry', 'strawberries'], emoji: '🍓' },
  { keys: ['raspberry', 'raspberries', 'blackberry'], emoji: '🍓' },
  { keys: ['lemon', 'citrus'], emoji: '🍋' },
  { keys: ['lime'], emoji: '🍋' },
  { keys: ['orange', 'mandarin', 'tangerine'], emoji: '🍊' },
  { keys: ['watermelon', 'melon'], emoji: '🍉' },
  { keys: ['kiwi'], emoji: '🥝' },
  { keys: ['pineapple'], emoji: '🍍' },
  { keys: ['pomegranate'], emoji: '🍇' },
  { keys: ['grape', 'grapes'], emoji: '🍇' },
  { keys: ['mango'], emoji: '🥭' },
  { keys: ['date', 'dates'], emoji: '🌴' },
  { keys: ['spinach', 'palak'], emoji: '🥬' },
  { keys: ['kale', 'lettuce', 'greens', 'arugula', 'salad'], emoji: '🥗' },
  { keys: ['broccoli', 'cauliflower'], emoji: '🥦' },
  { keys: ['carrot', 'carrots'], emoji: '🥕' },
  { keys: ['tomato', 'tomatoes'], emoji: '🍅' },
  { keys: ['onion', 'shallot'], emoji: '🧅' },
  { keys: ['garlic'], emoji: '🧄' },
  { keys: ['ginger'], emoji: '🫚' },
  { keys: ['beet', 'beetroot'], emoji: '🫚' },
  { keys: ['cucumber'], emoji: '🥒' },
  { keys: ['zucchini'], emoji: '🥒' },
  { keys: ['mushroom', 'mushrooms'], emoji: '🍄' },
  { keys: ['bell pepper', 'capsicum'], emoji: '🫑' },
  { keys: ['corn'], emoji: '🌽' },
  { keys: ['chili', 'chilli', 'jalapeno', 'cayenne', 'paprika'], emoji: '🌶️' },
  { keys: ['herb', 'basil', 'mint', 'cilantro', 'rosemary', 'thyme', 'oregano', 'parsley'], emoji: '🌿' },

  // Proteins
  { keys: ['egg', 'eggs', 'albumin'], emoji: '🥚' },
  { keys: ['chicken'], emoji: '🍗' },
  { keys: ['turkey'], emoji: '🦃' },
  { keys: ['beef', 'steak', 'meat', 'ribeye', 'sirloin', 'veal'], emoji: '🥩' },
  { keys: ['pork', 'bacon', 'ham'], emoji: '🥓' },
  { keys: ['salmon', 'tuna', 'fish', 'cod', 'tilapia'], emoji: '🐟' },
  { keys: ['shrimp', 'prawn', 'prawns', 'lobster', 'crab'], emoji: '🍤' },
  { keys: ['paneer', 'cottage cheese', 'cheese', 'cheddar', 'mozzarella', 'feta', 'parmesan'], emoji: '🧀' },
  { keys: ['tofu'], emoji: '🧊' },
  { keys: ['tempeh'], emoji: '🧱' },
  { keys: ['yogurt', 'curd', 'dahi'], emoji: '🥣' },
  { keys: ['milk'], emoji: '🥛' },
  { keys: ['whey', 'protein', 'shake'], emoji: '🥤' },
  { keys: ['edamame'], emoji: '🫛' },
  { keys: ['chickpea', 'chickpeas', 'hummus', 'bean', 'beans', 'lentil', 'dal'], emoji: '🫘' },

  // Carbs
  { keys: ['oat', 'oats', 'oatmeal', 'porridge'], emoji: '🌾' },
  { keys: ['quinoa', 'couscous', 'barley', 'grain'], emoji: '🌾' },
  { keys: ['rice', 'basmati'], emoji: '🍚' },
  { keys: ['bread', 'sourdough', 'loaf', 'toast'], emoji: '🍞' },
  { keys: ['bagel'], emoji: '🥯' },
  { keys: ['pita', 'flatbread'], emoji: '🫓' },
  { keys: ['tortilla', 'taco', 'wrap'], emoji: '🌮' },
  { keys: ['pasta', 'spaghetti', 'penne', 'macaroni'], emoji: '🍝' },
  { keys: ['noodle', 'noodles', 'ramen', 'soba'], emoji: '🍜' },
  { keys: ['potato', 'potatoes', 'aloo'], emoji: '🥔' },
  { keys: ['sweet potato', 'yam'], emoji: '🍠' },
  { keys: ['honey'], emoji: '🍯' },
  { keys: ['maple', 'syrup'], emoji: '🍁' },

  // Fats
  { keys: ['avocado'], emoji: '🥑' },
  { keys: ['peanut', 'almond', 'cashew', 'walnut', 'pistachio', 'nut', 'nuts'], emoji: '🥜' },
  { keys: ['chia', 'flax', 'hemp', 'seed', 'seeds'], emoji: '🌱' },
  { keys: ['pumpkin seed'], emoji: '🎃' },
  { keys: ['sunflower'], emoji: '🌻' },
  { keys: ['olive', 'olives'], emoji: '🫒' },
  { keys: ['butter', 'ghee'], emoji: '🧈' },
  { keys: ['oil'], emoji: '🫒' },
  { keys: ['coconut'], emoji: '🥥' },
  { keys: ['chocolate', 'cacao', 'cocoa'], emoji: '🍫' },

  // Staples & Baking
  { keys: ['baking powder', 'baking soda'], emoji: '🥄' },
  { keys: ['cornstarch', 'starch'], emoji: '🌽' },
  { keys: ['flour', 'atta', 'maida', 'besan', 'sooji', 'semolina'], emoji: '🌾' },
  { keys: ['sugar', 'cane sugar', 'brown sugar', 'icing sugar'], emoji: '🍬' },
  { keys: ['water', 'drinking water', 'sparkling water'], emoji: '💧' },
  { keys: ['raisin', 'raisins', 'kishmish', 'sultana'], emoji: '🍇' },
  { keys: ['yeast'], emoji: '🍞' },
  { keys: ['broth', 'stock', 'soup'], emoji: '🍲' },

  // Flavor
  { keys: ['cinnamon'], emoji: '🪵' },
  { keys: ['salt'], emoji: '🧂' },
  { keys: ['cumin', 'spice', 'masala', 'coriander'], emoji: '🧂' },
  { keys: ['vanilla'], emoji: '🧁' },
  { keys: ['vinegar', 'sauce', 'soy sauce'], emoji: '🥢' }
];

const CATEGORY_DEFAULT_EMOJIS = {
  Staples: '🌾',
  Protein: '🍗',
  Carbs: '🌾',
  Fats: '🥑',
  Produce: '🥬',
  Flavor: '🧂'
};

/**
 * Classifies an ingredient name into category, emoji, slug ID and clean name
 * @param {string} rawName - Raw ingredient name
 * @returns {{ id: string, name: string, category: string, icon: string, inStock: boolean, defaultPrice: number, store: string }}
 */
export function classifyIngredient(rawName) {
  if (!rawName || typeof rawName !== 'string') {
    return {
      id: 'custom_item',
      name: 'Custom Ingredient',
      category: 'Produce',
      icon: '🥗',
      inStock: true,
      defaultPrice: 60,
      store: 'Zepto'
    };
  }

  const cleanName = rawName.trim();
  const lower = cleanName.toLowerCase();

  // 1. Detect Category
  let detectedCategory = 'Produce';
  for (const rule of CATEGORY_RULES) {
    if (rule.keywords.some(k => lower.includes(k))) {
      detectedCategory = rule.category;
      break;
    }
  }

  // 2. Detect Emoji
  let detectedEmoji = null;
  for (const mapping of EMOJI_KEYWORD_MAP) {
    if (mapping.keys.some(k => lower.includes(k))) {
      detectedEmoji = mapping.emoji;
      break;
    }
  }

  if (!detectedEmoji) {
    detectedEmoji = CATEGORY_DEFAULT_EMOJIS[detectedCategory] || '🥗';
  }

  // 3. Format Display Name
  const formattedName = cleanName
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');

  // 4. Generate clean ID
  const id = lower
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

  return {
    id: id || `item_${Date.now()}`,
    name: formattedName,
    category: detectedCategory,
    icon: detectedEmoji,
    inStock: true,
    defaultPrice: detectedCategory === 'Protein' ? 120 : 60,
    store: detectedCategory === 'Fats' || detectedCategory === 'Protein' ? 'Zepto' : 'Blinkit'
  };
}
