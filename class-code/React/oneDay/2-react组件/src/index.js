import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
import * as serviceWorker from './serviceWorker';

// 通过React.createClass生成一个组件类
// 需要降低react react-dom的版本
/**
 * 先移除原来的版本
 * npm uninstall react react-dom --save
 * 再安装低的版本
 * npm install react@15.4.2 react-dom@15.4.2 --save
 */
/* let HelloWorld = React.createClass({ render: function(){ 
    return <div>
      <h1 className="test">Hello World!</h1>
      <p>welcome to React.</p>
      <p>hello, {this.props.name}</p>
    </div>
  } 
}); */

/* class HelloWorld extends React.Component{
  render(){
    return <div>
    <h1 className="test">Hello World!</h1>
    <p>welcome to React.</p>
    <p>hello, {this.props.name}</p>
  </div>
  }
} */

import HelloWorld from './components/HelloWorld.jsx'

ReactDOM.render(<HelloWorld name="aowin"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
