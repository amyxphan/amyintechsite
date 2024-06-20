import React, { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu } from "./NavElements";
import './TopNavBar.css'; 

// //addings additional screens 
// import App from './App.js';
// import About from './About.js';
// import Projects from './Projects.js';

function TopNavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <Nav>
        <Bars onClick={toggleMenu}/>
        <NavMenu isOpen={isOpen}>
            <NavLink to="/" onClick={() => setIsOpen(false)}> Home </NavLink>
            <NavLink to="/About" activeStyle onClick={() => setIsOpen(false)}> About </NavLink>
            <NavLink to="/Projects" activeStyle onClick={() => setIsOpen(false)}> Projects </NavLink>
      </NavMenu>
    </Nav>
    );
};



export default TopNavBar;