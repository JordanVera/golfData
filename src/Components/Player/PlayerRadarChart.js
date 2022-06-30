import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

export default function PlayerRadarChart({ player }) {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const { stats } = player;
  const standardDeviations = {
    driving_distance: 8.1,
    driving_accuracy: 0.047,
    sg_app: 0.37,
    sg_arg: 0.16,
    sg_putt: 0.24,
  };

  const data = {
    labels: [
      'Driving Dist.',
      'Driving Acc.',
      'Approach',
      'Around Green',
      'Putting',
    ],
    datasets: [
      {
        label: player.player_name.split(',').reverse('').join(' '),
        data: [
          (stats.driving_dist / standardDeviations.driving_distance).toFixed(1),
          (stats.driving_acc / standardDeviations.driving_accuracy).toFixed(1),
          (stats.sg_app / standardDeviations.sg_app).toFixed(1),
          (stats.sg_arg / standardDeviations.sg_arg).toFixed(1),
          (stats.sg_putt / standardDeviations.sg_putt).toFixed(1),
        ],
        backgroundColor: 'rgba(50, 205, 50, 0.2)',
        borderColor: 'rgba(50, 205, 50, 1)',
        borderWidth: 1,
      },
      {
        label: 'Tour Average',
        borderColor: 'rgba(0, 116, 217, 1)',
        borderWidth: 2,
      },
    ],
  };

  const white = '#fff';
  const grey = 'rgba(0,0,0, .3)';
  const options = {
    scales: {
      r: {
        max: 3,
        min: -2.5,
        grid: {
          circular: true,
          color: [grey, 'rgba(0, 116, 217, 1)', grey, grey],
          lineWidth: [1, 2, 1, 1],
        },
        ticks: {
          tickColor: white,
          stepSize: 1.5,
          backgroundColor: white,
        },
        angleLines: {
          color: grey,
          lineWidth: 1,
        },
        pointLabels: {
          color: white,
        },
      },
    },
  };

  return <Radar className="playerRadarChart" options={options} data={data} />;
}
