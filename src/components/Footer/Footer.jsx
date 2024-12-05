import React from 'react'
import "./footer.css"
import footerIcon from "../../assets/footer.png"
import UserIcon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div id="footer" className='footer'>
      <div className="footer-top">
    <div className="footer-top-left">
        <img src={footerIcon} alt="footer" />
        <p>Certified MERN Full Stack Developer | Hands-on Experience in Building Scalable Web Applications</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={UserIcon} alt="icon" />
                <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className="subscribe-button">
                Subscribe
            </div>
        </div>
    </div>
    <hr/>
    <div className="footer-bottom">
        <p className="footer-bottom-left">
            &copy; 2024 Gowtham G. All rights reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me...</p>
            <a href="https://github.com/gowtham-ggg" target='blank'><i class="fa-brands fa-github"></i></a>
            <a href='https://www.linkedin.com/in/gowtham-g-a8a945220/' target='blank'><i class="fa-brands fa-linkedin"></i></a>
        </div>
    </div>
    </div>
  )
}

export default Footer
