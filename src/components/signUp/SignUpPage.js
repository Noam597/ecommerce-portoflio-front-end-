import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Input from '../input/Input';
import {Button} from '../button/Button';
import { Form } from '../form/Form';
import { Users } from '../contexts&reducers/CartContext';
import { errorValidator } from '../validator';
import styles from './signUpPage.module.css'
import {AiOutlineCheckCircle} from'react-icons/ai'

const SignUpPage = () => {

      const navigate = useNavigate()

       const [signUp, setSignUp] = useState({
        userName:'',
        password:'',
        email:''
    })
    const [isSignedUp, setIsSignedUp] = useState(false)
    const [errors, setErrors] = useState({})
    const {newUser,setNewUser}  = Users()

    const screenStyle ={
      height:isSignedUp? "100vh": "100%"
    }
    const submit = (e)=>{
        e.preventDefault()
        const {userName,password,email} = signUp
        if (userName.length === 0||
          password.length === 0||
          email.length === 0) {
            setIsSignedUp(false)
            console.log('add credentials')
            setNewUser(newUser)
            setErrors(errorValidator(signUp))
        }else{
        setNewUser([...newUser,signUp])
        setIsSignedUp(true)
        }
        
        
        console.log(newUser)
    } 

  return (
    <section  style={screenStyle}  onSubmit={submit}>
 {isSignedUp?<Form>
  <div className={styles.success}>
    <h1><AiOutlineCheckCircle/></h1>
    <h2>You've Signed In Successfully</h2>
    <h3>Welcome Aboard!</h3>
    </div>
    <p onClick={()=>{navigate('/ecommerce-portoflio-front-end-/signin')}}><u>Click Here To Log In</u></p>
  </Form>:
    <Form title={'Sign Up'}>
      
        <Input
        type='text'
        name='userName'
        subject={signUp}
        setSubject={setSignUp}
        placeholder='Enter Username'
        />
        {errors.userName && <h5 className={styles.error}> * {errors.userName}</h5>}
        <Input
         type='password'
         name='password'
         subject={signUp}
         setSubject={setSignUp}
         placeholder='Enter Password'/>
          {errors.password && <h5 className={styles.error}> * {errors.password}</h5>}
         <Input
         type='email'
         name='email'
         subject={signUp}
         setSubject={setSignUp}
         placeholder='Enter Email'/>
         {errors.email && <h5 className={styles.error}> * {errors.email}</h5>}
        <Button text='SUBMIT' onClick={submit}/>
        <p onClick={()=>{navigate('/ecommerce-portoflio-front-end-')}}><u>Back to Home Page</u></p>
        <p onClick={()=>{navigate('/ecommerce-portoflio-front-end-/signin')}}>Already A Member? <u>Click Here to Log In</u></p>
    </Form>}
    </section>
  )
}

export default SignUpPage