import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Proyectos from "./Components/Proyectos/Proyectos";
import Carrusel from "./Components/Carrusel/Carrusel";
import QuienesSomos from "./Components/Quienes Somos/QuienesSomos";
import Contactenos from "./Components/Contactenos/Contactenos";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carrusel />
        <QuienesSomos />
        <Proyectos />
        <Contactenos />
        <Footer />
      </div>
    );
  }
}

export default App;
