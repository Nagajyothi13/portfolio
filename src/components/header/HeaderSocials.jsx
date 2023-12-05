import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/nagajyothi-b-7b28141b2"><BsLinkedin/></a>
        <a href="https://www.github.com/Nagajyothi13" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials