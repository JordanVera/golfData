import React from 'react';
import NewsWidget from './NewsWidget/NewsWidget.js';
import LiveOdds from './BettingOdds/LiveOdds.js';
import TopFive from './BettingOdds/TopFive.js';
import TopTen from './BettingOdds/TopTen.js';

export default function Sidebar() {
  return (
    <>
      <NewsWidget />
      <LiveOdds />
      <TopFive />
      <TopTen />
    </>
  );
}
