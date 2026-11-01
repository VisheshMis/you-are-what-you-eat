// Open Food Facts v3 API Service
// Keyless, open-source taxonomy autocomplete for global ingredients with CORS enabled

import { classifyIngredient } from '../utils/pantryClassifier.js';

const cache = new Map();

/**
 * Searches Open Food Facts taxonomy for ingredient suggestions
 * @param {string} query - Search term
 * @param {number} limit - Maximum suggestions to return
 * @returns {Promise<Array<{ id: string, name: string, category: string, icon: string, inStock: boolean, defaultPrice: number, store: string, isExternal: boolean }>>}
 */
export async function searchOpenFoodFacts(query, limit = 8) {
  const trimmed = query?.trim().toLowerCase();
  if (!trimmed || trimmed.length < 2) return [];

  if (cache.has(trimmed)) {
    return cache.get(trimmed);
  }

  const endpoint = `https://world.openfoodfacts.org/api/v3/taxonomy_suggestions?tagtype=ingredients&string=${encodeURIComponent(trimmed)}&lc=en`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(endpoint, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json'
      }
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    const suggestions = data?.suggestions || [];

    // Filter, deduplicate, and run through classifier
    const seen = new Set();
    const results = [];

    for (const rawName of suggestions) {
      if (!rawName || typeof rawName !== 'string') continue;
      // Skip excessively long descriptions or non-English fragments
      if (rawName.length > 35 || rawName.includes(':')) continue;

      const classified = classifyIngredient(rawName);
      if (!seen.has(classified.id)) {
        seen.add(classified.id);
        results.push({
          ...classified,
          isExternal: true
        });
      }

      if (results.length >= limit) break;
    }

    cache.set(trimmed, results);
    return results;
  } catch (err) {
    console.warn('Open Food Facts search failed or timed out:', err);
    return [];
  }
}
