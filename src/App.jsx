import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Layout/Navbar'
import Catalogue from './Pages/Catalogue'
import WishList from './Pages/WishList'

function App() {
  

  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/Catalogue" element={<Catalogue />} ></Route>
        <Route path="/WishList" element={<WishList />} ></Route>
      </Routes> 
    </BrowserRouter>      
    </div>

  )
}

export default App
