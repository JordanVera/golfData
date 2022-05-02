import React, { useState, useEffect } from 'react';
import TableMain from './Table.js';
import PlayerModal from './PlayerModal.js';

const Leaderboard = (props) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/getPlayers')
      .then((res) => res.json())
      .then((leaderboard) => {
        setPlayers(leaderboard, (_) => {
          console.log(
            `Leaderboard Fetched: ${JSON.stringify(leaderboard)}`,
            leaderboard
          );
        });
        setLoading(false);
      });
  }, []);

  return (
    <div className="leaderboard">
      <h3 className="text-center">Leaderboard</h3>
      <TableMain
        players={players}
        loading={loading}
        setSelectedPlayer={setSelectedPlayer}
      />

      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          handleClose={() => setSelectedPlayer(null)}
        />
      )}
    </div>
  );
};

export default Leaderboard;
