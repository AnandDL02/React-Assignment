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
    <div className='main'>
      <form onSubmit={hendalsubmit}  className='main-1'>

        <label className=''>Name :</label>
        <input className='main-2' type="text" name='name'  value={data.name} onChange={hendalchange} />
        <br />
        <label>Age :</label>
        <input className='main-22' type="number" name='age'  value={data.age} onChange={hendalchange} />
        <br />
        <input className='main-3' type="submit"/>
       
        <button onClick={reset} className='main-3'>Reset</button>
      </form>
    </div>
  )
}

export default From
