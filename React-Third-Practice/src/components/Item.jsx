import { Link } from 'react-router-dom';

export const Item = ({producto}) => {
    return (
        <div className = "producto">
            <img src={producto.imagen} alt={producto.imagen}/>
            <div>
                <h4>{producto.titulo}</h4>
                <p>Precio: ${producto.precio}</p> 
                <p>Categoría: {producto.categoria}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}