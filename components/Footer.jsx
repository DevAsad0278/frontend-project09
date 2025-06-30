import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">JobPortal 2026</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Connecting talented professionals with amazing opportunities. Your dream job is just a click away.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-sm hover:text-blue-400 transition-colors">Browse Jobs</Link></li>
              <li><Link to="/resume-builder" className="text-sm hover:text-blue-400 transition-colors">Resume Builder</Link></li>
              <li><Link to="/career-advice" className="text-sm hover:text-blue-400 transition-colors">Career Advice</Link></li>
              <li><Link to="/salary-guide" className="text-sm hover:text-blue-400 transition-colors">Salary Guide</Link></li>
              <li><Link to="/job-alerts" className="text-sm hover:text-blue-400 transition-colors">Job Alerts</Link></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link to="/recruiter-portal" className="text-sm hover:text-blue-400 transition-colors">Post Jobs</Link></li>
              <li><Link to="/talent-search" className="text-sm hover:text-blue-400 transition-colors">Search Talent</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/employer-branding" className="text-sm hover:text-blue-400 transition-colors">Employer Branding</Link></li>
              <li><Link to="/recruitment-solutions" className="text-sm hover:text-blue-400 transition-colors">Recruitment Solutions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">contact@jobportal2026.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2026 JobPortal 2026. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;