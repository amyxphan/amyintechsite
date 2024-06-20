//Projects.js 
import React, { useState, useEffect } from 'react';
import './Projects.css'; 

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

function Projects() {
  return (
    <div className="Projects">
      <header className="Projects-header">
        <p className="Projects-intro">
          $ <Typewriter text="print(Projects)" />
        </p>

        <p className="Projects-subtitle">
          TherapyTouch
        </p>

        <p className="Projects-usage">
          using Swift and Swift UI
        </p>

        <p className="Projects-description">
          [insert description]
        </p>

        <p className="Projects-subtitle">
          SmartParking
        </p>

        <p className="Projects-usage">
        used React Native JS, AWS Config, AWS DynamoDB, ESP32, and Ultrasonic Sensors
        </p>

        <p className="Projects-description">
          [insert description]
        </p>

        <p className="Projects-subtitle">
          Coastal Compass+
        </p>

        <p className="Projects-usage">
          used HTML, CSS, JavaScript, Figma, Node.js, Express.js, and MongoDB
        </p>

        <p className="Projects-description">
        This project was implemented at the 2022 CodeForGood hackathon hosted by 
        JPMorgan Chase and Co. in October 2022. During this hackathon, I was placed 
        randomly in a group of 6 people to help a non-profit organization expand its 
        services to urban areas. I was able to familiarize myself with the frontend 
        website and app development concepts and learn how to work and adapt with 
        others who have different skill sets compared to me. In the end, our project 
        was one of the groups that won the 2022 hackathon in Plano, TX!
        </p>

        <p className="Projects-subtitle">
          amyintech (this website!)
        </p>

        <p className="Projects-description">
          used HTML and CSS (recently migrating to React!) 
        </p>

        <p className="Projects-description">
        This website is a personal project that I hope to continue to build on 
        throughout my career. While the site is currently running in HTML and CSS,
         I am actively planning to expand its capabilities and improve user 
         experience. Through self-guided learning from YouTube videos and my internship, 
         I hope to leverage my new skills to enhance the website with JavaScript and 
         React in the near future.
        </p>
      </header>
    </div>
  );
}

export default Projects;