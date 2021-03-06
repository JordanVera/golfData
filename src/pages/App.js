import { Container, Col, Row } from 'react-bootstrap';
import Header from '../Components/Header.js';
import LeaderBoards from '../Components/LeaderBoards.js';
import Sidebar from '../Components/Sidebar/Sidebar.js';
import Footer from '../Components/Footer.js';
import { ToastContainer } from 'react-toastify';
import ScatterMap from '../Components/Map/ScatterMap.jsx';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={8}>
            <LeaderBoards />
            <ScatterMap />
          </Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </>
  );
}

export default App;
