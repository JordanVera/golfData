import { useState, useEffect } from 'react';
import LeaderBoardTable from './LeaderBoardTable.js';

const Leaderboard = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/getPlayers')
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
      <h2 className="text-center my-3">Leaderboards</h2>
      <LeaderBoardTable players={players} />
    </>
  );
};

export default Leaderboard;
