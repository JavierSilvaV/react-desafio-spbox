import React from 'react';
import "./Footer.css";
import { Facebook } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';

function Footer() {
  return (
    <section className="footer">
    <div className="container-footer"></div>
    <footer className="footer-distributed">
    <div className="footer-left">
      <img
    src={"http://spboxweb.azurewebsites.net/images/logo-spbox.png"}
    className="footer-logo"
    alt="Logo"/>

  <p className="footer-company-name">SP Box © 2022</p>
</div>

<div className="footer-center">

  <div>
    <i className="fa fa-map-marker"></i>
    <p><span>Paseo Ahumada 312, Of. 715</span> Santiago Centro, RM</p>
  </div>

  <div>
    <i className="fa fa-phone"></i>
    <p></p>
  </div>

  <div>
    <i className="fa fa-envelope"></i>
    <p><a href="mailto:contacto@spbox.cl">contacto@spbox.cl</a></p>
  </div>

</div>

<div className="footer-right">

  <p className="footer-company-about">
    <span>Redes</span>
    ¡Estemos conectados!, puedes encontrarnos en Facebook, Instagram o Linkedin.
  </p>

  <div className="footer-icons">
    <a href="https://www.facebook.com/spbox.cl" target="_blank" rel="noopener noreferrer"><Facebook style={{fontSize: 35}}/><i className="facebook"></i></a>
    <a href="https://www.instagram.com/spboxcl/" target="_blank" rel="noopener noreferrer"><Instagram style={{fontSize: 35}}/><i className="instagram"></i></a>
    <a href="https://www.linkedin.com/company/spbox" target="_blank" rel="noopener noreferrer"><LinkedIn style={{fontSize: 35}}/><i className="linkedin"></i></a>
  </div>

</div>

</footer>
    </section>
  );
}

export default Footer;
