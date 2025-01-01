import React from 'react';
import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile from '../../assets/gg1.jpg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="profile" className="profile-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an enthusiastic and detail-oriented MCA graduate with a passion for front-end and full-stack web development. With a solid foundation in HTML, CSS, and JavaScript, I specialize in building dynamic and responsive user interfaces using React.js.
            </p>
            <p>
              Currently honing my expertise in modern web technologies, I am eager to apply my skills to real-world projects that prioritize performance, usability, and innovation. My focus is on delivering clean, efficient code and creating seamless user experiences.
            </p>
            <p>
              I am excited to contribute to impactful projects and grow as a developer through collaboration and continuous learning.
            </p>
          </div>
          <div className="about-skills">
            <h2>Skills</h2>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="about-skill"><p>HTML</p><hr style={{ width: '90%' }} /></div>
              <div className="about-skill"><p>CSS3/ Tailwind</p><hr style={{ width: '75%' }} /></div>
              <div className="about-skill"><p>JavaScript</p><hr style={{ width: '70%' }} /></div>
              <div className="about-skill"><p>React JS</p><hr style={{ width: '65%' }} /></div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="about-skill"><p>Node.js</p><hr style={{ width: '50%' }} /></div>
              <div className="about-skill"><p>Express.js</p><hr style={{ width: '55%' }} /></div>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <div className="about-skill"><p>MongoDB</p><hr style={{ width: '50%' }} /></div>
            </div>
            <div className="skill-category">
              <h3>Version Control</h3>
              <div className="about-skill"><p>Git</p><hr style={{ width: '85%' }} /></div>
              <div className="about-skill"><p>GitHub</p><hr style={{ width: '80%' }} /></div>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <div className="about-skill"><p>Postman</p><hr style={{ width: '70%' }} /></div>
              <div className="about-skill"><p>VS Code</p><hr style={{ width: '95%' }} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>6+</h1>
          <p>MONTHS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
