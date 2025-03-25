import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import ListTask from './components/ListTask'
 import AddTask from './components/AddTask'

 const initialState = []
function App() {
  

  return (
    <>
    {/* <BrowserRouter> */}
      {/* <Routes> */}
       {/* <Route path='/' element={<ListTask />}></Route> */}
       {/* <Route path='/add' element={<AddTask initialState={initialState}/>}></Route> */}
       {/* </Routes></BrowserRouter> */}
      

       <AddTask initialState={initialState}/>
       <ListTask />
    </>
  )
}

export default App
