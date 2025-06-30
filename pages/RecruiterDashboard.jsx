import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Users, MessageCircle, TrendingUp, Plus, 
  Search, Filter, Eye, Edit, Trash2, Calendar, MapPin,
  DollarSign, Clock, Star, FileText, Settings
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const RecruiterDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Active Jobs', value: '8', icon: Briefcase, color: 'from-blue-500 to-cyan-500' },
    { label: 'Total Applications', value: '156', icon: FileText, color: 'from-green-500 to-teal-500' },
    { label: 'Candidates Hired', value: '12', icon: Users, color: 'from-purple-500 to-pink-500' },
    { label: 'Response Rate', value: '78%', icon: TrendingUp, color: 'from-orange-500 to-red-500' }
  ];

  const activeJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      applications: 45,
      views: 234,
      posted: '2024-01-10',
      status: 'Active',
      location: 'San Francisco, CA',
      salary: '$120k - $160k'
    },
    {
      id: 2,
      title: 'UX Designer',
      department: 'Design',
      applications: 28,
      views: 156,
      posted: '2024-01-08',
      status: 'Active',
      location: 'Remote',
      salary: '$90k - $120k'
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      applications: 67,
      views: 389,
      posted: '2024-01-05',
      status: 'Paused',
      location: 'New York, NY',
      salary: '$140k - $180k'
    }
  ];

  const recentApplications = [
    {
      id: 1,
      candidateName: 'Sarah Johnson',
      jobTitle: 'Senior Frontend Developer',
      appliedDate: '2024-01-15',
      status: 'Under Review',
      experience: '5 years',
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      candidateName: 'Michael Chen',
      jobTitle: 'UX Designer',
      appliedDate: '2024-01-14',
      status: 'Interview Scheduled',
      experience: '3 years',
      location: 'Remote'
    },
    {
      id: 3,
      candidateName: 'Emily Rodriguez',
      jobTitle: 'Product Manager',
      appliedDate: '2024-01-13',
      status: 'Shortlisted',
      experience: '7 years',
      location: 'Austin, TX'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Paused': return 'bg-yellow-100 text-yellow-800';
      case 'Closed': return 'bg-red-100 text-red-800';
      case 'Under Review': return 'bg-blue-100 text-blue-800';
      case 'Interview Scheduled': return 'bg-purple-100 text-purple-800';
      case 'Shortlisted': return 'bg-green-100 text-green-800';
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Recruiter Dashboard</h1>
                  <p className="text-gray-600">Manage your job postings and candidates</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Link
                  to="/recruiter-portal"
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Post New Job</span>
                </Link>
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Settings className="w-5 h-5" />
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
            {/* Active Jobs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Active Job Postings</h2>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Filter className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {activeJobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{job.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                            {job.status}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{job.department}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Posted {job.posted}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-3 text-sm">
                          <span className="text-blue-600 font-medium">{job.applications} applications</span>
                          <span className="text-gray-500">{job.views} views</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
                  to="/recruiter-portal"
                  className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <Plus className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Post New Job</h3>
                    <p className="text-sm text-gray-600">Create job posting</p>
                  </div>
                </Link>
                
                <Link
                  to="/candidates"
                  className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-300 transition-colors"
                >
                  <Users className="w-6 h-6 text-green-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Browse Candidates</h3>
                    <p className="text-sm text-gray-600">Find talent</p>
                  </div>
                </Link>
                
                <Link
                  to="/chat"
                  className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-colors"
                >
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Messages</h3>
                    <p className="text-sm text-gray-600">Chat with candidates</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Applications</h2>
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{application.candidateName}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                        {application.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{application.jobTitle}</p>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <span>{application.experience} exp</span>
                      <span>{application.appliedDate}</span>
                    </div>
                    <button className="block w-full mt-3 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Review Application
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Performance Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white"
            >
              <h2 className="text-xl font-bold mb-4">This Month's Performance</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Job Views</span>
                  <span className="font-semibold">+23%</span>
                </div>
                <div className="flex justify-between">
                  <span>Applications</span>
                  <span className="font-semibold">+15%</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Rate</span>
                  <span className="font-semibold">78%</span>
                </div>
              </div>
              <button className="block w-full mt-4 bg-white text-purple-600 text-center py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                View Full Report
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;