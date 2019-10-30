import React from 'react';
// bootstrap 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import ButikAdmin from './components/ButikAdmin/ButikAdmin';
import BrugerAdmin from './components/BrugerAdmin/BrugerAdmin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <ButikAdmin />
      <BrugerAdmin />
      <Footer />
    </div>
  );
}

export default App;
