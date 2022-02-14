import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import React from "react";
import {Home} from '../Home'
// import { Landing } from "../Landing";
import { Product } from "../Product";

const App = () => {
  return (
    <>
      <Router>
      {/* <Header/> */}
        <Routes>
      {/* <Route path="/" element={<Landing/>} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="/Product" element={<Product/>} />
      </Routes>

      </Router>

    </>
  );
}

export default App;
