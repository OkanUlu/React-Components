import React from 'react';
import { Chart } from 'react-google-charts';

const StackedLineChart = () => {
  // Sample data
  const data = [
    ['X', 'Y1', 'Y2', 'Y3'],
    [1, 10, 5, 15],
    [2, 23, 12, 8],
    [3, 17, 6, 11],
    [4, 18, 9, 13],
    [5, 9, 7, 10],
    [6, 11, 14, 5],
    [7, 27, 18, 12],
    //... other data points
  ];

  // Chart options
  const options = {
    title: 'Stacked Line Chart',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis: { title: 'X Axis' },
    vAxis: { title: 'Y Axis' },
    isStacked: true, // Enable stacked chart
    series: {
      0: { color: '#1f77b4' },
      1: { color: '#ff7f0e' },
      2: { color: '#2ca02c' },
    },
    chartArea: {
      width: '80%',
      height: '70%',
    },
    backgroundColor: {
    //   fill: '#f4f4f4',
    },
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default StackedLineChart;
