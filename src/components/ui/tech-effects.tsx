"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TechEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-blue-500 last:border-r-0"
            />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-b border-blue-500 last:border-b-0"
            />
          ))}
        </div>
      </div>

      {/* Animated corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <div className="absolute top-4 left-4 w-8 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
        <div className="absolute top-4 left-4 w-px h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
        <div className="absolute top-4 right-4 w-8 h-px bg-gradient-to-l from-purple-500 to-transparent"></div>
        <div className="absolute top-4 right-4 w-px h-8 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
        <div className="absolute bottom-4 left-4 w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent"></div>
        <div className="absolute bottom-4 left-4 w-px h-8 bg-gradient-to-t from-cyan-500 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
        <div className="absolute bottom-4 right-4 w-8 h-px bg-gradient-to-l from-pink-500 to-transparent"></div>
        <div className="absolute bottom-4 right-4 w-px h-8 bg-gradient-to-t from-pink-500 to-transparent"></div>
      </div>
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="relative w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent h-px"></div>
    </div>
  );
}