import { useState, useEffect } from 'react';
import EventCard from './EventCard.jsx';
import { url } from '../../../config.js';

const SchedulePage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}/getRemainingSchedule`)
      .then((res) => res.json())
      .then((json) => {
        setEvents(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <EventCard events={events} loading={loading} />
    </div>
  );
};

export default SchedulePage;
