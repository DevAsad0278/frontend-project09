import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Building, TrendingUp } from 'lucide-react';

const Statistics = () => {
  const stats = [
    { icon: Users, value: '2M+', label: 'Active Job Seekers', color: 'from-blue-500 to-cyan-500' },
    { icon: Briefcase, value: '50K+', label: 'Job Openings', color: 'from-purple-500 to-pink-500' },
    { icon: Building, value: '10K+', label: 'Companies', color: 'from-green-500 to-teal-500' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;