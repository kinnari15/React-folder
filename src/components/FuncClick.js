import React from 'react'

function FuncClick() {
    function clickHandler(){
        console.log('Button clicked!')
    }
  return (
    <div> 
        <button onClick = {clickHandler}>FuncClick </button>
    </div>
  )
}

export default FuncClick