import './main.css';
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nosotros } from './components/Nosotros';
import { Contacto } from './components/ContactoNivel3';
import { CartProvider } from './context/CartContext';
import { Carrito } from './components/Carrito';

function App() {

  return (
    <div>
      <CartProvider>
         <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

//Context sirve para que diferentes elementos, funciones, etc puedan estar disponibles de forma global en todos los componentes que almacena

//Todos los componentes que usen Links de react-router-dom, deben estar dentro de BrowserRouter

export default App;
