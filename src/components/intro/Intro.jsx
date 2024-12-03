import React from 'react'
import "./intro.css"
import bg from "../../assets/image.png";
import {Link} from "react-scroll";
import btnImg from "../../assets/hireme.png"
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="name">Gowtham G</span><br/>Web Developer</span>
            <p className="intro">Aspiring MERN Stack Developer | MCA Graduate<br/> | Passionate About Web Development</p>
            <Link><button className='btn'><img src={btnImg} alt="btn"  className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="bg" className='bg' />
    </section>
  )
}

export default Intro
