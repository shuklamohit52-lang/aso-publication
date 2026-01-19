import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RunningBanner from '@/components/home/RunningBanner';
import FeaturedProductsGrid from '@/components/home/FeaturedProductsGrid';
import BookCategoriesSection from '@/components/home/BookCategoriesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import SpecialOffersSection from '@/components/home/SpecialOffersSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>ASO Publication - Master Competitive Exams</title>
        <meta name="description" content="Master your competitive exams with expert-crafted study materials from ASO Publication. SSC, Banking, Railway, and Defence books." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* 1. Running Banner */}
        <RunningBanner />

        {/* 2. Featured Products Grid */}
        <FeaturedProductsGrid />

        {/* 3. Categories */}
        <BookCategoriesSection />

        {/* 4. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 5. Special Offers */}
        <SpecialOffersSection />

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
