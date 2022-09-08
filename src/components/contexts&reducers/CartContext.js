import React,{createContext, useContext,useReducer, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { cartReducer } from './reducers'
import { products } from '../productsArray/productsArray'

export const LoginContext = createContext({});

const CartProvider = createContext({});

const NewUserProvider = createContext({});


const CartContext = ({children}) => {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);

  const userLoggedIn =()=>{
    setLoggedIn(!loggedIn)
  }
    const [state,dispatch] = useReducer(cartReducer,{
        prod:products,
        cart:[]
    })
    const addToCart = (stu) =>{
      dispatch({type:'ADD_TO_CART',payload:stu})
      
    }
    const removeFromCart = (stu) =>{
      dispatch({type:'REMOVE_FROM_CART',payload:stu})
    }

    const addItem = (id,qty)=>{
      dispatch({type:'ADD_QUANTITY',payload:{id:id,qty:qty}})
    }

    const removeItem = (id,qty)=>{
      dispatch({type:'REMOVE_QUANTITY',payload:{id:id,qty:qty}})
    }
    const emptyCart = (stu)=>{
      dispatch({type:'EMPTY_CART',payload:stu})
    }

    const [total,setTotal] = useState(0);

     const [newUser, setNewUser] = useState([]);
    
  return (
    <LoginContext.Provider value={{loggedIn, userLoggedIn}}>
      <CartProvider.Provider value={
        {state,
        // dispatch,
        addToCart,
        removeFromCart,
        addItem,
        removeItem,
        emptyCart,
        total,
        setTotal,
        navigate}}>
        <NewUserProvider.Provider value={{newUser,setNewUser}}>
        {children}
        </NewUserProvider.Provider>
      </CartProvider.Provider>
    </LoginContext.Provider>
    
  )
}

export default CartContext

export const LoggedUsers = ()=>{
    return useContext(LoginContext)
  }
  
export const ShoppingCart = ()=>{
    return useContext(CartProvider)
  }

  export const Users = ()=>{
    return useContext(NewUserProvider)
  }

  
