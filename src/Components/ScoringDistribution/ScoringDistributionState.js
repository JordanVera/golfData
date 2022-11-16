import React, { useState, useEffect } from 'react';
import LiveScoringDistribution from './ScoringDistribution.js';
import { url } from '../../config.js';

export default function ScoringDistributionState() {
  const [currentRoundStats, setCurrentRoundStats] = useState({});
  const [eventName, setEventName] = useState('');
  const [lastUpdate, setLastUpdate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScoringDistributionData = async (_) => {
      const res = await fetch(`${url}/scoringDistribution`);
      const tournamentData = await res.json();

      setCurrentRoundStats(
        tournamentData.courses[0].rounds.find((round, i) => {
          return round.round_num === tournamentData.current_round;
        })
      );
      setEventName(tournamentData.event_name);
      setLastUpdate(tournamentData.last_update);
      setLoading(false);
    };

    fetchScoringDistributionData();
  }, []);

  return (
    <LiveScoringDistribution
      eventName={eventName}
      currentRoundStats={currentRoundStats}
      lastUpdate={lastUpdate}
      loading={loading}
    />
  );
}
