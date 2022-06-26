import { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { url } from '../config.js';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    msg: '',
  });
  const { register, handleSubmit } = useForm();

  const { firstName, lastName, email, msg } = inputs;

  const toastSettingsObj = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

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
                required="true"
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
                required="true"
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
              required="true"
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
              required="true"
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
