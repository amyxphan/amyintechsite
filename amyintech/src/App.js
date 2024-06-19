import pfp from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/img/pfp.JPG';
import './App.css';
import AmyPhanResumeJune2024 from '/Users/amyphan/Desktop/amyintechsite/amyintech/src/AmyPhanResumeJune2024.pdf'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          $ print(Hello World! I'm Amy Phan.)
        </p>
        <img src={pfp} className="App-logo" alt="profile-picture" />

        {/* hyperlink socials  */}
        <a
          className="App-link"
          href="https://github.com/amyxphan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/GitHub.png" alt="GitHub" style={{ height: '50px' }} />
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/amyphan2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/LinkedIn.png" alt="LinkedIn" style={{ height: '50px' }} />
        </a>
        <a
          className="App-link"
          href={AmyPhanResumeJune2024}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/Resume.png" alt="Resume" style={{ height: '50px' }} />
        </a>
      </header>
    </div>
  );
}

export default App;
