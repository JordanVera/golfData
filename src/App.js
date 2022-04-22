import { Container, Col, Row } from 'react-bootstrap';
import Header from './Components/Header.js';
import LeaderBoards from './Components/LeaderBoards.js';
import LiveOdds from './Components/BettingOdds/LiveOdds.js';
import TopFive from './Components/BettingOdds/TopFive.js';
import TopTen from './Components/BettingOdds/TopTen.js';
import NewsWidget from './Components/NewsWidget/NewsWidget.js';

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
            <NewsWidget />
            <LiveOdds />
            <TopFive />
            <TopTen />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
