import React, {useEffect, useState} from 'react'


const LocalStorage = ()=> {

const [todo, setTodo] = useState("")
const[tasks, setTasks]= useState([])
const[editIndex,setIndex] = useState(-1)

console.log(todo)

const addTodo=()=>{
    setTasks([...tasks,{name:todo}])   
    setTodo("")
}
// const editTodo=(name ,index)=>{
//   setTodo(name)
//   setIndex(index)
// }
const updateTodo =()=>{
let x = JSON.parse(localStorage.getItem("todos"))
if(x){
  x.splice(editIndex,1,{name:todo})
  setTasks(x)
}
localStorage.setItem("todos", JSON.stringify(tasks))
setIndex(-1)
setTodo('')
}
// const deleteTodo =(index)=>{
//   const newTasks = tasks.filter((el,i) => i !== index)
//   setTasks(newTasks)
// }

// useEffect(()=>{
//   let x = JSON.parse(localStorage.getItem("todos"))
//   if(x){
//     setTasks(x)
//   }
// },[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(tasks))
},[tasks,todo])


console.log(tasks, "all todos")

  return (
    <div>
     <h1 style={{color:'white',marginLeft:'25%',fontSize:'60px'}}>Todo list</h1> 
     <input style={{marginLeft: '25%',height:'40px'}}
      type='text'
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      placeholder='Add a new todo'
     />
    
     <button onClick={addTodo} style={{display:editIndex !== -1 ?"none" : "inline",height:'45px',borderRadius:'20%',backgroundColor:'green'}}> Add todo</button>
     <button style={{display:editIndex!= -1 ?"inline" : "none"}} onClick={updateTodo}> updateTodo</button>

    <ul>

{
  tasks.map((el,index)=>{
    return<div style={{display:"flex"}}>
      <li> {el.name}</li>
      {/* <button onClick={()=>editTodo(el.name,index)}>Edit</button> */}
      {/* <button onClick={()=>deleteTodo(index)}>Delete</button> */}
    
    </div>
  })
}
    </ul>
    </div>
  )
}

export default LocalStorage