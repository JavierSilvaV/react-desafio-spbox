import React, {useState} from 'react';
import './Carrusel.css'
import { CarruselData } from './CarruselData'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carrusel() {
    const [imgActual, setImgActual] = useState(0);
    const length = CarruselData.length;
    const imagenSiguiente = () => {
        setImgActual(imgActual === length - 1 ? 0 : imgActual + 1)
    };
    const imagenAnterior = () => {
        setImgActual(imgActual === 0 ?  length - 1  : imgActual - 1)
    };

    return (<section className="carrusel">
        <div className="carrusel-inner" style={{backgroundImage: `url(${CarruselData[imgActual].img})`}}>
            <div className="izquierda" onClick={imagenAnterior}>
                <ArrowBackIosIcon style={{fontSize: 40}} />
            </div>
            <a className="centro" href={CarruselData[imgActual].link} target="_blank" rel="noopener noreferrer"> </a>
            <div className="derecha" onClick={imagenSiguiente} >
                <ArrowForwardIosIcon style={{fontSize: 40}}/>
            </div>
        </div>
    </section>
    );
}

export default Carrusel;
