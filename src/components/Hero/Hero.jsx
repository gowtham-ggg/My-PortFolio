import React from 'react'
import "./hero.css"
import profile_img from "../../assets/gg1.jpg"
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="profile" className='profile' />
      <h1><span>I'M Gowtham G,</span> a Passionate Web Developer</h1>
      <p>I build modern, user-friendly websites to bring ideas to life.</p>

      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
