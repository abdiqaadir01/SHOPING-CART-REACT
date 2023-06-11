import React, { useState } from 'react'
import Header from './component/Header'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'


function App() {
  const[cart,setcart]=useState(9)
  return (
    <div className='container'>
    <Header cart={cart} setcart={setcart}/>
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path="/Cart" element={<Cart  setcart={setcart}/>}/>

   </Routes>
   </div>
  )
}

export default App