import { useState, useEffect } from 'react';
import StrokesGainedData from './StrokesGainedData.js';
import { url } from '../config.js';

const StrokesGained = (props) => {
  const [strokesGained, setStrokesGained] = useState([]);

  useEffect(() => {
    fetch(`${url}/strokesGained`)
      .then((res) => res.json())
      .then((json) =>
        setStrokesGained(json, (_) => {
          console.log(
            `Strokes Gained data Fetched: ${JSON.stringify(json)}`,
            json
          );
        })
      );
  }, []);

  return (
    <>
      <h2 className="text-center">Strokes Gained Data</h2>
      <StrokesGainedData strokesGained={strokesGained} />
    </>
  );
};

export default StrokesGained;
