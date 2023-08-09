import React from 'react';

const Styles = {
  Navheader: {
  top:'4%',
  left: '20%',
  height: '10%',
  width: '20%',
  position: 'absolute',
  },

  NavList: {
   display: 'flex',
   padding: '10px',
   gap: '48px',
   justifyContent: 'center',
   alignItems:'center'
  },

  NavButtons: {
    color: '#FFFDF3',
    fontFamily: 'Lexend Exa',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  }
}
export default function NavTabs({ currentPage, handlePageChange }) {
  return (

  <div style = {Styles.Navheader}>
    <ul style={Styles.NavList} className="nav nav-tabs">
      <li style={Styles.NavButtons} className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li style={Styles.NavButtons} className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li style={Styles.NavButtons} className="nav-item">
        <a
          href="#projectpage"
          onClick={() => handlePageChange('ProjectPage')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li style={Styles.NavButtons} className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
</div>
  );
}


