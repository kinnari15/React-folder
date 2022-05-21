import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: 'Noice!'
      }
      this.clickHander = this.clickHander.bind(this)
    }
    clickHander(){
        this.setState({
            message: 'Expecto Patronum'
        })
        console.log(this)
    }
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          <button onClick = {() => this.clickHander}> Click Me </button>
      </div>
    )
  }
}

export default EventBind