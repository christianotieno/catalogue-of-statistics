import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Covid-19 API
        </a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search country stats" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </header>
  );
}

export default Header;
