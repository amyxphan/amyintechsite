import './App.css';
import React from 'react';
import TopNavBar from './TopNavBar';
import Main from './Main';
import Projects from './Projects';
import About from './About';

const App = () => {
  return (
    <div className='App'>
      <TopNavBar />
      <Main />
      <Projects />
      <About />
    </div>
  );
};

export default App;
