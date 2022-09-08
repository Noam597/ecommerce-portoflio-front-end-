import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css'

 

const imgURL='https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'



  const Home = () => {

   let navigate = useNavigate()

  return (
    <section id='home' className={styles.home}>
      <div  className={styles.homeContainer}>
        <img src={imgURL} alt='landing page'/>
        </div>
       
      <div className={styles.innerMenu}>
      <p>Portfolio</p>
      <h1>E-commerce</h1>
      <div className={styles.btnHolder}>
      <div onClick={()=>{navigate('/products')}} className={`${styles.btn} ${styles.products}`}>Products</div>
      <div onClick={()=>{navigate('/signin')}} className={`${styles.btn} ${styles.signIn}`}>Sign in</div>
      </div>
      </div>
    </section>
  )
}

export default Home