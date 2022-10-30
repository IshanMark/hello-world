import React from "react"

//function Greet() {
//    return <h1>Hello Imashi</h1>
//}.

const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} c.s {props.heroname}</h1>
            {props.children}
        </div>
        
    )
    //return<h1>Hello Imashi</h1>
}

export default Greet