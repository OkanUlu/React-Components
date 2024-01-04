import React from 'react';
import UploadComponent from './Components/Upload';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ maxWidth: '80%', maxHeight: '80%', overflow: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
        <UploadComponent />
      </div>
    </div>
  );
};

export default App;
