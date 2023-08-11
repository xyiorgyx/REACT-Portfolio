import React from 'react';
import NavTabs from '../../NavTabs';
import Selfie from '../images/me.png'
import { Styles } from '../styles/styleHome'
import Earth from '../images/Vector.png'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names


export default function Home() {
  return (
    <div
      className='background'
      style={Styles.background}>

      <NavTabs>
      </NavTabs>

      <div className='Main' style={Styles.Main}>
        <div className='cornerLight'
          style={Styles.brightCornerLight}>
        </div>

        <div className='topLight'
          style={Styles.brightTopLight}>
        </div>

        <img className='selfie'
          src={Selfie}
          style={Styles.selfiePicture} />

        <h1 className='name'
          style={Styles.Name}>
          Yiorgos<br></br>Bosnakis
        </h1>


      </div>
      <h2
        style={Styles.Welcome}>
        Welcome to my portfolio website! I'm really thrilled to have you here.
      </h2>
      <div className='about' s
        tyle={Styles.About}>
        <div className='Earth-box' style={Styles.EarthBox}>
          <img className='Earth'
            src={Earth}
            style={Styles.EarthPhoto} />
        </div>
      </div>
    </div>

  );
}

