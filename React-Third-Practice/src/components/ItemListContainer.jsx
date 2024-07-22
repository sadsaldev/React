
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Importaciones necesarias para trabajar con firebase
//Referencia a la colección específica que se usará y sus documentos
//query y where para poder filtrar los productos según su categoría
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState('Productos');
    const categoria = useParams().categoria;
    console.log(categoria);

    useEffect(() => {
        //Creación de la referencia
        const productosRef = collection(db, "productos");

        //query de firebase para traer los productos con la propiedad "categoría" igual a la recibida por useParams
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

        getDocs(q)
            .then((res) => {
                //Ejemplo para acceder a las propiedades de un objeto en particular directamente:
                //console.log(res.docs[0].data());

                //Acceder a todos:

                // console.log(
                //     res.docs.map((doc) => {
                //         return {...doc.data(), id: doc.id}
                //     })
                // )

                setProductos (
                    res.docs.map((doc) => {
                        return {...doc.data(), id: doc.id}
                    })
                )
            })

    }, [categoria])

    return (
        <div>
           <ItemList productos = {productos} titulo={titulo} /> 
        </div>
    )
}

export default ItemListContainer