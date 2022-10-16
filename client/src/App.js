import './App.css';
import React from 'react';
import Nav from './components/Nav'
import { useState } from 'react';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import {BrowserRouter, Route , Routes } from 'react-router-dom'





function App() {
 
 return(
        <React.Fragment>
           <BrowserRouter>
                <Nav />
                <Routes>
                   <Route path='/' element={<Home></Home>} exact ></Route>
                   <Route path='/about' element={<About></About>} ></Route>
                   <Route path='/contact' element={<Contact></Contact>} ></Route>
                   <Route path='/signUp' element={<SignUp></SignUp>} ></Route>
                </Routes>
                <Footer/>
           </BrowserRouter>
        </React.Fragment>
   )

 
}

export default App;
 