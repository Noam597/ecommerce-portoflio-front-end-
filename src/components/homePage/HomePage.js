import React ,{useState,useEffect}from 'react'
import styles from './homepage.module.css'
import { Link } from 'react-scroll'
import {AiOutlineRightCircle,AiOutlineHome,AiOutlineShoppingCart,AiOutlinePhone} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Merchandise from '../merchandise/Merchandise';
const HomePage = () => {

    const [slide, setSlide] = useState(true)
    
    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
  return (
    <>
      <div className={styles.menu}>
        
            <ul>
                <li><button  onClick={()=>{setSlide(!slide)}}><AiOutlineRightCircle/></button></li>
                {slide? <>
                <li><Link activeClass={styles.active} to="home" spy={true} smooth={true} offset={50} duration={500}><AiOutlineHome/></Link></li>
                <li><Link activeClass={styles.active} to="merchandise" spy={true} smooth={true} offset={50} duration={500}><AiOutlineShoppingCart/></Link></li>
                <li><Link activeClass={styles.active} to="about" spy={true} smooth={true} offset={50} duration={500}><CgProfile/></Link></li>
                <li><Link activeClass={styles.active} to="contact" spy={true} smooth={true} offset={50} duration={500}><AiOutlinePhone/></Link></li>
                </>:<></>}
               
            </ul>
        </div>
        <Home/>
        <Merchandise/>
        <About/>
        <Contact/>
    </>
  )
}

export default HomePage