import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Award, Zap } from 'lucide-react';

const RunningBanner = () => {
  const announcements = [
    { icon: Sparkles, text: 'New SSC CGL 2026 Books Available' },
    { icon: TrendingUp, text: 'Expert-Crafted Study Materials' },
    { icon: Award, text: 'Trusted by 50,000+ Students' },
    { icon: Zap, text: 'Fast Delivery Across India' },
  ];

  return (
    <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-3 overflow-hidden border-b-4 border-blue-900">
      <div className="flex items-center">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...announcements, ...announcements].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-blue-900 font-semibold">
                <Icon className="w-5 h-5" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default RunningBanner;
