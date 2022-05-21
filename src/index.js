import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUsPage/AboutUsPage.js';
import ContactedUs from './Components/ContactedUsPage/ContactedUsPage.js';
import PlayerProfile from './PlayerProfile.js';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/players/:playerId" element={<PlayerProfile />} />
      <Route path="/contactedUs" element={<ContactedUs />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
