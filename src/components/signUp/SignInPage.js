import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../form/Form';
import Input from '../input/Input'
import {Button} from '../button/Button'
import { LoggedUsers, Users } from '../contexts&reducers/CartContext';
import { errorValidator } from '../validator';
import styles from './signUpPage.module.css'

const SignInPage = () => {

  const navigate = useNavigate()
  
  const { userLoggedIn } = LoggedUsers();

   const { newUser } =Users();

    const [signIn, setSignIn] = useState({
        userName:'',
        password:''
    })
    const [noUser, setNoUser] = useState('');
    const [errors, setErrors] = useState({});

    const submit = (e)=>{
        e.preventDefault()
        const {userName, password} = signIn
      if(userName.length === 0 || password.length === 0){
        setErrors(errorValidator(signIn))
      }else{
          if(newUser.length > 0 ){
        for (let i = 0; i < newUser.length; i++) {

        if(newUser[i].userName === signIn.userName
           && newUser[i].password === signIn.password){
          userLoggedIn()
          navigate('/ecommerce-portoflio-front-end-')
        }else{
          console.log('incorrect')
        }
    }
    } else{
      console.log('user does not exist')
      setNoUser('User Does Not Exist')
    }
      } 
  }

  return (
    <section  style={{height:'100%'}}>
  
       <Form title={'Sign In'}>
       <Input
        type='text'
        name='userName'
        subject={signIn}
        setSubject={setSignIn}
        placeholder='Enter Username'
        />
        {errors.userName && <h5 className={styles.error}>{errors.userName}</h5>}
        <Input
         type='text'
         name='password'
         subject={signIn}
         setSubject={setSignIn}
         placeholder='Enter Password'/>
         {errors.userName && <h5 className={styles.error}>{errors.password}</h5>}
        <Button text='Sign In' onClick={submit}/>
        <h3 className={styles.error}>{noUser}</h3>
        <p onClick={()=>{navigate('/ecommerce-portoflio-front-end-')}}><u>Back to Home Page</u></p>
        <p onClick={()=>{navigate('/ecommerce-portoflio-front-end-/signup')}}>Not A member? <u>Click Here to Sign Up</u></p>
       
    </Form>
    </section>
  )
}

export default SignInPage