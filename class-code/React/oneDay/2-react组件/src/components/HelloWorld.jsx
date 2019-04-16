import React from 'react'
class HelloWorld extends React.Component{
  render(){
    return (<div>
    <h1 className="test">Hello World in Component</h1>
    <p>welcome to React.</p>
    <p>hello, {this.props.name}</p>
  </div>)
  }
}

export default HelloWorld;