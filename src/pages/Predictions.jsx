import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import { url } from '../config.js';
import PredictionsToggle from '../Components/Predictions/PredictionsToggle.jsx';

const PredictionsProfile = () => {
  const [loading, setLoading] = useState(true);
  const [baselineData, setBaselineData] = useState([]);
  const [baselineHistoryFitData, setBaselineHistoryFitData] = useState([]);
  const [eventName, setEventName] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect((_) => {
    const fetchPredictions = async (_) => {
      const res = await fetch(`${url}/predictions`);
      const json = await res.json();

      setEventName(json.event_name);
      setLastUpdated(json.last_updated);
      setBaselineData(json.baseline);
      setBaselineHistoryFitData(json.baseline_history_fit);
      setLoading(false);
    };

    fetchPredictions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <PredictionsToggle
          eventName={eventName}
          lastUpdated={lastUpdated}
          baselineData={baselineData}
          baselineHistoryFitData={baselineHistoryFitData}
          loading={loading}
        />
      </Container>
      <Footer />
    </>
  );
};

export default PredictionsProfile;
