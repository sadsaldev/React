import { useState } from "react";

export const Contacto = () => {

    const [valores, setValores] = useState({
        nombre: '',
        email : '',
        telefono : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviado', {valores})
    }

    const handleValores = (e) => {
        setValores({...valores, 
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <input type="text" value={valores.nombre} name="nombre" onChange={handleValores} placeholder="Ingresa tu nombre" />
                <input type="email" value={valores.email} name="email" onChange={handleValores} placeholder="Ingresa tu email" />
                <input type="phone" value={valores.telefono} name="telefono" onChange={handleValores} placeholder="Ingresa tu teléfono" />
                <button className="enviar" type="submit">Enviar</button>
            </form>
        </div>
    ) 
}