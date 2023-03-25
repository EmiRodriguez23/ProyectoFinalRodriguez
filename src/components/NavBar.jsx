import '../App.css';

import React from 'react';
import CartWidget from '../components/CartWidget';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
  return (
        <ul className="flex flex-row justify-evenly  bg-gray-600 p-3">
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' >
                <NavLink to='/' className="nav_link">Games</NavLink>
            </li>
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
                <NavLink to='/categoria/accion' className="nav_link">Accion</NavLink>
            </li>
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
                <NavLink to='/categoria/aventura' className="nav_link">Aventura</NavLink>
            </li>
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
                <NavLink to='/categoria/casuales' className="nav_link">Casuales</NavLink>
            </li>
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
                <NavLink to='/categoria/supervivencia' className="nav_link">Supervivencia</NavLink>
            </li>
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
                <NavLink to='/cart' className="nav_link">
                    <CartWidget />
                </NavLink>
            </li>
        </ul>
  );
}

export default NavBar;