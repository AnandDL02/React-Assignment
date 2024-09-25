import React, { useEffect, useState } from 'react'
import {auth,Provider} from "./firebaseConfig"
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { IoMdArrowDropdown } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";




export default function Home() {

    const [user,setuser]=useState(null);

    useEffect(()=>{
        let subscribe = onAuthStateChanged(auth,(currentUser)=>{
            if (currentUser) {
                setuser(currentUser)
                
            }
        })
    },[])
    
    const handlelogin=async()=>{
        let user = await signInWithPopup(auth,Provider)
        console.log(user)
        setuser(user.user)
    }
    const handlesingout=async()=>{
       await signOut(auth);
        setuser(null)
    }
  
    return (    
    <div>
        {
            user ? 
            
        <div className='main w-[100%] h-[580px] flex  justify-center items-center'>
            <div className="man-1 w-[300px] h-[500px] "> 
                <div className="div-1 w-full h-[500px] text-[white] flex flex-col  justify-evenly items-center px-[2vw] py-[5vw]">
                        <p className='text-[30px] font-[600] text-[  capitalize ]' >welcome !</p>
                    <div className="info w-full h-[150px] overflow-clip flex flex-col justify-evenly">
                        <div className="info2  text-[  capitalize ]">
                            <p>name:<h1>{user.displayName}</h1></p>
                        </div>
                        <div className="info2  text-[  capitalize ]">
                            <p>email id:<h1>{user.email}</h1></p>
                        </div>
                    </div>
                    <div className="man-2 w-[300px] h-[70px]  px-[2vw] flex justify-center items-center ">
                    <button className='manbtn-1 w-[250px] h-[50px]  rounded-[10px] text-[white] font-[600] text-[ uppercase ] text-[14px]' onClick={handlesingout}>signOut</button>               
                    </div>
                    <div className="man-2 w-[300px] h-[50px] px-[3vw] flex justify-around items-center">
                    <div className="div-111 w-[50px] h-[50px] border-[1px] border-[#969696] rounded-[50px] flex  justify-center items-center text-[30px]">
                    <FcGoogle />
                    </div>
                    <div className="div-111 w-[50px] h-[50px] border-[1px] border-[#969696] rounded-[50px] flex  justify-center items-center text-[25px]">
                    <FaFacebookF  className='color w-[33px] h-[33px] rounded-[50px]  text-[white]'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>

             :

        <div className="main w-[100%] h-[580px] flex justify-center items-center">
            <div className="man-1 w-[300px] h-[500px] border-[1px] border-[black] ">
                <div className="div-1 w-full h-[500px] border-[1px] border-[black] flex flex-col  justify-evenly  py-[5vw]">
                
                <div className="man-2 w-[300px] h-[80px]   text-[rgba(253,253,252,0.84)] text-[23px] font-[600] px-[2vw]">
                    <h1>Login with <br /> mobil number</h1>
                    <p className='text-[10px] text-[#969696]'>welcome to our app ?</p>
                </div>
                <div className="man-2 w-[300px] h-[70px]   text-[rgba(253,253,252,0.84)] flex  justify-between items-center px-[2vw] ">
                    <div className="man-22 w-[60px] h-[40px] border-[1px] border-[white]  rounded-[9px] flex justify-around items-center text-[white] px-[7px]">
                       <input type="text "  placeholder='+91' className='bg-transparent  outline-none w-full h-full text-[12px]'/>
                       <IoMdArrowDropdown className='text-[20px]' />
                    </div>
                    <div className="man-22 w-[180px] h-[40px] border-[1px] border-[white]  rounded-[9px] flex justify-center items-center text-[white   ]">
                    <input type="text" placeholder='9537531111'  className='bg-transparent  outline-none w-full h-full text-[12px] px-[1vw]'/>
                    </div>
                </div>
                <div className="man-2 w-[300px] h-[70px]  px-[2vw] flex justify-center items-center">
                    <button className='manbtn-1 w-[250px] h-[50px]  rounded-[10px] text-[white] font-[600] text-[ uppercase ] text-[14px]'  onClick={handlelogin}>login</button>                    
                </div>
                <div className="man-2 w-[300px] h-[20px]  border-[white] flex  justify-around items-center text-[#969696] text-[8px] px-[2vw] font-[600]">
                <div className="div w-[80px] h-[1px] border-[1px] border-[white]"></div>
                <p>or continue with</p>
                <div className="div w-[80px] h-[1px] border-[1px] border-[white]"></div>
                </div>
                <div className="man-2 w-[300px] h-[50px] px-[3vw] flex justify-around items-center">
                    <div className="div-111 w-[50px] h-[50px] border-[1px] border-[#969696] rounded-[50px] flex  justify-center items-center text-[30px]">
                    <FcGoogle />
                    </div>
                    <div className="div-111 w-[50px] h-[50px] border-[1px] border-[#969696] rounded-[50px] flex  justify-center items-center text-[25px]">
                    <FaFacebookF  className='color w-[33px] h-[33px] rounded-[50px]  text-[white]'/>
                    </div>
                </div>

                </div>
            </div>
        </div>
        }
    </div>
  )
}
