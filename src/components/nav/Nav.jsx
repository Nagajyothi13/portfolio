import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import Skill from '../../assets/skill.png';
import {useState} from 'react';

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#home')
  return (
    <nav>
      <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav==='#home'?'active':''} title="Home"><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}title='About'><AiOutlineUser /></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''} title='Experience'><BiBook /></a>
      <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills'?'active':''} title='Skills'><img src={Skill} alt=" "/></a>
      <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav==='#projects'?'active':''} title='Projects'><FaTasks /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''} title='Contact'><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav