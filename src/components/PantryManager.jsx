import React, { useState, useRef, useEffect } from 'react';
import { 
  Check, Plus, RefreshCw, ShoppingCart, Search, X, 
  Sparkles, Globe, ChevronDown, ChevronUp, Layers, SlidersHorizontal, CheckCircle2, Database 
} from 'lucide-react';
import { MASTER_INGREDIENTS, STARTER_PACKS } from '../data/pantryDatabase';
import { classifyIngredient } from '../utils/pantryClassifier';
import { searchOpenFoodFacts } from '../services/openFoodFacts';
import { searchFoodoscopeIngredients } from '../services/foodoscopeApi';

export default function PantryManager({
  pantryItems,
  selectedIngredientIds = [],
  onToggleSelectIngredient,
  onSelectAllInStock,
  onClearAll,
  onQuickSelect,
  onTogglePantryInStock,
  onTogglePantryItem,
  onAddCustomItem,
  onResetPantry,
  onApplyStarterPack
}) {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [externalResults, setExternalResults] = useState([]);
  const [isSearchingOnline, setIsSearchingOnline] = useState(false);
  const [foodoscopeResults, setFoodoscopeResults] = useState([]);
  const [isSearchingFoodoscope, setIsSearchingFoodoscope] = useState(false);
  const [showCatalogModal, setShowCatalogModal] = useState(false);
  const [activeCatalogTab, setActiveCatalogTab] = useState('Staples');
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);

  const categories = ['All', 'Staples', 'Protein', 'Carbs', 'Fats', 'Produce', 'Flavor'];
  const handleToggle = onTogglePantryInStock || onTogglePantryItem;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter pantry items for the grid
  const filteredGridItems = pantryItems.filter(item => {
    const matchesCategory = filter === 'All' || item.category === filter;
    const matchesSearch = !searchQuery.trim() || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  // Calculate inventory counts
  const inStockCount = pantryItems.filter(i => i.inStock).length;
  const missingCount = pantryItems.length - inStockCount;

  // Local Master Database Matches (instant 0ms search across 300+ items)
  const localMatches = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return MASTER_INGREDIENTS.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(query);
      const aliasMatch = item.aliases && item.aliases.some(a => a.toLowerCase().includes(query));
      return nameMatch || aliasMatch;
    }).slice(0, 10);
  }, [searchQuery]);

  // Handle Online Search via Open Food Facts
  const handleTriggerOnlineSearch = async () => {
    if (!searchQuery.trim() || isSearchingOnline) return;
    setIsSearchingOnline(true);
    try {
      const results = await searchOpenFoodFacts(searchQuery.trim(), 6);
      setExternalResults(results);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearchingOnline(false);
    }
  };

  // Handle Live Foodoscope RecipeDB Dropdown Search
  const handleTriggerFoodoscopeSearch = async () => {
    if (!searchQuery.trim() || isSearchingFoodoscope) return;
    setIsSearchingFoodoscope(true);
    try {
      const results = await searchFoodoscopeIngredients(searchQuery.trim(), 10);
      setFoodoscopeResults(results);
    } catch (err) {
      console.warn(err);
    } finally {
      setIsSearchingFoodoscope(false);
    }
  };

  // Add or toggle an item from suggestions
  const handleSelectSuggestion = (item) => {
    const existingInPantry = pantryItems.find(p => p.id === item.id || p.name.toLowerCase() === item.name.toLowerCase());
    if (existingInPantry) {
      if (!existingInPantry.inStock && handleToggle) {
        handleToggle(existingInPantry.id);
      }
      if (onToggleSelectIngredient && !selectedIngredientIds.includes(existingInPantry.id)) {
        onToggleSelectIngredient(existingInPantry.id);
      }
    } else {
      onAddCustomItem(item);
    }
    setSearchQuery('');
    setIsDropdownOpen(false);
    setExternalResults([]);
    inputRef.current?.blur();
  };

  // Add custom typed item
  const handleAddCustomTyped = (e) => {
    if (e) e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    // Check if it exists in master catalog first
    const masterExact = MASTER_INGREDIENTS.find(m => m.name.toLowerCase() === query.toLowerCase());
    if (masterExact) {
      handleSelectSuggestion(masterExact);
      return;
    }

    // Otherwise run classifier
    const classified = classifyIngredient(query);
    onAddCustomItem(classified);
    setSearchQuery('');
    setIsDropdownOpen(false);
    setExternalResults([]);
    inputRef.current?.blur();
  };

  // Keyboard navigation for search dropdown
  const handleKeyDown = (e) => {
    if (!isDropdownOpen) {
      if (e.key === 'ArrowDown') {
        setIsDropdownOpen(true);
      }
      return;
    }

    const totalSuggestions = localMatches.length + externalResults.length + 1; // +1 for custom add

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(prev => (prev + 1) % totalSuggestions);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(prev => (prev - 1 + totalSuggestions) % totalSuggestions);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < localMatches.length) {
        handleSelectSuggestion(localMatches[focusedIndex]);
      } else if (focusedIndex >= localMatches.length && focusedIndex < localMatches.length + externalResults.length) {
        handleSelectSuggestion(externalResults[focusedIndex - localMatches.length]);
      } else {
        handleAddCustomTyped();
      }
    } else if (e.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  // Item click handler in grid
  const handleItemClick = (id) => {
    if (handleToggle) {
      handleToggle(id);
    }
    if (onToggleSelectIngredient) {
      onToggleSelectIngredient(id);
    }
  };

  // Category counts for pills
  const getCategoryCount = (cat) => {
    if (cat === 'All') return `${inStockCount}/${pantryItems.length}`;
    const inCat = pantryItems.filter(i => i.category === cat);
    const inCatReady = inCat.filter(i => i.inStock).length;
    return `${inCatReady}/${inCat.length}`;
  };

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-parchment-300 shadow-soft-lift mb-8 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-parchment-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-culinary-leaf"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-culinary-leaf uppercase">
              Step 2: Pantry & Fridge Inventory
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-culinary-dark">
            What ingredients do you have right now?
          </h2>
        </div>

        {/* Stats & Quick Actions */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-emerald-900 flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>{inStockCount} In Pantry</span>
          </div>
          <div className="bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-orange-900 flex items-center gap-1.5 shadow-sm">
            <ShoppingCart className="w-3.5 h-3.5 text-orange-600" />
            <span>{missingCount} Orderable via Zepto/Blinkit</span>
          </div>
          <button
            onClick={() => setShowCatalogModal(true)}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-culinary-mint/60 hover:bg-culinary-mint text-culinary-deep border border-culinary-leaf/20 transition-all flex items-center gap-1.5 shadow-sm"
            title="Browse all 250+ catalog ingredients"
          >
            <Layers className="w-3.5 h-3.5 text-culinary-leaf" />
            <span>Browse 250+ Catalog</span>
          </button>
          <button
            onClick={onResetPantry}
            title="Reset to default pantry"
            className="p-2 rounded-xl text-stone-400 hover:text-culinary-deep hover:bg-parchment-200 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick-Stock Starter Packs */}
      <div className="mt-5 pb-5 border-b border-parchment-200">
        <div className="flex items-center gap-2 mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-culinary-accent" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500">
            1-Click Quick-Stock Starter Packs:
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {STARTER_PACKS.map(pack => (
            <button
              key={pack.id}
              onClick={() => onApplyStarterPack && onApplyStarterPack(pack)}
              className="group px-3 py-1.5 rounded-xl text-xs font-semibold bg-parchment-50 hover:bg-white text-culinary-deep border border-parchment-300 hover:border-culinary-leaf/40 hover:shadow-sm transition-all flex items-center gap-1.5"
              title={pack.description}
            >
              <span>{pack.icon}</span>
              <span className="font-bold">{pack.name}</span>
              <span className="text-[10px] text-stone-400 group-hover:text-culinary-leaf font-mono">
                (+{pack.itemIds.length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Omnibox Search Bar with Autocomplete Dropdown */}
      <div className="mt-5 relative z-20" ref={searchContainerRef}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
            <Search className="w-4 h-4 text-culinary-leaf" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsDropdownOpen(true);
              setExternalResults([]);
              setFoodoscopeResults([]);
              setFocusedIndex(-1);
            }}
            onFocus={() => {
              if (searchQuery.trim()) setIsDropdownOpen(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search 300+ ingredients (Baking powder, Cornstarch, Flour, Eggs, Milk, Sugar)..."
            className="w-full pl-10 pr-24 py-3 bg-parchment-50 border border-parchment-300 rounded-2xl text-xs sm:text-sm text-culinary-dark placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-culinary-leaf/50 focus:bg-white transition-all shadow-inner"
          />

          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setIsDropdownOpen(false);
                setExternalResults([]);
                setFoodoscopeResults([]);
              }}
              className="absolute inset-y-0 right-12 pr-2 flex items-center text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleAddCustomTyped}
            disabled={!searchQuery.trim()}
            className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-culinary-deep text-white rounded-xl text-xs font-bold hover:bg-culinary-moss disabled:opacity-40 disabled:hover:bg-culinary-deep transition-all flex items-center gap-1 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

        {/* Live Search Autocomplete Dropdown */}
        {isDropdownOpen && searchQuery.trim().length > 0 && (
          <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl border border-parchment-300 shadow-2xl overflow-hidden max-h-96 overflow-y-auto animate-fade-in z-30">
            {/* Local Master Catalog Results */}
            {localMatches.length > 0 && (
              <div className="p-2 border-b border-parchment-200">
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 flex items-center justify-between">
                  <span>From Master Culinary Database</span>
                  <span className="text-culinary-leaf font-bold">{localMatches.length} matches</span>
                </div>
                {localMatches.map((item, idx) => {
                  const existing = pantryItems.find(p => p.id === item.id || p.name.toLowerCase() === item.name.toLowerCase());
                  const isReady = existing && existing.inStock;
                  const isFocused = focusedIndex === idx;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectSuggestion(item)}
                      className={`w-full px-3 py-2 rounded-xl flex items-center justify-between text-left transition-colors text-xs ${
                        isFocused ? 'bg-culinary-mint/40 text-culinary-dark' : 'hover:bg-parchment-100 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <p className="font-bold text-culinary-dark">
                            {highlightMatch(item.name, searchQuery)}
                          </p>
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-semibold ${getCategoryBadgeColor(item.category)}`}>
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {existing ? (
                          <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg flex items-center gap-1 ${
                            isReady ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-100 text-orange-800'
                          }`}>
                            <Check className="w-3 h-3 stroke-[3]" />
                            {isReady ? 'In Pantry' : 'Orderable'}
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold text-culinary-leaf bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded-lg flex items-center gap-1 border border-emerald-200">
                            <Plus className="w-3 h-3 stroke-[3]" /> Add to Pantry
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Live Foodoscope RecipeDB Search Results */}
            {foodoscopeResults.length > 0 && (
              <div className="p-2 border-b border-parchment-200 bg-emerald-50/50">
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3 h-3 text-emerald-700" />
                    <span>Foodoscope RecipeDB (Verified CoSy Lab)</span>
                  </div>
                  <span className="text-emerald-700 font-bold">{foodoscopeResults.length} live matches</span>
                </div>
                {foodoscopeResults.map((item) => {
                  const existing = pantryItems.find(p => p.id === item.id || p.name.toLowerCase() === item.name.toLowerCase());
                  const isReady = existing && existing.inStock;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectSuggestion(item)}
                      className="w-full px-3 py-2 rounded-xl flex items-center justify-between text-left transition-colors text-xs hover:bg-white text-stone-700"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">🥗</span>
                        <div>
                          <p className="font-bold text-culinary-dark">
                            {highlightMatch(item.name, searchQuery)}
                          </p>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded font-semibold bg-emerald-100 text-emerald-800">
                            RecipeDB (Freq: {item.frequency})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {existing ? (
                          <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg flex items-center gap-1 ${
                            isReady ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-100 text-orange-800'
                          }`}>
                            <Check className="w-3 h-3 stroke-[3]" />
                            {isReady ? 'In Pantry' : 'Orderable'}
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold text-culinary-leaf bg-white px-2 py-1 rounded-lg flex items-center gap-1 border border-emerald-300 shadow-sm">
                            <Plus className="w-3 h-3 stroke-[3]" /> Add to Pantry
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* External Open Food Facts Search Results */}
            {externalResults.length > 0 && (
              <div className="p-2 border-b border-parchment-200 bg-parchment-50/70">
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-culinary-leaf" />
                  <span>Global Food Database (Open Food Facts)</span>
                </div>
                {externalResults.map((item, idx) => {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectSuggestion(item)}
                      className="w-full px-3 py-2 rounded-xl flex items-center justify-between text-left transition-colors text-xs hover:bg-white text-stone-700"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <p className="font-bold text-culinary-dark">{item.name}</p>
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-semibold ${getCategoryBadgeColor(item.category)}`}>
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-bold text-culinary-leaf bg-white px-2 py-1 rounded-lg flex items-center gap-1 border border-parchment-300 shadow-sm">
                        <Plus className="w-3 h-3 stroke-[3]" /> Add
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Online Database Search Trigger & Custom Add Option */}
            <div className="p-2 bg-parchment-100/60 space-y-1.5">
              {foodoscopeResults.length === 0 && (
                <button
                  onClick={handleTriggerFoodoscopeSearch}
                  disabled={isSearchingFoodoscope}
                  className="w-full px-3 py-2 rounded-xl text-left text-xs font-semibold text-emerald-900 bg-emerald-50/80 hover:bg-emerald-100 flex items-center justify-between border border-emerald-300 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Search Foodoscope RecipeDB live for "{searchQuery}"</span>
                  </div>
                  {isSearchingFoodoscope ? (
                    <span className="text-[10px] font-mono text-emerald-600 animate-pulse">Connecting...</span>
                  ) : (
                    <span className="text-[10px] font-mono text-emerald-800 font-bold">10,000+ Items ↵</span>
                  )}
                </button>
              )}

              {externalResults.length === 0 && (
                <button
                  onClick={handleTriggerOnlineSearch}
                  disabled={isSearchingOnline}
                  className="w-full px-3 py-2 rounded-xl text-left text-xs font-semibold text-culinary-deep hover:bg-white flex items-center justify-between border border-dashed border-parchment-300 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-culinary-leaf" />
                    <span>Search Open Food Facts online for "{searchQuery}"</span>
                  </div>
                  {isSearchingOnline ? (
                    <span className="text-[10px] font-mono text-stone-400 animate-pulse">Searching...</span>
                  ) : (
                    <span className="text-[10px] font-mono text-culinary-leaf font-bold">Global 100k+ ↵</span>
                  )}
                </button>
              )}

              {/* Custom Classified Item Add Action */}
              <button
                onClick={handleAddCustomTyped}
                className="w-full px-3 py-2 rounded-xl text-left text-xs font-bold text-culinary-dark hover:bg-white flex items-center justify-between border border-parchment-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{classifyIngredient(searchQuery).icon}</span>
                  <span>Add "{searchQuery}" as Custom Ingredient</span>
                </div>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-semibold ${getCategoryBadgeColor(classifyIngredient(searchQuery).category)}`}>
                  Inferred: {classifyIngredient(searchQuery).category}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Category Pills & Grid Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
        <div className="flex flex-wrap gap-1.5">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                filter === cat
                  ? 'bg-culinary-deep text-white shadow-sm'
                  : 'bg-parchment-100 text-stone-600 hover:bg-parchment-200 border border-parchment-200'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] font-mono px-1 rounded ${
                filter === cat ? 'bg-white/20 text-white' : 'bg-stone-200 text-stone-700'
              }`}>
                {getCategoryCount(cat)}
              </span>
            </button>
          ))}
        </div>

        {searchQuery && (
          <div className="text-xs text-stone-500 font-medium">
            Filtering grid by: <strong className="text-culinary-dark">"{searchQuery}"</strong>
          </div>
        )}
      </div>

      {/* Ingredient Grid */}
      {filteredGridItems.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2.5 mt-6">
          {filteredGridItems.map(item => {
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between h-24 relative group ${
                  item.inStock
                    ? 'bg-white border-emerald-500 shadow-sm ring-1 ring-emerald-500/30'
                    : 'bg-parchment-100/60 border-dashed border-stone-300 opacity-60 hover:opacity-100 hover:bg-white'
                }`}
              >
                <div className="flex items-start justify-between w-full">
                  <span className="text-2xl">{item.icon || '🥗'}</span>
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                      item.inStock
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'border border-stone-400 text-transparent'
                    }`}
                  >
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-culinary-dark leading-tight line-clamp-1">
                    {item.name}
                  </p>
                  <span className="text-[10px] font-mono text-stone-500 uppercase">
                    {item.inStock ? 'Ready' : '+ Quick-Com'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mt-8 p-8 text-center bg-parchment-50 rounded-2xl border border-dashed border-parchment-300">
          <p className="text-sm font-semibold text-stone-600 mb-1">
            No ingredients found matching "{searchQuery}" in your current pantry.
          </p>
          <p className="text-xs text-stone-400 mb-4">
            Use the search bar above to add it from our 250+ catalog or create a custom item!
          </p>
          <button
            onClick={handleAddCustomTyped}
            className="px-4 py-2 bg-culinary-deep text-white text-xs font-bold rounded-xl hover:bg-culinary-moss transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add "{searchQuery}" to Pantry</span>
          </button>
        </div>
      )}

      {/* Full 250+ Master Catalog Modal */}
      {showCatalogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full border border-parchment-300 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            {/* Modal Header */}
            <div className="p-6 bg-parchment-100 border-b border-parchment-200 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-culinary-leaf"></span>
                  <span className="text-xs font-mono font-bold tracking-widest text-culinary-leaf uppercase">
                    Master Ingredient Library
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-culinary-dark">
                  Browse 300+ Ingredients
                </h3>
              </div>
              <button
                onClick={() => setShowCatalogModal(false)}
                className="p-2 text-stone-400 hover:text-culinary-dark rounded-xl hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Category Tabs */}
            <div className="px-6 py-3 border-b border-parchment-200 bg-white flex flex-wrap gap-2">
              {['Staples', 'Protein', 'Carbs', 'Fats', 'Produce', 'Flavor'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCatalogTab(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeCatalogTab === cat
                      ? 'bg-culinary-deep text-white shadow-sm'
                      : 'bg-parchment-100 text-stone-600 hover:bg-parchment-200'
                  }`}
                >
                  {cat} ({MASTER_INGREDIENTS.filter(i => i.category === cat).length})
                </button>
              ))}
            </div>

            {/* Modal Grid of Ingredients */}
            <div className="p-6 overflow-y-auto flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {MASTER_INGREDIENTS.filter(i => i.category === activeCatalogTab).map(item => {
                const existing = pantryItems.find(p => p.id === item.id || p.name.toLowerCase() === item.name.toLowerCase());
                const isReady = existing && existing.inStock;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectSuggestion(item)}
                    className={`p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      isReady
                        ? 'bg-emerald-50/60 border-emerald-500 shadow-sm'
                        : existing
                        ? 'bg-orange-50/50 border-orange-300'
                        : 'bg-parchment-50 hover:bg-white border-parchment-200 hover:border-culinary-leaf/40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-culinary-dark line-clamp-1">{item.name}</p>
                        <span className="text-[10px] font-mono text-stone-400">
                          {isReady ? 'In Pantry' : existing ? 'Orderable' : '+ Add'}
                        </span>
                      </div>
                    </div>

                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      isReady ? 'bg-emerald-600 text-white' : 'border border-stone-300 text-stone-400'
                    }`}>
                      {isReady ? <Check className="w-3 h-3 stroke-[3]" /> : <Plus className="w-3 h-3" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-parchment-50 border-t border-parchment-200 flex items-center justify-between text-xs text-stone-500">
              <span>Click any ingredient to add or toggle it in your kitchen pantry.</span>
              <button
                onClick={() => setShowCatalogModal(false)}
                className="px-5 py-2 bg-culinary-deep text-white font-bold rounded-xl hover:bg-culinary-moss transition-colors shadow-sm"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Substring highlight helper
function highlightMatch(text, query) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, 'gi'));
  return parts.map((part, i) => 
    part.toLowerCase() === query.toLowerCase() ? (
      <strong key={i} className="text-culinary-deep bg-culinary-mint/60 px-0.5 rounded font-bold">
        {part}
      </strong>
    ) : part
  );
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getCategoryBadgeColor(category) {
  switch (category) {
    case 'Staples':
      return 'bg-blue-50 text-blue-800 border border-blue-200';
    case 'Protein':
      return 'bg-red-50 text-red-700 border border-red-200';
    case 'Carbs':
      return 'bg-amber-50 text-amber-800 border border-amber-200';
    case 'Fats':
      return 'bg-yellow-50 text-yellow-800 border border-yellow-200';
    case 'Produce':
      return 'bg-emerald-50 text-emerald-800 border border-emerald-200';
    case 'Flavor':
      return 'bg-purple-50 text-purple-800 border border-purple-200';
    default:
      return 'bg-stone-100 text-stone-700 border border-stone-200';
  }
}
