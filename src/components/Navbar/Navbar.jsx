import React from 'react'
import "./navbar.css"
import theme_pattern from "../../assets/theme_pattern.svg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="name">
      <h1>GOWTHAM G</h1>
      </div>
      <img src={theme_pattern} alt="theme" className='theme'/>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">
        Connect With Me
      </div>
    </nav>
  )
}

export default Navbar
