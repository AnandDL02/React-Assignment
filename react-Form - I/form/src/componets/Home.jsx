import React from 'react'
import { useState } from 'react'

function From() {
    const[data,setdata]=useState({
        name:'',
        age:'',

    })
    const hendalsubmit=(e)=>{
        e.preventDefault()
        alert("apka from submitted")
    }
    const hendalchange=(e)=>{
       const {name,value} = e.target
       console.log(name,value)
       setdata({
        ...data,[name] : value 

       })
      
   
    }
    const reset=()=>{
      setdata({
        name:'',
        age:'',
      })
    }

  return (
    <div>
      <form onSubmit={hendalsubmit} >

        <label>name</label>
        <input type="text" name='name'  value={data.name} onChange={hendalchange} />
        <br />
        <label>age</label>
        <input type="number" name='age'  value={data.age} onChange={hendalchange} />
        <br />
        <input type="submit"/>
       
        <button onClick={reset}>reset</button>
      </form>
    </div>
  )
}

export default From
