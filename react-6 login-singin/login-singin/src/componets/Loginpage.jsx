import React, { useState } from 'react'

function Loginpage() {
    const[deta,setdeta]=useState(false)
   
    const LOGIN=()=>{
        setdeta(false)
    }
    const LOGOUT=()=>{
        setdeta(true)
    }
  return (
    <>

      <div className='page'>
        {
        deta ?(
        
        <div className='loginpage1'>
           <h1>Logout Now</h1>
            <p>UserName</p>
            <input type="text"placeholder='Enter your email'/>
            <p>password</p>
            <input type="text"placeholder='Enter your password'/>
            <button onClick={LOGIN}>LOGIN</button>
        </div>
        
    ):(

        <div className='loginpage2'>
            <h1>Login Now</h1>
            <p>Email</p>
            <input type="text"placeholder='Enter your email'/>
            <p>password</p>
            <input type="text"placeholder='Enter your password'/>
            <button onClick={LOGOUT}>LOGOUT</button>
        </div>
        
        )
        }
      </div>
    </>
  )
}

export default Loginpage
