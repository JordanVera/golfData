import { Col, Row, Form, Button } from 'react-bootstrap';

export default function ContactForm() {
  return (
    <div id="contactForm" className="animate__animated animate__fadeIn">
      <h3 className="text-center white">Contact PGA Alpha</h3>
      <Form method="POST" action="/submitForm">
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-2">
              <Form.Label className="white">First Name</Form.Label>
              <Form.Control
                name="firstName"
                size="sm"
                type="text"
                placeholder="Kanye"
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            {' '}
            <Form.Group className="mb-2">
              <Form.Label className="white">Last Name</Form.Label>
              <Form.Control
                name="lastName"
                size="sm"
                type="text"
                placeholder="West"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-2">
            <Form.Label className="white">Email</Form.Label>
            <Form.Control
              name="email"
              size="sm"
              type="email"
              placeholder="kanyewest@gmail.com"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-2">
            <Form.Label className="white">Text Area</Form.Label>
            <Form.Control
              name="msg"
              className="mb-2"
              size="sm"
              as="textarea"
              rows={3}
              placeholder="Message to our team."
            />
          </Form.Group>
        </Row>
        <Button
          className="submitButton"
          variant="success"
          size="sm"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
