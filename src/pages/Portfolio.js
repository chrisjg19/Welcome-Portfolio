import React from "react";
import Proj001 from '../imgs/MasterMax5000.gif'
import Proj002 from '../imgs/firstporfolio.gif'
import Proj003 from '../imgs/cliteamgen.png'
import Proj004 from '../imgs/JSpasswordgen.png'
import Proj005 from '../imgs/miniMDB.png'
import Proj006 from '../imgs/notetaker.png'
import Proj007 from '../imgs/pwatexteditor.png'
import Proj008 from '../imgs/quiz.PNG'
import Proj009 from '../imgs/WorkDayScheduler.png'
import Proj010 from '../imgs/lastProject.png'

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
        title: "First Portfolio",
        image: Proj002,
        description: "My first portfolio with just html and css.",
        link: 'https://quizmax.herokuapp.com/login',
        github: 'https://github.com/chrisjg19/QuizMasterMax5000'
      },
      {
        id: 3,
        title: "Team Generator",
        image: Proj003,
        description: "With the use of the CLI create a team",
        link: 'https://quizmax.herokuapp.com/login',
        github: 'https://github.com/chrisjg19/QuizMasterMax5000'
      },
      {
        id: 4,
        title: "Password Generator",
        image: Proj004,
        description: "Generates random Password with the use of JS.",
        link: 'https://quizmax.herokuapp.com/login',
        github: 'https://github.com/chrisjg19/QuizMasterMax5000'
      },
      {
        id: 5,
        title: "miniDB",
        image: Proj005,
        description: "A simple movie database",
        link: 'https://quizmax.herokuapp.com/login',
        github: 'https://github.com/chrisjg19/QuizMasterMax5000'
      },
      {
        id: 6,
        title: "NoteTaker",
        image: Proj006,
        description: "A simple notetaker.",
        link: 'https://quizmax.herokuapp.com/login',
        github: 'https://github.com/chrisjg19/QuizMasterMax5000'
      },
      {
        id: 7,
        title: "PWA Note Taker",
        image: Proj007,
        description: "Can take notes even offline",
        link: 'https://quizmax.herokuapp.com/login',
        github: 'https://github.com/chrisjg19/QuizMasterMax5000'
      },
      {
        id: 8,
        title: "JS quiz",
        image: Proj008,
        description: "A quiz page where it will generate simple quiestion",
        link: 'https://quizmax.herokuapp.com/login',
        github: 'https://github.com/chrisjg19/QuizMasterMax5000'
      },
      {
        id: 9,
        title: "Work Day Scheduler",
        image: Proj009,
        description: "Plan out your day!!",
        link: 'https://quizmax.herokuapp.com/login',
        github: 'https://github.com/chrisjg19/QuizMasterMax5000'
      },
      {
        id: 10,
        title: "Classic Games",
        image: Proj010,
        description: "Enjoy all these retro Games!",
        link: 'https://dashboard.heroku.com/apps/proj3ct-3-empty-group1',
        github: 'https://github.com/LemonDropping/project-3'
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
