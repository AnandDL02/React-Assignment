import React, { useContext } from 'react'
import { context } from './Home'

function Foter() {
    const data=useContext(context)
    const name=useContext(context)
  return (
    <div>
      <h1>footer</h1>
    <p>{data.data}</p>
    <p>{name.name}</p>
    {/* <input type="text" value={data.data} /> */}
    

    </div>
  )
}

export default Foter
