import React from 'react'
import "./services.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import service_Data from "../../assets/services_data"
import arrow_icon from "../../assets/arrow_icon.svg"
const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt=""theme />
        </div>
        <div className="services-container">
            {service_Data.map((service, index)=>{
                return <div key={index}  className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="arrow" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services
