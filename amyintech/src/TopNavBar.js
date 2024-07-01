import React, { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu } from "./NavElements";
import './TopNavBar.css'; 

function TopNavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <Nav>
      <div className='navbar'>
        <Bars onClick={toggleMenu}/>
        <NavMenu isOpen={isOpen}>
            <NavLink to="/" onClick={() => setIsOpen(false)}> Home </NavLink>
            <NavLink to="/About" activeStyle onClick={() => setIsOpen(false)}> About </NavLink>
            <NavLink to="/Projects" activeStyle onClick={() => setIsOpen(false)}> Projects </NavLink>
        </NavMenu>
      </div>
    </Nav>
    );
};

export default TopNavBar;