import React, { Component } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
    <section className="navbar">
      <div className="nav">
  <input type="checkbox" id="nav-check"></input>
  <div className="nav-header">
    <div className="nav-title">
    <img
    src={"http://spboxweb.azurewebsites.net/images/logo-spbox.png"}
    className="nav-logo"
    alt="Logo"
    onClick={this.scrollToTop}/>
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <Link
      className="active"
      to="carrusel"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}>
      Inicio
    </Link>
    <Link
                className="active"
                to="quienessomos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Quienes somos
              </Link>
              <Link
                className="active"
                to="proyectos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Proyectos
              </Link>
              <Link
                className="active"
                to="contactenos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contáctenos
              </Link>
  </div>
</div>
</section>
    );
  }
}
