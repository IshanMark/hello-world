import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)

        this.state= {
            count: 0
        }
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // },
        // () => {
        //     console.log('Callback Value', this.state.count)
        // })

        this.setState((prevState,props) => ({
            count: prevState.count +1
            //count:prevState.count + this.props.addValue //Can't Do that
        }))
         console.log(this.state.count)
    }

    incrementFour(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={()=> this.incrementFour()}>Increment</button>
      </div>
    )
  }
}

export default Counter
