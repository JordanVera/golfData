import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/images/logoWhite.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features"> Features</Nav.Link>
            <Nav.Link href="#pricing"> Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
