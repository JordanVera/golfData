import { Container, Col, Row } from 'react-bootstrap';
import Header from './Components/Header.js';
import LeaderBoards from './Components/LeaderBoards.js';
import LiveOdds from './Components/LiveOdds.js';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={8}>
            <LeaderBoards />
          </Col>
          <Col md={4}>
            <LiveOdds />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
