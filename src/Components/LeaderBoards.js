import React, { useState, useEffect } from 'react';
import TableMain from './Table.js';
import PlayerModal from './Player/PlayerModal.js';
import Searchbar from './Searchbar/Searchbar.js';
import { url } from '../config.js';

const Leaderboard = (props) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect((_) => {
    const fetchPlayers = async (_) => {
      const res = await fetch(`${url}/getPlayers`);
      const leaderboard = await res.json();

      setPlayers(leaderboard);
      setLoading(false);
    };

    fetchPlayers();
  }, []);

  return (
    <div className="leaderboard">
      <Searchbar placeholder="Search Players.." data={players} />
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
