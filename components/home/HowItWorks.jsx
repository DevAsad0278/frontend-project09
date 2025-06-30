import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, Send, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Your Profile',
      description: 'Sign up and build your professional profile with our AI-powered resume builder.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Search,
      title: 'Search & Discover',
      description: 'Browse thousands of job opportunities or let our AI suggest perfect matches.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Send,
      title: 'Apply with Ease',
      description: 'One-click applications with personalized cover letters and portfolio.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: CheckCircle,
      title: 'Get Hired',
      description: 'Connect with recruiters, schedule interviews, and land your dream job.',
      color: 'from-orange-500 to-red-500'
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
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting your dream job has never been easier. Follow these simple steps and start your journey today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-8"></div>
              )}
              
              <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Step Number */}
              <div className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-700 shadow-md">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;