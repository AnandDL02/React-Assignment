import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './Cart'
import Home from './Home'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
     
        <Route path='/' element={<Home/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        
      
    </Routes>
    </BrowserRouter>
    
   
    </>
  )
}

export default App
