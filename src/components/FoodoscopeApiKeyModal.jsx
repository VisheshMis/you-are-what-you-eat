import React, { useState } from 'react';
import { Key, CheckCircle2, AlertCircle, X, ExternalLink, RefreshCw, Cpu } from 'lucide-react';
import { getFoodoscopeApiKey, setFoodoscopeApiKey, validateFoodoscopeApiKey } from '../services/foodoscopeApi';

export default function FoodoscopeApiKeyModal({ isOpen, onClose, onKeyUpdated }) {
  const [apiKeyInput, setApiKeyInput] = useState(() => getFoodoscopeApiKey());
  const [isValidating, setIsValidating] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = async (e) => {
    e.preventDefault();
    const cleanKey = apiKeyInput.replace(/^Bearer\s+/i, '').trim();
    if (!cleanKey) {
      setFoodoscopeApiKey('');
      setStatusMessage({ type: 'info', text: 'API key removed. Using offline gastronomic engine.' });
      onKeyUpdated && onKeyUpdated('');
      return;
    }

    setIsValidating(true);
    setStatusMessage(null);

    const validation = await validateFoodoscopeApiKey(cleanKey);
    setIsValidating(false);

    if (validation.valid) {
      setFoodoscopeApiKey(cleanKey);
      setIsSuccess(true);
      setStatusMessage({ type: 'success', text: 'Successfully connected to Foodoscope RecipeDB API!' });
      onKeyUpdated && onKeyUpdated(cleanKey);
      setTimeout(() => {
        onClose();
      }, 1500);
    } else {
      setIsSuccess(false);
      setStatusMessage({ 
        type: 'error', 
        text: `Validation failed: ${validation.error}. Still saving key for trial requests.` 
      });
      setFoodoscopeApiKey(cleanKey);
      onKeyUpdated && onKeyUpdated(cleanKey);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-parchment-300 shadow-2xl overflow-hidden relative">
        {/* Header */}
        <div className="p-6 bg-parchment-100 border-b border-parchment-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-culinary-deep flex items-center justify-center text-white shadow-sm">
              <Key className="w-5 h-5 text-culinary-citron" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-culinary-dark">
                Foodoscope API Configuration
              </h3>
              <p className="text-xs text-stone-500 font-mono">
                CoSy Lab • Fork-It Challenge 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-culinary-dark rounded-xl hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="p-3.5 bg-culinary-mint/40 border border-culinary-leaf/20 rounded-2xl mb-4 text-xs">
            <p className="font-bold text-culinary-dark mb-1">
              📋 How to get your API Key from Foodoscope:
            </p>
            <ol className="list-decimal pl-4 space-y-1 text-stone-600">
              <li>Open <strong><a href="https://www.foodoscope.com" target="_blank" rel="noreferrer" className="text-culinary-deep underline">foodoscope.com</a></strong> (from your open tab).</li>
              <li>Sign in using Google or your account (top right).</li>
              <li>Go to your <strong>Dashboard / Profile</strong>.</li>
              <li>Click <strong>"Generate API Key"</strong> and copy the token.</li>
            </ol>
          </div>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                Foodoscope Bearer API Key
              </label>
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="Paste your Foodoscope API token..."
                className="w-full px-4 py-3 bg-parchment-50 border border-parchment-300 rounded-xl text-xs font-mono text-culinary-dark focus:outline-none focus:ring-2 focus:ring-culinary-leaf focus:bg-white transition-all"
              />
            </div>

            {statusMessage && (
              <div className={`p-3 rounded-xl text-xs flex items-center gap-2 border ${
                statusMessage.type === 'success' 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                  : statusMessage.type === 'error'
                  ? 'bg-amber-50 text-amber-800 border-amber-200'
                  : 'bg-stone-50 text-stone-700 border-stone-200'
              }`}>
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <div className="pt-2 flex items-center justify-between">
              <a
                href="https://foodoscope.com"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-culinary-leaf hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Visit Foodoscope Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold text-stone-500 hover:text-culinary-dark transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isValidating}
                  className="px-5 py-2.5 bg-culinary-deep text-white font-bold text-xs rounded-xl hover:bg-culinary-moss transition-colors shadow-sm flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isValidating ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Validating...</span>
                    </>
                  ) : (
                    <span>Save & Connect</span>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Technical Info */}
          <div className="mt-5 p-3.5 bg-parchment-50 rounded-2xl border border-parchment-200 text-[11px] text-stone-500 space-y-1">
            <div className="flex items-center gap-1.5 font-mono font-bold text-culinary-dark">
              <Cpu className="w-3.5 h-3.5 text-culinary-leaf" />
              <span>Endpoint: https://api.foodoscope.com/recipe2-api</span>
            </div>
            <p>
              Header format: <code>Authorization: Bearer &lt;API_KEY&gt;</code>. Key is stored securely in your browser's localStorage or <code>.env.local</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
