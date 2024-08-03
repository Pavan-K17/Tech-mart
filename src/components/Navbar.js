import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src="/images/TM logo.png" alt="Logo" />
    </div>
    <div className='name'>
      <span>TECH - MART</span>
    </div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/checkout">Checkout</Link>
    </div>
  </nav>
);

export default Navbar;