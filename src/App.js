import { Container, Col, Row } from 'react-bootstrap';
import Header from './Components/Header.js';
import LeaderBoards from './Components/LeaderBoards.js';
import Sidebar from './Components/Sidebar.js';
import Footer from './Components/Footer.js';

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
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
