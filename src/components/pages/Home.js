import React, { useState } from 'react';
import Selfie from '../images/me.png'
import Earth from '../images/Vector.png'
import CodePic from '../images/coding_picture.png'
import fourthDimension from '../images/interstellar_picture.png'
import '../styles/styleHome.css'


export default function Home() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <div >
      <div className='top-container'>
        <div className='name-and-webdev-box'>
          <div className='web-developer-container'>
            <h2 className='web-developer'>web developer</h2>
          </div>
          <div className='name-container'>

            <h1 className='name'>
              Yiorgos<br></br>Bosnakis
            </h1>

          </div>
        </div>
        <div className='selfie-container'>
          <img className='selfie'
            src={Selfie}
          />
        </div>
      </div>
      <div className='welcome-container'>
        <h2 className='welcome'>
          Welcome to my portfolio website! I'm really thrilled to have you here.
        </h2>
      </div>
      {screenWidth >= 500 ? (
        <div className='about'>

          <div className='earth-box'>
            <img className='earth'
              src={Earth} />
          </div>
          <div className='coding-about-container'>
            <div className='introduction-container'>
              <p className='introduction' >I am a passionate web developer based in the beautiful city of Charlotte, North Carolina. With a strong background in coding and a keen eye for design, I specialize in creating stunning and functional websites that leave a lasting impression.</p>
            </div>
            <img className='coding-pic'
              src={CodePic}
            />
          </div>
        </div>) :
        <div className='about'>

          <div className='earth-box'>
            <img className='earth'
              src={Earth} />
            <p className='introduction' >I am a passionate web developer based in the beautiful city of Charlotte, North Carolina. With a strong background in coding and a keen eye for design, I specialize in creating stunning and functional websites that leave a lasting impression.</p>
          </div>
          <img className='coding-pic'
            src={CodePic}
          />
        </div>
      }
      <div className='bottom-container'  >
        <img
          className='fourth-demension'
          src={fourthDimension} />
        <div className='my-work-container'>
          <p className='my-work' >

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
