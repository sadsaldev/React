import { useState } from "react";
import { TextH2 } from "./TextH2";

export const Text = () => {

    //Show=true, se mostrará el texto
    //Show=false, se ocultará el texto
    const [show, setShow] = useState(false);

    function handleShow() {
        //Si show está inicialmente establecido en true, se cambia a false y así sucesivamente
        setShow(!show);
        console.log(show);
    }

    return (
        <div>
           <button onClick={handleShow}>{show === true ? 'Ocultar' : 'Mostrar'}</button> 
            {/* Si show es true, se mostrará el texto. */}
            {show === true && <TextH2 />}
            {/* Importar un componente dentro de otro. Al hacer esto para este ejemplo, hace que el elemento 
            se desmonte completamente y no solo se oculte. */}
        </div>
    )
};
