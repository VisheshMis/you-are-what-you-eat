import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// High-impact, multi-layered culinary elements designed to be large, vague, atmospheric, and fill the canvas
const ATMOSPHERIC_FOODS = [
  // Top Region (0% - 20%)
  { id: 1, emoji: '🥑', top: '3%', left: '2%', size: 'text-[140px] sm:text-[180px]', speed: -180, rotate: 22, duration: 8, blur: 'blur-[3px]', opacity: 'opacity-25' },
  { id: 2, emoji: '🫐', top: '10%', right: '3%', size: 'text-[110px] sm:text-[150px]', speed: -240, rotate: -20, duration: 7, blur: 'blur-[1px]', opacity: 'opacity-30' },
  { id: 3, emoji: '🍋', top: '18%', left: '12%', size: 'text-[130px] sm:text-[170px]', speed: -140, rotate: 35, duration: 9, blur: 'blur-[5px]', opacity: 'opacity-20' },
  { id: 4, emoji: '🌿', top: '14%', right: '14%', size: 'text-[120px] sm:text-[160px]', speed: -200, rotate: -15, duration: 6.5, blur: 'blur-[2px]', opacity: 'opacity-25' },

  // Upper Mid Region (22% - 40%)
  { id: 5, emoji: '🍯', top: '27%', left: '3%', size: 'text-[120px] sm:text-[160px]', speed: -220, rotate: 18, duration: 7.5, blur: 'blur-[2px]', opacity: 'opacity-25' },
  { id: 6, emoji: '🥚', top: '34%', right: '4%', size: 'text-[130px] sm:text-[170px]', speed: -190, rotate: -28, duration: 8.5, blur: 'blur-[4px]', opacity: 'opacity-20' },
  { id: 7, emoji: '🌶️', top: '38%', left: '14%', size: 'text-[110px] sm:text-[140px]', speed: -160, rotate: 42, duration: 6, blur: 'blur-[2px]', opacity: 'opacity-25' },
  { id: 8, emoji: '🌾', top: '42%', right: '12%', size: 'text-[140px] sm:text-[190px]', speed: -260, rotate: -12, duration: 9, blur: 'blur-[4px]', opacity: 'opacity-22' },

  // Mid Region (44% - 65%)
  { id: 9, emoji: '🍌', top: '49%', left: '2%', size: 'text-[150px] sm:text-[200px]', speed: -180, rotate: -32, duration: 8, blur: 'blur-[3px]', opacity: 'opacity-22' },
  { id: 10, emoji: '🥜', top: '56%', right: '3%', size: 'text-[130px] sm:text-[170px]', speed: -230, rotate: 36, duration: 7, blur: 'blur-[2px]', opacity: 'opacity-28' },
  { id: 11, emoji: '🍏', top: '53%', left: '15%', size: 'text-[120px] sm:text-[160px]', speed: -150, rotate: -18, duration: 9.5, blur: 'blur-[6px]', opacity: 'opacity-18' },
  { id: 12, emoji: '🥬', top: '63%', right: '14%', size: 'text-[140px] sm:text-[190px]', speed: -210, rotate: 24, duration: 7.5, blur: 'blur-[3px]', opacity: 'opacity-24' },

  // Lower Region (67% - 95%)
  { id: 13, emoji: '🫚', top: '70%', left: '4%', size: 'text-[130px] sm:text-[170px]', speed: -220, rotate: -22, duration: 8.2, blur: 'blur-[2px]', opacity: 'opacity-26' },
  { id: 14, emoji: '🍅', top: '76%', right: '4%', size: 'text-[140px] sm:text-[180px]', speed: -170, rotate: 16, duration: 6.8, blur: 'blur-[3px]', opacity: 'opacity-25' },
  { id: 15, emoji: '🫒', top: '82%', left: '12%', size: 'text-[120px] sm:text-[150px]', speed: -190, rotate: 30, duration: 9, blur: 'blur-[5px]', opacity: 'opacity-20' },
  { id: 16, emoji: '🍞', top: '88%', right: '11%', size: 'text-[140px] sm:text-[180px]', speed: -240, rotate: -15, duration: 7.5, blur: 'blur-[4px]', opacity: 'opacity-22' },
  { id: 17, emoji: '🫐', top: '93%', left: '3%', size: 'text-[110px] sm:text-[140px]', speed: -160, rotate: 25, duration: 6.5, blur: 'blur-[2px]', opacity: 'opacity-28' },
];

export default function BackgroundFloatingFood() {
  const { scrollY } = useScroll();

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none">
      {/* Dynamic Animated Atmospheric Warm Aura Mesh Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-amber-200/45 via-orange-100/35 to-transparent blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/4 -right-40 w-[850px] h-[850px] rounded-full bg-gradient-to-bl from-emerald-200/40 via-culinary-mint/35 to-transparent blur-[160px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-2/3 -left-40 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-orange-200/35 via-amber-200/30 to-emerald-100/30 blur-[150px]"
      />

      {/* Floating Organic Molecular Lattices (Subtle CoSy Lab Science Aesthetics) */}
      <div className="absolute top-[12%] left-[28%] opacity-[0.07] rotate-12">
        <svg width="220" height="220" viewBox="0 0 100 100" fill="none" stroke="#1D3323" strokeWidth="1.2">
          <polygon points="50 15, 80 32, 80 68, 50 85, 20 68, 20 32" />
          <polygon points="50 25, 72 38, 72 62, 50 75, 28 62, 28 38" />
          <circle cx="50" cy="15" r="3" fill="#1D3323" />
          <circle cx="80" cy="32" r="3" fill="#1D3323" />
          <circle cx="80" cy="68" r="3" fill="#1D3323" />
          <circle cx="50" cy="85" r="3" fill="#1D3323" />
          <circle cx="20" cy="68" r="3" fill="#1D3323" />
          <circle cx="20" cy="32" r="3" fill="#1D3323" />
        </svg>
      </div>

      <div className="absolute top-[58%] right-[24%] opacity-[0.06] -rotate-45">
        <svg width="260" height="260" viewBox="0 0 100 100" fill="none" stroke="#FF5E36" strokeWidth="1.2">
          <polygon points="50 10, 85 30, 85 70, 50 90, 15 70, 15 30" />
          <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="3 3" />
          <line x1="15" y1="30" x2="85" y2="70" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Large, Vague, Atmospheric Floating Foods */}
      {ATMOSPHERIC_FOODS.map((item) => {
        // Individual parallax scroll physics
        const yTransform = useTransform(scrollY, [0, 3500], [0, item.speed]);

        return (
          <motion.div
            key={item.id}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              y: yTransform,
            }}
            className="absolute hidden sm:block pointer-events-none"
          >
            {/* Gentle continuous float & tilt */}
            <motion.div
              animate={{
                y: [0, -24, 0],
                rotate: [0, item.rotate, 0],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Diffuse soft radial aura behind item for gentle blending */}
              <div className="absolute inset-0 rounded-full bg-amber-100/30 blur-2xl scale-150" />

              <span
                className={`${item.size} ${item.opacity} ${item.blur} block filter drop-shadow-[0_20px_35px_rgba(20,34,23,0.12)] transition-all`}
              >
                {item.emoji}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Subtle organic noise texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E5037_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.025]" />
    </div>
  );
}
