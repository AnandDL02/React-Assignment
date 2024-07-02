import React from "react";
import img1 from "./Assaset/logopb.svg"
import imag2 from "./Assaset/image.png"
import imag3 from "./Assaset/ss.png"

function Nav() {
  return (
    <>
      <div className="section-1 bg-[rgb(241,244,247)] w-[100%] h-[80px] flex justify-between px-[5vw]">
        <div className="logo w-[12%] h-[80px] flex items-center">
          <img src={img1} alt="" className="w-[100%] h-[60%]" />
        </div>
        <div className="anchor w-[80%] h-[80px] flex justify-between items-center text-[12px] capitalize">
          <a href="">liTerm Insurance</a>
          <a href="">Investment Plans</a>
          <a href=""> Health Insurance</a>
          <a href="">Motor Insurance</a>
          <a href="">Other Insurance</a>
          <a href="">Business Insurance</a>
          <a href=""> Renewal</a>
          <button className="w-[70px] h-[30px] border-[1px] border-[blue] rounded capitalize">
            sign in
          </button>
        </div>
      </div>
      <div className="section-2 w-[100%] h-[510px] flex">
        <div className="man-1 w-[50%] h-[500px] flex justify-between  flex-wrap">
          <div className="info w-[100%] h-[100px]  flex flex-col justify-center px-[5vw]">
            <h1 className="text-[30px] font-[700]">Mediclaim Policy</h1>
            <p>
              Medical inflation has made healthcare services expensive. Read
              More
            </p>
          </div>
            <div className="info w-[50%] h-[400px]  flex flex-col justify-around  items-center">
                <div className="if w-[80%] h-[50px] border-[1px] border-[#0000004a] rounded text-[14px] ms-[65px] flex  items-center justify-center">
                  <p>30 minutes claim support## <br />(In 120+ cities)</p>
                </div>
                <div className="if w-[80%] h-[50px] border-[1px] border-[#00000058] rounded text-[14px] ms-[65px] flex  items-center justify-center">
                  <p>30 minutes claim support## <br />(In 120+ cities)</p>
                </div>
                <div className="if w-[80%] h-[50px] border-[1px] border-[#00000060] rounded text-[14px] ms-[65px] flex  items-center justify-center">
                  <p>30 minutes claim support## <br />(In 120+ cities)</p>
                </div>
                <div className="if w-[80%] h-[50px] border-[1px] border-[#00000052] rounded text-[14px] ms-[65px] flex  items-center justify-center">
                  <p>30 minutes claim support## <br />(In 120+ cities)</p>
                </div>
            </div>
            <div className="info w-[50%] h-[400px] flex justify-center items-center object-cover   ">
                <img src={imag2} alt="" className="w-[90%] h-[60%] object-cover"/>
            </div>
           </div>
        <div className="man-1 w-[50%] h-[500px]  flex justify-center items-center">
              <img src={imag3} alt="" className="w-[90%] h-[95%]" />
        </div>
      </div>
    </>
  );
}

export default Nav;
