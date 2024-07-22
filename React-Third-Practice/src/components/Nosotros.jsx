import { useEffect } from "react";

export const Nosotros = () => {

    useEffect(() => {

        const clickear = () => {
            console.log("click");
        }

        window.addEventListener("click", clickear)

        return () => {
            window.removeEventListener("click", clickear)
        }

    }, [])

    //Cuando se deba trabajar con addEventListener, recordar siempre eliminar el evento cuando se desmonta el componente
    //Y para las instrucciones que se deben ejecutar al momento en el que se escuche el evento, estas deben estar en una función con referencia y no en una función anónima
    //Para que el listener sepa que debe agregar y eliminar los eventos para exactamente la misma función.
  
    return (
        <div className="container">
            <h1 className="main-title">Nosotros</h1>
            <p>Este es el componente "Nosotros"</p>
        </div>
    )
}