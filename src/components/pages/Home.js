import React from 'react';
import NavTabs from '../../NavTabs';
import Selfie from '../images/me.png'
import {Styles} from '../styles/styleHome'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names


export default function Home() {
  return (
    <div
      className='background'
      style={Styles.background}>

      <NavTabs>
      </NavTabs>

      <div className='cornerLight'
        style={Styles.brightCornerLight}>
      </div>

      <div className='topLight'
        style={Styles.brightTopLight}>
      </div>

      <img className='selfie'
        src={Selfie}
        style={Styles.selfiePicture}/>

      <h1 className='name'
       styles= {Styles.Name}>
      Yiorgos Bosnakis
      </h1>

      <h2 
      style={Styles.mainHeader}>
      Welcome, Im excited to have you here
      </h2>

    </div>

  );
}

