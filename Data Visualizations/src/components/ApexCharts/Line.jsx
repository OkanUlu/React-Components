import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexLineChart = () => {
  const options = {
    chart: {
      id: 'apex-line-chart',
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
  ];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default ApexLineChart;
