import React, {Component} from 'react'

class Link extends Component{
  render(){
    return <a href={this.props.url} target={this.props.open} className="App-link">{this.props.url}</a>
  }
}

export default Link;