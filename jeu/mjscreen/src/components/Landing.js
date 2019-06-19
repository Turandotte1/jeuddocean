import React from 'react';

import '../styles/Landing.css';
import logo from '../images/logo1.svg';


const Landing = () => {
  return (
      <div className="Landing">
        <img src={logo} className="App-logo" alt="logo" />
        <li className="Start-link">
            <a href="/start"> DEMARRER</a>
        </li>
    </div>
  );
};

export default Landing;
