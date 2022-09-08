import React from 'react'
import styles from './form.module.css'
export const Form = ({children,title,onSubmit}) => {

  return (
    <div className={styles.form}>
    <form className={styles.formContent} onSubmit={onSubmit}>
        <div>
          <h1>{title}</h1>
        {children}
        </div>
    </form>
    </div>
  )
}
