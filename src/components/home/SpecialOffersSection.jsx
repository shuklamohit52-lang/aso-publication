import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tag, Clock, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SpecialOffersSection = () => {
  const offers = [
    {
      icon: Percent,
      title: 'Flat 20% Off',
      description: 'On orders above Rs. 1000',
      color: 'from-green-500 to-green-600',
      code: 'SAVE20'
    },
    {
      icon: Tag,
      title: 'Bundle Offer',
      description: 'Buy 3 books, Get 1 Free',
      color: 'from-blue-500 to-blue-600',
      code: 'BUNDLE3'
    },
    {
      icon: Clock,
      title: 'Limited Time',
      description: 'Extra 10% off on bestsellers',
      color: 'from-amber-500 to-amber-600',
      code: 'BEST10'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-cream-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-900 mb-4 font-serif"
          >
            Special Offers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Save more on your exam preparation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-amber-500">
                  <div className={`bg-gradient-to-r ${offer.color} p-6 text-white`}>
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-white/90 mb-4">{offer.description}</p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                      <p className="text-sm font-semibold">Code: {offer.code}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4 font-serif">Ready to Start Your Exam Preparation?</h3>
          <p className="text-blue-200 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of successful candidates who trusted ASO Publication for their competitive exam preparation
          </p>
          <Link to="/books">
            <Button className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-8 py-6 text-lg">
              Browse All Books
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
