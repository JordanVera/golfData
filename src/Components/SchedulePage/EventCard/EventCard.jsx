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
          <Card key={i + 1} className="my-4">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Card.Title>
                    {event_name}
                    <Badge className="badge" pill bg="success">
                      Event Name
                    </Badge>
                  </Card.Title>
                  <p>
                    <strong>Start Date:</strong> {start_date}
                  </p>
                </Col>
                <Col md={6}>
                  <Card.Title className="alignToRight">
                    <Badge className="badge" pill bg="success">
                      Course
                    </Badge>
                    {course}
                  </Card.Title>
                  <p className="alignToRight">
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
