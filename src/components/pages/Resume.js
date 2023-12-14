import React from 'react';
import '../styles/resumeStyles.css'
import spaceShip from '../images/photo_space.png'
import stellar from '../images/stellar.png'

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
        </div>'

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
              Protections Officer | Charlotte, NC <br></br>MAY, 2017 – PRESENT <br></br><br></br>• Establish a strong presence and maintain order withing the premises <br></br>•Search and authorize the entry of vehicles and personnel <br></br>• Investigate suspicious behaviors and persons on the property <br></br>• Provide assistance and quality service to site employees and visitors
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
      <section className='skills'>
        <header >
          <h2 >
            Skills
          </h2>
        </header>
        <ul>
          <li>•Javascript</li><li>•MySQL</li><li>•HMTL & CSS</li><li>•Express.Js</li><li>•Bootstrap & Tailwind</li><li>•Python</li><li>•MongoDB</li><li>•Node.js</li><li>•REACT</li>
        </ul>
      </section>
      <section>
        <header >
          <h2 >
            Education
          </h2>
        </header>
        <div className='education'>
          <img src={stellar} />
          <div className='education-des'>
            
            <div className='education-subdiv'>
              <h3>Certification in Full STack web development</h3>
            <p>UNC Charlotte – Charlotte, NC <br></br>
              2022 - 2023
            </p>
            </div>
            <div className='education-subdiv'>
            <h3>Bachelor in homeland security
</h3>
            <p>UNC Charlotte – Charlotte, NC <br></br>
              2022 - 2023
            </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}