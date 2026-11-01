import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Zap, CheckCircle2, Clock, MapPin, Truck, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuickCommerceModal({ isOpen, onClose, cartData }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryStep, setDeliveryStep] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      setOrderPlaced(false);
      setDeliveryStep(1);
    }
  }, [isOpen]);

  if (!isOpen || !cartData) return null;

  const { recipe, items, totalPrice, eta, store } = cartData;

  const handleCheckout = () => {
    setOrderPlaced(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    // Simulate real-time progress steps
    setTimeout(() => setDeliveryStep(2), 2500);
    setTimeout(() => setDeliveryStep(3), 6000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full border border-parchment-300 shadow-2xl overflow-hidden relative">
        {/* Modal Header */}
        <div className="p-6 bg-parchment-100 border-b border-parchment-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-culinary-accent flex items-center justify-center text-white shadow-glow-accent">
              <Zap className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-bold text-culinary-dark">
                  Instant Pantry Top-Up
                </h3>
                <span className="bg-orange-100 text-orange-800 text-[11px] font-mono font-bold px-2 py-0.5 rounded-full uppercase">
                  {store}
                </span>
              </div>
              <p className="text-xs text-stone-500">
                Fulfilling recipe gaps for <strong className="text-culinary-dark">{recipe.title}</strong>
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

        {/* Modal Body */}
        {!orderPlaced ? (
          <div className="p-6">
            {/* Store & Hub details */}
            <div className="bg-parchment-50 p-4 rounded-2xl border border-parchment-200 flex items-center justify-between mb-5 text-xs">
              <div className="flex items-center gap-2 text-stone-600">
                <MapPin className="w-4 h-4 text-culinary-leaf" />
                <span>Micro-Fulfillment Dark Store (0.7 km away)</span>
              </div>
              <div className="flex items-center gap-1 font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                <Clock className="w-3.5 h-3.5" />
                <span>{eta}</span>
              </div>
            </div>

            {/* Item list */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 block">
                Selected Missing Items ({items.length})
              </span>
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-parchment-200 shadow-sm text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">🛒</span>
                    <div>
                      <p className="font-bold text-culinary-dark">{item.name}</p>
                      <p className="text-stone-400 text-[11px]">Required quantity: {item.amount}</p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-culinary-deep text-sm">
                    ₹{item.price || 60}
                  </span>
                </div>
              ))}
            </div>

            {/* Bill Summary */}
            <div className="bg-parchment-50 p-4 rounded-2xl border border-parchment-200 space-y-2 text-xs mb-6">
              <div className="flex justify-between text-stone-500">
                <span>Items Subtotal</span>
                <span className="font-mono">₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>10-Minute Rapid Delivery</span>
                <span className="font-mono text-emerald-700 font-bold">FREE (Express Delivery)</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Packaging & Handling</span>
                <span className="font-mono">₹12</span>
              </div>
              <div className="pt-2 border-t border-parchment-300 flex justify-between font-bold text-culinary-dark text-sm">
                <span>Total Amount</span>
                <span className="font-mono text-base text-culinary-accent">₹{totalPrice + 12}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleCheckout}
              className="w-full py-4 bg-culinary-accent hover:bg-orange-600 text-white font-bold rounded-2xl shadow-glow-accent transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Place 10-Minute Quick Order (₹{totalPrice + 12})</span>
            </button>
          </div>
        ) : (
          /* Live Dispatch Screen */
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Truck className="w-8 h-8" />
            </div>

            <h4 className="font-serif text-2xl font-bold text-culinary-dark mb-1">
              Order Dispatched!
            </h4>
            <p className="text-xs text-stone-500 mb-6">
              Your ingredients are on their way from the local {store} dark store.
            </p>

            {/* Timeline */}
            <div className="space-y-4 text-left max-w-sm mx-auto mb-8 bg-parchment-50 p-5 rounded-2xl border border-parchment-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-culinary-dark">Order Confirmed</p>
                  <p className="text-[10px] text-stone-400 font-mono">10:42 PM • Transmitted to Dark Store</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {deliveryStep >= 2 ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin flex-shrink-0"></div>
                )}
                <div>
                  <p className="text-xs font-bold text-culinary-dark">Packed in 78 seconds</p>
                  <p className="text-[10px] text-stone-400 font-mono">Cold-chain insulated packing</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {deliveryStep >= 3 ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-stone-300 flex-shrink-0"></div>
                )}
                <div>
                  <p className="text-xs font-bold text-culinary-dark">Rider Out For Delivery</p>
                  <p className="text-[10px] text-emerald-700 font-mono font-bold">
                    ETA: ~{eta} • Rider: Amit Kumar (EV Scooter)
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-3 bg-culinary-deep text-white font-bold rounded-xl text-xs hover:bg-culinary-moss transition-colors"
            >
              Ready to Cook • Back to Recipe
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
