import React from 'react'

function ChildCompo(props) {
  return (
    <div>
        <button onClick ={props.greetHandler}>Masta!</button>
    </div>
  )
}

export default ChildCompo