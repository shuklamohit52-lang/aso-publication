import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useCartStore from '@/stores/useCartStore';
import { useToast } from '@/components/ui/use-toast';

const BookCard = ({ book }) => {
  const addToCart = useCartStore(state => state.addToCart);
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(book);
    toast({
      title: "Added to cart!",
      description: `${book.title} has been added to your cart.`,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {book.bestseller && (
          <div className="absolute top-3 right-3 bg-amber-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
            Best Seller
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg font-serif text-blue-900 line-clamp-2 mb-2 leading-tight min-h-[3.5rem]">
          {book.title}
        </h3>
        
        <div className="flex items-center mb-3 text-gray-600 text-sm">
          <User className="w-4 h-4 mr-1 text-amber-500" />
          <span className="truncate">{book.author}</span>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="ml-2 text-xs font-medium text-gray-500 px-2 py-0.5 bg-gray-100 rounded-full">
            {book.rating}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-2xl font-bold text-blue-900 font-serif">
            ₹{book.price}
          </div>
          <Button
            onClick={handleAddToCart}
            className="bg-blue-900 hover:bg-amber-500 hover:text-blue-900 text-white transition-all duration-300"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
