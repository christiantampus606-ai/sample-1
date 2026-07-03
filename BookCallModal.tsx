/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Mail, Building, Phone, CheckCircle2, Shield, Send } from "lucide-react";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  roiSummary?: string;
}

export default function BookCallModal({ isOpen, onClose, roiSummary }: BookCallModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(roiSummary || "");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate high-end backend dispatching
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md"
        >
          {/* Main Card */}
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-lg bg-white/90 border border-white/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left"
          >
            {/* Corner highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-start mb-6 pb-4 border-b border-slate-200">
              <div>
                <span className="font-mono text-[9px] text-primary-600 font-bold uppercase tracking-widest mb-1.5 block">
                  TECHNICAL INQUIRY PLATFORM
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Schedule Engineering Consult
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-250 flex items-center justify-center text-emerald-600 mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
                  Proposal Request Logged
                </h4>
                <p className="font-sans text-xs text-slate-600 font-light max-w-xs leading-relaxed mb-8">
                  An expert Hydrology engineer will review your facility parameters and reach out to your corporate address within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setName("");
                    setEmail("");
                    setCompany("");
                    setPhone("");
                    setMessage("");
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 font-sans text-xs font-bold tracking-wider border border-slate-200 hover:border-slate-300 transition-all cursor-pointer shadow-sm"
                >
                  Return to Platform
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-[9px] text-slate-500 font-semibold uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-white border border-slate-250 rounded-lg text-slate-800 font-sans text-xs focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all shadow-sm"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                  </div>

                  {/* Corporate Email */}
                  <div>
                    <label className="block font-mono text-[9px] text-slate-500 font-semibold uppercase tracking-wider mb-1.5">
                      Corporate Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2.5 bg-white border border-slate-250 rounded-lg text-slate-800 font-sans text-xs focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all shadow-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div>
                    <label className="block font-mono text-[9px] text-slate-500 font-semibold uppercase tracking-wider mb-1.5">
                      Company / Facility Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3 py-2.5 bg-white border border-slate-250 rounded-lg text-slate-800 font-sans text-xs focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all shadow-sm"
                        placeholder="e.g. Chevron Refinery"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-mono text-[9px] text-slate-500 font-semibold uppercase tracking-wider mb-1.5">
                      Corporate Phone
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2.5 bg-white border border-slate-250 rounded-lg text-slate-800 font-sans text-xs focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all shadow-sm"
                        placeholder="949-478-2029"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-[9px] text-slate-500 font-semibold uppercase tracking-wider mb-1.5">
                    Project / Facility Specifications & Notes
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 bg-white border border-slate-250 rounded-lg text-slate-800 font-sans text-xs focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all resize-none shadow-sm"
                    placeholder="Describe your current chemical feed, volume, and target pH goals..."
                  />
                </div>

                {/* Privacy and Security Warning */}
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-150 text-[10px] text-slate-500 font-mono leading-relaxed">
                  <Shield className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>All industrial telemetry, flow data, and commercial site indicators are encrypted under strictly private NDA protocols.</span>
                </div>

                {/* Action CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-accent-500 hover:bg-slate-950 text-white font-sans text-xs font-bold tracking-wider shadow-lg shadow-accent-500/15 cursor-pointer text-center flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-accent-600 hover:border-slate-950"
                >
                  {loading ? (
                    <span>DISPATCHING REQUEST...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      SUBMIT SECURE SPECIFICATION REQUEST
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
