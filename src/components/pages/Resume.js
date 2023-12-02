import React from 'react';
import '../styles/resumeStyles.css'
import spaceShip from '../images/photo_space.png'


export default function Resume() {
  return (
    <main>
      <header>
        <h1 className='main-header'>Resume</h1>
      </header>
      <section className='Main-Intro'>
        <div className='Intro-box'>
          <p>
          Dedicated and accomplished Security Officer with a steadfast dedication to maintaining security and promoting public safety. Proficient in executing diverse security responsibilities, including patrolling assigned areas and conducting meticulous investigations. Proven proficiency in conflict resolution and deescalation strategies, actively fostering positive connections with the community. Boasts a history of outstanding service, acknowledged for unwavering professionalism, integrity, and effective leadership. Eager to apply my skills and background to contribute significantly to the ongoing mission of safeguarding and serving the community.
          </p>
        </div>
        <img className='space-ship' src={spaceShip} />
      </section>
      <header >
        <h2>
          Experience
        </h2>
      </header>
      <section className='work-experience'>
        <div className='security-work'>
          <header>
            <h3>
              Security Profesional
            </h3>
          </header>
          <div className='work-description'>
            <p>
              Protections Officer | Charlotte, NC <br></br>MAY, 2017 – PRESENT <br></br><br></br>• Ensuring the safety and security of the community by actively patrolling assigned areas <br></br>• Enforcing local, state, and federal laws by conducting thorough investigations, apprehending suspects <br></br>• Skillfully handling challenging situations with tact and diplomacy, <br></br>• Accurately documenting incidents, investigations, and interactions in detailed reports
            </p>
          </div>
        </div>
        <div className='security-work'>
          <header>
            <h3>
            CPR and First Aid Instructor
            </h3>
          </header>
          <div className='work-description'>
            <p>
            AUS | Charlotte, NC <br></br>JULY, 2022 – PRESENT<br></br> <br></br> • Train students of different ages to provide CPR, AED, and First Aid • Demonstrate life-saving skills using proper technique on mannequins <br></br>• Give valuable feed-back to students to improve performance <br></br>• Explain the importance of following guidelines for administering first aid <br></br>• Re-enforce class material using critical thinking exercises 
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}