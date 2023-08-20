import React from 'react';
import { Styles } from '../styles/styleProjectPage.js';
import ProjectInfo from '../pages/projectData.js';
import githubImg from '../images/github-svgrepo-com (1) 1 (2).svg';
import interstellar from '../images/interstellar_picture.png'
export default function ProjectPage() {

  return (
    
    <div className='Main-container' style={Styles.Main}>
      <div className='Header-container' style={Styles.headerContainer}>
      <h1 style={Styles.mainHeader}>Projects</h1>
      </div>
      {ProjectInfo.map((project) => (
        <div key={project.id} style={{
        position: 'relative',
        flexShrink: 0,
        height: '100px',
        width: '100px',
        boxShadow: '0 4px 4px 0px',
        margin: '1%',
        backgroundColor: 'green',
        }}>
          <div className='header-background' style={Styles.headerBack}>
          <h2 className='project-name' style={Styles.name}>{project.name}</h2>
          <img src={githubImg}/>
        </div>
          <p>{`${project.description}`}</p>
        </div>
      ))}
    </div>
    
  );
}



