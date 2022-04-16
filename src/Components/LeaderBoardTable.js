import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const LeaderBoardTable = ({ players }) => {
  return (
    <>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th>Rank</th>
            <th>Name</th>
            <th>SG APP</th>
            <th>SQ ARG</th>
            <th>SQ OTT</th>
            <th>SG PUTT</th>
            <th>SG Total</th>
            <th>Skill Est</th>
            <th>SStats</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, i) => {
            if ((i + 1) % 2 !== 0) {
              return (
                <>
                  <tr
                    className="tableRow table-primary text-center"
                    playerId={player.dg_id}
                  >
                    <td>{player.owgr_rank}</td>
                    <td>{player.player_name}</td>
                    <td>{player.stats.sg_app}</td>
                    <td>{player.stats.sg_arg}</td>
                    <td>{player.stats.sg_ott}</td>
                    <td>{player.stats.sg_putt}</td>
                    <td>{player.stats.sg_total}</td>
                    <td>{player.dg_skill_estimate.toFixed(3)}</td>
                    <td>
                      <Button size="sm" variant="success">
                        Stats
                      </Button>
                    </td>
                  </tr>
                </>
              );
            }

            return (
              <tr className="tableRow table-dark text-center" key={i}>
                <td>{player.owgr_rank}</td>
                <td>{player.player_name}</td>
                <td>{player.stats.sg_app}</td>
                <td>{player.stats.sg_arg}</td>
                <td>{player.stats.sg_ott}</td>
                <td>{player.stats.sg_putt}</td>
                <td>{player.stats.sg_total}</td>
                <td>{player.dg_skill_estimate.toFixed(3)}</td>
                <td>
                  <Button size="sm" variant="success">
                    Stats
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default LeaderBoardTable;
