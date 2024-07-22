import { useState } from "react";

export const Contacto = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviado', {nombre, email})
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
        console.log(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <input type="text" value={nombre} onChange={handleNombre} placeholder="Ingresa tu nombre" />
                <input type="email" value={email} onChange={handleEmail} placeholder="Ingresa tu email" />
                <button className="enviar" type="submit">Enviar</button>
            </form>
        </div>
    ) 
}