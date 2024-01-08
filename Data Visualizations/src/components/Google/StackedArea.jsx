import React from 'react';
import { Chart } from 'react-google-charts';

const GoogleStackedAreaChart = () => {
  // Sample data
  const data = [
    ['X', 'Series 1', 'Series 2', 'Series 3'],
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
    title: 'Area Chart',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis: { title: 'X Axis' },
    vAxis: { title: 'Y Axis' },
    isStacked: true, // Enable area chart
    series: {
      0: { areaOpacity: 0.5, color: '#4285F4' },
      1: { areaOpacity: 0.5, color: '#DB4437' },
      2: { areaOpacity: 0.5, color: '#0F9D58' },
    },
    chartArea: {
      width: '80%',
      height: '70%',
    },
    backgroundColor: {
    //   fill: '#f4f4f4',
    },
    tooltip: { trigger: 'both' }, // Display tooltip on hover and focus
  };

  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default GoogleStackedAreaChart;
