import React from 'react';
import BackgroundImage from '../images/background.png'
import NavTabs from '../../NavTabs';
import Selfie from '../images/me.png'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

const Styles = {
  background: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'contain',
    height: '100vh',
    width: '100vw',
    position: 'fixed'
  },
  brightCornerLight: {
    width: '404px',
    height: '387px',
    flexShrink: '0',
    borderRadius: '404px',
    background: '#5665EF',
    filter: 'blur(100px)',
    position: 'absolute',
    left: '-7%',
    top: '-8%'
  },
  brightTopLight: {
    width: '448px',
    height: '425px',
    top:'-33%',
    right:'30%',
    flexShrink: '0',
    borderRadius: '448px',
    background: 'var(--white, #FFFDF3)',
    filter: 'blur(100px)',
    position: 'absolute'
  },
  selfiePicture: {
    position: 'relative',
    left: '57%',
    width: '696px',
    height: '905px',
    flexShrink: '0',
  },
  Name: {
    /* Desktop/H1 */
    fontFamily: 'MuseoModerno',
    fontSize: '120px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '125%',
    display: 'relative',
    width: '100%',
    color: 'var(--white, #FFFDF3)',
  },
  Welcome: {
    display: 'flex',
  width: '1920px',
  padding: '30px 10px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  },
};


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

      <div className='cornerLight'
        style={Styles.brightTopLight}>
      </div>

      <img className='selfie'
        src={Selfie}
        style={Styles.selfiePicture} />

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

