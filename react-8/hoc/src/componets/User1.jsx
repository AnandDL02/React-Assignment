import React  from 'react'
import Combine from './Combine'

function User1({count,hendalchange}){
  return (
    <>
    <center>
    <h1 >DELL RS/- {count} </h1>
    <button onClick={hendalchange}>ADD</button>
    </center>
     
    </>
  )
}

export default Combine(User1)
