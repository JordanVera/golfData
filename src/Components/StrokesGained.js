import { useState, useEffect } from 'react';
import StrokesGainedData from './StrokesGainedData.js';

const StrokesGained = (props) => {
  const [strokesGained, setStrokesGained] = useState([]);

  useEffect(() => {
    fetch('/strokesGained')
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
