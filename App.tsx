/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import Technology from "./components/Technology";
import HowItWorks from "./components/HowItWorks";
import Expertise from "./components/Expertise";
import Applications from "./components/Applications";
import RoiCalculator from "./components/RoiCalculator";
import BookCallModal from "./components/BookCallModal";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [roiSummaryText, setRoiSummaryText] = useState("");

  const handleBookCallClick = () => {
    setRoiSummaryText("");
    setIsBookCallOpen(true);
  };

  const handleBookWithRoi = (summary: string) => {
    setRoiSummaryText(summary);
    setIsBookCallOpen(true);
  };

  const handleCalculateClick = () => {
    const el = document.getElementById("calculator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#070708] min-h-screen text-slate-100 font-sans selection:bg-primary-600 selection:text-white relative overflow-hidden">
      {/* Custom Cursor for Desktop viewports */}
      <CustomCursor />

      {/* Absolute Decorative Ambient Glow Circles for Frosted Glass Backdrop */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary-800/10 rounded-full blur-[120px] opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-accent-950/10 rounded-full blur-[130px] opacity-30 pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[140px] opacity-35 pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-accent-900/5 rounded-full blur-[100px] opacity-25 pointer-events-none -z-10" />

      {/* Premium Sticky Navigation Header */}
      <Header onBookCallClick={handleBookCallClick} />

      <main>
        {/* Hero Banner Section */}
        <Hero onCalculateClick={handleCalculateClick} />

        {/* Financial impact and comparison dashboard: STOP FLUSHING CAPITAL */}
        <Comparison />

        {/* Process Technology Overview & Facility Video Walkthroughs */}
        <Technology />

        {/* Interactive Schematic Diagram: How It Works */}
        <HowItWorks />

        {/* Corporate Credentials, experience overview, and milestone timeline */}
        <Expertise />

        {/* Diversified Market Applications Bento Grid */}
        <Applications />

        {/* Interactive Interactive ROI Calculator Panel */}
        <RoiCalculator onBookWithRoi={handleBookWithRoi} />
      </main>

      {/* Corporate Info & Security footer */}
      <Footer />

      {/* Dynamic Scheduling Consultation Modal */}
      <BookCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
        roiSummary={roiSummaryText}
      />
    </div>
  );
}
