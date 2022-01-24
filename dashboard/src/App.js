import './App.css';
import React from 'react';
//importing Components
import Nav from './Component/Nav';
import About from './Component/About';
import Shop from './Component/Shop';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
