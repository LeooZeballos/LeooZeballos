import React from "react";

const Project = ({ project }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__image">
        <img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <div className="portfolio__cta">
        <a href={project.github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
        {project.demo.length > 0 ? (
          <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
        ) : null}
      </div>
    </article>
  );
};

export default Project;
