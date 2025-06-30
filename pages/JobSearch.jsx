import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, DollarSign, Clock, Briefcase, Star, Eye } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const JobSearch = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      logo: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      description: 'Join our innovative team to build cutting-edge web applications using React and modern technologies.',
      tags: ['React', 'TypeScript', 'Node.js', 'Remote OK'],
      posted: '2 days ago',
      applicants: 45
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'DataFlow Solutions',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130k - $170k',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      description: 'Analyze complex datasets and build machine learning models to drive business insights.',
      tags: ['Python', 'ML', 'SQL', 'AWS'],
      posted: '1 day ago',
      applicants: 28
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'DesignStudio Pro',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$90k - $120k',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      description: 'Create beautiful and intuitive user experiences for our digital products.',
      tags: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      posted: '3 days ago',
      applicants: 67
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Dream Job</h1>
          <p className="text-xl text-gray-600">Discover amazing opportunities from top companies</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <SearchBar />
        </motion.div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Job Type */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Job Type</h4>
                <div className="space-y-2">
                  {['Full-time', 'Part-time', 'Contract', 'Internship'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input type="checkbox" className="text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Experience Level</h4>
                <div className="space-y-2">
                  {['Entry Level', 'Mid Level', 'Senior Level', 'Executive'].map((level) => (
                    <label key={level} className="flex items-center">
                      <input type="checkbox" className="text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Salary Range</h4>
                <div className="space-y-2">
                  {['$50k - $70k', '$70k - $100k', '$100k - $150k', '$150k+'].map((range) => (
                    <label key={range} className="flex items-center">
                      <input type="checkbox" className="text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">{jobs.length} jobs found</p>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Most Recent</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
                <option>Most Relevant</option>
              </select>
            </div>

            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-gray-600">{job.company}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="w-4 h-4" />
                              <span>{job.salary}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                          <Star className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Posted {job.posted}</span>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{job.applicants} applicants</span>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Link
                          to={`/job/${job.id}`}
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          View Details
                        </Link>
                        <Link
                          to={`/apply/${job.id}`}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;