import React, { useState } from 'react'


function Combine(Original){
    function Newcomponets(){
        const[count,setcount]=useState(0)
        const hendalchange =()=>{
            setcount(count + 1)
        }
        return <Original count={count} hendalchange={hendalchange}/>
    }
    return Newcomponets
 
}

export default Combine
