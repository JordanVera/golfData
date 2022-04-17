import { Modal, Row, Col } from 'react-bootstrap';
import PlayerRadarChart from './PlayerRadarChart.js';

const PlayerModal = ({ player, handleClose }) => {
  // const { stats } = player;

  return (
    <Modal show={true} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {player.player_name.split(',').reverse('').join(' ')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={8}>
            <h4 className="my-3">Radar Chart</h4>
            <PlayerRadarChart player={player} />
          </Col>
          <Col md={4} className="text-center">
            {/* <p>
              <strong>Primary Tour</strong>
            </p>
            <p>{player.primary_tour}</p>
            <p>
              <strong>Driving Dist.</strong>
            </p>
            <p>{stats.driving_dist}</p>
            <p>
              <strong>Driving Acc.</strong>
            </p>
            <p>{stats.driving_acc}</p>
            <p>
              <strong>Skill Rating</strong>
            </p>
            <p>{player.dg_skill_estimate.toFixed(3)}</p> */}
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PlayerModal;
