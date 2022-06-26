import { Container } from 'react-bootstrap';
import Header from '../Components/Header.js';
import SchedulePage from '../Components/SchedulePage/SchedulePage.jsx';
import Footer from '../Components/Footer.js';

function Schedule() {
  return (
    <>
      <Header />
      <Container>
        <SchedulePage />
      </Container>
      <Footer />
    </>
  );
}

export default Schedule;
