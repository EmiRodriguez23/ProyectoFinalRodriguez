import React from 'react'

export const NavBar = () => {
  return (
    <div className="container">
        <nav className="nav">
            <div className="nav_brand">
                <a href="#" className="nav_link">Japon</a>
            </div>
        </nav>
        <ul className="nav_list">
            <li>
                <a href="#" className="nav_link">Katanas</a>
            </li>
            <li>
                <a href="#" className="nav_link">Sai</a>
            </li>
            <li>
                <a href="#" className="nav_link">Carrito</a>
            </li>
        </ul>
    </div>
  );
}

export default NavBar;