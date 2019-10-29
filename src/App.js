import React from 'react';
// bootstrap 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import OpretKonto from './components/OpretKonto/OpretKonto';
import TilmeldButik from './components/TilmeldButik/TilmeldButik';
function App() {
  return (
    <div className="App">
      {/* <OpretKonto /> */}
      <TilmeldButik/>
    </div>
  );
}

export default App;
