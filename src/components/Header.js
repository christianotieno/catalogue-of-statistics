import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-light bg-light">
        <a href="/" className="navbar-brand">
          Covid-19 API
        </a>
        <form className="form-inline">
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Refresh Stats</button>
        </form>
      </nav>
    </header>
  );
}

export default Header;
