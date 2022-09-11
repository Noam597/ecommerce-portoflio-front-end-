import {Button, SecondButton} from '../button/Button'
import Rate from '../rating/Rate'
import styles from './productCard.module.css'

const ProductCard = ({prod}) => {


  return (
    <div className={`${styles.product} ${styles.out}`}>
      <div className={styles.productImg}>
        <img src={`${prod.image}`} alt='product'/>
      </div>
       
       <h3>{prod.product}</h3>
        <h3><b>Price:</b> {`₪${prod.price}`}</h3>
        <Rate rating={prod.rate}/>
    </div>
  )
}

const CartProductCard =({prod,onClick,cart,remove})=>{
  return (
    <div className={`${styles.product} ${styles.in}`}>
      <div className={styles.productImg}>
        <img src={`${prod.image}`} alt='product'/>
      </div>
        <Rate rating={prod.rate}/>
          <h3>Product: {prod.product}</h3>
          <p><b>Price:</b> {`₪${prod.price}`}</p>
        {cart.some(p=>p.id === prod.id)
        ?(<SecondButton text='Remove From Cart' onClick={remove}/>)
        :(<Button text={!prod.inStock?'Out Of Stock':'Add To Cart'} onClick={onClick} disabled={!prod.inStock}/>)
              
        }
    </div>
  )
}

export {ProductCard,CartProductCard} 