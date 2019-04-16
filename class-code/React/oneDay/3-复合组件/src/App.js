import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebSite from './components/WebSite'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <WebSite label="aowin" url="http://www.aowin.com" open="_blank"/>
          <WebSite label="baidu" url="http://www.baidu.com" open="_blank"/>
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
}

export default App;
