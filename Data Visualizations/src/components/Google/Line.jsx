import React from 'react';
import { Chart } from 'react-google-charts';

const GoogleLineChart = () => {
  // Örnek veri
  const data = [
    ['X', 'Y'],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    //... diğer veriler
  ];

  // Grafik seçenekleri
  const options = {
    title: 'Güzel ve Modern Çizgi Grafiği',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis: { title: 'X Ekseni' },
    vAxis: { title: 'Y Ekseni' },
    series: {
      0: { color: '#4285F4' }, // Çizgi rengi
    },
    chartArea: {
      width: '80%', // Grafiğin genişliği
      height: '70%', // Grafiğin yüksekliği
    },
    backgroundColor: {
      // fill: '#f4f4f4', // Grafiğin arka plan rengi
    },
    explorer: {
      actions: ['dragToZoom', 'rightClickToReset'],
      axis: 'horizontal',
      keepInBounds: true,
      maxZoomIn: 4.0,
    },
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default GoogleLineChart;
