import React, { useState, useEffect } from 'react';
import './About.css'; 

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

        <p className="About-subtitle">
          Get to know me!
        </p>

        <p className="About-intro">
        Hello! My name is Amy Phan and I'm a senior majoring in Computer Engineering at 
        the University of North Texas. I'm currently a Software Engineering Intern at 
        JPMorgan Chase & Co. and serve as a SASE South Regional Coordinator, supporting 
        university chapters with professional development, celebrate diversity, and giving 
        back to the community. Prior to this role, I had the honor of being the President 
        and Co-Founder of the Society of Asian Scientists and Engineers at UNT(SASE UNT), 
        where I played a pivotal role in establishing and leading the chapter. My interest 
        in engineering began as a little girl. Rather than playing dress up with dolls, I 
        loved to break and unscrew toy cars to learn how to put everything back together. As 
        I grew older I implemented these habits into my day-to-day life. I am an aspiring 
        software engineer, passionate about accessibility, and hope to create innovative 
        solutions that bridge gaps and drive positive change in the tech industry.
        </p>

        <p className="About-subtitle">
          Awards
        </p>
      </header>
    </div>
  );
}

export default About;