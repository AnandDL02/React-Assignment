import React, { useState } from 'react'

function Home(Original) {
    function Newcomp (){
        const[data,setdata]=useState(0)

        const hendalclick = () =>{
            setdata(data+1)

        }
        return<Original data={data} hendalclick={hendalclick}/>
    }
  return Newcomp
}

export default Home
