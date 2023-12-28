import React, { useState, useEffect } from 'react';
import './App.css';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayText((prevText) => {
        if (index < text.length) {
          return prevText + text.charAt(index);
        } else {
          clearInterval(typingInterval);
          return prevText;
        }
      });
      index += 1;
    }, 500); // Adjust typing speed (in milliseconds) as needed

    return () => clearInterval(typingInterval);
  }, [text]);

  return <div className="typing-effect">{displayText}</div>;
};

export default TypingEffect;