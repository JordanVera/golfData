const LeaderBoardTable = ({ players }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Rank</th>
        <th>Last Week Rank</th>
        <th>Average Points</th>
        <th>Total Points</th>
        <th>Points Gained</th>
        <th>Points Lost</th>
        <th>Season</th>
      </tr>
    </thead>
    <tbody>
      {players.map((player, i) => {
        if ((i + 1) % 2 !== 0) {
          return (
            <tr>
              <td>{player.name}</td>
              <td>{player.rank}</td>
              <td>{player.lastWeekRank}</td>
              <td>{player.averagePoints}</td>
              <td>{player.totalPoints}</td>
              <td>{player.pointsGained}</td>
              <td>{player.pointsLost}</td>
              <td>{player.season}</td>
            </tr>
          );
        }

        return (
          <tr className="table-secondary">
            <td>{player.name}</td>
            <td>{player.rank}</td>
            <td>{player.lastWeekRank}</td>
            <td>{player.averagePoints}</td>
            <td>{player.totalPoints}</td>
            <td>{player.pointsGained}</td>
            <td>{player.pointsLost}</td>
            <td>{player.season}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default LeaderBoardTable;
