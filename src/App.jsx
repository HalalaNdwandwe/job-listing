import './App.css'
import React from "react"
import HomePage from './pages/HomePage'
import NewJob from './pages/NewJob'
import JobsPage from './pages/JobsPage'
import { Route, Routes } from 'react-router-dom'

const App =()=> {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/AddJobs' element={<NewJob/>}/>
      <Route path='/Jobs'  element={<JobsPage/>} />
    </Routes>
    </>
  )
}

export default App
