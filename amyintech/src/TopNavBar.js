import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from "./NavElements";
import './TopNavBar.css'; 

// //addings additional screens 
// import App from './App.js';
// import About from './About.js';
// import Projects from './Projects.js';

function TopNavBar() {
  return (
    <Nav className="navbar">
        <Bars />
            <NavMenu className="navbar-links">
                <NavLink to="/" > Home </NavLink>
                <NavLink to="/About" activeStyle> About </NavLink>
                <NavLink to="/Projects" activeStyle> Projects </NavLink>
            </NavMenu>
    </Nav>
    );
};



export default TopNavBar;