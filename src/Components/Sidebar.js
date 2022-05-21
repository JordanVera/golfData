import React from 'react';
import NewsWidget from './NewsWidget/NewsWidget.js';
import LiveOdds from './BettingOdds/LiveOdds.js';
import TopFive from './BettingOdds/TopFive.js';
import TopTen from './BettingOdds/TopTen.js';
import ContactForm from './ContactForm.js';

export default function Sidebar() {
  return (
    <>
      <ContactForm />
      <NewsWidget />
      <LiveOdds />
      <TopFive />
      <TopTen />
    </>
  );
}
