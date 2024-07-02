import { useState } from "react"
import Nav from '../Componets/Nav';

function About() {     
    const[deta,setdeta]=useState(false)
   
    const LOGIN=()=>{
        setdeta(true)
    }
    const LOGOUT=()=>{
        setdeta(false)
    }
  return (
    <>

      <div className='page w-[100%] h-auto  '>
        {
        deta ?(

<>


<Nav/>
          <div className='loginpage2'>
          <button className="w-[200px] h-[40px] border-[1px] border-[black] ms-[40%] mt-[40px] bg-[black] text-[white] mb-[10px]" onClick={LOGOUT}>LOGOUT</button>
      </div>
</>
       
        
    ):(
        <>
          <div className='loginpage1 w-[25%] h-[300px] border-[1px] border-[#0000002c] flex flex-col justify-evenly ms-[40%] px-[5vw] mt-[150px] rounded-[20px] shadow-2xl'>
      <h1 className="text-[25px] ms-[50px]">SING IN</h1>
       <p className="">UserName</p>
       <input className="w-[200px] h-[30px] border-[1px] outline-none" type="text"placeholder='Enter your email'/>
       <p className="">password</p>
       <input className="w-[200px] h-[30px] border-[1px] outline-none" type="text"placeholder='Enter your password'/>
       <button className="w-[200px] h-[40px] border-[1px] rounded bg-[black] text-[white]" onClick={LOGIN}>LOGIN</button>
   </div>
        </>
      
        
        )
        }
      </div>
    </>
  )
  
}

export default About
