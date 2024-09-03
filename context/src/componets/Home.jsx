import React, { createContext, useState } from 'react'
import Foter from './Foter'
import About from './About'
import Contact from './Contact'
export const context=createContext()



function Home(){
    const [data,setdata]=useState("")
    const [name,setname]=useState("")
    const [about,setabout]=useState("")
    const [foter,setfoter]=useState("")


  return (
    <div>
      <input type="text" placeholder='name' onChange={(e)=>setdata(e.target.value)}/>
      <input type="text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>   
      <input type="text" placeholder='name' onChange={(e)=>setabout(e.target.value)}/>   
      <input type="text" placeholder='name' onChange={(e)=>setfoter(e.target.value)}/>   
      <context.Provider value={{data,name}}>
        <Foter/>

      </context.Provider>
      <context.Provider value={{data,about}}>
      <About/>

      </context.Provider>
    
    <context.Provider value={{data,foter}}>
        <Contact/>

      </context.Provider>
    </div>
  )
}

export default Home
