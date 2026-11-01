import React, { useState } from 'react';
import { Database, Terminal, ArrowUpRight, Cpu, Check, Copy } from 'lucide-react';
import { FOODOSCOPE_API_SPECS } from '../data/mockData';

export default function ApiInspector() {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-parchment-300 shadow-soft-lift mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-parchment-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-culinary-leaf"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-culinary-leaf uppercase">
                Architecture & Integrations
              </span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-culinary-dark">
              Foodoscope & CoSy Lab API Engine
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Live computational gastronomy endpoints powering recipe generation, molecular pairing, and substitution matrices.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-culinary-mint/40 border border-culinary-leaf/20 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold text-culinary-deep">
            <Cpu className="w-4 h-4 text-culinary-leaf" />
            <span>CoSy Lab REST v1.4</span>
          </div>
        </div>

        {/* API Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {FOODOSCOPE_API_SPECS.map((spec, idx) => (
            <div
              key={idx}
              className="bg-parchment-50 rounded-2xl p-6 border border-parchment-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-culinary-deep text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded-lg">
                    {spec.service}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-800 bg-emerald-100 font-bold px-2 py-0.5 rounded">
                    ⚡ {spec.latency}
                  </span>
                </div>

                <p className="font-mono text-xs font-bold text-culinary-dark mb-2 break-all bg-white p-2.5 rounded-xl border border-parchment-300">
                  {spec.endpoint}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {spec.purpose}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-stone-400 uppercase mb-1.5">
                  <span>Sample Payload / Schema</span>
                  <button
                    onClick={() => handleCopy(spec.samplePayload, idx)}
                    className="flex items-center gap-1 text-culinary-leaf hover:text-culinary-deep"
                  >
                    {copiedIdx === idx ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedIdx === idx ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <pre className="bg-culinary-dark text-parchment-200 p-3 rounded-xl text-[11px] font-mono overflow-x-auto">
                  <code>{spec.samplePayload}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Quick-Commerce Microservices Bridge */}
        <div className="mt-8 bg-parchment-100/70 rounded-2xl p-6 border border-parchment-200">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-4 h-4 text-culinary-accent" />
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-culinary-dark">
              Quick-Commerce Gateway (Blinkit & Zepto Integration Model)
            </h4>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            When RecipeDB identifies culinary gaps in the user’s selected pantry, our middleware dispatches concurrent geolocation queries to local dark store catalog APIs. It calculates missing item availability, lowest bundle cost, and rapid 10-minute dispatch feasibility.
          </p>
        </div>
      </div>
    </div>
  );
}
