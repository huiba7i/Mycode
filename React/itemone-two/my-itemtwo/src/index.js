import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

//第一种方法：
// let Helloword = React.createClass({
//     render: function () {
//         return (<div>
//             <h2>Hello, {this.props.name}</h2>
//             <ul className="test">
//                 <li>Apple</li>
//                 <li>Pear</li>
//                 <li>Banana</li>
//                 <li>{this.props.v}</li>
//             </ul>
//         </div>)
//     }
// })

//第二种方法：将组件封装到独立的js或者jsx文件中，暴露出去，再通过import引入
import Helloword from "./component/index"

ReactDOM.render(<Helloword name='ding' v='77'/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();