import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      logo: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      description: 'Join our innovative team to build cutting-edge web applications using React and modern technologies.',
      tags: ['React', 'TypeScript', 'Node.js', 'Remote OK']
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
      tags: ['Python', 'ML', 'SQL', 'AWS']
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
      tags: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'InnovateLab',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$140k - $180k',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      description: 'Lead product strategy and work with cross-functional teams to deliver exceptional products.',
      tags: ['Strategy', 'Analytics', 'Agile', 'Leadership']
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech Systems',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$110k - $150k',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      description: 'Build and maintain scalable cloud infrastructure and deployment pipelines.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      id: 6,
      title: 'Marketing Manager',
      company: 'GrowthHackers',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$80k - $110k',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      description: 'Drive growth through innovative marketing strategies and data-driven campaigns.',
      tags: ['Digital Marketing', 'Analytics', 'SEO', 'Content Strategy']
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
            Featured Jobs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing opportunities from top companies looking for talented professionals like you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{job.company}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                </div>

                <Link
                  to={`/job/${job.id}`}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/jobs"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            <span>View All Jobs</span>
            <Users className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedJobs;