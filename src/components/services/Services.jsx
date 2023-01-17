import React from "react";
import Service from "./Service";
import "./services.css";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      items: ["React", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "API Development",
      items: ["REST", "Spring Boot"],
    },
    {
      title: "Database",
      items: ["MySQL", "PostgreSQL", "SQLite"],
    },
    {
      title: "Server",
      items: ["Linux", "Apache", "Node.js"],
    },
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
