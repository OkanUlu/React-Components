import React from 'react';
import { Chart } from 'react-google-charts';

const GoogleAreaChart = () => {
  // Sample data
  const data = [
    ['X', 'Y'],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    //... diğer veriler
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

export default GoogleAreaChart;
