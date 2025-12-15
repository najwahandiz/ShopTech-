import React from 'react'
import { BsCart } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbarSection'>
        <div className='logo'>
            <h2>Elegant.</h2>
        </div>
        <nav className='navbar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Catalogue'>Catalogue</Link></li>
            </ul>
        </nav>
        <nav className='navbar'>
            <ul>
                <li><Link to='/CartSidebar'><BsCart size={22} /></Link></li>
                <li><Link to='/WishList'><FiHeart size={22} /></Link></li>
            </ul>
        </nav>
    </div>
  )
}
