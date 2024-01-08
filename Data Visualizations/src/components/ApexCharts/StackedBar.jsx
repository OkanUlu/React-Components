import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexStackedBarChart = () => {
  const options = {
    chart: {
      id: 'apex-custom-stacked-bar-chart',
      stacked: true,
    },
    xaxis: {
      categories: ['A', 'B', 'C', 'D', 'E'],
    },
    plotOptions: {
      bar: {
        borderRadius: 8, // Kenar yumuşaklığını belirle
        horizontal: false, // Dikey bar chart
      },
    },
    fill: {
      opacity: 0.7, // Saydamlık seviyesini belirle (0 ile 1 arasında)
    },
  };

  const series = [
    {
      name: 'Series A',
      data: [30, 40, 25, 50, 49],
    },
    {
      name: 'Series B',
      data: [20, 30, 15, 35, 34],
    },
    {
      name: 'Series C',
      data: [10, 15, 10, 15, 14],
    },
  ];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ApexStackedBarChart;
