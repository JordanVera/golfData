import { useState, useEffect } from 'react';
import LiveOddsCard from './LiveOddsCard.js';

const LiveOdds = (props) => {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/liveOdds')
      .then((res) => res.json())
      .then((json) => {
        setEvent(json, (_) => {
          console.log(`Live Odds Fetched: ${JSON.stringify(json)}`, json);
        });
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2 className="text-center my-3">Fanduel Live Odds</h2>
      <LiveOddsCard event={event} loading={loading} />
    </>
  );
};

export default LiveOdds;
