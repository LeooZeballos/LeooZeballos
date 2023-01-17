import React from "react";
import { BiCheck } from "react-icons/bi";

const Service = ({ service }) => {
  return (
    <article className="service">
      <div className="service__head">
        <h3>{service.title}</h3>
      </div>
      <ul className="service__list">
        {service.items.map((item, index) => (
          <li key={index}>
            <BiCheck className="service__icon" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Service;
