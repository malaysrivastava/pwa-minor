import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import React from "react";
import {Home} from '../Home'
// import { Landing } from "../Landing";
import { Navbar } from "../Navbar";
import {Footer} from "../Footer"
import { Product } from "../Product";

const App = () => {
  return (
    
      <Router>
      <Navbar/>
        <Routes>
      {/* <Route path="/" element={<Landing/>} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="/Product" element={<Product/>} />
      </Routes>
      <Footer/>
      </Router>

  );
}

export default App;
