import React from 'react'
import CartSidebar from './CartSidebar'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";


export default function MainLayout() {
   const [isCartOpen, setIsCartOpen] = useState(false);
   
  return (
    <>
      <Navbar openCart={() => setIsCartOpen(true)} />

      <CartSidebar
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
      />

      <main>
        <Outlet />
      </main>
    </>
  );
};

