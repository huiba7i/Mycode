import React, { Component } from 'react';
// import ReactDom from 'react-doms'
import logo from './logo.svg';
import './App.css';
import Item from './component/Item'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { stuList: ['html', 'css', 'javascript'] }
  }

  //获取输入框内容
  getTest = (event) => {
    this.setState({newItem:event.target.value});
    console.log(event.target.value)
  }

  //添加选项
  addItem = () => {
    this.state.stuList.push(this.state.newItem);
    console.log(this.state)
    this.setState({stuList:this.state.stuList})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" onChange={this.getTest} />
          <button onClick={this.addItem}>添加</button>
          <Item todo={this.state.stuList}/>
          <br />

        </header>
      </div>
    );
  }
}

export default App;
