import React, {Component} from 'react'
import Name from './Name'
import Link from './Link'

class WebSite extends Component{
  render(){
    return (<div>
      <Name label={this.props.label}/>
      <Link url = {this.props.url} open={this.props.open}/>
    </div>)
  }
}

export default WebSite;