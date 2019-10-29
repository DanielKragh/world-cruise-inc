import React from 'react';
// bootstrap 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import ButikAdmin from './components/ButikAdmin/ButikAdmin';
import BrugerAdmin from './components/BrugerAdmin/BrugerAdmin';
function App() {
  return (
    <div className="App">
      <ButikAdmin />
      <BrugerAdmin />
    </div>
  );
}

export default App;
