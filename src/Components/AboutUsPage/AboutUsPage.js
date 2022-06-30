import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../Header.js';
import Sidebar from '../Sidebar/Sidebar.js';

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <Container>
        <Row style={{ marginTop: '24px' }}>
          <Col md={8}>
            <h2>What is PGA Alpha and why use it?</h2>
            <p>
              Hi, I'm Jordan Vera, the creator of PGA Alpha. I created PGA Alpha
              to help golf fans analyze PGA players' performances and make
              predictions on upcoming events. PGA Alpha is my first ever solo
              project built using{' '}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                Reactjs
              </a>
              . If you notice any bugs or errors in the project, please{' '}
              <a href="mailto:verawebdevelopment@gmail.com">
                contact me by email
              </a>
              . I will be sure to award you in some way! PGA Alpha relies on
              many external APIs to gain access to PGA and other golf data, the
              main one being{' '}
              <a href="https://datagolf.com/" target="_blank" rel="noreferrer">
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
            <h2>
              What are the main sources of differences between PGA Alphas
              strokes-gained numbers and the PGA Tour's?
            </h2>
            <p>
              We've tried to follow the PGA Tour's methods for calculating
              strokes-gained as closely as possible, but inevitably there will
              be differences given we don't know exactly what their process is.
              Here are a few of the common sources of disagreement: 1) labelling
              "recovery" shots. The expected strokes to hole out changes
              substantially if a shot is deemed to be hit from a recovery
              position (see p.15 of Mark Broadie's paper). Labelling a shot as a
              recovery will have the effect of decreasing the previous shot's SG
              and increasing the SG of the current shot. This is commonly the
              source of discrepancies in SG:OTT and SG:APP; 2) Labelling shots
              as "Around-the-Green" versus "Approach-the-Green". Our method is
              simple: all shots within 50 yards from the pin are labelled as
              ARG; the PGA Tour's method (I believe) is more complicated. This
              is commonly a source of discrepancies in SG:ARG and SG:APP between
              DG and the PGA Tour; 3) We subtract the mean SG by category-hole,
              whereas the PGA Tour only subtracts the mean SG by category-round.
              We perform this adjustment by hole because we are also providing
              hole-level SG estimates (read more on this in the next Q&A). If a
              player doesn't hit a shot in every category on every hole, these
              two adjustment methods will yield different SG estimates. SG:ARG
              is the category most commonly affected by this; 4) We make the
              adjustment mentioned in (3) regardless of how many players have
              finished a hole (read more below), whereas the PGA Tour only
              starts making their adjustment later in the round. This will
              contribute to discrepancies for all categories while a round is
              ongoing. Overall the correlation between our SG figures and the
              PGA Tour's is high; for a randomly selected round, SG:OTT, SG:APP,
              and SG:ARG values typically have a correlation of 0.96-0.98, while
              SG:PUTT is >0.99.
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
