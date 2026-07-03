/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Drill, Wine, Sprout, Factory, ArrowUpRight } from "lucide-react";

export default function Applications() {
  const industries = [
    {
      id: "drilling",
      title: "Drilling",
      subtitle: "Lithium Extraction, Onshore/Offshore",
      desc: "Maintain precise pH levels during drilling operations and high-purity lithium brine extraction without the logistics burden of hauling dry or bulk chemicals to remote locations.",
      icon: Drill,
      bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600",
      accent: "from-blue-600/20 to-indigo-600/5"
    },
    {
      id: "food-beverage",
      title: "Food & Beverage",
      subtitle: "Food and Beverage Production",
      desc: "Clean-in-place (CIP) line flushing, automated sanitation, and biological food wastewater neutralization using food-grade equivalent on-site generated NaOH.",
      icon: Wine,
      bgImage: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=600",
      accent: "from-amber-600/20 to-orange-600/5"
    },
    {
      id: "agriculture",
      title: "Agriculture",
      subtitle: "pH Correction for Hydroponics, Cannabis & Hemp",
      desc: "Continuous, automated water neutralization and micro-dosed pH stability for large-scale indoor growing structures, greenhouses, and commercial hydroponic feeds.",
      icon: Sprout,
      bgImage: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=600",
      accent: "from-emerald-600/20 to-teal-600/5"
    },
    {
      id: "general-industrial",
      title: "General Industrial",
      subtitle: "Wastewater Treatment, Cooling Towers, Bulk Replacement",
      desc: "Replace standard chemical supplier contracts for cooling tower de-scaling, boiler feeds, and heavy municipal/industrial wastewater effluent control.",
      icon: Factory,
      bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600",
      accent: "from-cyan-600/20 to-sky-600/5"
    }
  ];

  return (
    <section id="applications" className="relative py-24 sm:py-32 bg-transparent overflow-hidden border-t border-white/10">
      {/* Section Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-lighten select-none">
        <img 
          src="/src/assets/images/chemical_plant_clean_1782937607997.jpg" 
          alt="Hydrology Industrial Clean Chemical System Backdrop" 
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-cover grayscale brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070708] via-transparent to-[#070708]" />
      </div>

      {/* Background visual highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(circle,rgba(0,128,128,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-400 font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-3"
          >
            VERSATILE DEPLOYMENT MARKETS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
          >
            APPLICATIONS BEYOND REFINERIES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-slate-400 font-light"
          >
            Proven reliability across heavy extraction, food sanitation, and specialized agrotech facilities
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 hover:bg-[#0c0c0e]/85 transition-all duration-500 overflow-hidden flex flex-col justify-end p-8 min-h-[340px] shadow-2xl shadow-black/50 cursor-pointer"
              >
                {/* Background image styled with rich dark gradient overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={ind.bgImage}
                    alt={ind.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-15 group-hover:opacity-30 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Subtle dynamic background gradient overlay colored matching index */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/95 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Content over image */}
                <div className="relative z-10 text-left flex flex-col items-start w-full">
                  {/* Floating index identifier / Icon bubble */}
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center text-primary-400 group-hover:border-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-[9px] text-primary-400 font-bold uppercase tracking-widest mb-1">
                    {ind.subtitle}
                  </span>

                  <h3 className="font-display text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    {ind.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-primary-400" />
                  </h3>

                  <p className="font-sans text-xs text-slate-300 font-light leading-relaxed max-w-md">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
