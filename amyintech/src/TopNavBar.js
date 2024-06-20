import React from 'react';
import './TopNavBar.css'; 

//addings additional screens 
import App from './App.js';
import About from './About.js';
import Projects from './Projects.js';

function TopNavBar() {
  return (
    <nav className="navbar">
       <ul className="navbar-links">
            <li><a href={App}>Home</a></li>
            <li><a href={About}>About</a></li>
            <li><a href={Projects}>Projects</a></li>
      </ul>
  </nav>
  );
}

export default TopNavBar;