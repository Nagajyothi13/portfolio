import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './header.css';
import CTA from './CTA';
import Me from '../../assets/profile2.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed('.text', {
      strings: ["Frontend Developer", "Blockchain Developer", "Java Developer", "Programmer", "Software Developer", "NLP Engineer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 900,
      loop: true
    });

    // Ensure the Typed instance is destroyed when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header>
      <section id="home" className="container header__container home">
        <h5 className='slide-bottom'>Hello, It's Me</h5>
        <h1 style={{color:'cyan', textShadow: '1px 1px 2px black'}} className='slide-right'>Nagajyothi</h1>
        <h5>And I'm a</h5>
        <h3 className="text-light">
          <span className="text"></span>
        </h3>
        <CTA />
        <HeaderSocials />
        <div className="box slide-bottom">
          <div className="content">
            <img src={Me} alt="" />
            <h2>Nagajyothi <br/><span>Developer</span></h2>
          </div>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </section>
    </header>
  );
};

export default Header;