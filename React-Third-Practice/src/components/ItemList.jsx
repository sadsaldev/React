import {Item } from "./Item";
import { toCapital } from "../helpers/toCapital";

export const ItemList = ({productos, titulo}) => {
    
    let modifiedTitle = toCapital(titulo);
    
    return (
        <div className="container">
            <h2 className="main-title">{modifiedTitle}</h2>
            <div className="productos">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div> 
    )
}