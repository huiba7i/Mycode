import React, { Component } from 'react'
class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {time: new Date().toLocaleString()};
  }

  updateState = ()=>{
    this.setState({count: this.state.count+1})
  }

  componentWillMount(){
    console.log('clock will mount(子元素渲染前)');
  }

  componentDidMount(){
    console.log('clock did mount(子元素渲染后)');
  }

  componentWillReceiveProps(){
    console.log('clock will receive props');
  }

  shouldComponentUpdate(){
    console.log('should colock update(子元素是否更新)');
    // return true;
    return true; // 不更新组件,不会再调用render(),componentWillUpdate()
  }

  componentWillUpdate(){
    console.log('clock will update(子元素更新前)', this.state);
  }

  componentDidUpdate(){
    console.log('clock did update(子元素更新后)', this.state);
  }

  componentWillUnmount(){
    console.log('clock will unmount(子元素销毁前)');
  }
  
  render(){
    console.log('clock render-----');
    return (<div>
      <h2>我是子组件</h2>
      <p>当前时间: {this.state.time}</p>
      <p>props中的num值: {this.props.num}</p>
    </div>)
  }
}

export default Clock;