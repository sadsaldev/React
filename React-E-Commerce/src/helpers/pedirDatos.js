import data from "../data/data.json";

//Recibir de forma asíncrona la data del archivo JSON
export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(data);
        }, 500)
    })
}

export const pedirItemPorID = (id) => {
    return new Promise ((resolve, reject) => {
        const item = data.find((el) => el.id === id);

        if(item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }
    })
}