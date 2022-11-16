import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { StrokesGainedCategoryAdjustment } from './charts/StrokesGainedCategoryAdjustment.js';
import Sidebar from '../Sidebar/Sidebar.js';
import SpinnerCustom from '../Spinner.js';

export default function SkillDecompositionPage({
  skillDecomposition,
  loading,
}) {
  return loading ? (
    <SpinnerCustom />
  ) : (
    <>
      <Container>
        <Row>
          <Col md={8}>
            {skillDecomposition.players?.map((player, i) => {
              const {
                dg_id,
                baseline_pred,
                strokes_gained_category_adjustment,
                course_experience_adjustment,
                driving_distance_adjustment,
                driving_accuracy_adjustment,
                timing_adjustment,
                final_pred,
                total_fit_adjustment,
                player_name,
              } = player;

              return (
                <div key={dg_id}>
                  <p>{player_name}</p>
                  <p>{baseline_pred}</p>
                  <StrokesGainedCategoryAdjustment
                    className="strokesGainedCategoryAdjustmenGraph"
                    player={player}
                  />
                  <p>{course_experience_adjustment}</p>
                  <p>{driving_accuracy_adjustment}</p>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}
