import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience container">
      <h2 className="experience__heading">Experience</h2>
      <div className="experience__card">
        <h3>LinkedIn AI Invitation Assistant</h3>
        <p className="experience__details">Freelance[08/2023 – 09/2023]</p>
        <h4 className="experience__details">Achievements/Tasks:</h4>
        <ul>
          <li>Designed and developed a browser extension to simplify and personalize LinkedIn interactions.</li>
          <li>Enhanced networking and outreach efforts with an intuitive user interface.</li>
          <li>Integrated seamlessly with LinkedIn profiles for generating personalized invitation and thank-you notes.</li>
        </ul>
        <h4 className="experience__details">Skills used: </h4>
        <p>HTML, CSS, JavaScript, Chrome Extension API, Mutation Observers</p>
      </div>
    </section>
  );
};

export default Experience;
