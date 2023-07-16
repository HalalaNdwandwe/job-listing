import './App.css'
import React from "react"
import AddJobs from './Components/AddJob'
import Home from './Components/home'
import Jobs from "./Components/Jobs"
import { Route, Routes } from 'react-router-dom'

const App =()=> {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/AddJobs' element={<AddJobs/>} />
      <Route path='/Jobs' element={<Jobs/>} />
    </Routes>
    </>
  )
}

export default App
