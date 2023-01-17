import React from 'react'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">LEONEL</a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/zeballosleonel/"> <FaFacebookSquare /> </a>
        <a href="https://www.instagram.com/leoo.zeballos/"> <GrInstagram /> </a>
        <a href="https://twitter.com/leoo_zeballos"> <FaTwitterSquare /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Leonel Zeballos. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer