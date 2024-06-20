import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './pages/home';
import Form from './components/form';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
