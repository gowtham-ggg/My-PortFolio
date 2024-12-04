import React, { useState } from 'react'
import "./navbar.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import underLine from "../../assets/nav_underline.svg"

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="navbar">
      <div className="name">
      <h1>GOWTHAM G</h1>
      </div>
      <img src={theme_pattern} alt="theme" className='theme'/>
      <ul className="nav-menu">
        <li><p onClick={()=>setMenu("home")}>Home</p>{menu === "home" ? <img src={underLine} alt="" className='underline'/> :<></>}</li>
        <li><p onClick={()=>setMenu("about")}>About Me</p>{menu === "about" ? <img src={underLine} alt=""  className='underline' /> :<></>}</li>
        <li><p onClick={()=>setMenu("services")}>Services</p>{menu === "services" ? <img src={underLine} alt=""  className='underline'/> :<></>}</li>
        <li><p onClick={()=>setMenu("work")}>Portfolio</p>{menu === "work" ? <img src={underLine} alt=""  className='underline'/> :<></>}</li>
        <li><p onClick={()=>setMenu("contact")}>Contact</p>{menu === "contact" ? <img src={underLine} alt=""  className='underline'/> :<></>}</li>
      </ul>
      <div className="nav-connect">
        Connect With Me
      </div>
    </nav>
  )
}

export default Navbar
