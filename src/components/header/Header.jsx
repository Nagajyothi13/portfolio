import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/picture2.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <section id="home" className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nagajyothi</h1>
        <h5 className="text-light">Frontend developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </section>
    </header>
  )
}

export default Header