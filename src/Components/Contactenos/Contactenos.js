import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contactenos.css";

function Contactenos() {
    const recaptchaRef = useRef(null);

    const [status, setStatus] = useState("Enviar");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(recaptchaRef.current.getValue()){
            setStatus("Enviando...");
            const { name, nro, email, message } = e.target.elements;
            let details = {
                name: name.value,
                nro: nro.value,
                email: email.value,
                message: message.value,
            };
            let response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            body: JSON.stringify(details),
    });
    
        setStatus("Enviar");
        let result = await response.json();
        alert(result.status);
        } else {
            alert('Verifique que no es un robot');
        }
};
    return (
    <section className="contactenos">
        <h1 className="contactenos-titutlo">Contáctenos</h1>
        <form onSubmit={handleSubmit}>
            <div className="nombre">
                <label htmlFor="name">Nombre: </label>
                <input type="text" id="name" required placeholder="Nombre Apellido"/>
            </div>
            <div className="nro">
                <label htmlFor="nro">Fono: </label>
                <input type="text" id="nro" required maxLength={9} placeholder="912345678"
                minLength={9}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();}}}/>
            </div>
            <div className="email">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="ejemplo@email.cl"></input>
            </div>
            <div className="mensaje">
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" required />
            </div>
            <ReCAPTCHA
            className="recaptcha"
            ref={recaptchaRef}
            sitekey={"6LeysVoeAAAAAJXlm6Zsp8NihNMKNqzRbzIKLXrO"}/>
            <button type="submit" className="boton">{status}</button>
        </form>
    </section>
    );
};

export default Contactenos;
