import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] pt-28 overflow-hidden">
      {/* Animated gradient aura background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-30 blur-3xl" style={{
          background: 'radial-gradient(closest-side, rgba(0,180,216,0.35), rgba(0,119,255,0.25), rgba(94,96,206,0.15), transparent)'
        }} />
      </div>

      {/* Spline scene */}
      <div className="absolute inset-0"> 
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/10 backdrop-blur">
            AI-first SaaS • Fast • Reliable
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Turn Any Website into an AI Chatbot.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-3xl mx-auto">
            Scrapify scrapes your website or documents and builds a custom, intelligent chatbot — ready to embed anywhere.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#00B4D8] via-[#0077FF] to-[#5E60CE] shadow-[0_0_25px_rgba(0,180,216,0.45)] hover:shadow-[0_0_40px_rgba(0,119,255,0.5)] transition">
              Generate My Chatbot
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur transition">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Floating particles/circuits */}
        <div className="pointer-events-none absolute inset-0">
          <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00B4D8"/>
                <stop offset="50%" stopColor="#0077FF"/>
                <stop offset="100%" stopColor="#5E60CE"/>
              </linearGradient>
            </defs>
            {Array.from({ length: 12 }).map((_, i) => (
              <circle key={i} cx={Math.random() * 900} cy={Math.random() * 900} r={Math.random() * 2 + 1} stroke="url(#grad1)" strokeWidth="1" />
            ))}
            <path d="M50 300 C 200 200, 350 400, 500 300 S 800 400, 850 300" stroke="url(#grad1)" strokeWidth="1.2" opacity=".6" />
            <path d="M70 500 C 220 600, 370 450, 520 520 S 820 520, 880 480" stroke="url(#grad1)" strokeWidth="1.2" opacity=".4" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
