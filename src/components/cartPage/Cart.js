import React, {useEffect} from 'react'
import styles from './cart.module.css'
import {Button,SecondButton} from '../button/Button'
import { ShoppingCart } from '../contexts&reducers/CartContext'
import { FaCashRegister } from 'react-icons/fa'
const Cart = () => {


  const {state:{
    prod,
    cart},
    removeFromCart,
    addItem,
    removeItem ,
    total,
     setTotal,
     navigate
    } = ShoppingCart()


    console.log(prod)
    console.log(cart)

  useEffect(() => {
    
    setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price) * curr.qty,0))

  }, [cart,setTotal])
  

  return (
    <section className={styles.cartPage}>
      
        <Button text={'Back to store'} onClick={()=>{navigate('/ecommerce-portoflio-front-end-/store')}}/>
        {cart.length === 0?<SecondButton text='Cart Empty'/>
      :<Button text='Checkout'  onClick={()=>{navigate('/ecommerce-portoflio-front-end-/checkout')}}/>}
         <div>
     <h2>Amount of items in the cart({cart.length})</h2>
      <h1>SubTotal: {`₪${total}`}</h1>
      </div>
         <div className={styles.merch}>
      {cart.length === 0?<h1>CART IS EMPTY</h1>: <div className={styles.cartContainer}> 
      {cart.map((product)=>{
        return <div className={styles.inCart} key={product.id}>
        <div className={styles.inCartImg}>
          <img src={product.image} alt={prod.alt}/>
        </div>
         <div>
        <h2>Quantity: x{product.qty}</h2>
        <h1>{`Total :₪${product.qty * product.price}`}</h1>
        <div className={styles.addButtons}>
        <button onClick={()=>{removeItem(product.id,product.qty)}}>-</button>
        <button onClick={()=>{addItem(product.id,product.qty)}}>+</button>
        </div>
         </div>
        <div>
          <SecondButton text='Remove From Cart' onClick={()=>{removeFromCart(product)}}/>
          </div> 
        <div> 
        </div>
        </div>
      }) 
      }
      </div>}
      
      {/* } */}
     
      </div> 
      <div  className={styles.ShoppingButton}>
        {cart.length > 0 && <button onClick={()=>{navigate('/ecommerce-portoflio-front-end-/checkout')}}>TO CHECKOUT<FaCashRegister/></button>}
        
        </div>
    </section>
  )
}

export default Cart