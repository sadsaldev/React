import { useState, useEffect } from "react";

export const PokemonList = () => {

    const [currentList, setCurrentList] = useState({});
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
    const [next, setNext ] = useState("");
    const [previous, setPrevious] = useState("");

    const handleSiguiente = () => {
        setUrl(next);
    }

    const handleAnterior = () => {
        previous && setUrl(previous);
    }

    useEffect (() => {
       fetch (url)
            .then((res) => res.json())
            .then((data) => {
                setCurrentList(data);
                console.log(data);
                setNext(data.next);
                setPrevious(data.previous);
            }) 
    }, [url])

    return (
        <div>
            {
                currentList.results &&
                <div>
                    {currentList.results.map((pokemon) => {
                        return (
                            <div key={pokemon.name}>
                                <h2>{pokemon.name}</h2>
                            </div>
                        )
                    })}
                    {
                        previous ? <button onClick={handleAnterior}>Anterior</button> : <button disabled>Anterior</button> 
                    }
                    <button onClick={handleSiguiente}>Siguiente</button>
                </div>
            }
        </div>
    )
}