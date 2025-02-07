**React Projects**

Aquí se encuentran diferentes directorios referentes a proyectos de React que he realizado en los últimos meses con el propósito de aprender a fondo y dominar el uso de esta librería para construir aplicaciones web óptimas, eficaces y completas en el lado del frontend. 

**1. React-First-Practice:** Hace referencia al primer proyecto que creé de React y en él están los temas que comencé a aprender. Tales como la lógica JSX, la jerarquía de componentes, la estructura de proyecto, las arrow functions, el uso y funciones principales de los estados y efectos useState/useEffect y el ciclo de vida de los componentes. 

**2. React-Second-Practice:** Hace referencia al segundo proyecto que creé para afianzar los conocimientos adquiridos en el primero y comenzar a practicar nuevos temas. Tales como la obtención de datos de un JSON por medio de una promesa y la renderización de esos datos en código JSX utilizando métodos para operar con arrays. En esta práctica específicamente, se accede a un JSON de productos en donde cada producto tiene sus propiedades, entonces lo que se hace es un mapeo general y luego se accede a las propiedades de cada producto para luego renderizarlo correctamente.

**3. React-Third-Practice:** Esta tercera práctica ya es un poco más robusta, pues se inicia la creación de un E-Commerce con datos estáticos del JSON. Entonces se comienzan a incorporar nuevos Hooks y herramientas indispensables tales como: react-router-dom, react-hook-form, createContext y firebase para crear una especie de base de datos. 

Entonces la estructura de este E-Commerce incluye diferentes secciones principales como el Inicio, Nosotros y Contacto. La sección más importante es la de Productos, en la principal se pueden ver todos los productos pero también se incluyen las subsecciones de Medias, Pantalones, Remeras, Buzos para ver estos productos específicamente. Por lo que el usuario puede ver todos los productos, las subcategorias y acceder al detalle de cada producto individual y añadirlo al carrito. 

Para el carrito se crea un contexto global y se almacenan en el localStorage los productos guardados para futuras visitas. Se configura firebase para almacenar los productos del JSON en la base de datos proporcionada por este servicio.

**4. React-PokeAPI:** La cuarta práctica de React hace referencia a un proyecto pequeño en el que se aprendió a hacer un fetch a una API (La de Pokémon en este caso) para obtener los datos de los Pokemones y crear una especie de "catálogo" en el que el usuario puede ir pasando de Pokémon en Pokémon mostrando el nombre, ID y foto de Pokémon.

**5. React-E-Commerce:** En la quinta práctica se retomó el proyecto E-Commerce que se dejó creado en la tercera práctica, pero se mejoraron algunos procesos. El más relevante es la sección de CheckOut, la cual le permite al usuario comprar los productos que tenía en su carrito, vacíandolo después de haber comprado. Por lo que esta compra se almacenará en la tabla "pedidos" de la base de datos de firebase, obteniendo los datos del cliente y los productos que compró. Además para practicar, se incorporó un Firebase Auth con Google para el prototipo de un login con Google que se trabajará a futuro.

Este proyecto E-Commerce muestra el funcionamiento básico de una tienda online a partir de datos estáticos, por lo que a futuro se puede mejorar, aplicar autenticación y creación de una API para los productos. 
