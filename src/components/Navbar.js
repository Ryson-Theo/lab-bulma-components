import React from 'react';
import CoolButton from './CoolButton';

function Navbar() {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation" style={{ borderBottom: '1px solid #dee2e6' }}>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img 
            src="https://bulma.io/assets/images/bulma-logo.png" 
            alt="Bulma logo" 
            width="112" 
            height="28" 
          />
        </a>
      </div>

      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <CoolButton isInfo>Login</CoolButton>
              <CoolButton isSuccess>Signup</CoolButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;