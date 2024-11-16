import React from 'react';
import './App.css';
import { Router,Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<About />}></Route>
        <Route path='/Home' element={<Contact />}></Route>
        </Routes>
        <About/>
        <Contact/>
        <Footer/>
      </>
  );
}

export default App;