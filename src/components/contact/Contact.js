import React,{useState} from 'react'
import styles from './contact.module.css'
import { Form } from '../form/Form'
import Input from '../input/Input'
import { Button } from '../button/Button'
const Contact = () => {

const [send, setSend] = useState('')


const submit = (e)=>{
  e.preventDefault()
}
  return (
    <section id='contact' className={styles.contact}>
        {/* <h1>Contact</h1> */}
        <div className={`${styles.contactForm} ${styles.line}`}>
          <h1>Contact Us</h1>
          <h2>Phone Number: 555-5555</h2>
          <h2>Address: 1600 Pennsylvania Avenue</h2>
          <h2>Email: Tech-S@mail.com</h2>
        </div>

       <div className={styles.contactForm}>
        <Form> 
  
        <Input
        type='text'
        name='userName'
        subject={send}
        setSubject={setSend}
        placeholder='Enter Full Name..'
        />
       
        <Input
         type='text'
         name='phoneNumber'
         subject={send}
         setSubject={setSend}
         placeholder='Enter Phone Number..'/>
        
         <Input
         type='email'
         name='email'
         subject={send}
         setSubject={setSend}
         placeholder='Enter Email'/>
         <textarea style={{width:'300px',height:'100px'}}>
          
         </textarea>
        <Button text='SEND' onClick={submit}/> 
       
        </Form>
       </div>
        </section>
  )
}

export default Contact