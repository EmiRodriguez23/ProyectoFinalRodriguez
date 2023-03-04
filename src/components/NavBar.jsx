import '../App.css';

import React from 'react';
import CartWidget from '../components/CartWidget';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
  return (
        <ul className="flex flex-row m-3 space-x-10 bg-gray-600 p-3">
            <li>
                <NavLink to='/' className="nav_link">Games</NavLink>
            </li>
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
  );
}

export default NavBar;