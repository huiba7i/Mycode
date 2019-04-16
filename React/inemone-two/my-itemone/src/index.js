import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const main = "React"
const i = 77;
const Style = { backgroundColor: "aqua", color: "red" }
const f = function () {
    const l = [];
    for (let n = 0; n <= i; n++) {
        l[n] = n;
    }
    return l
}
const content = <div style={Style}><h2>this is prictise</h2><p>{main}</p><p>{i === 77 ? f() : "False"}</p></div>
ReactDOM.render(content, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
