import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);
    return (
        <div>
            <Link className='menu-link' to='/carrito'>
                Carrito
                <span className="numerito">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}