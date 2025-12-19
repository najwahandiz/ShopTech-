import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Layout/Navbar';
import Catalogue from './Pages/Catalogue';
import WishList from './Pages/WishList';
import CartSidebar from './Layout/CartSidebar';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <div>
      <BrowserRouter>
        <Navbar openCart={openCart} />
        <CartSidebar isOpen={cartOpen} closeCart={closeCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/WishList" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
