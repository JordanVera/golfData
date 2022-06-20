import { useState, useEffect } from 'react';
import LiveOddsCard from './LiveOddsCard.js';
import { url } from '../../config.js';

const LiveOdds = (props) => {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}/liveOdds`)
      .then((res) => res.json())
      .then((json) => {
        setEvent(json);
        setLoading(false);
      });
  }, []);

  return <LiveOddsCard event={event} loading={loading} />;
};

export default LiveOdds;
