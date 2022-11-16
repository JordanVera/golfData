import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  scales: {
    x: {
      max: 0.35,
      min: -0.35,
      ticks: {
        display: false,
        stepSize: 0.1,
        backgroundColor: '#fff',
        beginAtZero: true,
      },
    },
  },
  elements: {
    bar: {
      borderWidth: 0.2,
    },
  },
  maxBarThickness: 12,
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

export function StrokesGainedCategoryAdjustment({ player }) {
  const labels = [`${player.strokes_gained_category_adjustment.toFixed(2)}`];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map((_) =>
          player.strokes_gained_category_adjustment.toFixed(2)
        ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor:
          player.strokes_gained_category_adjustment > 0 ? '#30674F' : '#A5332C',
      },
    ],
  };
  return (
    <div className="sgCats">
      <Bar options={options} data={data} />
    </div>
  );
}
