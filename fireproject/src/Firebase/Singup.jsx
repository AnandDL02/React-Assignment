import React, { useState } from "react";
import { auth, firestore } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

function Singup() {
  const [email, setEmail] = useState("");
  const [pas, setPas] = useState("");
  const[fname,setFname]=useState("")
  const[lname,setLname]=useState("")
  const[age,setAge]=useState("")
  const[sub,setSub]=useState("")

  const naviate = useNavigate();
  const Singup =(() => {
    createUserWithEmailAndPassword(auth, email, pas)
      .then((user) => {
        console.log(user.user.uid);
        setDoc(doc(firestore,"users",user.user.uid),{
            fname,lname,age,sub,email
        })
        naviate("/display");
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(auth);
  })

  return (
    <>

<input
        type="text"
        placeholder="enter your fname"
        onChange={(e) => setFname(e.target.value)}
      />

<input
        type="text"
        placeholder="enter your lname"
        onChange={(e) => setLname(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your subject"
        onChange={(e) => setSub(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your email "
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your paswword"
        onChange={(e) => setPas(e.target.value)}
      />
      
      <button onClick={Singup}>Singup</button>
    </>
  );
}

export default Singup;
