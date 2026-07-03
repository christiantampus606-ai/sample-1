/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, CheckCircle2, ShieldAlert, Sparkles, TrendingDown } from "lucide-react";

interface HeroProps {
  onCalculateClick: () => void;
}

export default function Hero({ onCalculateClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-24"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,128,128,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,119,4,0.06),transparent_50%)]" />
      
      {/* Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Professional Chemical Plant Cleanroom Background Image */}
      <div className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none mix-blend-lighten select-none">
        <img 
          src="/src/assets/images/chemical_plant_clean_1782937607997.jpg" 
          alt="Hydrology Advanced Chemical Production Plant on-site" 
          width={1920}
          height={1080}
          className="w-full h-full object-cover grayscale brightness-95 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070708]/80 to-[#070708]" />
      </div>

      {/* Futuristic Light Beam lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary-500/10 to-transparent opacity-40" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary-500/10 to-transparent opacity-35" />

      <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16 lg:py-24 relative z-10 w-full flex flex-col items-center text-center">
        {/* Hero Left Content */}
        <div className="flex flex-col items-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] uppercase max-w-3xl"
          >
            CUT YOUR CAUSTIC SODA OPEX{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500">
              BY UP TO 70%.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed font-light mx-auto"
          >
            Eliminate the logistics, safety risks, and multi-million dollar expense of purchased NaOH. Generate chemical-grade neutralizing agents on-site and on-demand.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onCalculateClick}
              className="px-8 py-4 rounded-xl bg-accent-500 hover:bg-slate-900 text-white font-sans text-sm font-bold tracking-wider shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-accent-600 hover:border-slate-800"
            >
              Calculate Your NaOH Savings
              <ArrowDown className="w-4 h-4 animate-bounce text-white" />
            </button>
            <a
              href="#technology"
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-100 hover:text-white font-sans text-sm font-semibold tracking-wider border border-white/10 hover:border-white/20 shadow-sm transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
            >
              Explore Technology
            </a>
          </motion.div>

          {/* Core Trust Indicators - Streamlined to be horizontal and low-profile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 border-t border-white/10 pt-8 w-full max-w-xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              <span className="text-xs font-mono tracking-wide text-slate-400">
                <strong className="text-white font-sans text-sm font-bold mr-1">70%</strong> Average Savings
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              <span className="text-xs font-mono tracking-wide text-slate-400">
                <strong className="text-white font-sans text-sm font-bold mr-1">Zero</strong> Handling Risk
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              <span className="text-xs font-mono tracking-wide text-slate-400">
                <strong className="text-white font-sans text-sm font-bold mr-1">100%</strong> Uptime Support
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant Fade Out Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070708] to-transparent pointer-events-none" />
    </section>
  );
}
