import React, { Component } from 'react';
import ReactDom from 'react-dom'
import './App.css';
import Clock from './component/Clock'

class App extends Component {
  /* constructor() {
    super();
    // state 管理组件中的数据
    // 初始化状态
    this.state = { count: 2, price: 16.5 }
  } */

  // 1.创建，渲染
  componentWillMount(){
    console.log("will mount(渲染前)");
  }

  componentDidMount(){
    console.log("did mount(渲染后)");
  }

  //2.更新
  componentWillReceiveProps(){
    console.log("props update（）");
  }

  shouldComponentUpdate(){
    console.log("component update（是否更新）");
    return true;
  }

  componentWillUpdate(){
    console.log("will update(更新前)"+this.state.count)
  }

  componentDidUpdate(){
    console.log("did update(更新后)"+this.state.count)
  }
  
  //3.销毁
  componentWillUnmount(){
    console.log("will unmount(销毁前)")
  }

  //构造函数中可以使用props，向构造函数添加props参数
  constructor(props){
    super(props);
    this.state = {count:2,price:16.5,proID:props.id,isShow:true}

    //给函数绑定this
    this.updateState = this.updateState.bind(this);
  }

  /* updateState = () => {
    console.log(this);
    // 更新状态 this.setState({})
    this.setState({ count: this.state.count + 1 });
  } */

  // 更新数据
  updateState(){
    // console.log(this);
    //更新状态 this.setState({}),调用render()重新渲染页面
    this.setState({count:this.state.count+1})
    // this.props.id = '7'; // error: id是read only -- 只读
  }

  // 移除父组件
  removerApp = ()=>{
  let root = document.getElementById('root')
  // root.removeChild(root.childNodes[0])

  ReactDom.unmountComponentAtNode(root)
  }

  // 移除子组件
  removeAppChild = ()=>{
    //根据条件渲染移除子组件
    this.setState({isShow:false})
  }

  render() {
    console.log("render……");
    return (
      <div className="App">
        {/* 读取状态 */}
        <p>数量：{this.state.count} , 价格：{this.state.price}</p>
        <p>总价格： {this.state.count * this.state.price}</p>
        
        {/* props是父组件传递过来的数据, 是只读的 */}
        <p>{this.props.id},{this.state.proID}</p>

        {/* 子组件 */}
        { this.state.isShow && <Clock num={this.state.count} />}
        {/* <Clock num={this.state.count} /> */}

        <hr />
        {/* 添加事件 onClick - 事件名称首字母大写 */}
        <button onClick={this.updateState}>修改state中的数据</button>
        <button onClick={this.removerApp}>移除App组件</button>
        <button onClick={this.removeAppChild}>移除Clock子组件</button>
      </div>
    );
  }
}

export default App;
