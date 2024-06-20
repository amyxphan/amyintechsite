import React, { useState, useEffect } from 'react';
import pfp from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/pfp.JPG';
// import { BrowserRouter as Route, Routes } from 'react-router-dom';
import './App.css';

// importing external pages 
import TopNavBar from './TopNavBar';
// import About from './About';
// import Projects from './Projects';


import AmyPhanResumeJune2024 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/AmyPhanResumeJune2024.pdf'

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

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <header className="App-header">
        <p className="App-intro">
          $ <Typewriter text="print(Hello World! I'm Amy Phan.)" />
        </p>
        <img src={pfp} className="App-logo" alt="" />

        {/* hyperlink socials  */}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', paddingTop: "40px" }}>
            <a
              className="App-link"
              href="https://github.com/amyxphan"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/GitHub.png" alt="" style={{ height: '50px', paddingRight: "4px" }} />
            </a>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/amyphan2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/LinkedIn.png" alt="" style={{ height: '50px' }} />
            </a>
            <a
              className="App-link"
              href={AmyPhanResumeJune2024}
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

export default App;
