import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexPieChart = () => {
  const options = {
    chart: {
      id: 'apex-pie-chart',
    },
    labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
  };

  const series = [30, 40, 25, 50, 49];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default ApexPieChart;
