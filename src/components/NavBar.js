import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='navbar nav-bar'>
        <div className='container-fluid'>
          <span className='navbar-brand'>Ominix</span>
          <button
            className='navbar-toggler navbar-dark'
            type='button'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          {isOpen ? (
            <aside className='sidebar'>
              <nav>
                <ul className='menu'>
                  <li className='menu-item'>
                    <NavLink to='/' className='menu-link'>
                      Buscar Cep
                    </NavLink>
                  </li>
                  <li className='menu-item'>
                    <NavLink to='/offers' className='menu-link'>
                      Offers
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </aside>
          ) : null}
        </div>
      </nav>
    </>
  );
}
