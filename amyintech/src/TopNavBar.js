import React, { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu } from "./NavElements";
import './TopNavBar.css'; 

function TopNavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="navbar-container">
      <Nav className="navbar">
        <Bars onClick={toggleMenu} />
        <NavMenu className="navbar-links" isOpen={isOpen}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/About" activeStyle onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/Projects" activeStyle onClick={() => setIsOpen(false)}>Projects</NavLink>
        </NavMenu>
      </Nav>
    </div>
    );
};

export default TopNavBar;