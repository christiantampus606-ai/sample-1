/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Award, Briefcase, History, Scale, ShieldCheck } from "lucide-react";

export default function Expertise() {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-transparent border-t border-white/10">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-lighten select-none">
        <img 
          src="/src/assets/images/filtration_array_clean_1782937619957.jpg" 
          alt="Hydrology Industrial Filtration Core" 
          width={1920}
          height={1280}
          loading="lazy"
          className="w-full h-full object-cover grayscale brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070708] via-transparent to-[#070708]" />
      </div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_left,rgba(0,128,128,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left text column: 6 cols */}
          <div className="lg:col-span-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary-450 font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-3"
            >
              ENGINEERING CREDENTIALS & COMPLIANCE
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6 uppercase"
            >
              Our Expertise & Commitment
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4"
            >
              Our team brings over 60 years of combined experience in industrial water purification, high-pH technology, and industrial processes. We combine deep knowledge of regulatory compliance with a specialization in proprietary Hydroxide Catalyst Reactor (HCR) technology.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-xs sm:text-sm text-slate-400 font-normal leading-relaxed"
            >
              This HCR is integrated with an advanced electrochemical separation process, creating an efficient, closed-loop system for on-site NaOH production. We have been developing this pH control platform since 2015, leveraging our prior success in commercial and consumer alkaline pH water brands.
            </motion.p>

            {/* Micro badges showing regulatory and engineering strengths */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary-950/25 border border-primary-900/30 text-primary-400 shadow-sm shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-slate-200 mb-1">Strict Compliance</h4>
                  <p className="font-sans text-[11px] text-slate-450 font-normal leading-snug">Engineered to meet EPA & state wastewater discharge regulations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary-950/25 border border-primary-900/30 text-primary-400 shadow-sm shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-slate-200 mb-1">60+ Years Combined</h4>
                  <p className="font-sans text-[11px] text-slate-450 font-normal leading-snug">Experienced team specializing in water treatment engineering.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual column: high-end industrial visual grid/collage - 6 cols */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Decorative accent behind the grid */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500/5 to-transparent rounded-3xl filter blur-xl opacity-50 pointer-events-none" />

              {/* Large vertical image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="row-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 shadow-2xl aspect-[3/4]"
              >
                <img 
                  src="/src/assets/images/chemical_plant_clean_1782937607997.jpg" 
                  alt="Hydrology chemical-grade production unit" 
                  width={600}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Top horizontal image */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 shadow-2xl aspect-[4/3]"
              >
                <img 
                  src="/src/assets/images/filtration_array_clean_1782937619957.jpg" 
                  alt="Industrial HCR purification array" 
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Bottom horizontal image */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 shadow-2xl aspect-[4/3]"
              >
                <img 
                  src="/src/assets/images/refinery_equipment_bg_1782937594866.jpg" 
                  alt="Hydrology Systems field deployment" 
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
