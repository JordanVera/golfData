import React, { useState, useEffect } from 'react';
import LiveScoringDistribution from './ScoringDistribution.js';

export default function ScoringDistributionState() {
  const [currentRoundStats, setCurrentRoundStats] = useState({});
  const [eventName, setEventName] = useState('');
  const [lastUpdate, setLastUpdate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/scoringDistribution')
      .then((res) => res.json())
      .then((tournamentData) => {
        setCurrentRoundStats(
          tournamentData.courses[0].rounds.find((round, i) => {
            return round.round_num === tournamentData.current_round;
          })
        );
        setEventName(tournamentData.event_name);
        setLastUpdate(tournamentData.last_update);
        setLoading(false);
      });
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
