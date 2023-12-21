import React from 'react';
import './skills.css'; 
import C from '../../assets/c.png'
import CPP from '../../assets/cpp.png'
import java from '../../assets/java.png'
import python from '../../assets/python.png'
import js from '../../assets/java-script.png'
import solidity from '../../assets/solidity-icon.png'
import html from '../../assets/html-5.png'
import css from '../../assets/css-3.png'
import react from '../../assets/react.png'
import bc from '../../assets/blockchain.png'
import nlp from '../../assets/nlp.png'
import mysql from '../../assets/mysql.png'
import msofc from '../../assets/office.png'
import github from '../../assets/github.png'
import vs from '../../assets/visual-studio-code.png'


const Skills = () => {
  return (
    <section id='skills'>
      <div>
        <h3>Skills</h3>
      </div>
      <div className='skills-container'>
        <div className='skill-card'>
          <h4>Programming Languages</h4>
          <ul className='skill-list'>
            <li className='skill-item'><img src={C} alt=" "/>C</li>
            <li className='skill-item'><img src={CPP} alt=" "/>C++</li>
            <li className='skill-item'><img src={java} alt=" "/>Java</li>
            <li className='skill-item'><img src={python} alt=" "/>Python</li>
            <li className='skill-item'><img src={js} alt=" "/>JavaScript</li>
            <li className='skill-item'><img src={solidity} alt=" "/>Solidity</li>
          </ul>
        </div>

        <div className='skill-card'>
          <h4>Web Technologies</h4>
          <ul className='skill-list'>
            <li className='skill-item'><img src={html} alt=" "/>HTML</li>
            <li className='skill-item'><img src={css} alt=" "/>CSS</li>
            <li className='skill-item'><img src={js} alt=" "/>JavaScript</li>
            <li className='skill-item'><img src={react} alt=" "/>React</li>
          </ul>
        </div>

        <div className='skill-card'>
          <h4>Other Technologies</h4>
          <ul className='skill-list'>
            <li className='skill-item'><img src={bc} alt=" "/>Blockchain</li>
            <li className='skill-item'><img src={nlp} alt=" "/>NLP</li>
          </ul>
        </div>

        <div className='skill-card'>
          <h4>Databases</h4>
          <ul className='skill-list'>
            <li className='skill-item'><img src={mysql} alt=" "/>MySQL</li>
          </ul>
        </div>

        <div className='skill-card'>
          <h4>Others</h4>
          <ul className='skill-list'>
            <li className='skill-item'><img src={msofc} alt=" "/>Ms Office</li>
            <li className='skill-item'><img src={github} alt=" "/>Github</li>
            <li className='skill-item'><img src={vs} alt=" "/>VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
