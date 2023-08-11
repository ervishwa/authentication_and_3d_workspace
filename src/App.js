import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { Signin } from './pages/signin/Signin'
import { Signup } from './pages/signup/Signup'
import { Home } from './pages/home/Home'

export function App() {
  return (
    <Routes>
       <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

