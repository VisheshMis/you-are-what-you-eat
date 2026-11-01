import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DynamicHero from './components/DynamicHero';
import BentoScienceHub from './components/BentoScienceHub';
import ActivitySelector from './components/ActivitySelector';
import PantryManager from './components/PantryManager';
import RecipeCard from './components/RecipeCard';
import QuickCommerceModal from './components/QuickCommerceModal';
import WhyRecommendModal from './components/WhyRecommendModal';
import CookModeModal from './components/CookModeModal';
import ApiInspector from './components/ApiInspector';
import SpotlightWrapper from './components/SpotlightWrapper';
import BackgroundFloatingFood from './components/BackgroundFloatingFood';
import { ACTIVITIES, PANTRY_CATALOG, RECIPES } from './data/mockData';
import { MASTER_INGREDIENTS } from './data/pantryDatabase';
import { classifyIngredient } from './utils/pantryClassifier';
import { EXPANDED_RECIPEDB_CATALOG, getRecommendedRecipes } from './data/recipeEngine';
import { searchFoodoscopeRecipesByIngredients, getFoodoscopeApiKey } from './services/foodoscopeApi';
import FoodoscopeApiKeyModal from './components/FoodoscopeApiKeyModal';
import { Sparkles, CheckCircle2, Key, RefreshCw, Globe, AlertTriangle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('planner');
  const [selectedActivity, setSelectedActivity] = useState('pre_run');
  const [selectedTiming, setSelectedTiming] = useState('30m');
  const [pantryItems, setPantryItems] = useState(PANTRY_CATALOG);
  const [selectedIngredientIds, setSelectedIngredientIds] = useState(() =>
    PANTRY_CATALOG.filter(i => i.inStock).map(i => i.id)
  );
  const [quickCommerceModalOpen, setQuickCommerceModalOpen] = useState(false);
  const [cartData, setCartData] = useState(null);

  // Foodoscope Live API State
  const [liveRecipes, setLiveRecipes] = useState([]);
  const [isLoadingFoodoscope, setIsLoadingFoodoscope] = useState(false);
  const [foodoscopeApiModalOpen, setFoodoscopeApiModalOpen] = useState(false);
  const [foodoscopeApiKey, setFoodoscopeApiKey] = useState(() => getFoodoscopeApiKey());
  const [foodoscopeError, setFoodoscopeError] = useState(null);

  // Automatically attempt fetching live recipes if key exists
  React.useEffect(() => {
    if (foodoscopeApiKey) {
      handleFetchFoodoscopeRecipes(foodoscopeApiKey);
    }
  }, [foodoscopeApiKey, selectedActivity]);

  // Why We Recommend This Modal State
  const [whyModalOpen, setWhyModalOpen] = useState(false);
  const [whyModalRecipe, setWhyModalRecipe] = useState(null);

  // Interactive Cook Mode State
  const [cookModeModalOpen, setCookModeModalOpen] = useState(false);
  const [cookModeRecipe, setCookModeRecipe] = useState(null);

  const handleOpenCookMode = (recipe) => {
    setCookModeRecipe(recipe);
    setCookModeModalOpen(true);
  };

  // Toggle selection of ingredient for recipe engine
  const handleToggleSelectIngredient = (id) => {
    setSelectedIngredientIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Select all in-stock ingredients
  const handleSelectAllInStock = () => {
    setSelectedIngredientIds(pantryItems.filter(i => i.inStock).map(i => i.id));
  };

  // Clear all selections
  const handleClearAllSelected = () => {
    setSelectedIngredientIds([]);
  };

  // Quick select category
  const handleQuickSelect = (category) => {
    const idsInCat = pantryItems.filter(i => i.category === category).map(i => i.id);
    setSelectedIngredientIds(prev => Array.from(new Set([...prev, ...idsInCat])));
  };

  // Toggle in-stock status of pantry item
  const handleTogglePantryInStock = (id) => {
    setPantryItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  // Add custom pantry item or suggestion
  const handleAddCustomItem = (itemOrName) => {
    let newItem;
    if (typeof itemOrName === 'string') {
      newItem = classifyIngredient(itemOrName);
    } else {
      newItem = {
        ...itemOrName,
        inStock: true
      };
    }

    setPantryItems(prev => {
      const exists = prev.find(p => p.id === newItem.id || p.name.toLowerCase() === newItem.name.toLowerCase());
      if (exists) {
        return prev.map(p => p.id === exists.id ? { ...p, inStock: true } : p);
      }
      return [newItem, ...prev];
    });

    setSelectedIngredientIds(prev => Array.from(new Set([...prev, newItem.id])));
  };

  // Batch add multiple ingredients into pantry as in-stock
  const handleAddAllMissingToPantry = (items = []) => {
    items.forEach(item => {
      const nameOrItem = typeof item === 'string' ? item : (item.name || item.id);
      handleAddCustomItem(nameOrItem);
    });
  };

  // Apply Quick-Stock Starter Pack
  const handleApplyStarterPack = (pack) => {
    const packItems = pack.itemIds.map(id => {
      const foundInMaster = MASTER_INGREDIENTS.find(m => m.id === id);
      if (foundInMaster) {
        return { ...foundInMaster, inStock: true };
      }
      return classifyIngredient(id);
    });

    setPantryItems(prev => {
      const prevIds = new Set(prev.map(p => p.id));
      const newItemsToAdd = packItems.filter(p => !prevIds.has(p.id));
      const updatedPrev = prev.map(p => {
        if (pack.itemIds.includes(p.id)) {
          return { ...p, inStock: true };
        }
        return p;
      });
      return [...newItemsToAdd, ...updatedPrev];
    });

    setSelectedIngredientIds(prev => Array.from(new Set([...prev, ...pack.itemIds])));
  };

  // Reset pantry items
  const handleResetPantry = () => {
    setPantryItems(PANTRY_CATALOG);
    setSelectedIngredientIds(PANTRY_CATALOG.filter(i => i.inStock).map(i => i.id));
  };

  // Open Quick-Commerce Cart
  const handleOpenQuickCommerce = (recipe, items, totalPrice, eta, store) => {
    setCartData({
      recipe,
      items,
      totalPrice,
      eta,
      store
    });
    setQuickCommerceModalOpen(true);
  };

  // Open Why Recommend Modal
  const handleOpenWhyRecommend = (recipe) => {
    setWhyModalRecipe(recipe);
    setWhyModalOpen(true);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentActivityObj = ACTIVITIES.find(a => a.id === selectedActivity) || ACTIVITIES[0];
  const currentTimingObj = currentActivityObj?.timingOptions?.find(t => t.id === selectedTiming) || currentActivityObj?.timingOptions?.[0];

  // Fetch real recipes from Foodoscope Hackathon API by pantry ingredients
  const handleFetchFoodoscopeRecipes = async (keyToUse = foodoscopeApiKey) => {
    const key = (keyToUse || foodoscopeApiKey || '').replace(/^Bearer\s+/i, '').trim();
    if (!key) {
      setFoodoscopeApiModalOpen(true);
      return;
    }
    setIsLoadingFoodoscope(true);
    setFoodoscopeError(null);
    try {
      const activeIngredients = pantryItems
        .filter(p => p.inStock)
        .map(p => p.name);

      const results = await searchFoodoscopeRecipesByIngredients({
        ingredients: activeIngredients,
        limit: 6,
        apiKey: key,
        activityId: selectedActivity,
        timingId: selectedTiming
      });

      if (results && results.length > 0) {
        setLiveRecipes(results);
        setFoodoscopeError(null);
      } else {
        setFoodoscopeError('No recipes matched on Foodoscope. Showing computational suggestions.');
      }
    } catch (err) {
      console.warn('Foodoscope API query error:', err.message);
      setFoodoscopeError(err.message || 'Failed to fetch from Foodoscope API.');
    } finally {
      setIsLoadingFoodoscope(false);
    }
  };

  const handleKeyUpdated = (newKey) => {
    const clean = (newKey || '').replace(/^Bearer\s+/i, '').trim();
    setFoodoscopeApiKey(clean);
    if (clean) {
      handleFetchFoodoscopeRecipes(clean);
    } else {
      setLiveRecipes([]);
      setFoodoscopeError(null);
    }
  };

  // Recipe pool: Live Foodoscope API recipes if loaded, otherwise expanded RecipeDB computational catalog
  const recipePool = liveRecipes.length > 0 ? liveRecipes : EXPANDED_RECIPEDB_CATALOG;
  const rankedRecipes = getRecommendedRecipes(recipePool, pantryItems, selectedActivity, selectedTiming);

  return (
    <SpotlightWrapper className="min-h-screen flex flex-col bg-parchment-100 relative">
      {/* Dynamic Animated Floating Food & Atmospheric Mesh Background */}
      <BackgroundFloatingFood />

      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onBuildMeal={() => {
          setActiveTab('planner');
          scrollToSection('meal-engine-section');
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {activeTab === 'planner' ? (
          <div>
            {/* Dynamic Cinematic Hero Section */}
            <DynamicHero
              onExplorePlanner={() => scrollToSection('meal-engine-section')}
              onExploreScience={() => scrollToSection('science-hub-section')}
            />

            {/* Bento Science & Kinetics Hub */}
            <BentoScienceHub id="science-hub-section" />

            {/* Meal Engine Planning Core */}
            <div id="meal-engine-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              {/* Step 1: Activity & Timing Selector */}
              <ActivitySelector
                activities={ACTIVITIES}
                selectedActivity={selectedActivity}
                onSelectActivity={(actId) => {
                  setSelectedActivity(actId);
                  const act = ACTIVITIES.find(a => a.id === actId);
                  if (act && act.timingOptions?.length > 0) {
                    setSelectedTiming(act.timingOptions[0].id);
                  }
                }}
                selectedTiming={selectedTiming}
                onSelectTiming={setSelectedTiming}
              />

              {/* Step 2: Interactive Pantry & Ingredient Manager */}
              <PantryManager
                pantryItems={pantryItems}
                selectedIngredientIds={selectedIngredientIds}
                onToggleSelectIngredient={handleToggleSelectIngredient}
                onSelectAllInStock={handleSelectAllInStock}
                onClearAll={handleClearAllSelected}
                onQuickSelect={handleQuickSelect}
                onTogglePantryInStock={handleTogglePantryInStock}
                onAddCustomItem={handleAddCustomItem}
                onResetPantry={handleResetPantry}
                onApplyStarterPack={handleApplyStarterPack}
              />

              {/* Step 3: Computational Gastronomy Recipe Suggestions */}
              <section className="mb-12">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-culinary-deep"></span>
                      <span className="text-xs font-mono font-bold tracking-widest text-culinary-deep uppercase">
                        Step 3: Scientifically Matched Meals
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-culinary-dark">
                      Recommended Gastronomic Recipes
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                    <span className="bg-white px-3 py-1.5 rounded-xl border border-parchment-300 text-stone-600">
                      Activity: <strong className="text-culinary-deep font-bold">{currentActivityObj?.name}</strong>
                    </span>
                    <span className="bg-white px-3 py-1.5 rounded-xl border border-parchment-300 text-stone-600">
                      Timing: <strong className="text-culinary-accent font-bold">{currentTimingObj?.label}</strong>
                    </span>
                    <span className="bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 text-emerald-900 font-bold">
                      {selectedIngredientIds.length} ingredients selected
                    </span>
                  </div>
                </div>

                {/* Foodoscope API Live Integration Bar */}
                <div className="mb-6 p-4 rounded-2xl bg-white border border-parchment-300 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      liveRecipes.length > 0 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : foodoscopeApiKey 
                        ? 'bg-culinary-mint text-culinary-deep' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-culinary-dark">
                          Foodoscope RecipeDB Engine
                        </span>
                        {liveRecipes.length > 0 ? (
                          <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                            Live API Connected ({liveRecipes.length} recipes)
                          </span>
                        ) : foodoscopeApiKey ? (
                          <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                            Key Configured
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                            Key Required For Live Data
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-500">
                        {liveRecipes.length > 0
                          ? 'Streaming live verified culinary recipes from CoSy Lab RecipeDB servers (https://api.foodoscope.com).'
                          : 'Currently using dynamic RecipeDB matching. Connect your hackathon key to stream live from api.foodoscope.com.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {foodoscopeApiKey && (
                      <button
                        onClick={() => handleFetchFoodoscopeRecipes()}
                        disabled={isLoadingFoodoscope}
                        className="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm disabled:opacity-50"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isLoadingFoodoscope ? 'animate-spin' : ''}`} />
                        <span>{isLoadingFoodoscope ? 'Fetching...' : 'Fetch Live Recipes'}</span>
                      </button>
                    )}
                    <button
                      onClick={() => setFoodoscopeApiModalOpen(true)}
                      className="px-3.5 py-2 bg-culinary-deep hover:bg-culinary-moss text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      <Key className="w-3.5 h-3.5 text-culinary-citron" />
                      <span>{foodoscopeApiKey ? 'Update API Key' : 'Connect Foodoscope Key'}</span>
                    </button>
                  </div>
                </div>

                {foodoscopeError && (
                  <div className="mb-6 p-3.5 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between text-xs text-amber-900">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span><strong>Foodoscope API Notice:</strong> {foodoscopeError}</span>
                    </div>
                    <button
                      onClick={() => setFoodoscopeApiModalOpen(true)}
                      className="underline font-bold text-amber-800 hover:text-amber-950 ml-2"
                    >
                      Check Key
                    </button>
                  </div>
                )}

                {/* Recipe Cards Grid */}
                {rankedRecipes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {rankedRecipes.map(recipe => (
                      <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        pantryItems={pantryItems}
                        selectedIngredientIds={selectedIngredientIds}
                        activityName={currentActivityObj?.name}
                        onOpenQuickCommerce={handleOpenQuickCommerce}
                        onOpenWhyRecommend={handleOpenWhyRecommend}
                        onAddIngredientToPantry={handleAddCustomItem}
                        onAddAllMissingToPantry={handleAddAllMissingToPantry}
                        onOpenCookMode={handleOpenCookMode}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl p-12 text-center border border-parchment-300">
                    <p className="text-stone-500 text-sm">
                      No recipes found specifically for this activity. Switch activities above to view recommendations!
                    </p>
                  </div>
                )}
              </section>
            </div>
          </div>
        ) : (
          /* API Architecture Tab */
          <ApiInspector />
        )}
      </main>

      {/* Foodoscope API Key Configuration Modal */}
      <FoodoscopeApiKeyModal
        isOpen={foodoscopeApiModalOpen}
        onClose={() => setFoodoscopeApiModalOpen(false)}
        onKeyUpdated={handleKeyUpdated}
      />

      {/* Why We Recommend This Scientific Modal */}
      <WhyRecommendModal
        isOpen={whyModalOpen}
        onClose={() => setWhyModalOpen(false)}
        recipe={whyModalRecipe}
        activity={currentActivityObj}
        timing={currentTimingObj}
      />

      {/* Quick Commerce 10-Minute Cart Modal */}
      <QuickCommerceModal
        isOpen={quickCommerceModalOpen}
        onClose={() => setQuickCommerceModalOpen(false)}
        cartData={cartData}
      />

      {/* Interactive Cook Mode Modal */}
      <CookModeModal
        isOpen={cookModeModalOpen}
        onClose={() => setCookModeModalOpen(false)}
        recipe={cookModeRecipe}
        activityName={currentActivityObj?.name}
        timingLabel={currentTimingObj?.label}
      />

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-parchment-300 py-8 text-xs text-stone-500 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-culinary-dark text-sm">You Are What You Eat (YAWYE)</span>
            <span>•</span>
            <span>Computational Gastronomy Kitchen Engine</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span>Powered by CoSy Lab (RecipeDB & FlavorDB)</span>
            <span>•</span>
            <span>Instant Quick-Commerce Logistics</span>
          </div>
        </div>
      </footer>
    </SpotlightWrapper>
  );
}
