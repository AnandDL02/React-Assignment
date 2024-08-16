import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDelete, addEdit, addtodo } from '../redux/action'

function Home() {
    const[todo,settodo]=useState("")

    const task=useSelector((state)=>(state.tasks))
    const dispatch=useDispatch()
    const handelsubmit=()=>{
        dispatch(addtodo({id:Date.now(),name:todo}))
       
    }

    const todoEdit=(id)=>{
     let x= prompt("enter value")
     if(x){
      dispatch(addEdit(id,x))
     }
    }

    const todoDelete=(id)=>{
     
       dispatch(addDelete(id))
      
     }
  return (
    <>
     <div>
      <input type="text" onChange={(el)=>settodo(el.target.value)} value={todo}/>
      <button onClick={handelsubmit}>submit</button> 
    </div>
  
  <div>

    {
      task?.map((el)=>{
        return <>        <li>{el.name}</li>
        <button onClick={()=>todoEdit(el.id)}>edit</button>
        <button onClick={()=>todoDelete(el.id)}>delete</button>
        </>
            
     

      })
    }
  </div>
    </>
  


  )
}

export default Home
