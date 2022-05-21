import React, { Component } from 'react'
import ChildCompo from './ChildCompo'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        parentName : 'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(){
        alert(`Hello! ${this.state.parentName}`)
    }
  render() {
    return (
      <div>
          <ChildCompo greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComp