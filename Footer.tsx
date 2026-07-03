/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Droplet, Mail, Phone, ShieldCheck, MapPin } from "lucide-react";
import LogoIcon from "./LogoIcon";

export default function Footer() {
  return (
    <footer className="bg-[#070708] border-t border-white/10 pt-16 pb-12 relative overflow-hidden backdrop-blur-xl">
      {/* Background Highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(0,128,128,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start pb-12 border-b border-white/10 text-left">
          
          {/* Col 1: Corporate description */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <LogoIcon className="w-8 h-8 text-white shrink-0" />
              <div className="flex flex-col">
                <span className="font-display text-base font-bold tracking-wide text-white leading-none mb-0.5">
                  Hydrology
                </span>
                <span className="font-sans text-[9px] tracking-wider text-white/80 font-medium leading-none">
                  pH Control Systems
                </span>
              </div>
            </div>
            <p className="font-sans text-xs text-slate-450 font-light leading-relaxed max-w-sm">
              The Hydrology Process Platform integrates on-site molecular water catalytic reorganization and advanced electrochemical separation to synthesize high-purity chemical NaOH, completely bypassing chemical supply chains.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[9px] text-slate-300 font-bold uppercase tracking-widest mb-4">
              SYSTEM SECTIONS
            </h4>
            <div className="flex flex-col gap-3 font-sans text-xs text-slate-400 font-light">
              <a href="#home" className="hover:text-primary-400 transition-colors">Home</a>
              <a href="#technology" className="hover:text-primary-400 transition-colors">Process Platform Technology</a>
              <a href="#how-it-works" className="hover:text-primary-400 transition-colors">Schematic Walkthrough</a>
              <a href="#applications" className="hover:text-primary-400 transition-colors">Market Applications</a>
              <a href="#calculator" className="hover:text-primary-400 transition-colors">Financial ROI Tool</a>
            </div>
          </div>

          {/* Col 3: Secure Contacts */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <h4 className="font-mono text-[9px] text-slate-300 font-bold uppercase tracking-widest mb-2">
              SECURE CONTACT & LOCATIONS
            </h4>
            
            <div className="flex items-center gap-3 font-sans text-xs text-slate-400">
              <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <a href="mailto:Support@hydrologysystems.com" className="hover:text-primary-400 transition-colors">
                Support@hydrologysystems.com
              </a>
            </div>

            <div className="flex items-center gap-3 font-sans text-xs text-slate-400">
              <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <a href="tel:949-478-2029" className="hover:text-primary-400 transition-colors">
                949-478-2029
              </a>
            </div>

            <div className="flex items-center gap-3 font-sans text-xs text-slate-500 font-light">
              <MapPin className="w-4 h-4 text-slate-600 flex-shrink-0" />
              <span>Irvine, California · Registered US Industrial Supplier</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright and security validation */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>© Copyright 2026. Hydrology Systems. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
