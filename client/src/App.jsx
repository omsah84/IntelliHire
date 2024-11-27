import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Layout />} />
          <Home />
          <Layout />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<Layout />} />
            
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
