import { useState, useEffect } from 'react';
import TopTenCard from './TopTenCard.js';

const TopTen = (props) => {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/top_10')
      .then((res) => res.json())
      .then((json) => {
        setEvent(json);
        setLoading(false);
      });
  }, []);

  return <TopTenCard event={event} loading={loading} />;
};

export default TopTen;
