import React, { useState } from "react";

import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [pas, setpas] = useState("");

  const naviate = useNavigate();
  const Singup =(() => {
    createUserWithEmailAndPassword(auth, email, pas)
      .then((user) => {
        console.log(user);
        naviate("/display");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(auth);
  })
  return (
    <div>
      <input
        type="text"
        placeholder="enter your email "
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your paswword"
        onChange={(e) => setpas(e.target.value)}
      />
      <button onClick={Singup}>log in</button>
    </div>
  );
}

export default Login;
