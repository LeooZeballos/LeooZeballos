import React from "react";
import Project from "./Project";

import "./portfolio.css";


const Portfolio = () => {
  const projects = [
    {
      title: "🍟 Fast Food App",
      image: "https://live.staticflickr.com/65535/52637743218_656038ffa5_c.jpg",
      github: "https://github.com/LeooZeballos/fast-food-spring",
      demo: "https://fast-food-app.fly.dev/",
    },
    {
      title: "🎬 Movie Finder App",
      image: "https://live.staticflickr.com/65535/52637520404_e5c0e7f189_h.jpg",
      github: "https://github.com/LeooZeballos/movie-mate",
      demo: "https://leoozeballos.github.io/movie-mate/",
    },
    {
      title: "📝 TaskIt App",
      image: "https://live.staticflickr.com/65535/52637520369_41f39ce2f0_z.jpg",
      github: "https://github.com/LeooZeballos/todo-app-reactjs",
      demo: "https://leoozeballos.github.io/todo-app-reactjs/",
    },
    {
      title: "🚗 Dealership App",
      image: "https://live.staticflickr.com/65535/52636750507_a48d0a6d0d_c.jpg",
      github: "https://github.com/Prog-Avanzada-4to/backend-concesionaria",
      demo: "",
    },
    {
      title: "✅ LeetCode Solutions",
      image: "https://live.staticflickr.com/65535/52636750537_65e2887c68_b.jpg",
      github: "https://github.com/LeooZeballos/leetcode-js",
      demo: "",
    },
    {
      title: "📚 Blog API Rest",
      image: "https://live.staticflickr.com/65535/52637520329_3d2388f776_b.jpg",
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
