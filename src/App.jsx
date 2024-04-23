import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Principal from './pages/principal';
import Aside from './components/aside';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Principal/>
        <Aside/>
      </div>
      <Footer/>
    </>
  )
}

export default App
