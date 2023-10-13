import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Order = () => {

  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/admin/order/all">All</NavLink>
            </li>
            <li>
              <NavLink to="/admin/order/contacted">Contacted</NavLink>
            </li>
            <li>
              <NavLink to="/admin/order/not-contacted">Not-contacted</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
    </div>
  )
}

export default Order