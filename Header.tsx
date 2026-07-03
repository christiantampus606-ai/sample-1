/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Droplet, Phone, MessageSquare, ChevronDown } from "lucide-react";
import LogoIcon from "./LogoIcon";

interface HeaderProps {
  onBookCallClick: () => void;
}

export default function Header({ onBookCallClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileApplicationsOpen, setMobileApplicationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "TECHNOLOGY", href: "#technology" },
    { label: "APPLICATION", href: "#applications" },
    { label: "ABOUT US", href: "#about" },
  ];

  const dropdownOptions = [
    { label: "Lithium Extraction", href: "#applications" },
    { label: "Onshore/Offshore Drilling", href: "#applications" },
    { label: "Hydroponics - Cannabis", href: "#applications" },
    { label: "Waste Water Treatment", href: "#applications" },
    { label: "Food & Beverage", href: "#applications" },
    { label: "General Manufacturing", href: "#applications" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsDropdownOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/75 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg shadow-black/40"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <LogoIcon className="w-10 h-10 text-white group-hover:scale-105 transition-transform duration-300 shrink-0" />
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-wide text-white leading-none mb-0.5">
                Hydrology
              </span>
              <span className="font-sans text-[10px] tracking-wider text-white/80 font-medium leading-none">
                pH Control Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.label === "APPLICATION") {
                return (
                  <div
                    key={item.label}
                    className="relative py-2"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      onClick={(e) => handleNavClick(e as any, item.href)}
                      className="font-sans text-xs font-semibold tracking-wider text-slate-300 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                    >
                      {item.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-primary-400" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 rounded-xl border border-white/10 bg-[#0c0c0e]/95 backdrop-blur-2xl p-2 shadow-2xl shadow-black/85 z-50 flex flex-col gap-0.5"
                        >
                          {dropdownOptions.map((opt) => (
                            <a
                              key={opt.label}
                              href={opt.href}
                              onClick={(e) => handleNavClick(e, opt.href)}
                              className="px-3 py-2 text-[11px] font-semibold font-sans tracking-wider text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-150 text-left"
                            >
                              {opt.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-xs font-semibold tracking-wider text-slate-300 hover:text-primary-400 transition-colors duration-200 relative py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://calendly.com/christiantampus606/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-accent-500 text-slate-200 hover:text-white font-sans text-xs font-bold tracking-wider transition-all duration-300 border border-white/10 hover:border-accent-600 shadow-md flex items-center gap-2 cursor-pointer backdrop-blur-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              BOOK A CALL
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-black/95 backdrop-blur-2xl border-b border-white/10 md:hidden flex flex-col px-6 py-8 justify-between h-[calc(100vh-72px)]"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => {
                if (item.label === "APPLICATION") {
                  return (
                    <div key={item.label} className="flex flex-col">
                      <button
                        onClick={() => setMobileApplicationsOpen(!mobileApplicationsOpen)}
                        className="font-display text-xl font-bold tracking-wide text-white hover:text-primary-400 py-2 flex items-center justify-between w-full text-left"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 text-slate-400 ${mobileApplicationsOpen ? "rotate-180 text-primary-400" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileApplicationsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 flex flex-col gap-3 mt-1 border-l border-white/10"
                          >
                            {dropdownOptions.map((opt) => (
                              <a
                                key={opt.label}
                                href={opt.href}
                                onClick={(e) => handleNavClick(e, opt.href)}
                                className="font-sans text-sm font-semibold text-slate-400 hover:text-primary-400 py-1"
                              >
                                {opt.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-display text-xl font-bold tracking-wide text-white hover:text-primary-400 py-2"
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-col gap-4 border-t border-white/10 pt-8"
            >
              <a
                href="https://calendly.com/christiantampus606/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white font-sans text-sm font-bold tracking-wider shadow-md shadow-accent-500/15 cursor-pointer text-center block"
              >
                BOOK A CALL
              </a>
              <div className="flex justify-between text-xs text-slate-400 font-mono mt-4">
                <span>Support@hydrologysystems.com</span>
                <span>949-478-2029</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
