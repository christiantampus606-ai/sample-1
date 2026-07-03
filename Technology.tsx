/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, ShieldCheck, Activity, Cpu, Play, Check, X, FileText, Database } from "lucide-react";

export default function Technology() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const advantages = [
    {
      title: "Guaranteed pH 12 Output",
      desc: "Our blended system is engineered to match or exceed the neutralizing power of traditional Baumé 20 caustic mix for absolute wastewater treatment reliability.",
      icon: Zap,
      detail: "Reliable, high-potency neutralization specifically calibrated to match industrial specifications.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "100% Operational Uptime",
      desc: "On-site production uses proprietary chemical precursors and water to create NaOH, ensuring an uninterrupted supply that eliminates risk from vendor failure or logistics delays.",
      icon: ShieldCheck,
      detail: "Bypasses external distribution networks to guarantee continuous automated delivery.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Superior Compliance & Consistency",
      desc: "Automated, precise pH control minimizes fluctuations, protecting your discharge permit and reducing the risk of costly environmental fines.",
      icon: Activity,
      detail: "Constantly logs output pH values with microsecond frequency to provide total compliance data.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const videos = [
    {
      id: "nHc9g0SmMek",
      title: "Hydrology Systems Equipment Tour",
      duration: "2:14",
      type: "Equipment Tour",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "7DYzEgF0Gog",
      title: "On-Site Operational Demonstration",
      duration: "1:45",
      type: "Operational Proof",
      thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "plc-automation",
      title: "PLC Smart pH Calibration",
      duration: "1:50",
      type: "Software & Control Systems",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="technology" className="relative py-24 sm:py-32 bg-transparent border-t border-white/10">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none mix-blend-lighten select-none">
        <img 
          src="/src/assets/images/filtration_array_clean_1782937619957.jpg" 
          alt="High-Tech Water Filtration Membrane Array" 
          width={1920}
          height={1280}
          loading="lazy"
          className="w-full h-full object-cover grayscale brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070708] via-transparent to-[#070708]" />
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(0,128,128,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-left max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary-400 font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-3"
          >
            TECHNOLOGY: THE HYDROLOGY PROCESS PLATFORM
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
          >
            HYDRAULIC pH POWER: Cleaner, Safer, Cheaper
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl"
          >
            Hydrology Systems integrates proprietary Hydroxide Catalyst Reactor (HCR) with high-efficiency Electrochemical Hydroxide Generator (EHG) Module to generate a potent neutralizing agent from readily available source water. We bypass the supply chain to provide continuous, automated pH stability.
          </motion.p>
        </div>

        {/* Key System Advantages Grid */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-slate-450 uppercase mb-8 font-bold text-left"
          >
            KEY SYSTEM ADVANTAGES
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 hover:bg-white/10 transition-all duration-300 group shadow-2xl shadow-black/50 text-left overflow-hidden"
                >
                  <div className="relative w-full aspect-video overflow-hidden border-b border-white/10">
                    <img 
                      src={adv.image} 
                      alt={adv.title}
                      className="w-full h-full object-cover grayscale brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="w-10 h-10 rounded-lg bg-primary-950/30 border border-primary-900/50 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-500 transition-all duration-300 mb-4">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-base font-bold text-slate-100 mb-2">
                          {adv.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                          {adv.desc}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-primary-400 mt-auto border-t border-white/5 pt-3">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span>{adv.detail}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Video & Photo Gallery Section */}
        <div className="border-t border-white/10 pt-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                SYSTEM MODULE OPERATIONS & FOOTAGE
              </h3>
              <p className="font-sans text-xs text-slate-400 font-light max-w-xl">
                Observe on-site equipment operation, core catalyst modules, and structural walkthroughs from client facility deployments.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400 font-semibold">
              <Database className="w-4 h-4 text-slate-500" />
              SECURE DEPLOYMENT FOOTAGE
            </div>
          </motion.div>

          {/* Grid of 3 Videos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((vid, idx) => (
              <motion.div
                key={vid.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedVideo(vid.id)}
                className="group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden cursor-pointer hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-2xl shadow-black/50"
              >
                {/* Thumbnail image with dark overlay */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-300" />
                  
                  {/* Play Button Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/90 border border-white/10 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-500 transition-all duration-300">
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  </div>

                  {/* Video Duration */}
                  <span className="absolute bottom-3 right-3 font-mono text-[9px] text-white bg-slate-950/90 px-1.5 py-0.5 rounded border border-white/10">
                    {vid.duration}
                  </span>
                </div>

                {/* Card Description */}
                <div className="p-4 text-left">
                  <span className="font-mono text-[8px] text-primary-400 font-bold uppercase tracking-widest mb-1.5 block">
                    {vid.type}
                  </span>
                  <h4 className="font-display text-sm font-bold text-slate-200 group-hover:text-primary-400 transition-colors">
                    {vid.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Modern Lightbox Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-4xl bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors z-10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player Window */}
              <div className="aspect-[16/9] w-full bg-slate-950 relative">
                {selectedVideo === "nHc9g0SmMek" || selectedVideo === "7DYzEgF0Gog" ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 relative">
                    {/* Background image styled as a camera look */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                      <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                        alt="Industrial"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter blur-[2px]"
                      />
                    </div>

                    <div className="relative z-10 max-w-lg">
                      <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-primary-400 mx-auto mb-6 shadow-sm">
                        <Activity className="w-8 h-8 animate-pulse" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-3">
                        {videos.find((v) => v.id === selectedVideo)?.title}
                      </h3>
                      <p className="font-sans text-sm text-slate-300 font-light mb-6">
                        To schedule a live on-site telemetry demonstration or secure direct live video access, please request a secure credential packet.
                      </p>
                      <button
                        onClick={() => {
                          setSelectedVideo(null);
                          const el = document.getElementById("calculator");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-slate-900 text-white font-sans text-xs font-bold tracking-wider transition-all duration-300 shadow-lg shadow-primary-500/10 cursor-pointer border border-primary-700 hover:border-slate-800"
                      >
                        Request Telemetry Packet
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
