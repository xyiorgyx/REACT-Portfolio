import React from 'react';
import github from './components/images/github-svgrepo-com (1) 1 (2).svg'
import {Styles} from './components/styles'
export default function Footer({ currentPage, handlePageChange }) {
    return(

        <footer style={Styles.Footer}>
            <ul style={Styles.NavList} className="nav nav-tabs">
                <li style={Styles.NavButtons}
                    className="navItem">
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
                <li style={Styles.NavButtons} className="navItem">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li style={Styles.NavButtons} className="navItem">
                    <a
                        href="#projectpage"
                        onClick={() => handlePageChange('ProjectPage')}
                        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
                    >
                        Blog
                    </a>
                </li>
                <li style={Styles.NavButtons} className="navItem">
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
            <div>
                <img className='Githun-Icon' src={github}></img>
            </div>
        </footer>
);
}

