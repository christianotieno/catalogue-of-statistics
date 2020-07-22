import React from 'react';
import '../styles/header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="header">
        <div className="row">
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">contact</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
