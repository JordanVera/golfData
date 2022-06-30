import { Modal, Row, Col } from 'react-bootstrap';
import PlayerRadarChart from './PlayerRadarChart.js';

const PlayerModal = ({ player, handleClose }) => {
  return (
    <Modal show={true} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="animate__animated animate__fadeIn">
          {player.player_name.split(',').reverse('').join(' ')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <h4 className="my-3 text-center animate__animated animate__fadeIn">
            Skill Profile Breakdown
          </h4>
          <PlayerRadarChart player={player} />
        </Row>
        <Row className="text-center animate__animated animate__fadeIn">
          <Col md={4}>
            <p>
              <strong>Country</strong>
            </p>
            <p>
              <img
                src={`images/flags/${player.country}.png`}
                alt={`${player.country} flag`}
              />
            </p>
          </Col>
          <Col md={4}>
            <p>
              <strong>Rank</strong>
            </p>
            <p>{player.owgr_rank}</p>
          </Col>
          <Col md={4}>
            <p>
              <strong>Skill Rating</strong>
            </p>
            <p>{player.dg_skill_estimate.toFixed(3)}</p>
          </Col>
        </Row>
        <Row className="animate__animated animate__fadeIn">
          <p className="sm-txt">
            Our skill profiles, displayed as radar plots, show the number of
            standard deviations better or worse a player is in each skill
            relative to the PGA Tour average. Driving distance skill is measured
            in yards, driving accuracy in % of fairways hit per round, and the
            strokes-gained categories are measured in strokes per round.
            Standard deviation is a measure of the spread of the data.
            Therefore, if you are 1 standard deviation above average in driving
            distance, this means you are 8.1 yards longer than the PGA Tour
            average. Nearly all of the data will be within 3 standard deviations
            of the mean (i.e. if you are 3 SD above the mean in distance, you
            are one of the longest players on Tour). For more intuition on
            standard deviation, take a look at this Wikipedia entry.
          </p>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default PlayerModal;
