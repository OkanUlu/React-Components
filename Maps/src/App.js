import './App.css';
import React from 'react';
import LeafletComponent from './components/Maps/Leaflet';

const App = () => {
  return (
    <div className="App">
      <h1>ReactJS Components</h1>
      <h1>Maps</h1>
      <div className="chart-grid">
        <div className="chart-card">
          <LeafletComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
