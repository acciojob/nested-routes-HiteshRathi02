import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/women">Women</Link></li>
      </ul>
    </nav>
    <main>
      <div className="main">
        <h3>Index</h3>
        <Outlet /> 
      </div>
    </main>
  </div>
);

export default Layout;