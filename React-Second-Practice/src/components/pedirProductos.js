import data from "../data/productos.json";

//Obtener datos de un JSON por medio de una promesa
export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
        console.log(data);
    })
}

