import React from 'react'
import Combine from './Combine'

function User2({count,hendalchange}){
  return (
          <>
          <center>
          <h1 >LENOVO RS/- {count} </h1>
          <button onClick={hendalchange}>ADD</button>
          </center>
           
          </>
        )
      }
export default Combine(User2)
