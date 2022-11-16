import { useState, useEffect } from 'react';
import TopTenCard from './TopTenCard.js';
import { url } from '../../../config.js';

const TopTen = (props) => {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopTen = async (_) => {
      const res = await fetch(`${url}/top_10`);
      const json = await res.json();

      setEvent(json);
      setLoading(false);
    };

    fetchTopTen();
  }, []);

  return <TopTenCard event={event} loading={loading} />;
};

export default TopTen;
