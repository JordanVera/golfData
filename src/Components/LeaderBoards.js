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
    <>
      <h2 className="text-center my-3">Leaderboards</h2>
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
    </>
  );
};

export default Leaderboard;
