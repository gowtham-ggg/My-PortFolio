import React, { useState } from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import location from "../../assets/location_icon.svg";
import callIcon from "../../assets/call_icon.svg";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", "cd0f6fcd-4f8b-4ecf-910e-c5f9b19df794");

    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        console.log("Form submitted successfully:", data);
        alert("Thank you! Your message has been sent.");
        event.target.reset(); 
      } else {
        console.error("Error submitting form:", data.message);
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently open to new opportunities—feel free to reach out, and
            let's create something amazing together!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="mail" />
              <p>gowtham.mca.g@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="call" />
              <p>(+91) 70946 85268</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="location" />
              <p>Bengaluru, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name"
            name="name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <label htmlFor="message">Write Your Message Here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button
            type="submit"
            className="contact-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
