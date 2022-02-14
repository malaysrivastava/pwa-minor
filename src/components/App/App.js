import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import React from "react";
import {Home} from '../Home'
import { Landing } from "../Landing";
import {Navbar} from "../Navbar"
import { Product } from "../Product";

const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
      <Route path="/login" element={<Landing/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Product" element={<Product/>} />
      </Switch>

      </Router>

    </>
  );
}

export default App;
