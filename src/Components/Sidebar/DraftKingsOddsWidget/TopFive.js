import { useState, useEffect } from 'react';
import TopFiveCard from './TopFiveCard.js';
import { url } from '../../../config.js';

const TopFive = (props) => {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopFive = async (_) => {
      const res = await fetch(`${url}/top_5`);
      const json = await res.json();

      setEvent(json);
      setLoading(false);
    };

    fetchTopFive();
  }, []);

  return <TopFiveCard event={event} loading={loading} />;
};

export default TopFive;
