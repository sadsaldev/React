import {useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
//Importaciones de firebase para obtener la colección y el documento único específico del que se requiere obtener el id
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = ({itemID}) => {
    const [item, setItem] = useState(null);
    const id = useParams().id;
    //Se usa useParams para obtener el parámetro del "ID" en este caso, desde la url 
    //al id del producto clickeado para así mostrar la información de se producto correspondiente en "ver más"
    //useParams devuelve string, por lo que debe convertirse al tipo de dato correcto.
    
    // console.log(id);

    useEffect(() => {

        const docRef = doc(db, "productos", id);
        getDoc(docRef)
        .then((res) => {
            setItem(
                {...res.data(), id: res.id}
            );
        })

    }, [id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer