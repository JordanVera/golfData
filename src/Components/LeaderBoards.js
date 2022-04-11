import { useState, useEffect } from 'react';
import LeaderBoardTable from './LeaderBoardTable.js';

const Leaderboard = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log('Mounted');

    fetch('/players')
      .then((res) => res.json())
      .then((leaderboard) =>
        setPlayers(leaderboard, (_) => {
          console.log(
            `Leaderboard Fetched: ${JSON.stringify(leaderboard)}`,
            leaderboard
          );
        })
      );
  }, []);

  return (
    <>
      <h2 className="text-center">Leaderboards</h2>
      <LeaderBoardTable players={players} />
    </>
  );
};

export default Leaderboard;
