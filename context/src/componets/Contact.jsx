import React, { useContext } from 'react'
import { context } from './Home'

export default function Contact() {
    const data=useContext(context)
  return (
    <div>
      <h1>Contact</h1>
        <p>{data}</p>
    </div>
  )
}
