import { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { url } from '../../config.js';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    msg: '',
  });
  const { handleSubmit } = useForm();

  const { firstName, lastName, email, msg } = inputs;

  const handleChange = (e) => {
    const value = e.target.value;
    setInputs({
      ...inputs,
      [e.target.name]: value,
    });
  };

  const onSubmit = (data) => {
    fetch(`${url}/submitForm`, {
      method: 'POST',
      headers: {
        'content-type': 'Application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        msg,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          navigate('/contactedUs');
        }
      });
  };
  return (
    <div id="contactForm" className="animate__animated animate__fadeIn">
      <h3 className="text-center white">Contact PGA Alpha</h3>
      <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-2">
              <Form.Label className="white">First Name</Form.Label>
              <Form.Control
                name="firstName"
                value={firstName}
                onChange={handleChange}
                size="sm"
                type="text"
                placeholder="Kanye"
                required
                minLength={3}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-2">
              <Form.Label className="white">Last Name</Form.Label>
              <Form.Control
                name="lastName"
                value={lastName}
                onChange={handleChange}
                size="sm"
                type="text"
                placeholder="West"
                required
                minLength={3}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-2">
            <Form.Label className="white">Email</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={handleChange}
              size="sm"
              type="email"
              placeholder="kanyewest@gmail.com"
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-2">
            <Form.Label className="white">Text Area</Form.Label>
            <Form.Control
              name="msg"
              value={msg}
              onChange={handleChange}
              className="mb-2"
              size="sm"
              as="textarea"
              rows={3}
              placeholder="Message to our team."
              required
              minLength={10}
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
      </form>
    </div>
  );
}
