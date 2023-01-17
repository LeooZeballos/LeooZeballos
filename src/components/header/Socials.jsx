import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/leonelayrtonzeballos/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/LeooZeballos" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      <a href="https://www.instagram.com/leoo.zeballos/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default Socials