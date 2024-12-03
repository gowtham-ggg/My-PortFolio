import React from 'react'
import "./navbar.css"
import contactImg from "../../assets/contact.png"
import {Link} from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className='logo'>GOWTHAM<span>•</span></h1>
      <div className="desktopMenu">
        <Link className="dmListItem">HOME</Link>
        <Link className="dmListItem">MY SKILLS</Link>
        <Link className="dmListItem">ABOUT</Link>
        <Link className="dmListItem">PORTFOLIO</Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src={contactImg} alt="btn" className='desktopMenuImg'/>
        Contact Me
      </button>
    </nav>
  )
}

export default Navbar
