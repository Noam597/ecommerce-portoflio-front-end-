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
            <Route path='/' element={loggedIn?<Store/>:<HomePage/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/signin' element={<SignInPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/cart' element={loggedIn?<Cart/>:<SignInPage/>}/>
            <Route path='/checkout' element={loggedIn?<CheckOutPage/>:<SignInPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
  
   
    </div>
  )
}

export default LandingPage