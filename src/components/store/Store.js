import React from 'react'
import { ShoppingCart } from '../contexts&reducers/CartContext'
import { CartProductCard } from '../productCard/ProductCard'
import { Button, SecondButton } from '../button/Button'
import styles from './store.module.css'


const Store = () => {

    const {state:{ prod,cart },
                    addToCart,
                  removeFromCart,
                    navigate}=ShoppingCart()
    



    
  return (
    <section>
      
        <h1>STORE</h1>
        {cart.length > 0 ?<div className={styles.buttons}> 
            <Button text='CART'  onClick={()=>{navigate('/ecommerce-portoflio-front-end-/cart')}}/>
            <Button text='Checkout'  onClick={()=>{navigate('/ecommerce-portoflio-front-end-/checkout')}}/>
             </div>:<SecondButton text='Cart Empty'/>}
        <div className={styles.merch}>
            {prod.map((item,index)=>{
              return <div key={index}>
                <CartProductCard
                  cart={cart}
                  prod={item}
                  onClick={()=>{addToCart(item)}}
                  remove={()=>{removeFromCart(item)}}/>
        </div>})}
        </div>
    </section>
  )
}

export default Store