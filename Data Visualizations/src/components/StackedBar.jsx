import React from 'react';
import ReactEcharts from 'echarts-for-react';

const EnhancedStackedBarChart = () => {
  const option = {
    title: {
      text: 'Stacked Bar Chart',
    },
    xAxis: {
      type: 'category',
      data: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Category A', 'Category B', 'Category C'],
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: 'rgba(75, 192, 192, 0.7)',
          borderRadius: [8, 8, 0, 0], // Köşelerin yumuşatılması
        },
        label: {
          show: true,
          position: 'inside',
          textStyle: {
            color: '#fff', // Etiket rengi
          },
        },
        emphasis: {
          focus: 'series',
        },
        name: 'Category A',
      },
      {
        data: [220, 180, 130, 140, 100, 120, 80],
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: 'rgba(255, 193, 7, 0.7)',
          borderRadius: [8, 8, 0, 0],
        },
        label: {
          show: true,
          position: 'inside',
          textStyle: {
            color: '#fff',
          },
        },
        emphasis: {
          focus: 'series',
        },
        name: 'Category B',
      },
      {
        data: [320, 120, 180, 160, 200, 160, 240],
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: 'rgba(255, 99, 132, 0.7)',
          borderRadius: [8, 8, 8, 8],
        },
        label: {
          show: true,
          position: 'inside',
          textStyle: {
            color: '#fff',
          },
        },
        emphasis: {
          focus: 'series',
        },
        name: 'Category C',
      },
    ],
  };

  return (
    <div>
      <ReactEcharts option={option} style={{ height: '400px' }} />
    </div>
  );
};

export default EnhancedStackedBarChart;
