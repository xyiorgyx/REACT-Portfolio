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

const projects = [PasswordGen, EmployeeTrack, DailyPlanner, NoteTaker, ReadMeGen, CodingTest, TextEditor];

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
            className={`project-div${hoveredProject === project.id ? '-blurred' : ''}`}
            onMouseOver={() => handleMouseOver(project.id)}
            onMouseOut={handleMouseOut}
          >
            <a href={project.githubLink}>
              <img alt={project.alt} className='project-image' src={projects[project.id]} />
              {hoveredProject === project.id && (
                <div className='project-info'>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}




