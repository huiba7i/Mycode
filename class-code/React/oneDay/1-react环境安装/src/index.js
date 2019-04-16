import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// jsx的语法(用于构建react元素/组件):
/*
(1)直接写html标签
(2)遇到{}按js解析
(3)使用数组
*/
let user = "aowin";
let styleObj = {backgroundColor: 'green', color: '#fff'};
let arr = [<h2 key="ht">hello, {user}</h2>,<p key="para">{1+1}</p>]
const element = <div>
  {/*注释: style内联样式 */}
  <h1 style={styleObj}>Welcome to React!</h1> {arr}
  </div>;

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
