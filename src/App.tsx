import React from 'react';
import 'swiper/css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Project from './Components/Project';
import Main from './Components/Main';

function App() {
  return (

      <Router>
        <div className='App'>
 <Navbar/>
 <Routes>
  <Route  path='/' element={<Main/>}/>
  {/* <Route  path='/' element={<Home/>}/>
  <Route path='/project' element={<Project/>}/> */}
 </Routes>
 </div>
      </Router>
     
  
  );
}

export default App;
