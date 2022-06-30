import { useState, useEffect } from 'react';
import TopFiveCard from './TopFiveCard.js';
import { url } from '../../../config.js';

const TopFive = (props) => {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}/top_5`)
      .then((res) => res.json())
      .then((json) => {
        setEvent(json);
        setLoading(false);
      });
  }, []);

  return <TopFiveCard event={event} loading={loading} />;
};

export default TopFive;
