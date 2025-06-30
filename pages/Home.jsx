import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import FeaturedJobs from '../components/home/FeaturedJobs';
import HowItWorks from '../components/home/HowItWorks';
import TopCompanies from '../components/home/TopCompanies';
import JobCategories from '../components/home/JobCategories';
import Testimonials from '../components/home/Testimonials';
import Statistics from '../components/home/Statistics';
import NewsletterSection from '../components/home/NewsletterSection';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <Statistics />
      <HowItWorks />
      <FeaturedJobs />
      <JobCategories />
      <TopCompanies />
      <WhyChooseUs />
      <Testimonials />
      <NewsletterSection />
    </motion.div>
  );
};

export default Home;