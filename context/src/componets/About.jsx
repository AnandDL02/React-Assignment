import React, { useContext } from 'react'
import { context } from './Home'


function About() {
 const data = useContext(context)
  return (
    <div>
      <h1>about</h1>
      <p>{data.about}</p>
    </div>
  )
}

export default About
