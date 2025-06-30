import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import AdminDashboard from './pages/AdminDashboard';
import JobSearch from './pages/JobSearch';
import JobDetails from './pages/JobDetails';
import ResumeBuilder from './pages/ResumeBuilder';
import ApplyJob from './pages/ApplyJob';
import RecruiterPortal from './pages/RecruiterPortal';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/jobs" element={<JobSearch />} />
              <Route path="/job/:id" element={<JobDetails />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/apply/:jobId" element={<ApplyJob />} />
              <Route path="/recruiter-portal" element={<RecruiterPortal />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </motion.main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;