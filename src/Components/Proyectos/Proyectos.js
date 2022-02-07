import React, {useState, /*useEffect*/} from 'react';
import "./Proyectos.css";
import { ProyectosData } from './ProyectosData';

const Proyectos = () => {
  const data = ProyectosData
  const [numActual, setNumActual] = useState(8);
  const length = ProyectosData.length;

  const masProyectos = () => {
    setNumActual(numActual === 0 ?  length - 1 : numActual + 3)
};

  return (
    <section className="proyectos">
      <h1 className="titulo-proyectos">Proyectos</h1>
      <div className="wrapper flex" id="wrapper">    
        {data.filter((item, index) => index < numActual).map(function(data, index){
        return (  
        <div className="box" key={index}>
          <div className="container" key={index}>
            <img src={data.img} alt="Avatar" className="image"/>
              <div className="overlay">
                <div className="text">{data.nombre}</div>
                <div className="text-body" >{data.resumen}</div>
                <div className="text-body">{data.fecha}</div>
              </div>
          </div>
        </div>
          )})}
          <div className="box" onClick={masProyectos}>
          <div className="mas">
          <h1 className="vermas">Ver más+</h1>
          </div>
          </div>
      </div>
      </section>
  );
};

export default Proyectos;
