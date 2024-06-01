// import './App.css'
import React from 'react';
// import About from './Components/Landing_page/About';
// import Contact from './Components/Landing_page/Contact';
import Login from './Router/Login';
import Home from './Components/Landing_page/Home';
import { Route, Routes } from 'react-router-dom';
// import Navigate from './Router/Navigate';

function App() {

  return (
    <>
        
      <Routes>
        <Route path='*'element={<>
          <Home/>
          {/* <Navigate/> */}
        </>}/>
        <Route path='/Login' element={<Login/>}/>
        {/* <Route path='/Contact' element={<Contact/>}/> */}
      </Routes>
      
    </>
  )
}

export default App
