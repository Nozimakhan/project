import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Order.scss';

const Order = () => {

  return (
    <div>
      <div>
        <nav className='nav__wrapper'>
          <ul>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : "link"} to="/admin/order/all">All</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : "link"} to="/admin/order/contacted">Contacted</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active" : "link"} to="/admin/order/not-contacted">Not-contacted</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
    </div>
  )
}

export default Order