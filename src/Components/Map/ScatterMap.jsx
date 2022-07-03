import { useState, useEffect } from 'react';
import Map from './Map.jsx';
import { url } from '../../config.js';

const ScatterMap = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}/getSchedule`)
      .then((res) => res.json())
      .then((json) => {
        setEvents(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-2 text-center">
      <h4>{new Date().getFullYear()} PGA Events</h4>
      <Map events={events} loading={loading} />
    </div>
  );
};

export default ScatterMap;
