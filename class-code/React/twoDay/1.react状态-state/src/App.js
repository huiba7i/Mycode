import React, { Component } from 'react';
import './App.css';

class App extends Component {
  /* constructor(){
    super();
    // state 管理组件中的数据
    // 初始化状态
    this.state = {count: 2, price: 16.5}
  } */

  // 构造函数中可以使用props, 向构造函数添加props参数
  constructor(props){
    super(props);
    this.state = {count: 2, price: 16.5, proId: props.id}

    // 给函数绑定this
    this.updateState = this.updateState.bind(this);
  }

  /* updateState = ()=>{
    console.log(this);
    // 更新状态 this.setState({}), 调用render()重新渲染页面
    this.setState({count: this.state.count+1})
    // this.props.id = '1002'; // error: id是read only
  } */
  updateState(){
    console.log(this);
    // 更新状态 this.setState({}), 调用render()重新渲染页面
    this.setState({count: this.state.count+1})
    // this.props.id = '1002'; // error: id是read only
  }

  render() { 
    console.log('render page....');     
    return (
      <div className="App">
      {/* 读取状态 */}
        <p>数量: {this.state.count}, 价格: {this.state.price}</p>
        <p>总价格: {this.state.count*this.state.price}</p>

        {/* props是父组件传递过来的数据, 是只读的 */}
        <p>{this.props.id}, {this.state.proId}</p>

        {/* 添加事件 onClick - 事件名称首字母大写 */}
        <button onClick={this.updateState}>修改state中的数据</button>
      </div>
    );
  }
}

export default App;
