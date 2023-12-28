import React from 'react';
// import './TopNavBar.css';

const TopNavBar = () => {
  return (
    <nav className="App">
      <ul className='navbar'>
        <a href="Main.js">H o m e</a>
        <a href="About.js">A b o u t</a>
        <a href="Projects.js">P r o j e c t s</a>
      </ul>
    </nav>
  );
};

export default TopNavBar;