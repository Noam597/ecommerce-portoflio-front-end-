import {useNavigate} from 'react-router-dom'
import {ProductCard} from '../productCard/ProductCard'
import { products } from '../productsArray/productsArray'
import styles from './merchandise.module.css'

const Merchandise = () => {

  const navigate = useNavigate()
  const productSlider = [...products,...products]
  return (
    <section id="merchandise" className={styles.merch}>
      <div>
      <div className={styles.merch_slider}> 
      {productSlider.map((product,i)=>{
        return <div key={i} onClick={()=>{navigate('/ecommerce-portoflio-front-end-/products')}}>
            <ProductCard
            prod={product}
            text='More Info'/>
        </div>
      })}
      
      </div>
        </div>

        </section>
  )
}

export default Merchandise