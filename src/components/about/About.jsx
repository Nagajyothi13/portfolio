import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about container">
      <div className="about__content">
        <h2>About Me</h2>
        
        <h3>Education</h3>
        <div className="education-item">
          <h4>BTech (Computer Science)</h4>
          <p>Rajiv Gandhi University of Knowledge Technologies, Nuzvid[2019 - 2023]</p>
        </div>

        <div className="education-item">
          <h4>PUC (Pre-University Course)</h4>
          <p>Rajiv Gandhi University of Knowledge Technologies, Nuzvid[2017 - 2019]</p>
        </div>

        <div className="education-item">
          <h4>Secondary Education</h4>
          <p>ZP High school, R. Yenugupalli[2012 - 2017]</p>
        </div>

        <h3>Interests</h3>
        <ul>
          <li>Web Development</li>
          <li>Blockchain Development</li>
          <li>Software Development</li>
          <li>Natural Language Processing</li>
        </ul>

        <h3>Location</h3>
        <ul>
          <li>Amalapuram, Konaseema, Andhra Pradesh</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
