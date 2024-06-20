import React from 'react';
import './TopNavBar.css'; // Import the CSS file for styling

function TopNavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
}

export default TopNavBar;