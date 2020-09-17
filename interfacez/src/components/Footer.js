import React from 'react';

const Footer = () => {
  return (
    <footer id='footer-principal'>
      <div class='footer-arriba'>
        <div class='info'>
          <h3>LOCATION</h3>
          <p>10111 Luis Smith. SJ 222888</p>
        </div>

        <div class='info'>
          <h3>Around the web</h3>
          <a href='/'>
            <i class='fab fa-facebook'></i>
          </a>
          <a href='/'>
            <i class='fab fa-twitter'></i>
          </a>
          <a href='/'>
            <i class='fab fa-instagram'></i>
          </a>
        </div>
        <div class='info'>
          <h3>ABOUT FREELANCER</h3>
          <p>Feel free to contact me</p>
        </div>
      </div>
      <div class='footer-abajo'>
        <p>Copyrigth 2020. Todo los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
