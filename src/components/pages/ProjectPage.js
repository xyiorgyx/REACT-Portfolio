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
        <h1 className='mainHeader'>Projects</h1>
      </div >

      <div className='project-container'>

        {ProjectInfo.map((project) => (
        
            <div className='project-div' key={project.id} /*style={{
            backgroundImage: `URL(${projects[project.id]})
          }}*/>  
          <a>
              <img className='project-image' src={projects[project.id]}></img>
              {/* <div className='header-background'>

              <h2 className='project-name'>{project.name}</h2>
              <a >
                <img src={githubImg} />
              </a>
            </div>
            <p>{`${project.description}`}</p> */}
            </a>
            </div>
          



        ))}
      </div>
    </div>

  );
}



