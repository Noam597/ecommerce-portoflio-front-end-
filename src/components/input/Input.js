
import styles from './input.module.css'
const Input = ({subject,setSubject,type,name,placeholder}) => {

    const handleChange = (e)=>{
        setSubject({
          ...subject,[e.target.name]:e.target.value,
      })
      console.log(e.target.value)
      }
      

  return (
    
    <input className={styles.input}
     type={type}
      name={name}
       onChange={handleChange}
        placeholder={placeholder}/>
   
  )
}

export default Input