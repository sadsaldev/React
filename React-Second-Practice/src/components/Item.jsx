export const Item = ({producto}) => {
    return (
        <div className="each-product">
            <img src={producto.imagen} alt={producto.titulo} />
            <h2>{producto.titulo}</h2>
            <p>${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <p>{producto.categoria}</p>
            <p>{producto.stock}</p>
        </div> 
    )
};