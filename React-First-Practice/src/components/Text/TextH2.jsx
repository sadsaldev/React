import { useState, useEffect} from "react";

export const TextH2 = () => {

    const [text, setText] = useState("");

    const handleText = (e) => {
        //Traer el evento onChange, su objetivo (el elemento al que está dirigido el evento, el input en particular) y el valor de ese objetivo
        //Traer el valor de lo que se va ingresando en el input
        setText(e.target.value);
        //Colocar en la variable text el valor del input para que se actualice a medida de que se va actualizando el valor del input usando la función setText
    }
   
    //useEffect se puede usar cuando se quiere que algo solo se ejecute cuando el componente se monta 
    //y no cada vez que este se actualiza por elementos externos, para evitar múltiples ejecuciones innecesarias de 
    //Elementos que solo necesitan ejecutarse una vez cuando se monta el componente.
 
    useEffect(() => {
        console.log("Componente montado.");

        return () => {
        //El return de useEffect puede servir para eliminar o limpiar un proceso que se queda corriendo en el useEffect cada que se desmonta el componente.
        //lógica o sentencias que se van a ejecutar cuando el componente se desmonta.

        console.log("Componente desmontado.");

        }

    }, []);

    useEffect(() => {
        console.log("Text modificado.");
        //Esta acción se va ejecutando cada vez que se actualiza el elemento text específicamente y no cualquier cosa
    }, [text]);
    //Se puede decidir si en el cambio de algún elemento, se quiere que el componente también ejecute algo

    return (
        <div>
            <input type="text" onChange={handleText} />
            <h2>{text}</h2>
        </div>
        
    )
};

