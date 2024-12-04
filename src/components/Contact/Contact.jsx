import React from 'react'
import "./contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mailIcon from "../../assets/mail_icon.svg"
import location from "../../assets/location_icon.svg"
import callIcon from "../../assets/call_icon.svg"
const Contact = () => {
  return (
<div className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently open to new opportunities—feel free to reach out, and let's create something amazing together!</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mailIcon} alt="mail" /><p>gowtham.mca.g@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={callIcon} alt="call" /><p>(+91) 70946 85268</p>
                </div>
                <div className="contact-detail">
                    <img src={location} alt="location" /><p>Bengaluru,India</p>
                </div>
            </div>
        </div>
        <form  className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name = "name" />
            <label htmlFor="mail">Your Email</label>
            <input type="email" placeholder='Enter your email' name="email"/>
            <label htmlFor="message">Write Your Message Here</label>
            <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
    </div>
</div>
  )
}

export default Contact
