import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import {Button} from '../button/Button'
import styles from './header.module.css'
import {FaBars} from 'react-icons/fa'
import { LoggedUsers} from '../contexts&reducers/CartContext';
import LoggedInHeader from './LoggedInHeader';
const Header = () => {

    let navigate = useNavigate()
  
    const{ loggedIn } = LoggedUsers()

  // const {state:{cart}} = ShoppingCart()
  const [menu, setMenu] = useState(false)
  return (<>
   {!loggedIn? <nav className={styles.header}>
        <h1 onClick={()=>{navigate('/')}}>Tech-S</h1>
        <div className={`${styles.nav} ${menu && `${styles.menu}`}`}>
          <ul  onClick={()=>{
            setMenu(!menu)
          }}>
   
            <li onClick={()=>{navigate('/ecommerce-portoflio-front-end-')}}>HOME</li>
            <li onClick={()=>{navigate('/ecommerce-portoflio-front-end-/products')}}>PRODUCTS</li>
            <li onClick={()=>{navigate('/ecommerce-portoflio-front-end-/signin')}}>SIGN IN </li>
            <li><Button text="SIGN UP" onClick={()=>{navigate('/ecommerce-portoflio-front-end-/signup')}}/></li>
          </ul>
        </div>
          <button className={styles.menuButton} onClick={()=>{ setMenu(!menu)  }}>
             <FaBars/>
         </button>
          
        </nav>
        :<LoggedInHeader/>} 
      
        </>
  )
}

export default Header