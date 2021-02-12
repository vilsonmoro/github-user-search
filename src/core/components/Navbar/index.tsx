import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Navbar = () => (
     <nav className="navbar-container">
     <NavLink to="/" className="nav-link">
               <span className="navbar-item">
                    Bootcamp DevSuperior
               </span>
          </NavLink>
     </nav>
);

export default Navbar;