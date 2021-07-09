import React, {Component} from 'react';




class MyClass extends Component{
    clicked() {
        alert('Class component Clicked')
    }
    render() {
        return ( 
            <div>
            <h1 className="bg-primary text-white text-center"> Email Adress : {this.props.email}</h1>

            <button className="btn btn-primary" onClick = {this.props.myclick}> Click </button>
            </div>
        )
    }
}
export default MyClass;