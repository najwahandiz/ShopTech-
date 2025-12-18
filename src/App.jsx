import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Layout/Navbar'
import Catalogue from './Pages/Catalogue'
import WishList from './Pages/WishList'
import CartSidebar from './Layout/CartSidebar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <CartSidebar />
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
