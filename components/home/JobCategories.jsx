import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, TrendingUp, Users, Heart, Wrench, Globe, Calculator } from 'lucide-react';

const JobCategories = () => {
  const categories = [
    { icon: Code, name: 'Technology', count: '15,234', color: 'from-blue-500 to-cyan-500' },
    { icon: Palette, name: 'Design', count: '8,567', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, name: 'Marketing', count: '12,890', color: 'from-green-500 to-teal-500' },
    { icon: Users, name: 'Sales', count: '9,456', color: 'from-orange-500 to-red-500' },
    { icon: Heart, name: 'Healthcare', count: '6,789', color: 'from-red-500 to-pink-500' },
    { icon: Wrench, name: 'Engineering', count: '11,234', color: 'from-indigo-500 to-purple-500' },
    { icon: Globe, name: 'Remote', count: '18,901', color: 'from-teal-500 to-blue-500' },
    { icon: Calculator, name: 'Finance', count: '7,654', color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore opportunities across various industries and find the perfect role that matches your expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {category.count} jobs available
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;