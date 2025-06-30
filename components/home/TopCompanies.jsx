import React from 'react';
import { motion } from 'framer-motion';

const TopCompanies = () => {
  const companies = [
    {
      name: 'TechCorp',
      logo: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      jobs: 45,
      industry: 'Technology'
    },
    {
      name: 'DesignStudio',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      jobs: 23,
      industry: 'Design'
    },
    {
      name: 'DataFlow',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      jobs: 67,
      industry: 'Data Science'
    },
    {
      name: 'CloudTech',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      jobs: 34,
      industry: 'Cloud Computing'
    },
    {
      name: 'InnovateLab',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      jobs: 56,
      industry: 'Innovation'
    },
    {
      name: 'GrowthHackers',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      jobs: 29,
      industry: 'Marketing'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Companies Hiring
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join industry leaders and innovative startups that are actively looking for talented professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{company.industry}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold">
                  {company.jobs} open positions
                </span>
                <button className="text-blue-600 hover:text-blue-800 transition-colors">
                  View Jobs →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;