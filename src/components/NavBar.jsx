import React from 'react';
import CartWidget from '../components/CartWidget';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="container">
        <nav className="nav">
            <div className="nav_brand">
                <NavLink to='/' className="nav_link">Games</NavLink>
            </div>
        </nav>
        <ul className="nav_list">
            <li>
                <NavLink to='/categoria/accion' className="nav_link">Accion</NavLink>
            </li>
            <li>
                <NavLink to='/categoria/aventura' className="nav_link">Aventura</NavLink>
            </li>
            <li>
                <NavLink to='/categoria/casuales' className="nav_link">Casuales</NavLink>
            </li>
            <li>
                <NavLink to='/categoria/supervivencia' className="nav_link">Supervivencia</NavLink>
            </li>
            <li>
                <NavLink to='/cart' className="nav_link">
                    <CartWidget />
                </NavLink>
            </li>
        </ul>
    </div>
  );
}

export default NavBar;