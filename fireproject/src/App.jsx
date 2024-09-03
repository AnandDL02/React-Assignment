import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singup from './Firebase/Singup'
import Login from './Firebase/Login'
import Display from './Firebase/Display'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Singup}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/display' Component={Display}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
