import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Get started',
    features: ['1 chatbot', 'Up to 200 pages', 'Basic widget', 'Community support'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    tagline: 'Best for growing teams',
    features: ['5 chatbots', 'Up to 5k pages', 'Custom themes', 'Analytics & export', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$99',
    tagline: 'For production workloads',
    features: ['Unlimited chatbots', 'Unlimited pages', 'SSO & roles', 'Advanced analytics', 'SLA support'],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24">
      {/* Gradient divider background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#00B4D8]/15 via-[#0077FF]/10 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white"
        >
          Pricing
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative rounded-3xl border ${p.highlight ? 'border-transparent' : 'border-white/10'} bg-white/5 backdrop-blur-xl`}
            >
              {p.highlight && (
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#00B4D8] via-[#0077FF] to-[#5E60CE]" />
              )}
              <div className={`relative p-6 ${p.highlight ? 'bg-[#0F172A]/80 rounded-3xl' : ''}`}>
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                    <p className="text-slate-300/90">{p.tagline}</p>
                  </div>
                  <div className="text-3xl font-extrabold text-white">{p.price}<span className="text-sm font-medium text-slate-300/80">/mo</span></div>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-200/90">
                      <Check className="h-4 w-4 text-[#00B4D8] mt-1" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full px-4 py-3 rounded-xl font-semibold transition ${p.highlight ? 'text-white bg-gradient-to-r from-[#00B4D8] via-[#0077FF] to-[#5E60CE] shadow-[0_0_25px_rgba(0,119,255,0.45)]' : 'text-white/90 border border-white/15 hover:bg-white/10'}`}>
                  {p.highlight ? 'Start Pro' : 'Get Started'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
