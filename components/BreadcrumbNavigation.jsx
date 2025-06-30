import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const BreadcrumbNavigation = ({ customItems = null }) => {
  const location = useLocation();
  
  // Generate breadcrumb items from current path
  const generateBreadcrumbs = () => {
    if (customItems) return customItems;
    
    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbs = [{ name: 'Home', path: '/', icon: Home }];
    
    let currentPath = '';
    pathnames.forEach((pathname, index) => {
      currentPath += `/${pathname}`;
      
      // Convert pathname to readable format
      const name = pathname
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        name,
        path: currentPath,
        isLast: index === pathnames.length - 1
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white border-b border-gray-200 py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              
              {item.isLast ? (
                <span className="text-gray-900 font-medium flex items-center space-x-1">
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  );
};

export default BreadcrumbNavigation;