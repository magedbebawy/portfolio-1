import React from 'react';
import IMG1 from '../../assets/todo.png';
import IMG2 from '../../assets/studentportal.png';
import IMG3 from '../../assets/windshield.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'To-Do-App',
      img: IMG1,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'HTML | CSS | Javascript',
      link: 'https://mb-todo.herokuapp.com/',
      github: 'https://github.com/magedbebawy/ToDoList',
    },
    {
      id: 2,
      title: 'StudentPortal',
      img: IMG2,
      description:
        'A studentPortal backend system for adding, deleteing, updating students and their grades',
      technologies: 'Node | Mongo DB',
      link: 'https://github.com/magedbebawy/studentPortal',
      github: 'https://github.com/magedbebawy/studentPortal',
    },
    {
      id: 3,
      title: 'Windshield-Shop-App',
      img: IMG3,
      description:
        'A Full-Stack app for a windshield replacement shop',
      technologies: 'React | Node | Express | nodemailer',
      link: 'https://windshield-react.herokuapp.com/',
      github: 'https://github.com/magedbebawy',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
