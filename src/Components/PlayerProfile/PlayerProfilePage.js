import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import PlayerRadarChart from '../PlayerRadarChart.js';
import SpinnerCustom from '../Spinner.js';
import { Link } from 'react-router-dom';

export default function PlayerProfilePage({ player, loading }) {
  console.log('player', player);
  const stats = player.stats;
  return loading ? (
    <SpinnerCustom />
  ) : (
    <>
      <h2 className="text-center my-2">Player Profile</h2>
      <Row className="my-4">
        <Col md={4}>
          <Card className="playerProfileCard bg-black-base">
            <Card.Body className="text-center">
              <Card.Title>OWGR Rank</Card.Title>
              <Card.Subtitle className="text-muted">
                {player.owgr_rank}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="playerProfileCard bg-black-base">
            <Card.Body className="text-center">
              <Card.Title>PGA Alpha Rank</Card.Title>
              <Card.Subtitle className="text-muted">
                {player.datagolf_rank}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="playerProfileCard bg-black-base">
            <Card.Body className="text-center">
              <Card.Title>Skills Estimate</Card.Title>
              <Card.Subtitle className="text-muted">
                {player.dg_skill_estimate.toFixed(3)}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={4}>
          <Card className="playerProfileCard bg-black-base">
            <Card.Body className="text-center">
              <Card.Title>
                {player.player_name.split(',').reverse('').join(' ')}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {player.country}{' '}
              </Card.Subtitle>
              <PlayerRadarChart player={player} />
              <p>
                Our skill profiles, displayed as radar plots, show the number of
                standard deviations better or worse a player is in each skill
                relative to the PGA Tour average. See our{' '}
                <Link to="/aboutUs">about us</Link> page to learn more about how
                to read the radar charts displayed throughout the site.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="playerProfileCard bg-black-base">
            <Card.Body>
              <Row>
                <Col md={4}>
                  <Row>
                    <p>
                      <strong>Full Name:</strong>{' '}
                      {player.player_name.split(',').reverse('').join(' ')}
                    </p>
                    <p>
                      <strong>Primary Tour:</strong> {player.primary_tour}
                    </p>
                    <p>
                      <strong>Country:</strong> {player.country}
                    </p>
                    <p>
                      <strong>Driving Accuracy:</strong> {stats.driving_acc}
                    </p>
                    <p>
                      <strong>Driving Distance:</strong> {stats.driving_dist}
                    </p>
                    <p>
                      <strong>SG Approach:</strong> {stats.sg_app}
                    </p>
                    <p>
                      <strong>SG ARG:</strong> {stats.sg_arg}
                    </p>
                    <p>
                      <strong>SG OTT:</strong> {stats.sg_ott}
                    </p>
                    <p>
                      <strong>SG Putt:</strong> {stats.sg_putt}
                    </p>
                    <p>
                      <strong>SG Total:</strong> {stats.sg_total}
                    </p>
                  </Row>
                </Col>
                <Col md={8}></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
