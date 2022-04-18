import React from 'react';
import { Card, Table, Spinner } from 'react-bootstrap';
import SpinnerCustom from './Spinner.js';

export default function LiveOddsCard({ event, loading }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">{event.event_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">
          Last Updated: {event.last_updated}
        </Card.Subtitle>
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
                    <td>{player.fanduel}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
        <Card.Text>Fanduel Odds</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
