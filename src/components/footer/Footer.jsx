import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>Nagajyothi</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.instagram.com/nagajyothi029/' target='_blank'rel="noopener noreferrer"><FiInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer