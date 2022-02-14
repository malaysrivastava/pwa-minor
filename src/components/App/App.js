import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import React from "react";
import {Home} from '../Home'
// import { Landing } from "../Landing";
import { Product } from "../Product";

const App = () => {
  return (
    <>
      <Router>
      {/* <Header/> */}
        <Switch>
      {/* <Route path="/" element={<Landing/>} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="/Product" element={<Product/>} />
      </Switch>

      </Router>

    </>
  );
}

export default App;
