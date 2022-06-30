import React from 'react';
import NewsWidget from './NewsWidget/NewsWidget.js';
import LiveOdds from './DraftKingsOddsWidget/LiveOdds.js';
import TopFive from './DraftKingsOddsWidget/TopFive.js';
import TopTen from './DraftKingsOddsWidget/TopTen.js';
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
