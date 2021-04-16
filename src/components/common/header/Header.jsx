import React from "react";

import './Header.scss';

function Header() {
  return (
    <section className="header">
          <a href="/" className="header-logo">
            BAUMGARTNER
          </a>
          <section className="navbar">
            <a href="/" className="navbar-item">Home</a>
            <a href="/Contact" className="navbar-item">Contact</a>
        </section>
    </section>
  )
}

export default Header;
