import React , { Component } from 'react'

class Welcome extends Component {
    render(){
        //return <h1>Class Component</h1>

        return <h1>Welcome {this.props.name} c.s {this.props.heroname}</h1>
    }
}

export default Welcome