import React from 'react';
import { Col, Row, Card, Badge, Image } from 'react-bootstrap';
import PlayerRadarChart from '../PlayerRadarChart.js';
import SpinnerCustom from '../../Spinner.js';
import { Link } from 'react-router-dom';

export default function PlayerProfilePage({ player, loading }) {
  const {
    owgr_rank,
    datagolf_rank,
    dg_skill_estimate,
    country,
    player_name,
    primary_tour,
  } = player;
  const stats = player.stats;

  if (typeof player.fantasyData === 'undefined') {
    player.fantasyData = {};
  }

  const { Weight, Swings, PgaDebut, BirthDate, PhotoUrl } = player.fantasyData;

  return loading ? (
    <SpinnerCustom />
  ) : (
    <>
      <Card className="my-4">
        <Row className="px-2 mx-1">
          <Col>
            <Row className="my-4">
              <Col xs={3}>
                <img
                  className="profilePlayerImage"
                  src={PhotoUrl}
                  alt="profilePlayerImage"
                />
              </Col>
              <Col xs={9}>
                <div className="profileNameData">
                  <h5>
                    <Image
                      src={`/images/flags/${country}.png`}
                      className="countryFlag"
                    />
                    {player_name.split(',').reverse('').join(' ')}
                  </h5>
                  <h6>
                    <Badge bg="success" className="mx-0">
                      Rank: {owgr_rank}
                    </Badge>
                  </h6>
                  <h6 className="smallHeader">Swings: {Swings}</h6>
                  <h6 className="smallHeader">Weight: {Weight}</h6>
                  <h6 className="smallHeader">PGA Debut: {PgaDebut}</h6>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4}></Col>
          <Col md={4}></Col>
        </Row>
      </Card>
      <Row className="my-4">
        <Col lg={4} md={6}>
          <Card className="playerProfileCard -base">
            <Card.Body className="text-center">
              <Card.Title>Skills Breakdown</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {country}{' '}
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

        <Col lg={8} md={6}>
          <Card className="playerProfileCard">
            <Card.Body>
              <Row>
                <Col md={4}>
                  <div className="text-center">
                    <h5>Primary Tour</h5> {primary_tour}
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center">
                    <h5>OWGR Rank </h5> {owgr_rank}
                    {/* {new Date(BirthDate).toLocaleDateString()} */}
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center">
                    <h5>PGA Alpha Rank </h5> {datagolf_rank}
                    {/* {new Date(BirthDate).toLocaleDateString()} */}
                  </div>
                  {/* <p>
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
                  </p>{' '} */}
                </Col>
                <hr className="borderBottom" />
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
