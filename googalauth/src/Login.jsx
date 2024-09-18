import React, { useEffect, useState } from 'react'
import {auth,Provider} from "./firebaseConfig"
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';



export default function Login() {

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
            <div>
                <h1>name:-{user.displayName}</h1>
                <h1>id:-{user.email}</h1>
                <button onClick={handlesingout}>signOut</button>
            </div>
            :
            <button onClick={handlelogin}>login</button>
        }
    </div>
  )
}
