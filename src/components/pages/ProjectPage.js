// ProjectPage.js

import React, { useState } from 'react';
import '../styles/styleProjectPage.css';
import ProjectInfo from '../pages/projectData.js';
import DailyPlanner from '../images/projectImages/daily planner.png';
import PasswordGen from '../images/projectImages/passGen.png';
import EmployeeTrack from '../images/projectImages/employee-Track.png';
import NoteTaker from '../images/projectImages/Note-Taker.png';
import ReadMeGen from '../images/projectImages/readMeGen.png';
import CodingTest from '../images/projectImages/Test.png';
import TextEditor from '../images/projectImages/Jate webpage.png';

// Language Images//

import Javascript from '../images/languages/Javascript.png'
import HTML5 from '../images/languages/html5.png'
import MySql from '../images/languages/mysql.png'
import react from '../images/languages/react.png'
import Css from '../images/languages/css.png'
import Mongo from '../images/languages/free-mongodb-5-1175140.png'
import WebPack from '../images/languages/free-webpack-1-1174980.png'

const projects = [PasswordGen, EmployeeTrack, DailyPlanner, NoteTaker, ReadMeGen, CodingTest, TextEditor];
const images = [Javascript, HTML5, MySql, react, Css, Mongo, WebPack]

export default function ProjectPage() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseOver = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseOut = () => {
    setHoveredProject(null);
  };

  return (
    <div className='Main-container'>
      <div className='Header-container'>
        <h1 className='mainHeader'>Projects</h1>
      </div>

      <div className='project-container'>
        {ProjectInfo.map((project) => (
          <div
            key={project.id}
            className='project-div'
            onMouseEnter={() => handleMouseOver(project.id)} // Mouseover event targets individual div
            onMouseLeave={handleMouseOut}
          >
            <a href={project.githubLink} className='project-link'>
              <div className='project-image-container'>
                <img alt={project.alt} className={`project-image ${hoveredProject === project.id ? 'blurred' : ''}`} src={projects[project.id]} />
              </div>
              {hoveredProject === project.id && (
                <div className='project-info'>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                
                 <p>Languages:</p>
                 <ul className='languages'>
                 {project.languages.map((index) => (
              <li  key={index}>
                <img  src={images[index]} alt={`Image ${index + 1}`} />
              </li>
            ))}
</ul>
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}





