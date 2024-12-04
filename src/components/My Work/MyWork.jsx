import React from 'react'
import "./mywork.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_Data from "../../assets/mywork_data.js"
import arrow from "../../assets/arrow_icon.svg"

export const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="theme" />
        </div>
        <div className="mywork-container">
            {mywork_Data.map((work, index)=>{
                return <a key={index} href={work.link} target='blank'>
                    <img  src= {work.w_img} alt = {work.w_name}/>
                </a>
            })}
        </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow} alt="arrow"  className='arrow'/>
            </div>
    </div>
  )
}
