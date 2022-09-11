import React,{useEffect} from 'react'
import { ShoppingCart } from '../contexts&reducers/CartContext'
import { CartProductCard } from '../productCard/ProductCard'
import { Button, SecondButton } from '../button/Button'
import {FaShoppingCart} from 'react-icons/fa'
import styles from './store.module.css'


const Store = () => {

    const {state:{ prod,cart },
                    addToCart,
                  removeFromCart,
                  setTotal,
                    navigate}=ShoppingCart()
    


                    useEffect(() => {
    
                      setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price) * curr.qty,0))
                  
                    }, [cart,setTotal])
    
  return (
    <section className={styles.store}>
        <h1>STORE</h1>
        {cart.length > 0 ?<div className={styles.buttons}> 
            <Button text='CART'  onClick={()=>{navigate('/ecommerce-portoflio-front-end-/cart')}}/>
            <Button text='Checkout'  onClick={()=>{navigate('/ecommerce-portoflio-front-end-/checkout')}}/>
             </div>:<div className={styles.buttons}><SecondButton text='Cart Empty'/></div>}
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
        <div  className={styles.ShoppingButton}>
        {cart.length > 0 && <button onClick={()=>{navigate('/ecommerce-portoflio-front-end-/cart')}}>TO CART<FaShoppingCart/></button>}
        
        </div>
    </section>
  )
}

export default Store