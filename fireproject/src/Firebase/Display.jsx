import React, { useEffect, useState } from 'react'
import { getDoc,doc } from 'firebase/firestore'
import {auth,firestore} from "../../firebaseConfig"
import { onAuthStateChanged } from 'firebase/auth'


function Display() {
  const [user1,setuser1]=useState("")

  useEffect(()=>{
    let Change =onAuthStateChanged(auth,(user)=>{
      if (user) {
        fetchuser(user)
        setuser1(user)
      }
  })
  
  },[user1])

  const[userdata,setuserdeta]=useState("")
  const fetchuser=async(user)=>{
    const data=await getDoc(doc(firestore,"users",user.uid))
    console.log(data.data())
    setuserdeta(data.data())

  }
  return (  
    <div className=' project-2 w-[100%] h-[585px] border-[1px] border-[black] bg-[rgb(244,246,248)] flex  justify-center items-center'>
      <div className="main-section w-[60%] h-[500px]  bg-[white] border-[black] rounded-[30px]  flex justify-evenly  items-center text-[40px] font-[600]">
      
      <div className="main-1 w-[40%] h-[400px]  rounded-[30px]"></div>

    <div className="div-111 w-[40%]  h-[400px] flex justify-evenly rounded-[30px] py-[6vw] ps-[30px]  flex-col text-[gray]">
        <h1 className='text-[40px]  capitalize text-[rgba(255,128,54,0.88)]'>dashboard</h1>
        <h1 className= " h1 capitalize  text-[20px] " >email <br />{userdata.email}</h1>
        <h1 className= " h1 capitalize  text-[20px]" >name <br />{userdata.fname}</h1>
      </div>
    </div>
  </div>
  )
}

export default Display
 