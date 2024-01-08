import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexBarChart = () => {
  const options = {
    chart: {
      id: 'apex-bar-chart',
    },
    xaxis: {
      categories: ['A', 'B', 'C', 'D', 'E'],
    },
    plotOptions: {
        bar: {
          borderRadius: 8, // Kenar yumuşaklığını belirle
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
  ];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ApexBarChart;
