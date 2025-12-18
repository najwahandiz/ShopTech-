import React, { useState } from 'react'
import productsData from '../data/productsData'
import ProductCard from '../Components/ProductCard/ProductCard';
import './Catalogue.css'


export default function Catalogue() {

  const products=productsData;
  const [categorySelected,setCategorySelected]=useState(null);
  const categories=[...new Set(products.map(product=>product.category))];

  const filterdProducts=categorySelected
   ? products.filter(product=>product.category===categorySelected)
   : products;
  

  return (
    <div className='catalogueContainer'>
      <h1>Catalogue</h1>
      <h3>Explore our complete collection of luxury garments and accessories.</h3>
      
      <div className='catalogueBtnDiv'>
        <button className='catBtn' onClick={()=>{setCategorySelected(null)}}>All</button>
        {categories.map((cat,index)=>(
          <button className='catBtn' key={index} onClick={()=>{setCategorySelected(cat)}}>
            {cat}
          </button>
        ))}
        </div>

        <div className='catalogueSection'>
            {filterdProducts.map(product=>(
              <ProductCard key={product.id} product={product}/>

            ))}
        </div>

      
    </div>
  )
}
