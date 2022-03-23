import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import React, { useState } from "react";
import {Home} from '../Home'
import { Landing } from "../Landing";
import { Navbar } from "../Navbar";
import {Footer} from "../Footer"
import { Product } from "../Product";
import {Banner} from '../Banner';
import {Landing} from '../Landing';


const App = () => {
  
  
  return (
    
      <Router>
      <Navbar/>
      <Banner/>
        <Routes>
      <Route path="/login" element={<Landing/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Product" element={<Product/>} />
      </Routes>
      <Footer/>
      </Router>

  );
}

export default App;
