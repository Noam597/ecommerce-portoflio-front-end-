import React,{useState,useEffect} from 'react'
import styles from './checkOut.module.css'
import { ShoppingCart } from '../contexts&reducers/CartContext'
import { Form } from '../form/Form'
import { Button } from '../button/Button'
import Input from '../input/Input'
import { errorValidator } from '../validator'
import {AiOutlineCheckCircle} from'react-icons/ai'
const CheckOutPage = () => {
    const [sent, setSent] = useState(false)
    const [errors, setErrors] = useState({})
const [deliveryForm, setDeliveryForm] = useState({
    userName:'',
    lastName:'',
    phone:'',
    email:'',
    address:'',
})
 const [fastDelivery, setFastDelivery] = useState(false)

 const screenStyle ={
    height:sent? "100vh": "100%"
  }
    const {state:{cart},emptyCart,total,setTotal,navigate} =ShoppingCart()
 
    useEffect(() => {
    
        setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price) * curr.qty,0))
        
      }, [cart,setTotal])




  const sendQuick = ()=>{
    setFastDelivery(!fastDelivery)
    fastDelivery?setTotal(prevTotal => prevTotal - 80):setTotal(prevTotal => prevTotal + 80) 
  }

  const submit = (e)=>{
        e.preventDefault()
        const {userName,
        lastName,
        phone,
        email,
        address} = deliveryForm;
        if(userName.length === 0||
            lastName.length === 0||
            phone.length === 0||
            email.length === 0||
            address.length === 0){
                setSent(false);
                setErrors(errorValidator(deliveryForm));
            }else{
                setSent(!sent)
                cart.map((c)=>emptyCart(c))
                console.log(cart)
            }

        
  }
   

  return (<section style={screenStyle}>
     <Button text='Back to Cart' onClick={()=>navigate('/ecommerce-portoflio-front-end-/cart')}/>
     {sent? <div className={styles.finish} >
        <h1><AiOutlineCheckCircle/></h1>
        <h1>YOUR ORDER HAS BEEN SENT</h1>
        <p  onClick={()=>navigate('/ecommerce-portoflio-front-end-')}><u>BACK TO STORE</u></p>
        </div>
        : <div className={styles.checkOut}>
       
        <div className={styles.table}>
            <table>
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    </tr>
                </thead>
            <tbody>
            {cart.map((totalProd,i)=>{
            return  <tr key={i}>
                        <td>{totalProd.product}</td>
                        <td>₪{totalProd.price}</td>
                        <td>{totalProd.qty}</td>
                    </tr>

                    })}
                    <tr>
                        <td colSpan='3'><h1>GRAND TOTAL :₪{total}</h1></td>
                    </tr>
                </tbody>
            </table>
            </div>
             <div className={styles.delivery}>
            <Form>
                <h1>ORDER FORM</h1>
                <h3>First Name:</h3>
                <Input 
                name='userName' 
                type='text' 
                placeholder='First Name' 
                subject={deliveryForm} 
                setSubject={setDeliveryForm}/>
                {errors.userName && <h5 className={styles.error}> * {errors.userName}</h5>}
                <br/>
                <h3>Last Name:</h3>
                <Input name='lastName'
                 type='text' 
                 placeholder='Last Name' 
                 subject={deliveryForm} 
                 setSubject={setDeliveryForm}/>
                 {errors.lastName && <h5 className={styles.error}> * {errors.lastName}</h5>}
                <br/>
                <h3>Phone:</h3>
                <Input 
                name='phone' 
                type='number' 
                placeholder='Phone Number' 
                subject={deliveryForm} 
                setSubject={setDeliveryForm}/>
                {errors.phone && <h5 className={styles.error}> * {errors.phone}</h5>}
                <h3>Email:</h3>
                <Input 
                name='email' 
                type='email' 
                placeholder='Email@mail.com' 
                subject={deliveryForm} 
                setSubject={setDeliveryForm}/>
                {errors.email && <h5 className={styles.error}> * {errors.email}</h5>}
                <h3>address:</h3>
                <Input name='address' 
                type='address' 
                placeholder='Address' 
                subject={deliveryForm} 
                setSubject={setDeliveryForm}/>
                {errors.address && <h5 className={styles.error}> * {errors.address}</h5>}
                <h4> <input type='checkbox' onChange={()=>{sendQuick()}} /> fast delivery +₪80</h4>
                <Button text='SUBMIT' type='submit' onClick={submit}/>
            </Form>
        </div>
    </div>}
   
       
    </section>
  )
}

export default CheckOutPage