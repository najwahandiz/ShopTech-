
import React from 'react';
import { BsCart } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const cartItems = useSelector((state) => state.cart.items);
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className='navbarSection'>
            <div className='logo'>
                <h2><Link to='/'>N. Elegance</Link></h2>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Catalogue'>Catalogue</Link></li>
                </ul>
            </nav>
            <nav className='navbar'>
                <ul>
                    <li style={{ position: 'relative' }}>
                        <Link to='/CartSidebar'>
                            <BsCart size={22} />
                            {totalQuantity > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: -8,
                                    right: -8,
                                    background: 'red',
                                    color: 'white',
                                    borderRadius: '50%',
                                    padding: '2px 6px',
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                }}>{totalQuantity}</span>
                            )}
                        </Link>
                    </li>
                    <li><Link to='/WishList'><FiHeart size={22} /></Link></li>
                </ul>
            </nav>
        </div>
    );
}
