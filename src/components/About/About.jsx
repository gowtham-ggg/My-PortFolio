import React from 'react'
import "./about.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile from "../../assets/gg1.jpg"
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile} alt="profile"  className='profile-img'/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an enthusiastic and detail-oriented MCA graduate with a passion for front-end and full-stack web development. With a solid foundation in HTML, CSS, and JavaScript, I specialize in building dynamic and responsive user interfaces using React.js.</p>
                <p>Currently honing my expertise in modern web technologies, I am eager to apply my skills to real-world projects that prioritize performance, usability, and innovation. My focus is on delivering clean, efficient code and creating seamless user experiences.</p>
                <p>I am excited to contribute to impactful projects and grow as a developer through collaboration and continuous learning.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"65%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>6+</h1>
            <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About
