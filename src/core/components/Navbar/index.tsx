import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

type Props = {
     showLogout: boolean;
}

const Navbar = ({showLogout} : Props) => (
     <nav className="main-nav">
        <NavLink to="/" exact className="logo">
             <span>Movieflix</span>
        </NavLink>
        
        <span className={`btn-logout showLogout ?  btn-show : btn-hide`}>SAIR</span>
    </nav>
);

export default Navbar;