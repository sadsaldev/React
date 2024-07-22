import { CartContext } from "../context/CartContext"
import { useContext } from "react";

export const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1 className="main-title">Carrito</h1>
            {
                carrito.map((prod) => {
                    return (
                        <div key={prod.id}>
                            <br />  
                            <h3>{prod.titulo}</h3>
                            <p>Precio unit: ${prod.precio}</p>
                            <p>precio total: ${prod.precio * prod.cantidad}</p>
                            <p>Cant: {prod.cantidad}</p>
                            <br />
                        </div>
                    )
                }) 
            }

            { 
            carrito.length > 0 ?
            <>
                <h2>precio total: ${precioTotal()}</h2> 
                <button onClick={handleVaciar}>Vaciar</button>
            </> :
            <h2>El carrito está vacío, añade productos para poder visualizarlos aquí.</h2>
            }
            
        </div>
    )
}