import React from 'react';
import ReactEcharts from 'echarts-for-react';

const AreaChart = () => {
  const option = {
    title: {
      text: 'Area Chart',
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
    series: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        type: 'line',
        areaStyle: {
          color: 'rgba(75, 192, 192, 0.5)', // Alan rengi ve şeffaflık
        },
        smooth: true,
        symbol: 'circle',
        itemStyle: {
          color: 'rgb(75, 192, 192)',
        },
        emphasis: {
          focus: 'series',
        },
        name: 'My Area Chart',
      },
    ],
  };

  return (
    <div>
      <ReactEcharts option={option} style={{ height: '400px' }} />
    </div>
  );
};

export default AreaChart;
