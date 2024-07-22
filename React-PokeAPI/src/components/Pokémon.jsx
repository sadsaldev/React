import { useEffect, useState } from "react";

export const Pokemon = () => {

    //Se usa useState porque se está trabajando con una promesa y se necesita que cuando se termine de resolver esa promesa, recién ahí, ya se obtenga la información del pokemon
    const [pokemon, setPokemon] = useState();
    //console.log(pokemon);

    //Definición del ID de la url para que inicie en uno y que el usuario pueda ir al pokemon siguiente o anterior al presionar los botones
    const [id, setId] = useState(1);

    const handleAnterior = () => {
        //Setear el valor anterior del ID del pokemon menos uno.
        id > 1 && setId(id - 1);
    }

    const handleSiguiente = () => {
        //Setear el valor anterior del ID más uno.
        setId(id + 1);
    }

    //el useEffect sirve para que el fetch sólo se ejecute al inicio cuando el componente se monta, y que no se ejecute una  y otra vez cuando se actualiza
    useEffect(() => {
        //Llamado a la API con el id definido en el useState
        fetch('https://pokeapi.co/api/v2/pokemon/' + id)
            //Mostrará información de la respuesta del servidor, pero no del Pokémon en escencia:
            //console.log(res);
            //.json sirve para poder acceder a los datos del llamado que se está haciendo a la API
            //pero debe aplicarse otro .then para resolver la promesa que implica el llamado a .json
            .then((res) => res.json())
            .then((data) => {
                //Mostrará la información del Pokémon:
                //console.log(data);
                setPokemon(data);
            })
    }, [id]);
   //Se añade el id en el array de dependencias para que este fetch se ejecute cuando el componente se monta y además cada que el estado de ID cambie
       

    return (
        //condición pokemon &&: muestra el pokemon solamente si existe, es decir, espera que se resuelva la promesa para mostrarlo
        <div>
            {
            pokemon &&
            <div>
                <h2>{pokemon.name}</h2>
                <p>ID de Pokémon: {pokemon.id}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.sprites.front_default}/>
                <br />
                {
                    id > 1 ? <button onClick={handleAnterior}>Anterior</button> : <button disabled>Anterior</button>
                }
                <button onClick={handleSiguiente}>Siguiente</button>
            </div>
            }
        </div>
    );
}
