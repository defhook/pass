import React from 'react';
import Navigation from "./components/Navigation"
import About from "./components/About"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='app'>
      <Navigation></Navigation>
      <About></About>
    </div>
  );
}

export default App;
