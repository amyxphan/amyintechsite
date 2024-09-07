//Projects.js 
import React, { useState, useEffect } from 'react';
import './Projects.css'; 

//Porject Demos
import CoastalDemo from './CoastalDemo.mp4';
import SmartParkingDemo from '/Users/amyphan/Desktop/amyintech/amyintechsite/amyintech/src/SmartParkingDemo.mp4'

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

        <p className="Projects-video">
          * video demo coming soon! *
        </p>

        <div className="Projects-description-container">
          <p className="Projects-description">
            TherapyTouch is a mobile app that I am currently working on to create an 
            all-in-one mental health app that allows users to recieve live help, journal, 
            view their journey, and meditate. In this project, I hope to be able to learn 
            more about mental health issues and create a product that's accessible for users 
            to use and get help.
          </p>
        </div>


        <p className="Projects-subtitle">
          SmartParking
        </p>

        <p className="Projects-usage">
        used React Native JS, AWS Config, AWS DynamoDB, AWS SES, ESP32, and Ultrasonic Sensors
        </p>

        <div className="Projects-video-container">
          <div className="Projects-video">
            <video controls>
              <source src={SmartParkingDemo} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="Projects-description-container">
          <p className="Projects-description">
            Smart Parking is a hardware device and mobile app to provide real-time updates 
            on parking space availability, integrating accessible features like a heatmap 
            and AI/ML-driven parking lot occupancy predictions. This was my senior year group 
            project for my final year in undergrad where I contributed as the lead UI/UX and 
            software developer in all mobile application operations, while connecting both 
            hardware and software components together efficiently.
          </p>
        </div>

        <p className="Projects-subtitle">
          Coastal Compass+
        </p>

        <p className="Projects-usage">
          used HTML, CSS, JavaScript, Figma, Node.js, Express.js, and MongoDB
        </p>

        <div className="Projects-video-container">
          <div className="Projects-video">
            <video controls>
              <source src={CoastalDemo} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="Projects-description-container">
          <p className="Projects-description">
          This project was implemented at the 2022 CodeForGood hackathon hosted by 
          JPMorgan Chase and Co. in October 2022. During this hackathon, I was placed 
          randomly in a group of 6 people to help a non-profit organization expand its 
          services to urban areas. I was able to familiarize myself with the frontend 
          website and app development concepts and learn how to work and adapt with 
          others who have different skill sets compared to me. In the end, our project 
          was one of the groups that won the 2022 hackathon in Plano, TX!
          </p>
        </div>

        <p className="Projects-subtitle">
          amyintech (this website!)
        </p>

        <p className="Projects-description">
          used HTML and CSS (recently migrating to React!) 
        </p>

        <p className="Projects-video">
          [insert video demo]
        </p>

        <div className="Projects-description-container">
          <p className="Projects-description">
          This website is a personal project that I hope to continue to build on 
          throughout my career. This website recently has been converted to React and
          I am actively planning to expand its capabilities and improve user experience. 
          Through self-guided learning from YouTube videos and my entry-level job, I hope 
          to leverage my new skills to enhance the website and explore more ways and best 
          practices to increase accessibility in the near future.
          </p>
        </div>
      </header>
    </div>
  );
}

export default Projects;