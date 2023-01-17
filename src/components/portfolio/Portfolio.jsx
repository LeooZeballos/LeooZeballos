import React from "react";
import Project from "./Project";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

import "./portfolio.css";


const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      image: IMG1,
      github: "https://google.com",
      demo: "https://google.com",
    },
    {
      title: "Project 2",
      image: IMG2,
      github: "https://google.com",
      demo: "https://google.com",
    },
    {
      title: "Project 3",
      image: IMG3,
      github: "https://google.com",
      demo: "https://google.com",
    },
    {
      title: "Project 4",
      image: IMG4,
      github: "https://google.com",
      demo: "https://google.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
