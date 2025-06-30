import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Award, Clock, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Platform',
      description: 'Verified companies and secure application process to protect your data.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'AI-Powered Matching',
      description: 'Smart algorithms that match you with the perfect job opportunities.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated career advisors to help you throughout your job search.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Curated job listings from top-tier companies and organizations.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Quick Applications',
      description: 'Apply to multiple jobs with one click using our streamlined process.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Access to remote and international job opportunities worldwide.',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose JobPortal 2026?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best job search experience with cutting-edge technology and personalized support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;