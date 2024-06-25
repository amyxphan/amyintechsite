import React, { useState, useEffect } from 'react';
import './About.css'; 

//importing photos
import about1 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/about1.jpg';

// typewwriter effect for intro
const Typewriter = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [displayedText, index, text, speed]);

  return <span>{displayedText}</span>;
};

function About() {
  return (
    <div className="About">
      <header className="About-header">
        <p className="About-title">
          $ <Typewriter text="print(About Me)" />
        </p>

      <div className="About-intro-container">

        <img src={about1} className="About-photo" alt="" />

        <div className="About-intro-des">
          <h1 className="About-subtitle">
            Get to know me!
          </h1>

          <ul className="About-intro">
            <li> 🎓 &nbsp;&nbsp;Recent Grad from UNT </li>
            <li> 💻 &nbsp;&nbsp;B.S. Computer Engineering </li>
            <li> 👩‍💻 &nbsp;&nbsp;Incoming SWE at JPMorgan Chase & Co. </li>
            <li> 🧪 &nbsp;&nbsp;Founder of Society of Asian Scientists and Engineers at UNT (SASE UNT) </li>
          </ul>
        </div>
      </div>

      <div className="About-spacer"></div>

      <div className="About-story-container">
        <h1 className="About-subtitle">
          My Story
        </h1>

        <p className="About-intro">
          Hello! My name is Amy Phan and I'm a recent grad from the University of North Texas 
          with a Bachelor's degree in Computer Engineering. My interest in engineering began 
          as a little girl. Rather than playing dress up with dolls, I loved to break and 
          unscrew toy cars to learn how to put everything back together. As I grew older I 
          implemented these habits into my day-to-day life. As I advanced through my studies, I 
          discovered a deeper passion for software engineering, dedicating my time to 
          self-teaching and hands-on projects. I'll be returning to JPMorgan Chase & Co. as a 
          full-time software engineer this August. I am passionate about accessibility, and hope 
          to create innovative solutions that bridge gaps and drive positive change in the tech 
          industry.
        </p>
      </div>

      <div className="About-awards-container">
        <h1 className="About-subtitle">
          Highlights + Leadership
        </h1>

        <p className="About-intro">
        Descriptions
        </p>
      </div>
      </header>
    </div>
  );
}

export default About;