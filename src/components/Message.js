import React, { Component } from 'react'

class Message extends Component {
        constructor() {
            super()
            this.state = {
                message: 'Welcome to my blog!'
            }
        }

    changeMessage() {
        this.setState ({ 
            message: 'Black Holes'
        })
    }
    render(){
    return (
    <div> 
        <h1>
        {this.state.message}
        </h1> 
        <button onClick={() => this.changeMessage()}> Follow </button>
      </div>
    )
    }
}
export default Message