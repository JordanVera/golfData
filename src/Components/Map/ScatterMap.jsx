import { useState, useEffect } from 'react';
import Map from './Map.jsx';
import { url } from '../../config.js';

const ScatterMap = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async (_) => {
      const res = await fetch(`${url}/getSchedule`);
      const json = await res.json();

      setEvents(json);
      setLoading(false);
    };

    fetchSchedule();
  }, []);

  return (
    <div className="my-4 text-center">
      <h4>{new Date().getFullYear()} PGA Events</h4>
      <Map events={events} loading={loading} />
    </div>
  );
};

export default ScatterMap;
