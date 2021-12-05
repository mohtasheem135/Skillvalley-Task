import React from 'react'
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Checkout/>
      <Footer/>
    </div>
  );
}

export default App;
