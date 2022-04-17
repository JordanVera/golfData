import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import PlayerModal from './PlayerModal.js';
import classNames from 'classnames';

const LeaderBoardTable = ({ players }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  console.log({ selectedPlayer });

  return (
    <>
      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          handleClose={() => setSelectedPlayer(null)}
        />
      )}
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
            const _rowClassName = classNames('tableRow text-center', {
              'table-dark': i % 2 === 1,
              'table-primary': i % 2 === 0,
            });

            return (
              <tr className={_rowClassName} key={i}>
                <td>{player.owgr_rank}</td>
                <td>{player.player_name.split(',').reverse('').join(' ')}</td>
                <td>{player.stats.sg_app}</td>
                <td>{player.stats.sg_arg}</td>
                <td>{player.stats.sg_ott}</td>
                <td>{player.stats.sg_putt}</td>
                <td>{player.stats.sg_total}</td>
                <td>{player.dg_skill_estimate.toFixed(3)}</td>
                <td>
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => setSelectedPlayer(player)}
                  >
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
