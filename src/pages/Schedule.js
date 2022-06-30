import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Components/Header.js';
import SchedulePage from '../Components/SchedulePage/SchedulePage.jsx';
import Footer from '../Components/Footer.js';
import Sidebar from '../Components/Sidebar/Sidebar.js';

function Schedule() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={8}>
            <SchedulePage />
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

export default Schedule;
