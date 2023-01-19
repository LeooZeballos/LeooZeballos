import React from "react";
import Service from "./Service";
import "./services.css";

const Services = () => {
  const services = [
    {
      title: "Software Development",
      items: ["React", "Spring Boot"],
    },
    {
      title: "Database Management",
      items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"],
    },
    {
      title: "Server Management",
      items: ["Linux", "Apache", "Node.js"],
    },
    {
      title: "DevOps",
      items: ["Docker", "Git"],
    },
    {
      title: "Agile Development",
      items: ["Scrum", "Kanban", "Jira"],
    },
    {
      title: "Languages",
      items: ["English", "Spanish"],
    }
  ];

  return (
    <section id="services">
      <h5>Additional skills</h5>
      <h2>Core competencies</h2>
      <div className="container services__container">
        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
