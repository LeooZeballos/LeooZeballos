import React from 'react'
import Skill from './Skill'
import './experience.css'

const Experience = () => {

  const frontend = [
    {tech: 'HTML', level: "Advanced"},
    {tech: 'CSS', level: "Intermediate"},
    {tech: 'JavaScript', level: "Advanced"},
    {tech: 'TypeScript', level: "Beginner"},
    {tech: 'React.js', level: "Intermediate"},
    {tech: 'Bootstrap', level: "Beginner"},
  ]

  const backend = [
    {tech: 'Spring Boot', level: "Advanced"},
    {tech: 'Java' , level: "Advanced"},
    {tech: 'Docker' , level: "Intermediate"},
    {tech: 'Python', level: "Intermediate"},
    {tech: 'Linux', level: "Intermediate"},
    {tech: 'Node.js', level: "Beginner"},
    {tech: 'Apache Kafka', level: "Beginner"},
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