import './App.css';
import React from 'react';
import LineChart from './components/eCharts/Line';
import AreaChart from './components/eCharts/Area';
import StackedLineChart from './components/eCharts/StackedLine';
import StackedAreaChart from './components/eCharts/StackedAreaChart';
import BarChart from './components/eCharts/Bar';
import StackedBarChart from './components/eCharts/StackedBar';
import PieChart from './components/eCharts/Pie';
import StackedPieChart from './components/eCharts/StackedPie';
import ApexLineChart from './components/ApexCharts/Line';
import ApexStackedLineChart from './components/ApexCharts/StackedLine';
import ApexAreaChart from './components/ApexCharts/Area';
import ApexStackedAreaChart from './components/ApexCharts/StackedArea';
import ApexBarChart from './components/ApexCharts/Bar';
import ApexStackedBarChart from './components/ApexCharts/StackedBar';
import ApexPieChart from './components/ApexCharts/Pie';
import ApexStackedPieChart from './components/ApexCharts/StackedPie';



const App = () => {
  return (
    <div className="App">
      <h1>eCharts</h1>
      <div className="chart-grid">
        <div className="chart-card">
          <h2>Line Chart</h2>
          <LineChart />
        </div>
        <div className="chart-card">
          <h2>Area Chart</h2>
          <AreaChart />
        </div>
        <div className="chart-card">
          <h2>Stacked Line Chart</h2>
          <StackedLineChart />
        </div>
        <div className="chart-card">
          <h2>Stacked Area Chart</h2>
          <StackedAreaChart />
        </div>
        <div className="chart-card">
          <h2>Bar Chart</h2>
          <BarChart />
        </div>
        <div className="chart-card">
          <h2>Stacked Bar Chart</h2>
          <StackedBarChart />
        </div>
        <div className="chart-card">
          <h2>Pie Chart</h2>
          <PieChart />
        </div>
        <div className="chart-card">
          <h2>Stacked Pie Chart</h2>
          <StackedPieChart />
        </div>
      </div>
      <h1>ApexCharts</h1>
      <div className="chart-grid">
        <div className="chart-card">
          <ApexLineChart />
        </div>
        <div className="chart-card">
          <ApexStackedLineChart />
        </div>
        <div className="chart-card">
          <ApexAreaChart />
        </div>
        <div className="chart-card">
          <ApexStackedAreaChart />
        </div>
        <div className="chart-card">
          <ApexBarChart />
        </div>
        <div className="chart-card">
          <ApexStackedBarChart />
        </div>
        <div className="chart-card">
          <ApexPieChart />
        </div>
        <div className="chart-card">
          <ApexStackedPieChart />
        </div>
      </div>
    </div>
  );
};

export default App;
