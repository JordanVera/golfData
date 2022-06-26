import SpinnerCustom from '../../Spinner.js';
import Map from './Map.jsx';
import { Card, Row, Col, Badge } from 'react-bootstrap';

export default function EventCard({ events, loading }) {
  return loading ? (
    <SpinnerCustom />
  ) : (
    <>
      {events.map((golfTournament, i) => {
        const { course, event_name, start_date, location, lat, long } =
          golfTournament;
        return (
          <Card key={i + 1} className="my-4 tournamentCard">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Card.Title>
                    <Badge className="badge" pill bg="success">
                      Event
                    </Badge>
                    {event_name}
                  </Card.Title>
                </Col>
                <Col md={6} className="alignToRight">
                  <Card.Title>
                    <Badge className="badge" pill bg="success">
                      Course
                    </Badge>
                    {course}
                  </Card.Title>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <p>
                    <strong>Start Date:</strong> {start_date}
                  </p>
                </Col>
                <Col md={6} className="alignToRight">
                  <p>
                    <strong>Location:</strong> {location}
                  </p>
                </Col>
              </Row>
              <Card.Text>
                <Map latitude={lat} longitude={long} />
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
