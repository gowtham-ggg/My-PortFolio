import React from 'react';
import "./hero.css";
import profile_img from "../../assets/gg1.jpg";
import resume from "../../assets/gg.pdf"; 
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile" className="profile" />
      <h1>
        <span>I'M Gowtham G,</span> a Passionate Web Developer
      </h1>
      <p>I build modern, user-friendly websites to bring ideas to life.</p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume} download="Gowtham_Resume.pdf" className="resume-link">
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
