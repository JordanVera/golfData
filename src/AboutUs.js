import { Container } from 'react-bootstrap';
import Header from './Components/Header.js';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage.js';
import Footer from './Components/Footer.js';

function AboutUs() {
  return (
    <>
      <Header />
      <Container>
        <AboutUsPage />
      </Container>
      <Footer />
    </>
  );
}

export default AboutUs;
