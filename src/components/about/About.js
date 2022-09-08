import React from 'react'
import styles from './about.module.css'
const imgURL='https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
const About = () => {
  return (
    <section id='about'>
        <h1>About us</h1>
        <div className={styles.content}>
          <div className={styles.img}>
          <img src={imgURL} alt="black and white " />
       </div> 
       <div className={styles.text}>
       <p>   Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>
   
   </div> </div>
    </section>
  )
}

export default About