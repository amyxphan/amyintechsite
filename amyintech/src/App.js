import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// importing external pages 
import TopNavBar from './TopNavBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
        <Router>
          <TopNavBar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>
        </Router>
      <header className="App-header">
          <div>
          </div>
      </header>
    </div>
  );
}

export default App;
