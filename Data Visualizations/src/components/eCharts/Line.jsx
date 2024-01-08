import React from 'react';
import ReactEcharts from 'echarts-for-react';

const EnhancedLineChart = () => {
  const option = {
    title: {
      text: 'ECharts Line',
    },
    xAxis: {
      type: 'category',
      data: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      axisLabel: {
        rotate: 45, // Eksen etiketlerini 45 derece döndürme
      },
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis', // Noktalara tıklanarak tooltip gösterimi
      axisPointer: {
        type: 'cross', // Çizgi şeklinde işaretçi
      },
    },
    series: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        type: 'line',
        name: 'My Line Chart',
        smooth: true, // Pürüzsüz çizgi
        symbol: 'circle', // Nokta sembolü
        itemStyle: {
          color: 'rgb(75, 192, 192)',
        },
        emphasis: {
          focus: 'series', // Noktalara odaklanma
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

export default EnhancedLineChart;
