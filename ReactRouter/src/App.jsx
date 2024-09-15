import React from 'react'
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'
import './App.css'
import Home from './RouterComponents/Home'
import About from './RouterComponents/About'
import NavBar from './RouterComponents/NavBar'
import Page404 from './RouterComponents/Page404'
import Users from './RouterComponents/Users'
import Filter from './RouterComponents/Filter'
import Gaming from './RouterComponents/Gaming'
import Laptop from './RouterComponents/Laptop'
import Other from './RouterComponents/other'
import Login from './RouterComponents/Login'
import Protected from './RouterComponents/Protected'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Protected Component={Home}/>} />
      <Route path='/About Us' element={<Protected Component={About}/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/*' element={<Page404/>}/>
      <Route path='/Users/:name' element={<Users/>}/>
      <Route path='/Filter/' element={<Protected Component={Filter}/>}>
      <Route path='Gaming' element={<Gaming/>}/>
      <Route path='Laptop' element={<Laptop/>}/>
      <Route path='other' element={<Other/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
