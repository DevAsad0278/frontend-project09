import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Filter, X, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ className = '', showFilters = true, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [filters, setFilters] = useState({
    jobType: '',
    salaryRange: '',
    experience: '',
    remote: false
  });
  
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const popularSearches = [
    'Software Engineer', 'Data Scientist', 'Product Manager', 'UX Designer',
    'Marketing Manager', 'Sales Representative', 'DevOps Engineer', 'Full Stack Developer'
  ];

  const recentSearches = [
    'React Developer', 'Python Developer', 'Project Manager'
  ];

  const suggestions = [
    'Frontend Developer in San Francisco',
    'Backend Engineer Remote',
    'Data Analyst New York',
    'UI/UX Designer Los Angeles',
    'Product Manager Seattle'
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    
    if (searchTerm) searchParams.set('search', searchTerm);
    if (location) searchParams.set('location', location);
    if (filters.jobType) searchParams.set('type', filters.jobType);
    if (filters.salaryRange) searchParams.set('salary', filters.salaryRange);
    if (filters.experience) searchParams.set('experience', filters.experience);
    if (filters.remote) searchParams.set('remote', 'true');

    const queryString = searchParams.toString();
    const searchUrl = `/jobs${queryString ? `?${queryString}` : ''}`;
    
    if (onSearch) {
      onSearch({ searchTerm, location, filters });
    } else {
      navigate(searchUrl);
    }
    
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                className="w-full pl-12 pr-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 border-0"
              />
            </div>

            {/* Location Input */}
            <div className="flex-1 relative border-t md:border-t-0 md:border-l border-gray-200">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="City, state, or remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 border-0"
              />
            </div>

            {/* Search Button */}
            <div className="border-t md:border-t-0 md:border-l border-gray-200">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </motion.button>
            </div>
          </div>

          {/* Advanced Filters Toggle */}
          {showFilters && (
            <div className="border-t border-gray-200 px-4 py-3">
              <button
                type="button"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Advanced Filters</span>
                <motion.div
                  animate={{ rotate: showAdvancedFilters ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-4 h-4" />
                </motion.div>
              </button>
            </div>
          )}

          {/* Advanced Filters */}
          <AnimatePresence>
            {showAdvancedFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200 p-4 bg-gray-50"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Type
                    </label>
                    <select
                      value={filters.jobType}
                      onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Any</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Salary Range
                    </label>
                    <select
                      value={filters.salaryRange}
                      onChange={(e) => setFilters({ ...filters, salaryRange: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Any</option>
                      <option value="30k-50k">$30k - $50k</option>
                      <option value="50k-70k">$50k - $70k</option>
                      <option value="70k-100k">$70k - $100k</option>
                      <option value="100k-150k">$100k - $150k</option>
                      <option value="150k+">$150k+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience
                    </label>
                    <select
                      value={filters.experience}
                      onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Any</option>
                      <option value="entry">Entry Level</option>
                      <option value="mid">Mid Level</option>
                      <option value="senior">Senior Level</option>
                      <option value="executive">Executive</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={filters.remote}
                        onChange={(e) => setFilters({ ...filters, remote: e.target.checked })}
                        className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm font-medium text-gray-700">Remote Only</span>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>

      {/* Search Suggestions */}
      <AnimatePresence>
        {showSuggestions && (searchTerm || location) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto"
          >
            {/* Live Suggestions */}
            {suggestions.filter(s => 
              s.toLowerCase().includes(searchTerm.toLowerCase()) ||
              s.toLowerCase().includes(location.toLowerCase())
            ).length > 0 && (
              <div className="p-4 border-b border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                  <Search className="w-4 h-4 mr-2" />
                  Suggestions
                </h4>
                {suggestions
                  .filter(s => 
                    s.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    s.toLowerCase().includes(location.toLowerCase())
                  )
                  .slice(0, 3)
                  .map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))
                }
              </div>
            )}

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="p-4 border-b border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent Searches
                </h4>
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(search)}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            )}

            {/* Popular Searches */}
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Popular Searches
              </h4>
              <div className="flex flex-wrap gap-2">
                {popularSearches.slice(0, 6).map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(search)}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;