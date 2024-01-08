import React from 'react';
import ReactEcharts from 'echarts-for-react';

const StackedLineChart = () => {
  const option = {
    title: {
      text: 'Stacked Line Chart',
    },
    xAxis: {
      type: 'category',
      data: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      axisLabel: {
        rotate: 45,
      },
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      data: ['Category A', 'Category B', 'Category C'],
    },
    series: [
      {
        data: [30, 40, 20, 50, 10, 30, 20],
        type: 'line',
        stack: 'total',
        name: 'Category A',
        emphasis: {
          focus: 'series',
        },
      },
      {
        data: [20, 30, 10, 40, 20, 10, 30],
        type: 'line',
        stack: 'total',
        name: 'Category B',
        emphasis: {
          focus: 'series',
        },
      },
      {
        data: [50, 30, 50, 10, 30, 60, 50],
        type: 'line',
        stack: 'total',
        name: 'Category C',
        emphasis: {
          focus: 'series',
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

export default StackedLineChart;
