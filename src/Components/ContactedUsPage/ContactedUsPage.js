import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../Header.js';
import Sidebar from '../Sidebar.js';
import Footer from '../Footer.js';
import ParticlesBackground from './ParticlesBackground.js';

export default function ContactedUsPage() {
  return (
    <>
      <Header />
      <div id="contactedUs">
        <ParticlesBackground />
        <Container>
          <Row>
            <Col md={8}>
              <h1 className="my-4 text-center">Thanks For Contacting Us</h1>
              <p className="text-center">
                We will be sure to reply to you within 48 hours of your message
                being sent. Sometimes we reply much quicker than that, so please
                check your email often if you are wanting a response asap.
              </p>
              <div
                style={{
                  width: '100%',
                  height: 0,
                  paddingBottom: '56%',
                  position: 'relative',
                }}
              >
                <iframe
                  src="https://giphy.com/embed/662ZysJEmtjY4QB5q7"
                  title="iframe"
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute' }}
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
            <Col md={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
