import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorites from "./pages/favorites";
//import User from "./pages/user";
import HomePage from "./pages/home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path="/" exact element={<HomePage/>} />
       <Route path="/favorites" exact element={<Favorites/>} />
  
     </Routes>
    </Router>
  );
}

export default App;


// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./App.css";

// import Favorites from "./pages/favorites";
// //import { Navbar } from "react-bootstrap";
// // import User from "./pages/user-page.html";

// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <Routes>
      
    
//        <Route path="/favorites" exact element={<Favorites/>} />
      
//      </Routes>
//     </Router>
//   );
// }

// export default App;

// // <div className="App">
// //   <header className="App-header">
// //     <img src={logo} className="App-logo" alt="logo" />
// //     <p>
// //       Edit <code>src/App.js</code> and save to reload.
// //     </p>
// //     <a
// //       className="App-link"
// //       href="https://reactjs.org"
// //       target="_blank"
// //       rel="noopener noreferrer"
// //     >
// //       Learn React
// //     </a>
// //   </header>
// // </div>
