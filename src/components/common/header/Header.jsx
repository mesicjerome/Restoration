import React from "react";
import { Navbar } from '../../common';

import './Header.css';
import '../../../fonts/Quetry/QuetrySerif.ttf'

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top_logo">
          <a href="/" className="header-logo">
            Baumgartner
          </a>
        </section>
        <section className="header-top_navbar">
          <Navbar /> 
        </section>

      </section>
    </section>
  )
}

export default Header;
