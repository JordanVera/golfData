import { useState, useEffect } from 'react';
import LiveOddsCard from './LiveOddsCard.js';
import { url } from '../../../config.js';

const LiveOdds = (props) => {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect((_) => {
    const fetchLiveOdds = async (_) => {
      const res = await fetch(`${url}/liveOdds`);
      const json = await res.json();

      setEvent(json);
      setLoading(false);
    };

    fetchLiveOdds();
  }, []);

  return <LiveOddsCard event={event} loading={loading} />;
};

export default LiveOdds;
