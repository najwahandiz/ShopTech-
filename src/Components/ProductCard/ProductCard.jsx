import React from 'react'
import { BsCart } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import './ProductCard.css'


export default function ProductCard({product}) {


  return (
   <div className="productCard">
        <div className="imageWrapper">
            <img
            className="productImage"
            src={product.image}
            alt={product.name}
            />

            <div className="productActions">
            <button className="addToCartBtn">
                <BsCart size={22} />
            </button>
            <button className="addToWishlistBtn">
                <FiHeart size={22} />
            </button>
            </div>
         </div>

        <h3 className="productName">{product.name}</h3>
        <p className="productPrice">{product.price}</p>
    </div>

  )
}
