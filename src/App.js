import React from 'react';

import logo from './logo.svg';
import './App.css';

import fetchBlocks from "./apis/fetchBlocks";

function App() {
  React.useEffect(() => {
    let isMounted = true;
    fetchBlocks().then(response => {
      if (!isMounted) {
        return;
      }

      console.log(response);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
