//Componente que se encarga de generar un div individual para cada producto con su respectiva información
import {Item} from "./Item";

export const ItemList = ({productos}) => {
    return (
        <div className="father-prod-container">
             <div className="title-cont"><h1>Productos</h1></div>
            { 

                productos.length > 0 && 

                //productos = representa al array que contiene varios productos | producto = representa a cada producto del array
                //Traer un contenedor por cada producto con su información del array productos con array.map()
                //Asignar a cada elemento que se generará, una key para que al hacer el map, cada elemento tenga un ID único.
                productos.map((producto) => {
                    return (
                        <Item key={producto.id} producto={producto}/>
                    )
                })
            }
        </div>
    )
};