import React, { useState } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import TableSwitch from './Table.jsx';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function PredictionsToggle({
  baselineData,
  loading,
  baselineHistoryFitData,
  eventName,
  lastUpdated,
}) {
  const [radioValue, setRadioValue] = useState('baseline');

  const handleChange = (val) => setRadioValue(val);

  const baselinePopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Baseline Model</Popover.Header>
      <Popover.Body>
        This model does not take into account any characteristics of this week's
        course; it uses each golfer's historical true strokes-gained data to
        generate predictions, along with several minor adjustments for their
        age, their recent schedule, and their past performance in each
        strokes-gained category.
      </Popover.Body>
    </Popover>
  );

  const baselineHistoryFitPopover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        Baseline + Course History + Course Fit
      </Popover.Header>
      <Popover.Body>
        This model adds to our baseline estimates by incorporating information
        about this week's course. It make adjustments for a golfer's course fit
        and their course history; it also accounts for course-specific
        differences in randomness, which affects the probability estimates.
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <h3>{eventName} Player Predictions</h3>
      <ToggleButtonGroup
        id="toggleButtonGroup"
        type="radio"
        name="options"
        onChange={handleChange}
      >
        <ToggleButton id="tbg-radio-1" value="baseline" active="true">
          <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={baselinePopover}
          >
            <h6>Baseline</h6>
          </OverlayTrigger>
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value="history_fit">
          <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={baselineHistoryFitPopover}
          >
            <h6>History Fit</h6>
          </OverlayTrigger>
        </ToggleButton>
      </ToggleButtonGroup>
      <TableSwitch
        baselineData={baselineData}
        baselineHistoryFitData={baselineHistoryFitData}
        radioValue={radioValue}
        loading={loading}
      />
    </>
  );
}
export default PredictionsToggle;
