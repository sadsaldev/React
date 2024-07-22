import { useState } from "react";
import { useEffect } from "react";
import { pedirProductos } from "./pedirProductos";
import { ItemList } from "./ItemList";

//Mostrar información de un JSON por medio de una función (PedirProductos) que realiza una promesa
export const ItemListContainer = () => {

    //Crear estado de la variablle que representará al array (productos)
    const [productos, setProductos] = useState([]);

    //Antes de obtener la información del array del archivo JSON. Antes de hacer la promesa.
    //console.log(productos);

    //Llamada a la función pedirProductos() dentro de useEffect para realizar una sola llamada solo cuando se monte el componente y evitar bucles infinitos
    useEffect(() => {
        pedirProductos()
        .then((res) => {
            setProductos(res);
            //Después de obtener la información del array del archivo JSON. Después de resolver la promesa.
            //console.log(productos);
        })
    }, [])

    //Ejemplo de array map
    //En este ejemplo se mapea al array nombres para recorrer cada elemento y añadirle un elemento adicional, en este caso 1.
    // const nombres = ["Sal", "Maria", "Ana", "Juan"];
    // const nombres2 = nombres.map((nombre) => nombre + "1");
    // console.log(nombres2);

    return (
        //Llamar al componente que trae el contenedor individual para cada producto con sus propiedades extraídas del array.
        //Pasarle la propiedad productos={productos} al llamarlo para que ese componente pueda acceder al array correctamente
       <div className="mainList">
            <ItemList productos={productos}/>
        </div>
    )
};

//Componente principal: ItemListContainer. Usa a pedirProductos.js y a ItemList.jsx
//Función utilizada que realiza la promesa al JSON para obtener la data: pedirProductos.js
//Componente que utiliza a "productos" para realiza el array map y acceder a cada uno de los productos con sus propiedades (producto): ItemList.jsx
//Componente dependiente de ItemList que recibe de este la propiedad "producto" para generar un contenedor individual para cada producto con su información: Item.jsx 