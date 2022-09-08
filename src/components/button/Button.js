import React from 'react'
import styles from './button.module.css'


 const Button = ({text,onClick,disabled}) => {

  return (
    <button className={`${styles.button} ${styles.primary}`} 
    onClick={onClick} 
    disabled={disabled}>
        {text}
        </button>
  )
}


const SecondButton = ({text,onClick}) => {
  return (
    <button className={`${styles.button} ${styles.secondary}`} onClick={onClick}>
        {text}
        </button>
  )
}

export {Button,SecondButton}
