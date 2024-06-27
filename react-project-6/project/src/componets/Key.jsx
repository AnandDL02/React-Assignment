import React, { Fragment, useEffect, useState } from 'react'

function Key() {

    const[data,setdata]=useState([]);

    useEffect(()=>{
        const datafetch=(async()=>{
            let response=await fetch("https://fakestoreapi.com/products/category/jewelery")
            let jsonedata=await response.json();
            console.log(jsonedata)
            setdata(jsonedata)

        });datafetch()


    },[])

  return (
    <Fragment>
        {
            data.map((el)=>{
            
            return<div key={el.id}> 
            <div className="div1">              
                <ul>
                    <li>{el.id}</li>
                    <li>{el.title}</li>
                    <img src={el.image} alt="" />
                    <li>{el.price}</li>
                    <li>{el.category}</li>

                </ul>
                </div>
            </div>
            })
        }
    </Fragment>
  )
}

export default Key
