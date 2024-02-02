import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './views/Main'
import Details from './components/Details'

function App() {
  

  return (
    <BrowserRouter>
    <>
    <Routes>
     <Route path ='/products' element ={<Main/>} default/>
     <Route path ='/products/:id' element ={<Details/>}/>

     </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
