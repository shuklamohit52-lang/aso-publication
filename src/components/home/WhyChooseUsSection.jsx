import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Truck, HeadphonesIcon, Award } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Expert Authors',
      description: 'Books written by subject matter experts with years of experience'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across all major cities in India'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Dedicated customer support team available round the clock'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Premium quality books with latest syllabus and patterns'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 font-serif"
          >
            Why Choose ASO Publication?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-200 text-lg"
          >
            Your trusted partner in exam preparation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-amber-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
