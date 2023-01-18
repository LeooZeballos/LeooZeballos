import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import './header.css'
import Socials from './Socials'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="presentation">
          <h5>Hello I'm</h5>
          <h1>Leonel Zeballos</h1>
          <h5 className="text-light">Software Developer</h5>
          <CTA />
        </div>

        <div className="me_container">
          <div className="me">
            <img src={ME} alt="Leonel Zeballos" />
          </div>
        </div>

        <Socials />
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header