import React from 'react';
import ReactEcharts from 'echarts-for-react';

const PieChart = () => {
  const option = {
    title: {
      text: 'Pie Chart',
    //   subtext: 'Sample Subtitle',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
    },
    series: [
      {
        name: 'Pie Chart',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'Category A' },
          { value: 310, name: 'Category B' },
          { value: 234, name: 'Category C' },
          { value: 135, name: 'Category D' },
          { value: 1548, name: 'Category E' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <div>
      <ReactEcharts option={option} style={{ height: '400px' }} />
    </div>
  );
};

export default PieChart;
