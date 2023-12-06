import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about container">
      <div className="about__content">
        <h2>About Me</h2>
        <p>Hello! I'm Nagajyothi, a recent graduate and aspiring frontend developer with a passion for creating innovative and user-friendly web experiences.</p>
        
        <h3>Education</h3>
        <div className="education-item">
          <h4>BTech (Computer Science)</h4>
          <p>Rajiv Gandhi University of Knowledge Technologies, Nuzvid</p>
          <p>07/2019 – 05/2023</p>
          <p>Grade: 8.9</p>
        </div>

        <div className="education-item">
          <h4>PUC (Pre-University Course)</h4>
          <p>Rajiv Gandhi University of Knowledge Technologies, Nuzvid</p>
          <p>06/2017 - 05/2019</p>
          <p>Grade: 8.2</p>
        </div>

        <div className="education-item">
          <h4>Secondary Education</h4>
          <p>ZP High school, R. Yenugupalli</p>
          <p>06/2012 - 03/2017</p>
          <p>Grade: 10</p>
        </div>

        <h3>Interests</h3>
        <ul>
          <li>Web Development</li>
          <li>Blockchain Development</li>
          <li>Software Development</li>
          <li>Natural Language Processing</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
