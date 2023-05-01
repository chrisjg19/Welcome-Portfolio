import React from "react";
import Proj001 from '../imgs/MasterMax5000.gif'


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Quiz Master Max",
      image: Proj001,
      description: "A quiz app that allows users to take quizzes on a variety of programming topics.",
      link: 'https://quizmax.herokuapp.com/login',
      github: 'https://github.com/chrisjg19/QuizMasterMax5000'
    },
    {
        id: 2,
        title: "Quiz Master Max",
        image: Proj001,
        description: "A quiz app that allows users to take quizzes on a variety of programming topics.",
        link: 'https://quizmax.herokuapp.com/login',
        github: 'https://github.com/chrisjg19/QuizMasterMax5000'
      },
   
  ];

  return (
    <div className="project-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
          <a href={project.link}>Visit Website</a>
          <a href={project.github}>View Code on GitHub</a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
