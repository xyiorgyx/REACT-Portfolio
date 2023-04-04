import React from "react";
import Projectcards from "./components/projectpage"
import Navigations from "./components/nav.js"
import Footer from './components/footer'

export default function App() {
    return ( 
     <div className = 'dark:bg-gray-700 min-h-screen'>
      <Navigations/>
      <Projectcards/>  
      <Footer/>    
      </div>
    );
  }