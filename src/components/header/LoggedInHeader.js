import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart,LoggedUsers } from '../contexts&reducers/CartContext'
import styles from './header.module.css'
import {FaBars,FaShoppingCart} from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'
import { Button} from '../button/Button'
const LoggedInHeader = () => {

    const navigate = useNavigate()

    const [menu, setMenu] = useState(false)
    const [shoppingMenu, setShoppingMenu] = useState(false)
    

    const { userLoggedIn } = LoggedUsers()

    const {state:{ cart },
    removeFromCart,
    addItem,
    removeItem,
    total}=ShoppingCart()


    const signOut = ()=>{
        userLoggedIn()
        console.log('signed out')
    }
    const dropCart = ()=>{
      if(cart.length > 0){
        setShoppingMenu(!shoppingMenu)
      }else{
        setShoppingMenu(shoppingMenu)
      }
    }
 
    const toCheckout = ()=>{
      navigate('/ecommerce-portoflio-front-end-/checkout')
      setShoppingMenu(false)
      
    }

  return (
    <nav className={styles.header}>
        <h1 onClick={()=>{navigate('/ecommerce-portoflio-front-end-')}}>Tech-S</h1>
         <div className={`${styles.nav} ${menu && `${styles.menu}`}`}>
          
          <ul  onClick={()=>{
            setMenu(!menu)
          }}>
            <li onClick={()=>{navigate('/ecommerce-portoflio-front-end-')}}>STORE</li>
            <li><div className={styles.cartS} ><div onClick={dropCart}><span><FaShoppingCart/></span></div>
           {cart.length > 0 &&  <div className={styles.cartN}>{cart.length}</div>}
           
            <div className={`${styles.cartList} ${shoppingMenu && `${styles.show}`}`}>
              {cart.map((cartProd)=>{
                return <div className={styles.cartListInner} key={cartProd.id}>
                        <div className={styles.cartListImg}>
                          <img src={cartProd.image} alt=''/>
                      </div>
                       <div>
                      <p>{cartProd.product}</p>
                      <p> x{cartProd.qty}</p> 
                      <button onClick={()=>{removeItem(cartProd.id,cartProd.qty)}}>-</button>
                      <button onClick={()=>{addItem(cartProd.id,cartProd.qty)}}>+</button>
                    </div>
                    <div>
                    <button style={{color:'red'}} onClick={()=>{removeFromCart(cartProd)}}><AiOutlineDelete/></button>
                    </div>
                    </div>
                 
              })}
                {cart.length > 0 && shoppingMenu && <><p>
                Grand Total :₪${total}
              </p>
              <button className={styles.checkOut} onClick={()=>{toCheckout()}}>Checkout</button></>}
              </div>
            </div> 
            </li>
            <li><Button text='LOG OUT' onClick={signOut}/></li>
            </ul>
        </div>
        <button className={styles.menuButton} onClick={()=>{ setMenu(!menu)  }}>
             <FaBars/>
         </button>
    </nav>
  )
}

export default LoggedInHeader