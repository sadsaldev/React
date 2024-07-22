import "./Usuario.css";

export const Usuario = ({nombre, edad, nacionalidad}) => {

    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);

    return (<div className="usuario">
                <h1>Nombre: {nombre}</h1>
                <p>Edad: {edad}</p>
                <p>Nacionalidad: {nacionalidad}</p>
                <hr /> 
            </div>
    )
}