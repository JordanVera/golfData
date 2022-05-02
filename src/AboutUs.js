import { Container, Col, Row } from 'react-bootstrap';
import Header from './Components/Header.js';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage.js';

function AboutUs() {
  return (
    <>
      <Header />
      <Container>
        <AboutUsPage />
      </Container>
    </>
  );
}

export default AboutUs;
