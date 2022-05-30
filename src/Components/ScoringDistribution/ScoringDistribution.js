import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SpinnerCustom from '../Spinner.js';

export default function ScoringDistribution({
  currentRoundStats,
  eventName,
  lastUpdate,
  loading,
}) {
  const lastUpdateFormatted = lastUpdate.split(' ');
  const dateArr = lastUpdateFormatted[0].split('-');
  const time = lastUpdateFormatted[1];
  const amOrPm = lastUpdateFormatted[2];
  const day = dateArr[2];
  const month = dateArr[1];
  const year = dateArr[0];
  const dateStr = `${month}/${day}/${year}`;

  return loading ? (
    <SpinnerCustom />
  ) : (
    <Row className="liveScoringOuter">
      <Row className="liveScoring">
        <div style={{ padding: 0 }}>
          {currentRoundStats.holes.map((item) => {
            const { total } = item;
            return (
              <>
                <div className="inline holeNumber bg-light-grey animate__animated animate__fadeIn">
                  <p>{item.hole}</p>
                </div>
                <div className="inline holeStats animate__animated animate__fadeIn">
                  <Row>
                    <Col xs={6}>
                      <p>par: {item.par}</p>
                      <p>yards: {item.yardage}</p>
                      <p>players_thru: {total.players_thru}</p>
                      <p>avg_score: {total.avg_score.toFixed(2)}</p>
                    </Col>
                    <Col xs={6}>
                      <p>eagles_or_better: {total.eagles_or_better}</p>
                      <p>birdies: {total.birdies}</p>
                      <p>pars: {total.pars}</p>
                      <p>bogeys: {total.bogeys}</p>
                      <p>doubles_or_worse: {total.doubles_or_worse}</p>
                    </Col>
                  </Row>
                </div>
              </>
            );
          })}
        </div>
      </Row>
      <h4 className="text-center liveScoringTitle animate__animated animate__fadeIn">
        Round Number {currentRoundStats.round_num} of {eventName}
      </h4>
      <h4 className="text-center updateTitle animate__animated animate__fadeIn">
        Last Updated at {time} {amOrPm} on {dateStr}
      </h4>
    </Row>
  );
}
