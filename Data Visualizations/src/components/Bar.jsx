import React from 'react';
import ReactEcharts from 'echarts-for-react';

const EnhancedBarChart = () => {
  const option = {
    title: {
      text: 'Bar Chart',
    },
    xAxis: {
      type: 'category',
      data: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
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
    series: [
      {
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        itemStyle: {
          color: 'rgba(75, 192, 192, 0.7)', // Çubuk rengi ve şeffaflık
          barBorderRadius: [8, 8, 0, 0], // Köşelerin yumuşatılması
        },
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: 'rgba(0, 0, 0, 0.7)', // Etiket rengi
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

export default EnhancedBarChart;
