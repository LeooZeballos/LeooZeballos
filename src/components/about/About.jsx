import React from 'react'
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { BsFolderFill } from 'react-icons/bs';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import './about.css';

const About = () => {
  const age = new Date() - new Date(2000, 12, 9);
  const ageInYears = Math.floor(age / 1000 / 60 / 60 / 24 / 365);

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>A year working</small>
            </article>
            <article className="about__card">
              <BsFillCalendarEventFill className="about__icon" />
              <h5>Age</h5>
              <small>{ageInYears} years old</small>
            </article>
            <article className="about__card">
              <BsFolderFill className="about__icon" />
              <h5>Projects</h5>
              <small>+5</small>
            </article>
          </div>

          <p>
            As a self-taught individual, I am deeply passionate about continuously learning new technologies and improving my skillset on a daily basis. My primary motivation is to face and overcome any challenges that may arise, with the ultimate goal of becoming a highly proficient software developer.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About