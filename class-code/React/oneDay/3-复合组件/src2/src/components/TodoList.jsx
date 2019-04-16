import React, {Component} from 'react'

class TodoList extends Component{
  render(){
    let liArray = [];
    for(let i=0;i<this.props.todos.length;i++){
      liArray.push(<li>{this.props.todos[i]}</li>);
    }

    return (
      <ul>
        {
          // this.props.todos.map(function(item){
          //   return (<li>{item}</li>)
          // })
        } 
        {liArray}
      </ul>
    )
  }
}