import React, { Component } from 'react'
import './Item.css'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date().toLocaleString() };
    }

    //时间
    tick() {
        this.setState({
            time: new Date().toLocaleString()
        })
    }

    //每秒更新时间
    componentDidMount() {
        this.time = setInterval(() => {
            this.tick()
        }, 1000)
    }

    //删除选项
    dlt = (i) => {
        this.props.todo.splice(i, 1)
    }

    render() {
        let items = [];
        for (let i = 0; i < this.props.todo.length; i++) {
            items.push(<item key={i}><h2>{this.props.todo[i]}</h2><button onClick={this.dlt.bind(this, i)}>删除</button></item>)
        }
        return (
            <div>
                {/* <input type="text" onChange={this.stuGetTest()} />
                <button onClick={this.stuAddItem()}>添加</button> */}
                <p>当前时间：{this.state.time}</p>
                {items}
            </div>
        )
    }
}

export default Item