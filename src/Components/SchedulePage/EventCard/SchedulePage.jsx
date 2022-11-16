import { useState, useEffect } from 'react';
import EventCard from './EventCard.jsx';
import { url } from '../../../config.js';

const SchedulePage = () => {
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
    <div>
      <EventCard events={events} loading={loading} />
    </div>
  );
};

export default SchedulePage;
