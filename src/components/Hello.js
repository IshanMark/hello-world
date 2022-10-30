import React from "react";

const Hello = () => {

    // with JSX Command
//    return (
//        <div>
//            <h1>Hello Gamage</h1>
//        </div>
//    )

    // return React.createElement('div',null,<h1>Hello Gamage</h1>)

    // return React.createElement('div', null, 'h1', 'Hello Gamage')

    // return React.createElement('div' ,null ,React.createElement('h1',null,'Hello Gamage') )

    return React.createElement(
        'div',
        {id: 'hello' ,className:"jsxSampleClass"},
        React.createElement('h1', null, 'Hello Gamage')
    )
}

export default Hello
