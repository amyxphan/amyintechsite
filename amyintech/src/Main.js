import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './App.css';

import pfp from '/Users/amyphan/Desktop/PersonalSite/amyintechsite/amyintech/src/img/pfp.jpg';
//imoprt social icons
import GitHub from '/Users/amyphan/Desktop/PersonalSite/amyintechsite/amyintech/src/img/GitHub.png';
import LinkedIn from '/Users/amyphan/Desktop/PersonalSite/amyintechsite/amyintech/src/img/LinkedIn.png';
import Resume from '/Users/amyphan/Desktop/PersonalSite/amyintechsite/amyintech/src/img/Resume.png';

const Main = () => {
  return (
    <body className='App'>
        <div className='main-intro'>
            <b style={{ color: '#2b922b' }}> $ </b>
            <span style={{ color: 'rgb(71, 226, 250)' }}> print </span>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " (Hello World! I'm Amy Phan.)",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    " (Computer engineering student.)",
                    1000,
                    " (Aspiring Software Engineer.)",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '40px', display: 'inline-block' }}
                repeat={Infinity}
                />
        </div>
        <div>
            <img src={pfp} alt="Amy" className="main-profile-pic"/>
        </div>
        <div className='main-social-links'>
                <a href="https://www.github.com/amyxphan" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub Icon" className="main-social-icon" />
            </a>

            <a href="https://www.linkedin.com/in/amyphan2" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn Icon" className="main-social-icon" /> 
            </a>

            <a href="/Users/amyphan/Desktop/PersonalSite/amyintechsite/amyintech/src/AmyPhanResumeNovember2023.pdf" target="_blank" rel="noopener noreferrer">
                <img src={Resume} alt="Resume Icon" className="main-social-icon" />
            </a>
        </div>
    </body>
  );
};

export default Main;