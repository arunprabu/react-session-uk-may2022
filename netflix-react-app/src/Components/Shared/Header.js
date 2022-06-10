// Functional Component with Named Function
import React from 'react';
import Menu from './Menu';

function Header() {
  const appName = 'Netflix';
  
  // let' return JSX
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{appName}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <Menu />
          </div>

          <button className='btn btn-danger'>Cart(0)</button>
        </div>
      </nav>
    </header>
  )
}

export default Header;