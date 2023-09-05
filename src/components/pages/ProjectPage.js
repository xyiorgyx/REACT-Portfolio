import React from 'react';
import '../styles/styleProjectPage.css';
import githubImg from '../images/github-svgrepo-com (1) 1 (2).svg';
import ProjectInfo from '../pages/projectData.js';
import DailyPlanner from '../images/projectImages/daily planner.png'
import PasswordGen from '../images/projectImages/passGen.png'
import EmployeeTrack from '../images/projectImages/employee-Track.png'
import NoteTaker from '../images/projectImages/Note-Taker.png'
import ReadMeGen from '../images/projectImages/readMeGen.png'
import CodingTest from '../images/projectImages/Test.png'
import TextEditor from '../images/projectImages/Jate webpage.png'

const projects = [PasswordGen, EmployeeTrack, DailyPlanner, NoteTaker, ReadMeGen, CodingTest, TextEditor]

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
            <a href={project.githubLink}>
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



