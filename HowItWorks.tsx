/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-transparent overflow-hidden border-t border-white/10">
      {/* Decorative background grids & lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[radial-gradient(circle_at_right,rgba(0,128,128,0.03),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle_at_left,rgba(234,119,4,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-400 font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-3"
          >
            PROCESS SCHEMATIC
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-slate-400 font-light"
          >
            A perfect, professional visualization of our closed-loop water treatment and automated pH neutralization process flow.
          </motion.p>
        </div>

        {/* Process Diagram Display area */}
        <div className="max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-white/10 bg-slate-950/45 p-4 sm:p-6 shadow-2xl overflow-hidden flex items-center justify-center"
          >
            {/* Tech grid background overlay */}
            <div 
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                backgroundSize: "40px 40px"
              }}
            />
            
            <img
              src="/src/assets/images/neutralize_acidic_process_diagram_1783017030631.jpg"
              alt="Hydrology Systems Neutralize Acidic Process flow diagram"
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-auto object-cover max-h-[520px] rounded-xl border border-white/5 bg-[#08090a]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Global Process Summary text always visible at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center max-w-4xl mx-auto shadow-2xl shadow-black/50 mt-8"
        >
          <p className="font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            The Hydrology Process Platform transforms readily available site water into a high-purity neutralizing agent via our proprietary Hydroxide Catalyst Reactor (HCR) and Electrochemical Hydroxide Generator (EHG) Module. This closed-loop system provides precise, adjustable pH control (7-12) on demand, eliminating the need for hazardous bulk caustic chemicals.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
