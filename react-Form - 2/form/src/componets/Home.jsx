import  { useRef } from 'react'

function Home() {

  const nameref=useRef(null)
  const nameref1=useRef(null)
  const nameref2=useRef(null)
  const nameref3=useRef(null)
  const nameref4=useRef(null)

  const handalsubmit=(e)=>{
    e.preventDefault()
    alert(`${nameref.current.value} ${nameref1.current.value} ${nameref2.current.value} ${nameref3.current.value} ${nameref4.current.value} ` )
  }


  return (
    <div className='main'>

    <form className='fom' onSubmit={handalsubmit}>
      <label >Name :
      <input className='name' ref={nameref}/>
      </label>

      <label>Email Address:
      <input className='name' ref={nameref1}/>
      </label>

      <label>Contry:
      <input className='name' ref={nameref2}/>
      </label>

      <label>Phone:
      <input className='name' ref={nameref3}/>
      </label>

      <label>Password:
      <input className='name' ref={nameref4}/>
      </label>


      <input className='btn' type="submit" />
    </form>

    </div>
  )
}

export default Home
