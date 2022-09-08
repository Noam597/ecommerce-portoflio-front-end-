import React from 'react'
import { Route,Routes} from 'react-router-dom';
import Header from '../header/Header';
import HomePage from '../homePage/HomePage';
import SignUpPage from '../signUp/SignUpPage';
import SignInPage from '../signUp/SignInPage';
import Products from '../products/Products';
import ErrorPage from '../errorPage/ErrorPage';
import { LoggedUsers } from '../contexts&reducers/CartContext';
import LoggedInHeader from '../header/LoggedInHeader';
import Cart from '../cartPage/Cart';
import CheckOutPage from '../checkOut/CheckOutPage';
import Store from '../store/Store';
const LandingPage = () => {
  
  
  const {loggedIn} = LoggedUsers()
  return (
    <div>

         
        {loggedIn?<LoggedInHeader/>:<Header/>}
          <Routes>
            <Route path='ecommerce-portoflio-front-end-' element={loggedIn?<Store/>:<HomePage/>}/>
            <Route path='ecommerce-portoflio-front-end-/products' element={<Products/>}/>
            <Route path='/ecommerce-portoflio-front-end-/signin' element={<SignInPage/>}/>
            <Route path='/ecommerce-portoflio-front-end-/signup' element={<SignUpPage/>}/>
            <Route path='/ecommerce-portoflio-front-end-/cart' element={loggedIn?<Cart/>:<SignInPage/>}/>
            <Route path='/ecommerce-portoflio-front-end-/checkout' element={loggedIn?<CheckOutPage/>:<SignInPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
  
   
    </div>
  )
}

export default LandingPage