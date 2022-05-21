import { Container, Col, Row } from 'react-bootstrap';
import Header from './Components/Header.js';
import ContactedUsPage from './Components/ContactedUsPage/ContactedUsPage.js';
import Footer from './Components/Footer.js';

function ContactedUs() {
  return (
    <>
      <Header />
      <Container>
        <ContactedUsPage />
      </Container>
      <Footer />
    </>
  );
}

export default ContactedUs;
