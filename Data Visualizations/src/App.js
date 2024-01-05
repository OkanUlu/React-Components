import logo from './logo.svg';
import './App.css';
import LineChart from './components/Line';
import AreaChart from './components/Area';
import StackedLineChart from './components/StackedLine';
import StackedAreaChart from './components/StackedAreaChart';
import BarChart from './components/Bar';
import StackedBarChart from './components/StackedBar';
import PieChart from './components/Pie';
import StackedPieChart from './components/StackedPie';

function App() {
  return (
    <div className="App">
      <LineChart />
      <AreaChart />
      <StackedLineChart />
      <StackedAreaChart />
      <BarChart />
      <StackedBarChart />
      <PieChart />
      <StackedPieChart />
    </div>
  );
}

export default App;
