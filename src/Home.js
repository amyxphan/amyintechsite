import React, { useState, useEffect } from 'react';
import './Home.css';

// import pfp from '/Users/amyphan/Desktop/amyintechsite/src/img/pfp.jpg';

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

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p className="Home-intro">
          $ <Typewriter text="print(Hello World! I'm Amy Phan.)" />
        </p>
        <img src="/pfp.jpg" className="Home-logo" alt="" />

        {/* hyperlink socials  */}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', paddingTop: "40px" }}>
            <a
              className="Home-link"
              href="https://github.com/amyxphan"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/GitHub.png" alt="" style={{ height: '50px', paddingRight: "4px" }} />
            </a>
            <a
              className="Home-link"
              href="https://www.linkedin.com/in/amyphan2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/LinkedIn.png" alt="" style={{ height: '50px' }} />
            </a>
            <a
            className="Home-link"
            href="https://drive.google.com/file/d/1k1ogiOiNYiX0WmqhkyXvqSYDBRostnAI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Resume.png" alt="" style={{ height: '50px' }} />
          </a>
          </div>
      </header>
    </div>
  );
}

export default Home;