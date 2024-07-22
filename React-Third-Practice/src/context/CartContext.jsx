import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || []; 

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = {...item, cantidad};
        //console.log(itemAgregado);
        //Permite imprimir todo el objeto pero con elementos adicionales

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if(estaEnElCarrito){
            console.log('Está en el carrito');
            estaEnElCarrito.cantidad += cantidad;
            setCarrito(nuevoCarrito);
        } else {
            nuevoCarrito.push(itemAgregado);
            console.log('No está en el carrito');
        }
        
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
    setCarrito([]);
    }

    useEffect (() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    return (
        <CartContext.Provider value={{
            carrito, 
            agregarAlCarrito, 
            cantidadEnCarrito, 
            precioTotal, 
            vaciarCarrito
            }}>
                {children}
        </CartContext.Provider>
    )
}