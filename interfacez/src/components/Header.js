import React from 'react';

const Header = () => {
  return (
    <div>
      <header id='header-principal'>
        <div class='logo'>
          <span>BRAND</span>
        </div>

        <nav>
          <a href='/'>Portafolio</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
