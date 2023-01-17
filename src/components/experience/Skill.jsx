import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skill = ({item}) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__icon" />
      <div>
        <h4>{item.tech}</h4>
        <small className="text-light">{item.level}</small>
      </div>
    </article>
  )
}

export default Skill