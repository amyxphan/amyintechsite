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

//     <nav className="navbar">
//        <ul className="navbar-links">
//             <li><a href={App}>Home</a></li>
//             <li><a href={About}>About</a></li>
//             <li><a href={Projects}>Projects</a></li>
//       </ul>
//   </nav>
//   );
// }

export default TopNavBar;