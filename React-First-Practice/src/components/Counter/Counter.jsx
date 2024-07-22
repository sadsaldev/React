import { useState } from "react";

export const Counter = () => {

    //Cuando se vaya a usar una variable que el el futuro cambiará su valor, 
    //y este se deba mostrar en la UI,se puede usar useState().
    //const [variable, setVariable] = useState(valorInicial);
    
    const [number, setNumber] = useState(0);

    const sumar = () => {
        setNumber(number + 1);
    }

    const restar = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <button onClick={restar}>Restar</button>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>
            <hr/>
        </div>
    )
};

