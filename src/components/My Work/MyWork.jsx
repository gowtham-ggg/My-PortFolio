import React, { useState } from 'react';
import "./mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_Data from "../../assets/mywork_data.js";
import arrow from "../../assets/arrow_icon.svg";

export const MyWork = () => {
  const [showMore, setShowMore] = useState(false); 

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="mywork-container">
        {mywork_Data.slice(0, showMore ? mywork_Data.length : 6).map((work, index) => (
          <div key={index} className="project-card">
            <a href={work.link} target='_blank' rel="noopener noreferrer">
              <img src={work.w_img} alt={work.w_name} />
            </a>
            <div>{work.w_name}</div>
            <div className="project-info">
              <div className="project-links">
                <a href={work.githubLink} target='_blank' rel="noopener noreferrer">GitHub</a>
                <a href={work.link} target='_blank' rel="noopener noreferrer">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-showmore" onClick={toggleShowMore}>
        <p>{showMore ? 'Show Less' : 'Show More'}</p>
        <img src={arrow} alt="arrow" className='arrow' />
      </div>
    </div>
  );
};
