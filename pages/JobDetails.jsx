import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, Clock, DollarSign, Users, Calendar, Share2, 
  Star, Briefcase, Building, CheckCircle 
} from 'lucide-react';

const JobDetails = () => {
  const { id } = useParams();

  // Mock job data - in real app, fetch based on ID
  const job = {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $160k',
    logo: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    description: 'Join our innovative team to build cutting-edge web applications using React and modern technologies.',
    tags: ['React', 'TypeScript', 'Node.js', 'Remote OK'],
    posted: '2 days ago',
    applicants: 45,
    requirements: [
      '5+ years of experience in frontend development',
      'Expert knowledge of React, TypeScript, and modern JavaScript',
      'Experience with state management libraries (Redux, Zustand)',
      'Familiarity with testing frameworks (Jest, React Testing Library)',
      'Strong understanding of responsive design and CSS frameworks',
      'Experience with version control systems (Git)',
      'Excellent problem-solving and communication skills'
    ],
    responsibilities: [
      'Develop and maintain high-quality web applications',
      'Collaborate with designers and backend developers',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and technical discussions',
      'Optimize applications for maximum speed and scalability',
      'Stay up-to-date with emerging technologies and best practices'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible working hours and remote work options',
      'Professional development budget',
      'Unlimited PTO policy',
      'Modern office with free meals and snacks',
      'Team building events and company retreats'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-6">
              <img
                src={job.logo}
                alt={job.company}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                <p className="text-xl text-gray-600 mb-3">{job.company}</p>
                <div className="flex items-center space-x-6 text-gray-500">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5" />
                    <span>{job.salary}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <Star className="w-6 h-6" />
              </button>
              <button className="p-3 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {job.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Posted {job.posted}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{job.applicants} applicants</span>
              </div>
            </div>
            <Link
              to={`/apply/${job.id}`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 font-semibold"
            >
              Apply Now
            </Link>
          </div>
        </motion.div>

        {/* Job Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
          <ul className="space-y-3">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsibilities</h2>
          <ul className="space-y-3">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Briefcase className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{responsibility}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
          <ul className="space-y-3">
            {job.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Apply Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white text-center"
        >
          <Building className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-lg mb-6 opacity-90">
            Take the next step in your career and apply for this exciting opportunity.
          </p>
          <Link
            to={`/apply/${job.id}`}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Apply for This Position
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default JobDetails;