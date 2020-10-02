import React from 'react';
import './App.css';
import {Link}from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  };



  return (
    <nav>
      <Link style={navStyle}to = '/home'>
        <h1>
           L I T H I M
           </h1>
      </Link>
            
            <ul className="nav-links">
              <Link style={navStyle}to = '/contact'>
                <li>Contact</li>
                </Link>
                <Link style={navStyle}to = '/about'>
              <li>About</li>
                </Link>
                <Link style={navStyle}to = '/projects'>
                <li>Github
                </li>
                </Link>
                
                    
                
            </ul>

    </nav>
  );
}

export default Nav;
