import React from 'react';
import IMG1 from '../../assets/todo.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/todo.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'To-Do-App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | Webpack',
      link: 'https://mb-todo.herokuapp.com/',
      github: 'https://github.com/magedbebawy/ToDoList',
    },
    {
      id: 2,
      title: 'FakeStore',
      img: IMG3,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React | Redux',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/magedbebawy/ToDoList',
    },
    {
      id: 3,
      title: 'Bookstore',
      img: IMG1,
      description:
        'BookStore app that allows users to store books and update progress',
      technologies: 'React | Redux | Ruby on Rails',
      link: 'https://melodic-boba-111583.netlify.app/',
      github: 'https://github.com/magedbebawy/ToDoList',
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
