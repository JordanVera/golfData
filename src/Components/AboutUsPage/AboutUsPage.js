import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../Header.js';
import Sidebar from '../Sidebar.js';

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <h1 className="my-4 text-center">About Us</h1>
          <Col md={8}>
            <h2>What is PGA Alpha and why use it?</h2>
            <p>
              Hi, I'm Jordan Vera, the creator of PGA Alpha. I created PGA Alpha
              to help golf fans analyze PGA players' performances and make
              predictions on upcoming events. PGA Alpha is my first ever solo
              project built using{' '}
              <a href="https://reactjs.org/" target="_blank">
                Reactjs
              </a>
              . If you notice any bugs or errors in the project, please{' '}
              <a href="mailto:verawebdevelopment@gmail.com">
                contact me by email
              </a>
              . I will be sure to award you in some way! PGA Alpha relies on
              many external APIs to gain access to PGA and other golf data, the
              main one being{' '}
              <a href="https://datagolf.com/" target="_blank">
                datagolf.com
              </a>
              .
            </p>
            <h2>
              How do I interpret player skill profiles (and accompanying radar
              plots)?
            </h2>
            <p>
              Our skill profiles, displayed as radar plots, show the number of
              standard deviations better or worse a player is in each skill
              relative to the PGA Tour average. The radar plots can be opened by
              clicking the green stats button in every row of each player on the
              leaderboards table on the home page. Driving distance skill is
              measured in yards, driving accuracy in % of fairways hit per
              round, and the strokes-gained categories are measured in strokes
              per round. Standard deviation is a measure of the spread of the
              data; for our purposes, here are the relevant standard deviations:
              driving distance 8.1 yards, driving accuracy 4.7%, strokes-gained
              approach 0.37 strokes, strokes-gained around-the-green 0.16
              strokes, and strokes-gained putting 0.24 strokes. Therefore, if
              you are 1 standard deviation above average in driving distance,
              this means you are 8.1 yards longer than the PGA Tour average.
              Nearly all of the data will be within 3 standard deviations of the
              mean (i.e. if you are 3 SD above the mean in distance, you are one
              of the longest players on Tour). For more intuition on standard
              deviation, take a look at this Wikipedia entry.{' '}
            </p>
          </Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}
