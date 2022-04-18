import React from 'react';
import { Card, Table, Row, Col } from 'react-bootstrap';
import SpinnerCustom from './Spinner.js';

export default function LiveOddsCard({ event, loading }) {
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col sm={3}>
            <img src="/images/dk_white.png" className="draftKingsLogo" />
          </Col>
          <Col sm={9} className="text-center">
            <Card.Title className="text-danger">
              <h4>{event.event_name}</h4>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-success">
              Last Updated: {event.last_updated}
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Table striped bordered variant="dark">
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Odds</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <SpinnerCustom />
            ) : (
              event.odds.map((player) => {
                return (
                  <tr tr className="text-center" key={player.dg_id}>
                    <td>{player.player_name}</td>
                    <td>{player.draftkings}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
        <Card.Text className="text-center">
          Draft Kings odds to win {event.event_name}
        </Card.Text>
        <Card.Link className="text-center">Bet on Odds</Card.Link>
      </Card.Body>
    </Card>
  );
}
