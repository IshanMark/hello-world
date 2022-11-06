import React from "react"

//function Greet() {
//    return <h1>Hello Imashi</h1>
//}.

//const Greet = props => {
const Greet = ({name,heroname}) =>{
    //console.log(props)
    return (
        <div>
            <h1>Hello {name} c.s {heroname}</h1>
            
        </div>
        
    )
    //return<h1>Hello Imashi</h1>
}

export default Greet