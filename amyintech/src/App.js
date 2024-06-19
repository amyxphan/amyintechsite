import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          $ print(Hello World! I'm Amy Phan.)
        </p>
        <img src={logo} className="App-logo" alt="logo" />

        {/* hyperlink socials  */}
        <a
          className="App-link"
          href="https://github.com/amyxphan"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/amyphan2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </header>
    </div>
  );
}

export default App;
