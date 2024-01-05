import logo from './logo.svg';
import './App.css';
import React from 'react';
import LineChart from './components/Line';
import AreaChart from './components/Area';
import StackedLineChart from './components/StackedLine';
import StackedAreaChart from './components/StackedAreaChart';
import BarChart from './components/Bar';
import StackedBarChart from './components/StackedBar';
import PieChart from './components/Pie';
import StackedPieChart from './components/StackedPie';

const App = () => {
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
