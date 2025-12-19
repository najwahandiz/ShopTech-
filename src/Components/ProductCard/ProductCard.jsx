import React from 'react'
import { useDispatch } from 'react-redux';
import {addToCart} from "../../Store/Slices/cartSlice"
import { BsCart } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import './ProductCard.css'
import {addToWishlist} from "../../Store/Slices/wishlistSlice"


export default function ProductCard({product}) {

    const dispatch = useDispatch();


  return (
   <div className="productCard">
        <div className="imageWrapper">
            <img
            className="productImage"
            src={product.image}
            alt={product.name}
            />

            <div className="productActions">
            <button className="addToCartBtn" onClick={()=>{dispatch(addToCart(product))}}>
                <BsCart size={22} />
            </button>
            <button className="addToWishlistBtn" onClick={()=>{dispatch(addToWishlist(product))}}>
                <FiHeart size={22} />
            </button>
            </div>
         </div>

        <h3 className="productName">{product.name}</h3>
        <div className='shopDiv'>  
        
        <button className="addToWishlistBtn" onClick={()=>{dispatch(addToWishlist(product))}}>
                <FiHeart size={23} />
            </button>
        <p className="productPrice">{product.price} DH</p>    
        <button className="addToCartBtn" nClick={()=>{dispatch(addToCart(product))}}>
                <BsCart size={23} />
            </button>  
        </div>      
    </div>

  )
}
