import React, {useState} from 'react'
import styles from './products.module.css'
import {ProductCard} from '../productCard/ProductCard'
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'
import { ShoppingCart } from '../contexts&reducers/CartContext'
import {AiOutlineClose} from 'react-icons/ai'
import Rate from '../rating/Rate'


const Products = () => {

   
  const {state:{prod} } = ShoppingCart()

   const gallery = prod.length
   const [select, setSelect] = useState(false)
   const [selectedProduct, setSelectedProduct] = useState(0)

   const nextIem = ()=>{
    setSelectedProduct(selectedProduct === gallery - 1? 0 
      :selectedProduct + 1)
  } 
   const prevItem = ()=>{
    setSelectedProduct(selectedProduct === 0? gallery - 1 
      :selectedProduct - 1)
  }

   const clickedItem = (x)=>{
    setSelect(!select)
    setSelectedProduct(x)
  }


  return (
    <section className={styles.merchendise}>
         <div className={styles.merch}>
     {prod.map((item,index)=>{
        return <div key={index} onClick={()=>{
          clickedItem(index)
        }}>
        <ProductCard
        // text='Add to cart'
        prod={item}
        onClick={()=>{}}
        /></div>})}
        {select?<div className={styles.cover}>
      {prod.map((product,i)=>{
      return <div key={i}>
        {i === selectedProduct && <><div className={styles.itemCard}>
          <div className={styles.exit}>
             <button onClick={()=>{
          setSelect(!select)
        }}><AiOutlineClose/></button>
        </div>
        
          <div className={styles.description}>
            <img src={product.image} alt={product.alt}/>
        
          <p>   Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
              Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
              sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
              </p>
          </div>
          <div>
             <Rate rating={product.rate}/>
          <h2>{product.product}</h2>
          <h2>{`₪${product.price}`}</h2>
           </div>
           <div className={styles.buttons}>
            <button onClick={()=>{prevItem()}}><FaArrowLeft/></button>
            <button onClick={()=>{nextIem()}}><FaArrowRight/></button>
            </div> 
          </div>
        </>}
      </div>

        })} 
       </div>:<></>}
        
      </div>
    </section>
  )
}

export default Products