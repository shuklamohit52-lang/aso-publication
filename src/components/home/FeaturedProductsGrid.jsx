import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookCard from '@/components/BookCard';
import useBooksStore from '@/stores/useBooksStore';
import { Button } from '@/components/ui/button';

const FeaturedProductsGrid = () => {
  const books = useBooksStore(state => state.books);
  const featuredBooks = books.filter(book => book.bestseller).slice(0, 8);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-900 mb-4 font-serif"
          >
            Best Sellers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Most popular books chosen by successful candidates
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/books">
            <Button className="bg-blue-900 hover:bg-amber-500 hover:text-blue-900 text-white px-8 py-6 text-lg">
              View All Books
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsGrid;
