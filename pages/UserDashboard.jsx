import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Briefcase, FileText, MessageCircle, Bell, Settings, 
  TrendingUp, Calendar, MapPin, DollarSign, Clock, Star,
  Edit, Eye, Download, Plus, Search, Filter
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Applications Sent', value: '12', icon: FileText, color: 'from-blue-500 to-cyan-500' },
    { label: 'Profile Views', value: '48', icon: Eye, color: 'from-green-500 to-teal-500' },
    { label: 'Messages', value: '5', icon: MessageCircle, color: 'from-purple-500 to-pink-500' },
    { label: 'Saved Jobs', value: '23', icon: Star, color: 'from-orange-500 to-red-500' }
  ];

  const recentApplications = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      status: 'Under Review',
      appliedDate: '2024-01-15',
      salary: '$120k - $160k',
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      title: 'UX Designer',
      company: 'DesignStudio',
      status: 'Interview Scheduled',
      appliedDate: '2024-01-12',
      salary: '$90k - $120k',
      location: 'Remote'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'InnovateLab',
      status: 'Rejected',
      appliedDate: '2024-01-10',
      salary: '$140k - $180k',
      location: 'Austin, TX'
    }
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: 'React Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      salary: '$100k - $130k',
      match: '95%'
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'TechFlow',
      location: 'New York, NY',
      salary: '$110k - $140k',
      match: '88%'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Interview Scheduled': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
                  <p className="text-gray-600">Ready to find your next opportunity?</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit Profile</span>
                </Link>
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
                <Link to="/applications" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{application.title}</h3>
                        <p className="text-gray-600 text-sm">{application.company}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{application.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{application.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{application.appliedDate}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                        {application.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  to="/jobs"
                  className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <Search className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Search Jobs</h3>
                    <p className="text-sm text-gray-600">Find new opportunities</p>
                  </div>
                </Link>
                
                <Link
                  to="/resume-builder"
                  className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors"
                >
                  <FileText className="w-6 h-6 text-green-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Update Resume</h3>
                    <p className="text-sm text-gray-600">Improve your profile</p>
                  </div>
                </Link>
                
                <Link
                  to="/chat"
                  className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-colors"
                >
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Messages</h3>
                    <p className="text-sm text-gray-600">Chat with recruiters</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recommended Jobs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recommended for You</h2>
              <div className="space-y-4">
                {recommendedJobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{job.title}</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {job.match} match
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <span>{job.location}</span>
                      <span>{job.salary}</span>
                    </div>
                    <Link
                      to={`/job/${job.id}`}
                      className="block w-full mt-3 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Profile Completion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white"
            >
              <h2 className="text-xl font-bold mb-4">Complete Your Profile</h2>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Profile Completion</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <p className="text-sm mb-4 opacity-90">
                Complete your profile to get better job recommendations and increase your visibility to recruiters.
              </p>
              <Link
                to="/profile"
                className="block w-full bg-white text-blue-600 text-center py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Complete Profile
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;