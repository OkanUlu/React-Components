import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexStackedLineChart = () => {
  const options = {
    chart: {
      id: 'apex-stacked-line-chart',
      stacked: true,
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  };

  const series = [
    {
      name: 'Series A',
      data: [30, 40, 25, 50, 49, 21, 70, 51, 60, 80],
    },
    {
      name: 'Series B',
      data: [20, 30, 15, 35, 34, 10, 60, 41, 50, 70],
    },
    {
      name: 'Series C',
      data: [10, 15, 10, 15, 14, 7, 35, 25, 30, 40],
    },
  ];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default ApexStackedLineChart;
