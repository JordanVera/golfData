import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUsPage/AboutUsPage.js';
import SkillDecomposition from './pages/SkillDecompositions.js';
import Predictions from './pages/Predictions.jsx';
import ContactedUs from './Components/ContactedUsPage/ContactedUsPage.js';
import PlayerProfile from './pages/PlayerProfile.js';
import NotFound from './NotFound.js';
import Schedule from './pages/Schedule.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/players/:playerId" element={<PlayerProfile />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/contactedUs" element={<ContactedUs />} />
      <Route path="/skillDecomposition" element={<SkillDecomposition />} />
      <Route path="/predictions" element={<Predictions />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
