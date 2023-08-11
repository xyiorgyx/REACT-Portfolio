import React from 'react';
import NavTabs from '../../NavTabs';
import Selfie from '../images/me.png'
import { Styles } from '../styles/styleHome'
import Earth from '../images/Vector.png'
import CodePic from '../images/coding_picture.png'
import fourthDimension from '../images/interstellar_picture.png'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names


export default function Home() {
  return (
    <div
    
      className='Main'
      style={Styles.Main}>

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
      <div className='about'
        style={Styles.About}>

        <div className='Earth-box' style={Styles.EarthBox}>
          <img className='Earth'
            src={Earth}
            style={Styles.EarthPhoto} />
        </div>
        <div className='Aboutme&codingPicture'>
          <div className='Introduction-box' style={Styles.IntroductionBox}>
            <p className='Introduction' style={Styles.Introduction}>I am a passionate web developer based in the beautiful city of Charlotte, North Carolina. With a strong background in coding and a keen eye for design, I specialize in creating stunning and functional websites that leave a lasting impression.</p>
          </div>

          <img className='Coding-Picture'
            src={CodePic}
            style={Styles.CodingPic} />
        </div>
      </div>
      <div className='Bottom' style={Styles.Bottom} >
        <img
          className='4thDemension'
          src={fourthDimension} />
        <div style={Styles.MyWorkDiv} className='myWork'>
          <p className='My-work-paragraph' style={Styles.MyWork}>
            
          As you explore my portfolio, you will find a collection of my latest projects, each one demonstrating my commitment to delivering high-quality websites that not only look great but also provide an exceptional user experience. From responsive designs to seamless navigation, I strive to create websites that captivate and engage visitors.
    <br></br>
    <br></br>
          Collaboration is at the heart of my work. I believe in building strong relationships with my clients, understanding their vision, and translating it into a digital reality. I am always excited to take on new challenges and bring fresh ideas to the table, ensuring that each project is a true reflection of my client's brand and objectives.
          <br></br><br></br>
          Whether you are a business owner looking to establish an online presence or an individual seeking a personal website, I am here to help you bring your ideas to life. I am dedicated to providing top-notch web development services that exceed your expectations and drive results.
          <br></br><br></br>
          Thank you for visiting my portfolio website. I invite you to explore my work and get in touch with me to discuss how we can collaborate on your next project. Let's create something amazing together!
          </p>
        </div>
      </div>
    <div className='footer'>

    </div>
    </div>
  );
}
