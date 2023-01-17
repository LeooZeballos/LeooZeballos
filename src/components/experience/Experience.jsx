import React from 'react'
import Skill from './Skill'
import './experience.css'

const Experience = () => {

  const frontend = [
    {tech: 'HTML', level: "Advanced"},
    {tech: 'CSS', level: "Intermediate"},
    {tech: 'JavaScript', level: "Advanced"},
    {tech: 'React', level: "Intermediate"},
    {tech: 'Bootstrap', level: "Beginner"},
  ]

  const backend = [
    {tech: 'NodeJS', level: "90%"},
    {tech: 'Express', level: "80%"},
    {tech: 'MongoDB', level: "70%"},
    {tech: 'MySQL', level: "60%"},
    {tech: 'PHP', level: "50%"},
  ]

  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontend.map((item, index) => ( <Skill item={item} key={index} /> ))}
            </div>
          </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backend.map((item, index) => ( <Skill item={item} key={index} /> ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience