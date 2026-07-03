/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, ChevronRight, Info, ShieldCheck, Sparkles, Leaf, Truck, FileDown, AlertTriangle } from "lucide-react";

interface RoiCalculatorProps {
  onBookWithRoi: (summary: string) => void;
}

export default function RoiCalculator({ onBookWithRoi }: RoiCalculatorProps) {
  // Input states - initialized with user's recommended defaults
  const [volumeInput, setVolumeInput] = useState<string>("1000000");
  const [costInput, setCostInput] = useState<string>("1.08");
  const [concentration, setConcentration] = useState<string>("20° Baumé or 9.0 pH");
  const [flowRate, setFlowRate] = useState<string>("3 GPM @ pH 9.5");

  // Output states
  const [currentOpex, setCurrentOpex] = useState<number>(1080000);
  const [hydrologyOpex, setHydrologyOpex] = useState<number>(324000);
  const [annualSavings, setAnnualSavings] = useState<number>(756000);
  const [paybackMonths, setPaybackMonths] = useState<number>(6.7);
  const [trucksEliminated, setTrucksEliminated] = useState<number>(223);
  const [co2SavedTons, setCo2SavedTons] = useState<number>(107);

  // Validation & display states
  const [hasCalculated, setHasCalculated] = useState<boolean>(true);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Currency Formatter
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Main Calculation Function - mirroring the exact logic of the HTML script
  const calculateSavings = (vStr = volumeInput, cStr = costInput, conc = concentration, flow = flowRate) => {
    const volume = parseFloat(vStr.replace(/,/g, ""));
    const cost = parseFloat(cStr);
    const concTrim = conc.trim();
    const flowTrim = flow.trim();

    // Check if ALL four fields are complete and valid:
    if (isNaN(volume) || isNaN(cost) || volume <= 0 || cost <= 0 || concTrim === "" || flowTrim === "") {
      setHasCalculated(false);
      setValidationError("All 4 parameters are required. Please input positive numeric values for volume and cost.");
      return;
    }

    setValidationError(null);

    // 1. Calculate Customer's Current Annual Spend (Baseline)
    const currentAnnualSpend = volume * cost;
    
    // 2. Dynamic HAS OPEX: Estimated at 30% of the current annual spend
    const hasAnnualOpex = currentAnnualSpend * 0.30;
    
    // 3. Estimated Net Annual Savings
    const netAnnualSavings = currentAnnualSpend - hasAnnualOpex;

    // 4. Auxiliary Metrics (hardware amortizing logic / carbon offsets)
    const capitalCost = 420000;
    const payback = netAnnualSavings > 0 ? (capitalCost / netAnnualSavings) * 12 : 0;
    const heavyTrucks = Math.ceil(volume / 4500);
    const co2 = Number((heavyTrucks * 0.48).toFixed(1));

    // Update States
    setCurrentOpex(currentAnnualSpend);
    setHydrologyOpex(hasAnnualOpex);
    setAnnualSavings(netAnnualSavings);
    setPaybackMonths(Number(payback.toFixed(1)));
    setTrucksEliminated(heavyTrucks);
    setCo2SavedTons(co2);
    setHasCalculated(true);
  };

  // Run on initial mount with defaults
  useEffect(() => {
    calculateSavings("1000000", "1.08", "20° Baumé or 9.0 pH", "3 GPM @ pH 9.5");
  }, []);

  const handleShareResults = () => {
    const volNum = parseFloat(volumeInput.replace(/,/g, "")) || 0;
    const summaryText = `ROI ESTIMATE SUMMARY: Annual Volume: ${volNum.toLocaleString()} gal, Average Cost: $${costInput}/gal, Concentration: ${concentration}, Flow Rate: ${flowRate}. Baseline spend: ${formatCurrency(currentOpex)}, Estimated HAS OPEX: ${formatCurrency(hydrologyOpex)}, Calculated Net Annual Savings: ${formatCurrency(annualSavings)} (70% savings model).`;
    onBookWithRoi(summaryText);
  };

  return (
    <section id="calculator" className="relative py-24 sm:py-32 bg-transparent overflow-hidden border-t border-white/10">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-lighten select-none">
        <img 
          src="/src/assets/images/refinery_equipment_bg_1782937594866.jpg" 
          alt="Refinery Chemical Processing Equipment" 
          width={1920}
          height={1280}
          loading="lazy"
          className="w-full h-full object-cover grayscale brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070708] via-transparent to-[#070708]" />
      </div>

      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(circle,rgba(0,128,128,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-400 font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-3"
          >
            FINANCIAL MODELING TOOL
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Calculate Your Caustic Savings ROI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-slate-400 font-light"
          >
            Determine your potential net annual savings by switching from bulk NaOH to the HAS Platform.
          </motion.p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Input Form (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/50">
              <h3 className="font-display text-base font-bold text-slate-200 mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary-400" />
                FACILITY MODEL PARAMETERS
              </h3>

              {/* Input 1: Annual volume */}
              <div className="mb-6">
                <label htmlFor="volume-input" className="block font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  1. Annual bulk caustic purchase Volume in gallons
                </label>
                <div className="relative">
                  <input
                    id="volume-input"
                    type="text"
                    value={volumeInput}
                    onChange={(e) => {
                      const raw = e.target.value.replace(/[^0-9.]/g, "");
                      setVolumeInput(raw);
                    }}
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg text-white font-sans text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all"
                    placeholder="e.g., 1,000,000"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-slate-500 font-bold uppercase">
                    Gal / Year
                  </span>
                </div>
                <span className="block text-[10px] text-slate-500 font-light mt-1.5 leading-normal">
                  Volume unit is fixed to Gallons/Year.
                </span>

                {/* Slider for Interactive adjustment */}
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={parseFloat(volumeInput.replace(/,/g, "")) || 50000}
                  onChange={(e) => {
                    const val = e.target.value;
                    setVolumeInput(val);
                    calculateSavings(val, costInput, concentration, flowRate);
                  }}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-550 mt-3"
                />
              </div>

              {/* Input 2: Average Cost */}
              <div className="mb-6">
                <label htmlFor="cost-input" className="block font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  2. Average cost per gallon ($)
                </label>
                <div className="relative">
                  <input
                    id="cost-input"
                    type="number"
                    step="0.05"
                    value={costInput}
                    onChange={(e) => {
                      setCostInput(e.target.value);
                    }}
                    className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg text-white font-sans text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all"
                    placeholder="e.g., 1.08"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-slate-500 font-bold uppercase">
                    USD / Gal
                  </span>
                </div>
                <span className="block text-[10px] text-slate-500 font-light mt-1.5 leading-normal">
                  This should include chemical cost, shipping, and handling.
                </span>

                {/* Slider for Interactive cost per gallon */}
                <input
                  type="range"
                  min="0.2"
                  max="5.0"
                  step="0.05"
                  value={parseFloat(costInput) || 0.2}
                  onChange={(e) => {
                    const val = e.target.value;
                    setCostInput(val);
                    calculateSavings(volumeInput, val, concentration, flowRate);
                  }}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-550 mt-3"
                />
              </div>

              {/* Input 3: Caustic concentration */}
              <div className="mb-6">
                <label htmlFor="concentration-input" className="block font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  3. Current caustic concentration and/or desired pH
                </label>
                <input
                  id="concentration-input"
                  type="text"
                  value={concentration}
                  onChange={(e) => setConcentration(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg text-white font-sans text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all"
                  placeholder="e.g., 20° Baumé or 9.0 pH"
                />
                <span className="block text-[10px] text-slate-500 font-light mt-1.5 leading-normal">
                  Used for technical context.
                </span>
              </div>

              {/* Input 4: Injection flow rate */}
              <div className="mb-8">
                <label htmlFor="flow-input" className="block font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  4. Current injection flow rate and pH of caustic solution
                </label>
                <input
                  id="flow-input"
                  type="text"
                  value={flowRate}
                  onChange={(e) => setFlowRate(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-lg text-white font-sans text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all"
                  placeholder="e.g., 3 GPM @ pH 9.5"
                />
                <span className="block text-[10px] text-slate-400 font-semibold mt-1.5 leading-normal text-slate-500">
                  Crucial for system sizing.
                </span>
              </div>

              {/* Manual Calculate Button */}
              <button
                onClick={() => calculateSavings()}
                className="w-full bg-primary-600 hover:bg-[#0c0c0e] text-white font-sans text-xs font-bold py-4 px-4 rounded-xl transition duration-200 shadow-xl tracking-wider cursor-pointer border border-primary-700 hover:border-white/20 uppercase"
              >
                Calculate Your Annual Savings
              </button>

              {/* Validation Error Message */}
              <AnimatePresence>
                {validationError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 rounded-xl border border-red-950 bg-red-950/20 text-red-400 flex items-start gap-2.5 text-xs font-sans leading-normal text-left"
                  >
                    <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{validationError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Output Report (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <AnimatePresence mode="wait">
              {hasCalculated ? (
                <motion.div
                  key="results-report"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/50 relative overflow-hidden flex flex-col justify-between h-full"
                >
                  {/* Dynamic light streak */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 blur-3xl pointer-events-none" />

                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-accent-400" />
                        <span className="font-mono text-[10px] text-slate-350 font-bold uppercase tracking-wider">
                          Estimated Annual Savings Forecast
                        </span>
                      </div>
                      <span className="font-mono text-[9px] text-slate-500">CONFIDENTIAL REPORT</span>
                    </div>

                    {/* Original HTML Wording 3-Box Results Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {/* Box 1: Baseline spend */}
                      <div className="p-5 rounded-xl border border-white/10 bg-[#0c0c0e]/60 text-left shadow-xl shadow-black/20">
                        <span className="font-mono text-[8px] text-slate-450 font-bold uppercase tracking-wider block mb-1">
                          Current Annual Spend (Baseline)
                        </span>
                        <h4 className="font-display text-2xl font-bold text-slate-100 tracking-tight">
                          {formatCurrency(currentOpex)}
                        </h4>
                        <span className="text-[9px] text-slate-500 block mt-1">
                          100% Volume Spend
                        </span>
                      </div>

                      {/* Box 2: HAS OPEX */}
                      <div className="p-5 rounded-xl border border-white/10 bg-[#0c0c0e]/60 text-left shadow-xl shadow-black/20">
                        <span className="font-mono text-[8px] text-slate-450 font-bold uppercase tracking-wider block mb-1">
                          Estimated HAS Annual OPEX
                        </span>
                        <h4 className="font-display text-2xl font-bold text-primary-400 tracking-tight">
                          {formatCurrency(hydrologyOpex)}
                        </h4>
                        <span className="text-[9px] text-slate-500 block mt-1">
                          Consumables & Service
                        </span>
                      </div>

                      {/* Box 3: Net Annual Savings */}
                      <div className="p-5 rounded-xl border border-accent-900/30 bg-accent-950/20 text-left shadow-xl shadow-black/20">
                        <span className="font-mono text-[8px] text-accent-400 font-bold uppercase tracking-wider block mb-1">
                          Net Annual Savings (Calculated)
                        </span>
                        <h4 className="font-display text-2xl font-bold text-accent-400 tracking-tight">
                          {formatCurrency(annualSavings)}
                        </h4>
                        <span className="text-[9px] text-accent-500 font-semibold block mt-1">
                          70% Operating Efficiency
                        </span>
                      </div>
                    </div>

                    {/* Detailed secondary indices */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 text-left border-b border-white/10 pb-8">
                      <div>
                        <span className="text-[9px] font-mono text-slate-450 uppercase block">Estimated Payback</span>
                        <span className="text-sm font-semibold text-slate-200">{paybackMonths} Months</span>
                      </div>
                      <div className="flex items-center gap-1.5 col-span-1">
                        <Truck className="w-3.5 h-3.5 text-primary-400" />
                        <div>
                          <span className="text-[9px] font-mono text-slate-450 uppercase block">Shipments Saved</span>
                          <span className="text-xs font-semibold text-slate-200">{trucksEliminated} Tankers</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 col-span-1">
                        <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                        <div>
                          <span className="text-[9px] font-mono text-slate-450 uppercase block">CO₂ Offsets</span>
                          <span className="text-xs font-semibold text-emerald-400">{co2SavedTons} Tons</span>
                        </div>
                      </div>
                    </div>

                    {/* 5-Year Cumulative Savings Graph */}
                    <div className="mb-8">
                      <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider block mb-4">
                        5-YEAR CUMULATIVE COST COMPARISON (USD)
                      </span>

                      <div className="space-y-4">
                        {/* Bulk cost bar */}
                        <div>
                          <div className="flex justify-between text-[10px] font-mono mb-1">
                            <span className="text-slate-400 font-medium">Bulk Caustic Procurement Contracts</span>
                            <span className="text-slate-300">{formatCurrency(currentOpex * 5)}</span>
                          </div>
                          <div className="w-full h-3 bg-slate-900/60 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1 }}
                              className="h-full bg-rose-500/10 border-r border-rose-500"
                            />
                          </div>
                        </div>

                        {/* Hydrology cost bar */}
                        <div>
                          <div className="flex justify-between text-[10px] font-mono mb-1">
                            <span className="text-primary-400 font-semibold">Hydrology On-Site Platform (Inc. CapEx)</span>
                            <span className="text-primary-400 font-bold">{formatCurrency(420000 + (hydrologyOpex * 5))}</span>
                          </div>
                          <div className="w-full h-3 bg-slate-900/60 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(100, ((420000 + (hydrologyOpex * 5)) / (currentOpex * 5)) * 100)}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-primary-600 to-primary-400"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[8px] font-mono text-slate-500 uppercase mt-2 tracking-wider font-semibold">
                        <span>Year 1 (CapEx Init)</span>
                        <span>Year 3</span>
                        <span>Year 5 (ROI Achieved)</span>
                      </div>
                    </div>

                    {/* Original Disclaimer Texts */}
                    <div className="bg-slate-900/40 p-4 rounded-xl border border-white/10 mb-8 text-xs leading-relaxed text-slate-350">
                      <p id="disclaimer" className="opacity-90 mb-2">
                        This calculation provides an estimate of your potential total OPEX reduction.
                      </p>
                      <p className="font-semibold opacity-100 text-slate-200">
                        The Hydrology Alkalinization System (HAS)—including annual service and consumables—typically operates at about 30% of your current caustic spend. Depending on your final system design and volume requirements, your actual net savings may range from 50% to 70%.
                      </p>
                    </div>

                  </div>

                  {/* Booking Trigger buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://calendly.com/christiantampus606/new-meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 px-6 rounded-xl bg-accent-500 hover:bg-[#0c0c0e] text-white font-sans text-xs font-bold tracking-wider shadow-lg shadow-accent-500/15 cursor-pointer text-center flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-300 border border-accent-600 hover:border-white/20 uppercase"
                    >
                      Schedule Your ROI Assessment Call
                      <ChevronRight className="w-4 h-4 text-white" />
                    </a>
                    <button
                      onClick={() => window.print()}
                      className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 font-sans text-xs font-bold tracking-wider border border-white/10 hover:border-white/20 hover:text-white shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FileDown className="w-4 h-4" />
                      PDF Summary
                    </button>
                  </div>

                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-12 rounded-2xl border border-dashed border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                >
                  <Calculator className="w-12 h-12 text-slate-500 mb-4 animate-bounce" />
                  <h4 className="font-display text-lg font-bold text-slate-200 mb-2">Awaiting Parameters</h4>
                  <p className="font-sans text-sm text-slate-400 max-w-sm mb-6">
                    Please provide your bulk volume, average cost per gallon, concentration, and injection flow rate to view your complete multi-year ROI savings report.
                  </p>
                  <button
                    onClick={() => calculateSavings()}
                    className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-sans text-xs font-bold rounded-lg shadow-md uppercase tracking-wider"
                  >
                    Calculate Now
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
