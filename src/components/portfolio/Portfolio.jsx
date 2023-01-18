import React from "react";
import Project from "./Project";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

import "./portfolio.css";


const Portfolio = () => {
  const projects = [
    {
      title: "🍟 Fast Food App",
      image: IMG2,
      github: "https://github.com/LeooZeballos/fast-food-spring",
      demo: "https://fast-food-app.fly.dev/",
    },
    {
      title: "🎬 Movie Finder App",
      image: IMG3,
      github: "https://github.com/LeooZeballos/movie-mate",
      demo: "https://leoozeballos.github.io/movie-mate/",
    },
    {
      title: "📝 TaskIt App",
      image: IMG4,
      github: "https://github.com/LeooZeballos/todo-app-reactjs",
      demo: "https://leoozeballos.github.io/todo-app-reactjs/",
    },
    {
      title: "🚗 Dealership App",
      image: IMG1,
      github: "https://github.com/Prog-Avanzada-4to/backend-concesionaria",
      demo: "",
    },
    {
      title: "✅ LeetCode Solutions",
      image: IMG5,
      github: "https://github.com/LeooZeballos/leetcode-js",
      demo: "",
    },
    {
      title: "📚 Blog API Rest",
      image: IMG6,
      github: "https://github.com/LeooZeballos/api-rest-springboot",
      demo: "",
    }
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
