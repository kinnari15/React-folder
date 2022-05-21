import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin : false
      }
    }
  render() {
        /* if (this.state.isLoggedin) {
           return  <div>Richard Feynman op!</div> 
        }
        else{
           return <div>Astronomy is the best!</div>
        }
 */
        /* let message 
        if (this.state.isLoggedin) {
            message =  <div>Richard Feynman op!</div>
        } else {
            message = <div>Astronomy is the best!</div>
        } */
        {/* <div> 
        <div>Richard Feynman op!</div>
      <div>Astronomy is the best!</div>
      </div> */}
        /* return <div>{message}</div> */
/* 
        return (
            this.state.isLoggedin ?
            <div>Richard Feynman op!</div> :
            <div>Astronomy is the best!</div>
        ) */

        return (
            this.state.isLoggedin && <div>Richard Feynman op!</div>
        )
  }
}

export default UserGreeting