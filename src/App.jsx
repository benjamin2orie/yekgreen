// import './App.css'
import React from 'react';
// import Navbar from './Components/Navbar';
import About from './Components/Landing_page/About';
import Contact from './Components/Landing_page/Contact';
import Home from './Components/Landing_page/Home';
// import Home from './Components/Landing_page/Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
        
      <Routes>
        <Route path='*'element={<>
          {/* <Navbar/> */}
          <Home/>
          {/* <About/> */}
        </>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      
    </>
  )
}

export default App
