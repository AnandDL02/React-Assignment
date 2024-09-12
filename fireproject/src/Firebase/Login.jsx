import React, { useState } from "react";

import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";

function Login() {
  const [email, setEmail] = useState("");
  const [pas, setpas] = useState("");

  const naviate = useNavigate();
  const Login =(() => {
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

    <div className="project">
    <div className="main w-[100%] h-[585px] border-[1px] border-[black] flex justify-around  items-center bg-[rgb(244,246,248)]">
      <div className="section w-[60%] h-[500px]   bg-[white] rounded-[30px] flex justify-evenly items-center">
        <div className="main-1 w-[40%] h-[400px]  rounded-[30px]"></div>

        <div className="main-2 w-[40%] h-[400px]  rounded-[30px] flex  flex-col justify-around">
          <div className="user flex justify-center flex-col items-center w-[100%] h-[90px]">
            <h1 className="text-[30px] capitalize font-[700]">welcome bank</h1>
            <p className=" capitalize text-[gray] text-[12px] ">
              plase login to your account
            </p>
          </div>

          <div className="info w-[100%] h-[150px]  flex flex-col justify-around">
            <input
              type="text "
              className="w-[100%] h-[40px] text-[13px] ps-[20px] outline-none bg-[rgb(245,247,249)] rounded"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="hide flex w-[100%] h-[40px]  items-center rounded bg-[rgb(245,247,249)]">
              <input
                type="text"
                className="w-[100%] h-[40px] text-[13px] ps-[20px] outline-none bg-[rgb(245,247,249)] "
                placeholder="password"
                onChange={(e) => setpas(e.target.value)}
              />
              <BiSolidHide className="text-[#000000a7] me-[8px]" />

            </div>

            <p className="flex justify-end text-[gray] text-[12px] capitalize cursor-pointer">
              forgot password
            </p>
          </div>
          <button
            className="w-[100%] h-[40px]  rounded outline-none bg-[rgb(255,128,54)] text-[white] capitalize"
            onClick={Login}
          >
            login
          </button>

          <div className="div-1 w-[100%] h-[20px] flex  justify-around items-center">
            <div className="div w-[30%] h-[1px] border-[#0000003a] border-[1px]"></div>
            <div className="div-2 text-[12px] ">or login with</div>
            <div className="div w-[30%] h-[1px] border-[#0000003a]  border-[1px]"></div>
          </div>

          <div className="googal w-[100%] h-[50px]  flex justify-around ">
            <div className="facebook w-[45%] cursor-pointer h-[45px] border-[1px] flex justify-around items-center px-[1.5vw] rounded-[10px]">
              <FcGoogle />
              <h1 className="capitalize text-[12px] font-[600]">google</h1>
            </div>
            <div className="facebook w-[45%] cursor-pointer h-[45px] border-[1px] flex justify-around items-center px-[1.5vw] rounded-[10px]">
              <FaFacebook />
              <h1 className="capitalize text-[12px] font-[600]">facebook</h1>
            </div>
          </div>
          <div className="div-3 w-[100%] h-[20px]  text-[12px] flex  justify-center items-center ">
            <p>
              don't have an account?{" "}
              <span className="underline cursor-pointer text-[rgb(255,128,54)] text-[14px]">
                <Link to={"/"}>Singup</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>  
  );
}

export default Login
