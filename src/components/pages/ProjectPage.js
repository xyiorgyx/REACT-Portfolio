import React from 'react';
import { Styles } from '../styles/styleProjectPage.js';
import ProjectInfo from '../pages/projects.js';

export default function ProjectPage() {

    return (
        <div className='Main-contrainer' style={Styles.Main}> 
        <h1 style={Styles.mainHeader}>Projects</h1>
          {ProjectInfo.map((project) => (
            <div key={project.id} style={Styles.Projectdiv}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <img className="Github-link" style={Styles.githubImage} src={project.github}></img>
              {project.liveLink && <img href={project.liveLink} />
              
              }
            </div>
          ))}
        </div>
      );
    }



