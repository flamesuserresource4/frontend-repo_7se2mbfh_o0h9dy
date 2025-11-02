import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0F172A]/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Gradient S logo */}
          <div className="relative h-8 w-8 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00B4D8] via-[#0077FF] to-[#5E60CE]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-extrabold text-lg">S</span>
            </div>
          </div>
          <span className="text-white font-semibold tracking-wide">Scrapify</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 text-slate-200/90 hover:text-white transition">
            <Sparkles className="h-4 w-4" />
            <span>Watch Demo</span>
          </button>
          <button className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-[#00B4D8] via-[#0077FF] to-[#5E60CE] shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:shadow-[0_0_30px_rgba(0,119,255,0.45)] transition">
            Generate My Chatbot
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
