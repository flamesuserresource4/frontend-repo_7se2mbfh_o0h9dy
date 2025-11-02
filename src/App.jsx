import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        {/* Footer inline to keep total components at 4 */}
        <footer className="border-t border-white/10 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-[#00B4D8] via-[#0077FF] to-[#5E60CE]" />
              <span className="text-white/90">Scrapify</span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-slate-300/80">
              <a href="#how" className="hover:text-white transition">How it works</a>
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
            </nav>
            <p className="text-sm text-slate-400">Built with 💙 by Scrapify</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
