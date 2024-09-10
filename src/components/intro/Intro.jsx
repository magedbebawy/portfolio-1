import React from 'react';
import { FaAward } from 'react-icons/fa';
import ME from '../../assets/myimg.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 years</small>
            </article>
          </div>
          <p>As a software engineer with 4 years of experience in JavaScript, Node.js, React.js, Vue.js, PostgreSQL, and AWS, my objective is to continue to develop my skills and expertise in these technologies while working on challenging and impactful projects. I am passionate about building scalable and maintainable web applications that provide a great user experience. </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro