import './App.css';
import Navbar from './components/navbar';
import Products from './components/productCards';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== productToRemove.id);
    setCartItems(updatedCart);
  };

  return (
      <div className="App">
        <Navbar cartItemCount={cartItems.length} />
        <div>
          <header className="bg-dark py-5">
            <div className="container px-4 my-5">
              <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Shop in Style</h1>
                <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
              </div>
            </div>
          </header>
          <Products addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems}/>
          <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright © Your Website 2023</p></div>
          </footer>
        </div>
      </div>
  );
}

export default App;
