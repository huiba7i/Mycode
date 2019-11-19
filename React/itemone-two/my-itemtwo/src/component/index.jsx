import React from 'react'
import App from '../App'

class Cont extends React.Component {
    render() {
        return (<div>
            <App></App>
            <h2>Hello, {this.props.name}</h2>
            <ul className="test">
                <li>Apple</li>
                <li>Pear</li>
                <li>Banana</li>
                <li>{this.props.v}</li>
                <li>{this.props.name}</li>
            </ul>
        </div>)
    }
}

export default Cont