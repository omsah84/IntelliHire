import Home from "./components/Home"
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';


function App() {

  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Start" element={<Layout />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
