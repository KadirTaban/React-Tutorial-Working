import React, {Component} from 'react';




class MyClass extends Component{
    clicked() {
        alert('Class component Clicked')
    }
    render() {
        return ( 
            <div>
            <h1> Email Adress : {this.props.email}</h1>

            <button onClick = {this.props.myclick}> Click </button>
            </div>
        )
    }
}
export default MyClass;