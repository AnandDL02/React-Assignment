import React from 'react'
import Home from './Home'

function User2({data, hendalclick}) {
  return (
    <div>
      <h1>Iphone-14 RS: {data} </h1>
      <button onClick={hendalclick}>Click</button>
    </div>
  )
}

export default Home(User2)
