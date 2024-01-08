import React from 'react';
import ReactEcharts from 'echarts-for-react';

const StackedPieChart = () => {
  const option = {
    title: {
      text: 'Stacked Pie Chart',
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
      data: ['Category A', 'Category B', 'Category C'],
    },
    series: [
      {
        name: 'Pie Chart',
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['50%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 335,
            name: 'Category A',
            itemStyle: {
              color: '#67C23A', // Yeşil renk
            },
          },
          {
            value: 310,
            name: 'Category B',
            itemStyle: {
              color: '#F56C6C', // Kırmızı renk
            },
          },
          {
            value: 234,
            name: 'Category C',
            itemStyle: {
              color: '#909399', // Gri renk
            },
          },
        ],
      },
      {
        name: 'Inner Pie Chart',
        type: 'pie',
        radius: ['0%', '40%'],
        center: ['50%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 200,
            name: 'Category A',
            itemStyle: {
              color: '#67C23A', // Yeşil renk
            },
          },
          {
            value: 500,
            name: 'Category B',
            itemStyle: {
              color: '#F56C6C', // Kırmızı renk
            },
          },
          {
            value: 300,
            name: 'Category C',
            itemStyle: {
              color: '#909399', // Gri renk
            },
          },
        ],
      },
    ],
  };

  return (
    <div>
      <ReactEcharts option={option} style={{ height: '400px' }} />
    </div>
  );
};

export default StackedPieChart;
