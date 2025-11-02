import React from 'react';
import { motion } from 'framer-motion';
import { Globe, FileText, Cpu, MessageSquare, Key, RefreshCw, BarChart3, ArrowRight } from 'lucide-react';

const featureItems = [
  {
    icon: Globe,
    title: 'Website + Document Scraping',
    desc: 'Ingest URLs and upload files. We parse, clean, and structure the content for rich, reliable answers.'
  },
  {
    icon: Cpu,
    title: 'Google AI + Groq Integration',
    desc: 'Choose blazing-fast inference with Groq or high-accuracy models with Google AI, all abstracted for you.'
  },
  {
    icon: MessageSquare,
    title: 'Embeddable Chat Widget',
    desc: 'Drop-in widget with brandable gradients, shortcuts, and keyboard navigation for instant UX.'
  },
  {
    icon: Key,
    title: 'API Key Management',
    desc: 'Secure key vault, role-based rules, and per-environment tokens to control access.'
  },
  {
    icon: RefreshCw,
    title: 'Real-time Updates',
    desc: 'Continuous sync keeps your chatbot knowledge always fresh without redeploys.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Monitor conversations, satisfaction, and deflection with actionable insights.'
  },
];

const HowItWorks = () => {
  const steps = [
    { label: 'Scrape', icon: Globe, desc: 'Point at your site or docs' },
    { label: 'Process', icon: FileText, desc: 'Clean, chunk, embed' },
    { label: 'Deploy', icon: MessageSquare, desc: 'Embed the widget' },
  ];
  return (
    <div id="how" className="relative">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl font-bold text-white"
      >
        How It Works
      </motion.h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {steps.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative"
          >
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#00B4D8] via-[#0077FF] to-[#5E60CE]">
              <div className="h-full w-full rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-xl p-6">
                <s.icon className="h-6 w-6 text-white" />
                <h3 className="mt-4 text-xl font-semibold text-white">{s.label}</h3>
                <p className="mt-1 text-slate-300/90">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Animated connectors */}
      <div className="pointer-events-none hidden sm:block" aria-hidden>
        <svg className="mx-auto mt-6" width="720" height="30" viewBox="0 0 720 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00B4D8"/>
              <stop offset="50%" stopColor="#0077FF"/>
              <stop offset="100%" stopColor="#5E60CE"/>
            </linearGradient>
          </defs>
          <path d="M 120 15 H 320" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 6">
            <animate attributeName="stroke-dashoffset" from="60" to="0" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M 400 15 H 600" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 6">
            <animate attributeName="stroke-dashoffset" from="60" to="0" dur="2s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </div>
  );
};

const ChatbotShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      <div>
        <h3 className="text-2xl font-semibold text-white">Interactive Chatbot Preview</h3>
        <p className="mt-3 text-slate-300/90">
          Experience the embeddable widget with glowing accents and smooth interactions. Fully brandable, accessible, and fast.
        </p>
        <button className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-[#00B4D8] via-[#0077FF] to-[#5E60CE] shadow-[0_0_25px_rgba(0,119,255,0.45)] hover:shadow-[0_0_40px_rgba(94,96,206,0.55)] transition">
          Try a Live Demo <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="relative">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#00B4D8]/40 via-[#0077FF]/40 to-[#5E60CE]/40 blur-2xl" />
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-[#00B4D8] to-[#5E60CE]" />
              <span className="text-white font-medium">Scrapify Bot</span>
            </div>
            <span className="text-xs text-slate-300/80">Online</span>
          </div>
          {/* Messages */}
          <div className="p-4 space-y-3 max-h-64 overflow-auto">
            <div className="self-start max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 text-white px-3 py-2 shadow">
              Hi! I parsed your docs and can answer anything about your product.
            </div>
            <div className="self-end max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#00B4D8]/30 to-[#5E60CE]/30 text-white px-3 py-2 shadow">
              What is Scrapify and how do I embed the chatbot?
            </div>
            <div className="self-start max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 text-white px-3 py-2 shadow">
              Scrapify scrapes your website or documents, builds a vector knowledge base, and serves an embeddable widget. Copy the embed script from your dashboard and paste it into your site.
            </div>
          </div>
          {/* Input */}
          <div className="p-3 border-t border-white/10 bg-[#0F172A]/60">
            <div className="flex items-center gap-2">
              <input className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-[#0077FF]/60" placeholder="Type a message..." />
              <button className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-[#00B4D8] via-[#0077FF] to-[#5E60CE] hover:shadow-[0_0_18px_rgba(0,119,255,0.45)] transition">Send</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureGrid = () => {
  return (
    <div id="features" className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featureItems.map((f, idx) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
          className="group p-[1px] rounded-2xl bg-gradient-to-br from-[#00B4D8] via-[#0077FF] to-[#5E60CE]"
        >
          <div className="h-full w-full rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between">
              <f.icon className="h-6 w-6 text-white" />
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#5E60CE] animate-pulse" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-slate-300/90">{f.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Features = () => {
  return (
    <section className="relative py-24">
      {/* Section aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-tr from-[#00B4D8]/20 via-[#0077FF]/20 to-[#5E60CE]/20 rounded-full blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HowItWorks />
        <ChatbotShowcase />
        <FeatureGrid />
      </div>
    </section>
  );
};

export default Features;
