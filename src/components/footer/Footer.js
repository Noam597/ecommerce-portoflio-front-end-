import React from 'react'
import styles from './footer.module.css'
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Created by Noam</h3>
      <ul>
        <li><a href='https://www.facebook.com'><FaFacebook/></a></li>
        <li><a href='https://www.twitter.com'><FaTwitter/></a></li>
        <li><a href='https://www.instagram.com'><FaInstagram/></a></li>
        <li><a href='https://www.github.com/Noam597'><AiFillGithub/></a></li>
      </ul>
    </footer>
  )
}

export default Footer