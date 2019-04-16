import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd'
import 'antd/dist/antd.css'
// import WebSite from './components/WebSite'

class App extends Component {
  
  render() {
    let elementArray = [];
    for(let i=0;i<this.props.todos.length;i++){
      elementArray.push(<span key={i}>{this.props.todos[i]}</span>);
    }

    // 必须返回一个react对象, 不能写js的语句,只能写{js表达式}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* <WebSite label="aowin" url="http://www.aowin.com" open="_blank"/>
          <WebSite label="baidu" url="http://www.baidu.com" open="_blank"/> */}
          {elementArray}
          {
            this.props.todos.map(function(item){
              return (<span>{item}</span>)
            })
          }
          <Button>antd按钮</Button>
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
