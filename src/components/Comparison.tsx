/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ShieldAlert, ShieldCheck, Flame, AlertTriangle, HelpCircle } from "lucide-react";

export default function Comparison() {
  const comparisonPairs = [
    {
      dimension: "FINANCIAL IMPACT",
      risk: {
        title: "Excessive Chemical OPEX",
        desc: "Multi-million dollar annual expense on caustic chemical procurement, bulk logistics, and specialized chemical storage.",
        icon: ShieldAlert,
        iconColor: "text-rose-400 bg-rose-500/10 border-rose-500/20"
      },
      advantage: {
        title: "Recover Up to 70% Instantly",
        desc: "Slash operating costs immediately. Generate chemical-grade alkalinity on-site using only water and electricity.",
        icon: ShieldCheck,
        iconColor: "text-emerald-450 bg-primary-600/15 border-primary-500/30"
      }
    },
    {
      dimension: "PROCESS ACCURACY",
      risk: {
        title: "Inconsistent Concentration Mixing",
        desc: "Up to 15% concentration variance due to transportation decay, manual mixing, spills, and sluggish manual controls.",
        icon: Flame,
        iconColor: "text-rose-400 bg-rose-500/10 border-rose-500/20"
      },
      advantage: {
        title: "Automated PLC Blending",
        desc: "High-precision automated PLC blending delivers consistent, safe pH adjustment with zero wasted chemical volume.",
        icon: ShieldCheck,
        iconColor: "text-emerald-450 bg-primary-600/15 border-primary-500/30"
      }
    },
    {
      dimension: "FACILITY SAFETY",
      risk: {
        title: "Hazardous Bulk Chemical Handling",
        desc: "Ongoing team risk of chemical burns, toxic gas release, and complex containment compliance audits.",
        icon: AlertTriangle,
        iconColor: "text-rose-400 bg-rose-500/10 border-rose-500/20"
      },
      advantage: {
        title: "Zero Handling Hazards",
        desc: "Solution is generated safely on-demand and delivered directly to target streams. No bulk handling required.",
        icon: ShieldCheck,
        iconColor: "text-emerald-450 bg-primary-600/15 border-primary-500/30"
      }
    },
    {
      dimension: "SUPPLY STABILITY",
      risk: {
        title: "Unpredictable Supply Chains",
        desc: "Vulnerability to high chemical vendor markup, delivery freight bottlenecks, and unexpected factory downtime.",
        icon: HelpCircle,
        iconColor: "text-rose-400 bg-rose-500/10 border-rose-500/20"
      },
      advantage: {
        title: "On-Site Operational Autonomy",
        desc: "Lock in steady, highly predictable operational cost baselines completely isolated from global market price shocks.",
        icon: ShieldCheck,
        iconColor: "text-emerald-450 bg-primary-600/15 border-primary-500/30"
      }
    }
  ];

  return (
    <section id="comparison" className="relative py-16 sm:py-24 bg-transparent overflow-hidden border-t border-white/10">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-lighten select-none">
        <img 
          src="/src/assets/images/refinery_equipment_bg_1782937594866.jpg" 
          alt="Refinery Chemical Filtration and Generation Equipment Background" 
          width={1920}
          height={1280}
          loading="lazy"
          className="w-full h-full object-cover grayscale brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070708] via-transparent to-[#070708]" />
      </div>

      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(circle,rgba(0,128,128,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary-400 font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-3"
          >
            FINANCIAL IMPACT & OPERATIONAL EFFICIENCY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 uppercase"
          >
            Traditional Caustic vs. Hydrology On-Site
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-slate-450 font-normal leading-relaxed"
          >
            Compare the operational and financial challenges of bulk chemical logistics with the automated safety and predictable cost of on-site pH control.
          </motion.p>
        </div>

        {/* Master Comparison Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-xl overflow-hidden shadow-2xl"
        >
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/10 bg-white/5">
            {/* Left Header */}
            <div className="p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono text-[8px] sm:text-[9px] tracking-wider text-rose-400 font-bold uppercase block mb-1">THE TRADITIONAL RISK</span>
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-200">Bulk Caustic Procurement</h3>
              </div>
              <span className="text-[10px] font-mono text-rose-400 bg-rose-500/5 px-2.5 py-1 rounded-md border border-rose-500/10 uppercase font-semibold">High Cost</span>
            </div>
            {/* Right Header */}
            <div className="p-5 sm:p-6 flex items-center justify-between bg-primary-950/15">
              <div>
                <span className="font-mono text-[8px] sm:text-[9px] tracking-wider text-primary-400 font-bold uppercase block mb-1">THE HYDROLOGY ADVANTAGE</span>
                <h3 className="font-display text-base sm:text-lg font-bold text-white">On-Site Generation System</h3>
              </div>
              <span className="text-[10px] font-mono text-primary-400 bg-primary-500/10 px-2.5 py-1 rounded-md border border-primary-500/20 uppercase font-semibold">Eco & Safe</span>
            </div>
          </div>

          {/* Body Rows */}
          <div className="divide-y divide-white/10">
            {comparisonPairs.map((pair, index) => {
              const RiskIcon = pair.risk.icon;
              const AdvIcon = pair.advantage.icon;

              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 hover:bg-white/[0.01] transition-colors duration-200">
                  {/* Row Dimension Header spanning full width */}
                  <div className="col-span-full bg-slate-950/60 px-5 sm:px-6 py-3 border-b border-white/5 flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-slate-300 font-bold uppercase">
                      {pair.dimension}
                    </span>
                  </div>

                  {/* Left Column (Risk) */}
                  <div className="p-5 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex gap-4 items-start text-left">
                    <div className={`p-2.5 rounded-lg shrink-0 ${pair.risk.iconColor} border border-white/5 shadow-inner`}>
                      <RiskIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm sm:text-base font-bold text-slate-200 mb-1.5">{pair.risk.title}</h4>
                      <p className="font-sans text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">{pair.risk.desc}</p>
                    </div>
                  </div>

                  {/* Right Column (Advantage) */}
                  <div className="p-5 sm:p-6 lg:p-8 flex gap-4 items-start text-left bg-primary-950/5">
                    <div className={`p-2.5 rounded-lg shrink-0 ${pair.advantage.iconColor} border border-white/5 shadow-inner`}>
                      <AdvIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm sm:text-base font-bold text-white mb-1.5">{pair.advantage.title}</h4>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">{pair.advantage.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom summary card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
        >
          <div className="max-w-2xl text-left">
            <h4 className="font-display text-sm sm:text-base font-bold text-white mb-1">
              Ready to verify the math for your exact facility?
            </h4>
            <p className="font-sans text-xs text-slate-400 font-normal leading-relaxed">
              We model savings on actual system flow-rates, chemical supply contract metrics, and utility pricing specific to your coordinates.
            </p>
          </div>
          <a
            href="#calculator"
            className="px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-[#0c0c0e] text-white font-sans text-xs font-bold tracking-wider transition-all duration-300 whitespace-nowrap shadow-lg shadow-primary-500/10 cursor-pointer border border-primary-700 hover:border-white/15"
          >
            Go to ROI Calculator
          </a>
        </motion.div>

      </div>
    </section>
  );
}
