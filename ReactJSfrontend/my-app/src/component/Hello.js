import React from 'react';

function Hello(props) {
    function Clickme(){
        alert("Button has clicked")
    }

    return(
    <div>
        <h1> My name is : {props.name},
        My surname is: {props.lastname}</h1>

         <button onClick = {Clickme}> Click me</button>
    </div>

    )
}

export default Hello;