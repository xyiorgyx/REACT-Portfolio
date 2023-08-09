import React from 'react';
import BackgroundImage from '../images/background.png'
import NavTabs from '../../NavTabs';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

const Styles = {
  background: {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'contain',
  height: '100vh',
  width: '100vw',
  position: 'fixed'
  }
};


export default function Home() {
  return (
    <div style={Styles.background}>
      <NavTabs></NavTabs>
    </div>

  );
}

