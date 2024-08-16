import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../redux/Action'

function Home() {
    const count = useSelector((state)=>state.count)
    const dispatch=useDispatch()
    const increment =()=>{
        dispatch(inc())
    }
    const decrement =()=>{
        dispatch(dec())
    }
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement} disabled={count==0}>decrement</button>
    </div>
  )
}

export default Home
