import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, FileText, MessageCircle, Bell, Plus, BarChart3 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const QuickActions = () => {
  const { user } = useAuth();

  const getQuickActions = () => {
    if (!user) {
      return [
        { name: 'Find Jobs', path: '/jobs', icon: Search, color: 'from-blue-500 to-cyan-500' },
        { name: 'Build Resume', path: '/resume-builder', icon: FileText, color: 'from-green-500 to-teal-500' },
        { name: 'Sign Up', path: '/register', icon: Plus, color: 'from-purple-500 to-pink-500' },
      ];
    }

    const baseActions = [
      { name: 'Search Jobs', path: '/jobs', icon: Search, color: 'from-blue-500 to-cyan-500' },
      { name: 'Messages', path: '/chat', icon: MessageCircle, color: 'from-green-500 to-teal-500', badge: 2 },
      { name: 'Resume', path: '/resume-builder', icon: FileText, color: 'from-purple-500 to-pink-500' },
    ];

    if (user.type === 'recruiter') {
      return [
        ...baseActions,
        { name: 'Post Job', path: '/recruiter-portal', icon: Plus, color: 'from-orange-500 to-red-500' },
        { name: 'Dashboard', path: '/recruiter-dashboard', icon: BarChart3, color: 'from-indigo-500 to-purple-500' },
      ];
    }

    if (user.type === 'admin') {
      return [
        ...baseActions,
        { name: 'Admin Panel', path: '/admin-dashboard', icon: BarChart3, color: 'from-red-500 to-pink-500' },
      ];
    }

    return [
      ...baseActions,
      { name: 'Dashboard', path: '/dashboard', icon: BarChart3, color: 'from-indigo-500 to-purple-500' },
    ];
  };

  const quickActions = getQuickActions();

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="flex flex-col space-y-3">
        {quickActions.map((action, index) => (
          <motion.div
            key={action.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              to={action.path}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 relative`}
              >
                <action.icon className="w-6 h-6 text-white" />
                {action.badge && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {action.badge}
                  </span>
                )}
              </motion.div>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                  {action.name}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;