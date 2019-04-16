import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let array = ['html','css', 'js']
let result = array.map(function(item, index){
  console.log(item,'-----',index);

  return item+index;
});
console.log(result);

ReactDOM.render(<App todos={array}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
