import React,{useEffect} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import styles from './app.module.css';
import Footer from './components/footer/Footer';
import CartContext from './components/contexts&reducers/CartContext';
import LandingPage from './components/landingPage/LandingPage';



 



function App() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
 

  return (
    <div className={styles.app}>
      <Router>
        <CartContext>
          <LandingPage/>
        </CartContext>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
