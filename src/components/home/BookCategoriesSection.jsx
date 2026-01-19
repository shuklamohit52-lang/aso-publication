import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Briefcase, Train, Shield, GraduationCap, FileText } from 'lucide-react';

const BookCategoriesSection = () => {
  const categories = [
    {
      name: 'SSC Exams',
      icon: FileText,
      description: 'CGL, CHSL, MTS, CPO',
      color: 'from-blue-500 to-blue-600',
      link: '/books?category=SSC'
    },
    {
      name: 'Banking',
      icon: Briefcase,
      description: 'IBPS, SBI, RBI',
      color: 'from-green-500 to-green-600',
      link: '/books?category=Banking'
    },
    {
      name: 'Railway',
      icon: Train,
      description: 'RRB NTPC, Group D',
      color: 'from-red-500 to-red-600',
      link: '/books?category=Railway'
    },
    {
      name: 'Defence',
      icon: Shield,
      description: 'NDA, CDS, AFCAT',
      color: 'from-orange-500 to-orange-600',
      link: '/books?category=Defence'
    },
    {
      name: 'Teaching',
      icon: GraduationCap,
      description: 'CTET, TET, KVS',
      color: 'from-purple-500 to-purple-600',
      link: '/books?category=CTET'
    },
    {
      name: 'Other Exams',
      icon: BookOpen,
      description: 'General Knowledge',
      color: 'from-pink-500 to-pink-600',
      link: '/books?category=Other'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-900 mb-4 font-serif"
          >
            Exam Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Choose your exam category and start preparing
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={category.link}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                    <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                      <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white/90">{category.description}</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                      <p className="text-blue-900 font-semibold group-hover:translate-x-2 transition-transform flex items-center">
                        Explore Books
                        <span className="ml-2">→</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookCategoriesSection;
