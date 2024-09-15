import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <p>&copy; {new Date().getFullYear()} Amy Phan. All rights reserved.</p>
      <div className="Footer-links">
        <a href="https://github.com/amyxphan" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/amyphan2/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;