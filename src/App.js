import React from 'react';
import LandingPage from './page/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import SignUp from './page/signup';
import Login from './page/login';
import Dashboard from './page/dashboard';
import ReligiousCommunity from './component/religiousComm';

export default function App() {
  return (
    <Router>
      <Routes> {/* Use Routes component */}
        <Route path="/" element={<LandingPage />} /> {/* Use element prop */}
        <Route path="/Sign-Up" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Community" element={<ReligiousCommunity />} />
      </Routes>
    </Router>
  );
}
