import React from 'react'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">LEONEL</a>

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