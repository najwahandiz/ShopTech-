import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { increaseQuantity,decreaseQuantity } from '../Store/Slices/cartSlice';
import './CartSidebar.css'


export default function CartSidebar({ isOpen, closeCart }) {

    const cartItems= useSelector((state)=>state.cart.items);
    const dispatch =useDispatch();
    const Total = cartItems.reduce((sum,item)=>{
        return sum + item.price * item.quantity
    },0);


  return (


    <div className='sideBarSection'>
        <aside className={`cartSidebar ${isOpen ? "open" : ""}`}>
        <h2 className='sectionTitle'>Your Bag ({cartItems.length})</h2>
        <button className="closeBtn" onClick={closeCart}>✖</button>
        {cartItems.length===0 ? (<h3>Your bag is empty</h3>) : (
            <div className='cartItems'>
                {cartItems.map(product=>(
                    <div className='cartItem' key={product.id}>
                        <div className='imgDiv'><img src={product.image} alt={product.name} /></div>
                        <div className='productInfo'>
                            <h3>{product.name}</h3>
                            <h5>{(product.price)*(product.quantity)} Dh</h5>
                            <div className='incDecDiv'>
                                <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                                <p>{product.quantity}</p>
                                <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        )} 

        <div className='totalDiv'>
            <span className="totalLabel">Total</span>
            <span className="totalPrice">{Total} Dh</span>
        </div>
    </aside>
    </div>

  )
}
