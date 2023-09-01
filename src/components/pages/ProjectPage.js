import React from 'react';
import '../styles/styleProjectPage.css';
import ProjectInfo from '../pages/projectData.js';
import githubImg from '../images/github-svgrepo-com (1) 1 (2).svg';
import PasswordGen from '../images/projectImages/passGen.png'
import EmployeeTrack from '../images/projectImages/employee-Track.png'

const projects = [PasswordGen, EmployeeTrack]

export default function ProjectPage() {

  return (

    <div className='Main-container' >

      
      <div className='Header-container' >
<h1>Projects</h1>

      </div >
     
      {ProjectInfo.map((project) => (
        <div key={project.id} style={{
          position: 'relative',
          flexShrink: 0,
          height: '100px',
          width: '100px',
          boxShadow: '0 4px 4px 0px',
          margin: '1%',
          backgroundImage: `URL(${projects[project.id]})`
        }}>
          <div className='header-background'>
            <h2 className='project-name'>{project.name}</h2>
            <img src={githubImg} />
          </div>
          <p>{`${project.description}`}</p>
          </div>
        
        
      ))}
    </div>

  );
}



